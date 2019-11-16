export type Fraction = 1 | 2 | 3 | 6;

export type Calendar = 'persian' | 'gregorian';

enum WeekDay {
  sunday = 0,
  monday = 1,
  tuesday = 2,
  wednesday = 3,
  thursday = 4,
  friday = 5,
  saturday = 6,
}

type DateTuple = [number, number, number];


function zeroFill(nm: number, zr: number) {
  let str = nm.toString();
  while (str.length < zr) {
    str = "0" + str
  }
  return str
}

export function format(date: string) {
  const dt = new Date(date);
  const [jy, jm, jd] = toPersian(dt);
  return `${zeroFill(dt.getHours(), 2)}:${zeroFill(dt.getMinutes(), 2)} ${zeroFill(jy, 4)}/${zeroFill(jm, 2)}/${zeroFill(jd, 2)}`
}

export function formatDate(date: string) {
  const dt = new Date(date);
  const [jy, jm, jd] = toPersian(dt);
  return `${zeroFill(jy, 4)}/${zeroFill(jm, 2)}/${zeroFill(jd, 2)}`
}

export function formatTime(date: string) {
  const dt = new Date(date);
  return `${zeroFill(dt.getHours(), 2)}:${zeroFill(dt.getMinutes(), 2)}`
}

const range = (size: number) => Array.from(Array(size).keys());


export function convert(date: Date, type: Calendar): DateTuple {
  if (type === 'gregorian') {
    const gy = date.getUTCFullYear();
    const gm = date.getUTCMonth() + 1;
    const gd = date.getUTCDate();
    return [gy, gm, gd];
  }
  if (type === 'persian') {
    return toPersian(date);
  }
  return [0, 0, 0];
}

export function monday(d: Date) {
  const date = new Date(d);
  const day = date.getDay() || 7;
  if (day !== 1) {
    date.setHours(-24 * (day - 1));
  }
  return date;
}

export function startOf(date: DateTuple, type: Calendar) {
  if (type === 'gregorian') {
    const now = new Date(date[0], date[1] - 1, 1);
    return now.getDay();
  }
  if (type === 'persian') {
    const m = toGregorian(date[0], date[1], 1);
    return m.getDay();
  }
  return 0;
}

export function addOneMonth(state: DateTuple): DateTuple {
  const nextYear = state[1] + 1 > 12 ? state[0] + 1 : state[0];
  const nextMonth = state[1] + 1 > 12 ? 1 : state[1] + 1;
  return [nextYear, nextMonth, state[2]];
}

export function subOneMonth(state: DateTuple): DateTuple {
  const previousYear = state[1] - 1 < 1 ? state[0] - 1 : state[0];
  const previousMonth = state[1] - 1 < 1 ? 12 : state[1] - 1;
  return [previousYear, previousMonth, state[2]];
}

export function cyclePeriod(date: Date, typ: number): [Date, Date] {
  try {
    let [py, pm] = toPersian(date);
    const nm = typ - 1;
    const pd = 1;
    pm = ~~((pm - 1) / typ) * typ + 1;
    const pd2 = persianMonthLength(py, pm + nm);
    return [
      toGregorian(py, pm, pd, 0, 0, 0),
      toGregorian(py, pm + nm, pd2, 29, 59, 59),
    ];
  } catch (e) {
    return null;
  }
}

export function cycleMonth(date: Date, typ: number) {
  let [py, pm] = toPersian(date);
  pm = ~~((pm - 1) / typ) * typ + 1;
  return py * 12 + pm;
}

export function calculatePeriod(base: Date, current: Date, typ: number) {
  try {
    const a = cycleMonth(base, typ);
    const b = cycleMonth(current, typ);
    return (b - a) / typ;
  } catch (e) {
    return 0;
  }
}

export function cycle(workDay: number, i: number) {
  return (workDay + i) % 7;
}

export function monthLength(type: Calendar, date: DateTuple) {
  if (type === 'gregorian') {
    return gregorianMonthLength(date[0], date[1]);
  }
  if (type === 'persian') {
    return persianMonthLength(date[0], date[1]);
  }
  return 30;
}

export const monthNames = {
  persian: [
    'فروردین',
    'اردیبهشت',
    'خرداد',

    'تیر',
    'مرداد',
    'شهریور',

    'مهر',
    'آبان',
    'آذر',

    'دی',
    'بهمن',
    'اسفند',
  ],
  'gregorian': [
    'January',
    'February',
    'March',

    'April',
    'May',
    'June',

    'July',
    'August',
    'September',

    'October',
    'November',
    'December',
  ],
};

const dayNames = {
  persian: [
    'یکشنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنجشنبه',
    'جمعه',
    'شنبه',
  ],
  gregorian: [
    'SUN',
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT',
  ],
};


function jalCal(jy: number) {
  const breaks = [-61, 9, 38, 199, 426, 686,
    756, 818, 1111, 1181, 1210, 1635, 2060,
    2097, 2192, 2262, 2324, 2394, 2456, 3178,
  ];
  const bl = breaks.length;
  const gy = jy + 621;
  let leapJ = -14;
  let jp = breaks[0];
  let jm;
  let jump;
  let leap;
  let leapG;
  let march;
  let n;
  let i;

  if (jy < jp || jy >= breaks[bl - 1]) {
    throw new Error(`Invalid date format.`);
  }

  for (i = 1; i < bl; i += 1) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm) {
      break;
    }
    leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
    jp = jm;
  }
  n = jy - jp;

  leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
  if (mod(jump, 33) === 4 && jump - n === 4) {
    leapJ += 1;
  }

  leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;

  march = 20 + leapJ - leapG;

  if (jump - n < 6) {
    n = n - jump + div(jump + 4, 33) * 33;
  }
  leap = mod(mod(n + 1, 33) - 1, 4);
  if (leap === -1) {
    leap = 4;
  }

  return {
    leap,
    gy,
    march,
  };
}

function j2d(jy: number, jm: number, jd: number) {
  const r = jalCal(jy);
  return g2d(r.gy, 3, r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1;
}

function d2j(jdn: number) {
  const gy = d2g(jdn).gy;
  let jy = gy - 621;
  const r = jalCal(jy);
  const jdn1f = g2d(gy, 3, r.march);
  let jd;
  let jm;
  let k;

  k = jdn - jdn1f;
  if (k >= 0) {
    if (k <= 185) {
      jm = 1 + div(k, 31);
      jd = mod(k, 31) + 1;
      return {
        jy
        , jm
        , jd,
      };
    }
    k -= 186;
  } else {
    jy -= 1;
    k += 179;
    if (r.leap === 1) {
      k += 1;
    }
  }
  jm = 7 + div(k, 30);
  jd = mod(k, 30) + 1;
  return {
    jy, jm, jd,
  };
}

function g2d(gy: number, gm: number, gd: number) {
  let d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4)
    + div(153 * mod(gm + 9, 12) + 2, 5)
    + gd - 34840408;
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
  return d;
}

function d2g(jdn: number) {
  let j;
  let i;
  let gd;
  let gm;
  let gy;
  j = 4 * jdn + 139361631;
  j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
  i = div(mod(j, 1461), 4) * 5 + 308;
  gd = div(mod(i, 153), 5) + 1;
  gm = mod(div(i, 153), 12) + 1;
  gy = div(j, 1461) - 100100 + div(8 - gm, 6);
  return {
    gy, gm, gd,
  };
}

function localToGregorian(jy: number, jm: number, jd: number) {
  return d2g(j2d(jy, jm, jd));
}

function div(a: number, b: number) {
  return ~~(a / b);
}

function mod(a: number, b: number) {
  return a - ~~(a / b) * b;
}

function toPersianLocally(gy: number, gm: number, gd: number) {
  return d2j(g2d(gy, gm, gd));
}

function isValidPersianDate(jy: number, jm: number, jd: number) {
  return jy >= -61 && jy <= 3177 &&
    jm >= 1 && jm <= 12 &&
    jd >= 1 && jd <= this.persianMonthLength(jy, jm);
}

function leapYear(jy: number) {
  return jalCal(jy).leap === 0;
}

function persianMonthLength(jy: number, jm: number) {
  if (jm <= 6) {
    return 31;
  }
  if (jm <= 11) {
    return 30;
  }
  if (leapYear(jy)) {
    return 30;
  }
  return 29;
}

function gregorianMonthLength(gy: number, gm: number) {
  return new Date(Date.UTC(gy, gm, 0)).getDate();
}

export function toGregorian(jy: number, jm: number, jd: number, y: number = 0, m: number = 0, s: number = 0) {
  const a = localToGregorian(jy, jm, jd);
  return new Date(Date.UTC(a.gy, a.gm - 1, a.gd, y, m, s, 0));
}

function fromGregorian(gy: number, gm: number, gd: number): DateTuple {
  const a = toPersianLocally(gy, gm, gd);
  return [a.jy, a.jm, a.jd];
}

export function toPersian(date: Date): DateTuple {
  let a = date;
  if (typeof a === 'number') {
    a = new Date(a);
  }
  const gy = a.getUTCFullYear();
  const gm = a.getUTCMonth() + 1;
  const gd = a.getUTCDate();
  const h = toPersianLocally(gy, gm, gd);
  return [h.jy, h.jm, h.jd];
}


export const period = (state: [number, number, number], ptyp: number, sign: number): [number, number, number] => {
  let year = state[0];
  let st: [number, number, number] = [year, ((~~((state[1] - 1) / ptyp) * ptyp)) + 1, 1]
  const size = Math.abs(sign * ptyp);
  const _sign = Math.sign(sign);
  if (_sign > 0) {
    st = range(size).reduce(acc => addOneMonth(acc), st)
  } else if (_sign < 0) {
    st = range(size).reduce(acc => subOneMonth(acc), st)
  }
  return st
};

export const periodIndex = (state: [number, number, number], basePeriod: string, fraction: number) => {
  return calculatePeriod(new Date(basePeriod), toGregorian(state[0], state[1], state[2], 12, 0, 0), fraction)
};
