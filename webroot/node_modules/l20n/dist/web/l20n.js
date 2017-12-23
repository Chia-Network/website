(function () {
'use strict';

var cp = [function (n) {
    return 'other';
}, function (n) {
    return n == 1 ? 'one' : 'other';
}, function (n) {
    return n == 0 || n == 1 ? 'one' : 'other';
}, function (n) {
    var s = String(n).split('.'),
        v0 = !s[1];
    return n == 1 && v0 ? 'one' : 'other';
}];

var pluralData = {
    cardinal: {
        af: cp[1],
        ak: cp[2],
        am: function am(n) {
            return n >= 0 && n <= 1 ? 'one' : 'other';
        },
        ar: function ar(n) {
            var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n100 = t0 && s[0].slice(-2);
            return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n100 >= 3 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 99 ? 'many' : 'other';
        },
        as: function as(n) {
            return n >= 0 && n <= 1 ? 'one' : 'other';
        },
        asa: cp[1],
        ast: cp[3],
        az: cp[1],
        be: function be(n) {
            var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2);
            return n10 == 1 && n100 != 11 ? 'one' : n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14) ? 'few' : t0 && n10 == 0 || n10 >= 5 && n10 <= 9 || n100 >= 11 && n100 <= 14 ? 'many' : 'other';
        },
        bem: cp[1],
        bez: cp[1],
        bg: cp[1],
        bh: cp[2],
        bm: cp[0],
        bn: function bn(n) {
            return n >= 0 && n <= 1 ? 'one' : 'other';
        },
        bo: cp[0],
        br: function br(n) {
            var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2),
                n1000000 = t0 && s[0].slice(-6);
            return n10 == 1 && n100 != 11 && n100 != 71 && n100 != 91 ? 'one' : n10 == 2 && n100 != 12 && n100 != 72 && n100 != 92 ? 'two' : (n10 == 3 || n10 == 4 || n10 == 9) && (n100 < 10 || n100 > 19) && (n100 < 70 || n100 > 79) && (n100 < 90 || n100 > 99) ? 'few' : n != 0 && t0 && n1000000 == 0 ? 'many' : 'other';
        },
        brx: cp[1],
        bs: function bs(n) {
            var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i10 = i.slice(-1),
                i100 = i.slice(-2),
                f10 = f.slice(-1),
                f100 = f.slice(-2);
            return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
        },
        ca: cp[3],
        ce: cp[1],
        cgg: cp[1],
        chr: cp[1],
        ckb: cp[1],
        cs: function cs(n) {
            var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1];
            return n == 1 && v0 ? 'one' : i >= 2 && i <= 4 && v0 ? 'few' : !v0 ? 'many' : 'other';
        },
        cy: function cy(n) {
            return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n == 3 ? 'few' : n == 6 ? 'many' : 'other';
        },
        da: function da(n) {
            var s = String(n).split('.'),
                i = s[0],
                t0 = Number(s[0]) == n;
            return n == 1 || !t0 && (i == 0 || i == 1) ? 'one' : 'other';
        },
        de: cp[3],
        dsb: function dsb(n) {
            var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i100 = i.slice(-2),
                f100 = f.slice(-2);
            return v0 && i100 == 1 || f100 == 1 ? 'one' : v0 && i100 == 2 || f100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? 'few' : 'other';
        },
        dv: cp[1],
        dz: cp[0],
        ee: cp[1],
        el: cp[1],
        en: cp[3],
        eo: cp[1],
        es: cp[1],
        et: cp[3],
        eu: cp[1],
        fa: function fa(n) {
            return n >= 0 && n <= 1 ? 'one' : 'other';
        },
        ff: function ff(n) {
            return n >= 0 && n < 2 ? 'one' : 'other';
        },
        fi: cp[3],
        fil: function fil(n) {
            var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i10 = i.slice(-1),
                f10 = f.slice(-1);
            return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
        },
        fo: cp[1],
        fr: function fr(n) {
            return n >= 0 && n < 2 ? 'one' : 'other';
        },
        fur: cp[1],
        fy: cp[3],
        ga: function ga(n) {
            var s = String(n).split('.'),
                t0 = Number(s[0]) == n;
            return n == 1 ? 'one' : n == 2 ? 'two' : t0 && n >= 3 && n <= 6 ? 'few' : t0 && n >= 7 && n <= 10 ? 'many' : 'other';
        },
        gd: function gd(n) {
            var s = String(n).split('.'),
                t0 = Number(s[0]) == n;
            return n == 1 || n == 11 ? 'one' : n == 2 || n == 12 ? 'two' : t0 && n >= 3 && n <= 10 || t0 && n >= 13 && n <= 19 ? 'few' : 'other';
        },
        gl: cp[3],
        gsw: cp[1],
        gu: function gu(n) {
            return n >= 0 && n <= 1 ? 'one' : 'other';
        },
        guw: cp[2],
        gv: function gv(n) {
            var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1],
                i10 = i.slice(-1),
                i100 = i.slice(-2);
            return v0 && i10 == 1 ? 'one' : v0 && i10 == 2 ? 'two' : v0 && (i100 == 0 || i100 == 20 || i100 == 40 || i100 == 60 || i100 == 80) ? 'few' : !v0 ? 'many' : 'other';
        },
        ha: cp[1],
        haw: cp[1],
        he: function he(n) {
            var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1],
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1);
            return n == 1 && v0 ? 'one' : i == 2 && v0 ? 'two' : v0 && (n < 0 || n > 10) && t0 && n10 == 0 ? 'many' : 'other';
        },
        hi: function hi(n) {
            return n >= 0 && n <= 1 ? 'one' : 'other';
        },
        hr: function hr(n) {
            var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i10 = i.slice(-1),
                i100 = i.slice(-2),
                f10 = f.slice(-1),
                f100 = f.slice(-2);
            return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
        },
        hsb: function hsb(n) {
            var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i100 = i.slice(-2),
                f100 = f.slice(-2);
            return v0 && i100 == 1 || f100 == 1 ? 'one' : v0 && i100 == 2 || f100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? 'few' : 'other';
        },
        hu: cp[1],
        hy: function hy(n) {
            return n >= 0 && n < 2 ? 'one' : 'other';
        },
        id: cp[0],
        ig: cp[0],
        ii: cp[0],
        in: cp[0],
        is: function is(n) {
            var s = String(n).split('.'),
                i = s[0],
                t0 = Number(s[0]) == n,
                i10 = i.slice(-1),
                i100 = i.slice(-2);
            return t0 && i10 == 1 && i100 != 11 || !t0 ? 'one' : 'other';
        },
        it: cp[3],
        iu: function iu(n) {
            return n == 1 ? 'one' : n == 2 ? 'two' : 'other';
        },
        iw: function iw(n) {
            var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1],
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1);
            return n == 1 && v0 ? 'one' : i == 2 && v0 ? 'two' : v0 && (n < 0 || n > 10) && t0 && n10 == 0 ? 'many' : 'other';
        },
        ja: cp[0],
        jbo: cp[0],
        jgo: cp[1],
        ji: cp[3],
        jmc: cp[1],
        jv: cp[0],
        jw: cp[0],
        ka: cp[1],
        kab: function kab(n) {
            return n >= 0 && n < 2 ? 'one' : 'other';
        },
        kaj: cp[1],
        kcg: cp[1],
        kde: cp[0],
        kea: cp[0],
        kk: cp[1],
        kkj: cp[1],
        kl: cp[1],
        km: cp[0],
        kn: function kn(n) {
            return n >= 0 && n <= 1 ? 'one' : 'other';
        },
        ko: cp[0],
        ks: cp[1],
        ksb: cp[1],
        ksh: function ksh(n) {
            return n == 0 ? 'zero' : n == 1 ? 'one' : 'other';
        },
        ku: cp[1],
        kw: function kw(n) {
            return n == 1 ? 'one' : n == 2 ? 'two' : 'other';
        },
        ky: cp[1],
        lag: function lag(n) {
            var s = String(n).split('.'),
                i = s[0];
            return n == 0 ? 'zero' : (i == 0 || i == 1) && n != 0 ? 'one' : 'other';
        },
        lb: cp[1],
        lg: cp[1],
        lkt: cp[0],
        ln: cp[2],
        lo: cp[0],
        lt: function lt(n) {
            var s = String(n).split('.'),
                f = s[1] || '',
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2);
            return n10 == 1 && (n100 < 11 || n100 > 19) ? 'one' : n10 >= 2 && n10 <= 9 && (n100 < 11 || n100 > 19) ? 'few' : f != 0 ? 'many' : 'other';
        },
        lv: function lv(n) {
            var s = String(n).split('.'),
                f = s[1] || '',
                v = f.length,
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2),
                f100 = f.slice(-2),
                f10 = f.slice(-1);
            return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? 'zero' : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? 'one' : 'other';
        },
        mas: cp[1],
        mg: cp[2],
        mgo: cp[1],
        mk: function mk(n) {
            var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i10 = i.slice(-1),
                f10 = f.slice(-1);
            return v0 && i10 == 1 || f10 == 1 ? 'one' : 'other';
        },
        ml: cp[1],
        mn: cp[1],
        mo: function mo(n) {
            var s = String(n).split('.'),
                v0 = !s[1],
                t0 = Number(s[0]) == n,
                n100 = t0 && s[0].slice(-2);
            return n == 1 && v0 ? 'one' : !v0 || n == 0 || n != 1 && n100 >= 1 && n100 <= 19 ? 'few' : 'other';
        },
        mr: function mr(n) {
            return n >= 0 && n <= 1 ? 'one' : 'other';
        },
        ms: cp[0],
        mt: function mt(n) {
            var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n100 = t0 && s[0].slice(-2);
            return n == 1 ? 'one' : n == 0 || n100 >= 2 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 19 ? 'many' : 'other';
        },
        my: cp[0],
        nah: cp[1],
        naq: function naq(n) {
            return n == 1 ? 'one' : n == 2 ? 'two' : 'other';
        },
        nb: cp[1],
        nd: cp[1],
        ne: cp[1],
        nl: cp[3],
        nn: cp[1],
        nnh: cp[1],
        no: cp[1],
        nqo: cp[0],
        nr: cp[1],
        nso: cp[2],
        ny: cp[1],
        nyn: cp[1],
        om: cp[1],
        or: cp[1],
        os: cp[1],
        pa: cp[2],
        pap: cp[1],
        pl: function pl(n) {
            var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1],
                i10 = i.slice(-1),
                i100 = i.slice(-2);
            return n == 1 && v0 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i != 1 && (i10 == 0 || i10 == 1) || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 12 && i100 <= 14 ? 'many' : 'other';
        },
        prg: function prg(n) {
            var s = String(n).split('.'),
                f = s[1] || '',
                v = f.length,
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2),
                f100 = f.slice(-2),
                f10 = f.slice(-1);
            return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? 'zero' : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? 'one' : 'other';
        },
        ps: cp[1],
        pt: function pt(n) {
            var s = String(n).split('.'),
                t0 = Number(s[0]) == n;
            return t0 && n >= 0 && n <= 2 && n != 2 ? 'one' : 'other';
        },
        "pt-PT": cp[3],
        rm: cp[1],
        ro: function ro(n) {
            var s = String(n).split('.'),
                v0 = !s[1],
                t0 = Number(s[0]) == n,
                n100 = t0 && s[0].slice(-2);
            return n == 1 && v0 ? 'one' : !v0 || n == 0 || n != 1 && n100 >= 1 && n100 <= 19 ? 'few' : 'other';
        },
        rof: cp[1],
        root: cp[0],
        ru: function ru(n) {
            var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1],
                i10 = i.slice(-1),
                i100 = i.slice(-2);
            return v0 && i10 == 1 && i100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? 'many' : 'other';
        },
        rwk: cp[1],
        sah: cp[0],
        saq: cp[1],
        sdh: cp[1],
        se: function se(n) {
            return n == 1 ? 'one' : n == 2 ? 'two' : 'other';
        },
        seh: cp[1],
        ses: cp[0],
        sg: cp[0],
        sh: function sh(n) {
            var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i10 = i.slice(-1),
                i100 = i.slice(-2),
                f10 = f.slice(-1),
                f100 = f.slice(-2);
            return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
        },
        shi: function shi(n) {
            var s = String(n).split('.'),
                t0 = Number(s[0]) == n;
            return n >= 0 && n <= 1 ? 'one' : t0 && n >= 2 && n <= 10 ? 'few' : 'other';
        },
        si: function si(n) {
            var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '';
            return n == 0 || n == 1 || i == 0 && f == 1 ? 'one' : 'other';
        },
        sk: function sk(n) {
            var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1];
            return n == 1 && v0 ? 'one' : i >= 2 && i <= 4 && v0 ? 'few' : !v0 ? 'many' : 'other';
        },
        sl: function sl(n) {
            var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1],
                i100 = i.slice(-2);
            return v0 && i100 == 1 ? 'one' : v0 && i100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || !v0 ? 'few' : 'other';
        },
        sma: function sma(n) {
            return n == 1 ? 'one' : n == 2 ? 'two' : 'other';
        },
        smi: function smi(n) {
            return n == 1 ? 'one' : n == 2 ? 'two' : 'other';
        },
        smj: function smj(n) {
            return n == 1 ? 'one' : n == 2 ? 'two' : 'other';
        },
        smn: function smn(n) {
            return n == 1 ? 'one' : n == 2 ? 'two' : 'other';
        },
        sms: function sms(n) {
            return n == 1 ? 'one' : n == 2 ? 'two' : 'other';
        },
        sn: cp[1],
        so: cp[1],
        sq: cp[1],
        sr: function sr(n) {
            var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i10 = i.slice(-1),
                i100 = i.slice(-2),
                f10 = f.slice(-1),
                f100 = f.slice(-2);
            return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
        },
        ss: cp[1],
        ssy: cp[1],
        st: cp[1],
        sv: cp[3],
        sw: cp[3],
        syr: cp[1],
        ta: cp[1],
        te: cp[1],
        teo: cp[1],
        th: cp[0],
        ti: cp[2],
        tig: cp[1],
        tk: cp[1],
        tl: function tl(n) {
            var s = String(n).split('.'),
                i = s[0],
                f = s[1] || '',
                v0 = !s[1],
                i10 = i.slice(-1),
                f10 = f.slice(-1);
            return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
        },
        tn: cp[1],
        to: cp[0],
        tr: cp[1],
        ts: cp[1],
        tzm: function tzm(n) {
            var s = String(n).split('.'),
                t0 = Number(s[0]) == n;
            return n == 0 || n == 1 || t0 && n >= 11 && n <= 99 ? 'one' : 'other';
        },
        ug: cp[1],
        uk: function uk(n) {
            var s = String(n).split('.'),
                i = s[0],
                v0 = !s[1],
                i10 = i.slice(-1),
                i100 = i.slice(-2);
            return v0 && i10 == 1 && i100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? 'many' : 'other';
        },
        ur: cp[3],
        uz: cp[1],
        ve: cp[1],
        vi: cp[0],
        vo: cp[1],
        vun: cp[1],
        wa: cp[2],
        wae: cp[1],
        wo: cp[0],
        xh: cp[1],
        xog: cp[1],
        yi: cp[3],
        yo: cp[0],
        zh: cp[0],
        zu: function zu(n) {
            return n >= 0 && n <= 1 ? 'one' : 'other';
        }
    },
    ordinal: {
        af: cp[0],
        am: cp[0],
        ar: cp[0],
        as: function as(n) {
            return n == 1 || n == 5 || n == 7 || n == 8 || n == 9 || n == 10 ? 'one' : n == 2 || n == 3 ? 'two' : n == 4 ? 'few' : n == 6 ? 'many' : 'other';
        },
        az: function az(n) {
            var s = String(n).split('.'),
                i = s[0],
                i10 = i.slice(-1),
                i100 = i.slice(-2),
                i1000 = i.slice(-3);
            return i10 == 1 || i10 == 2 || i10 == 5 || i10 == 7 || i10 == 8 || i100 == 20 || i100 == 50 || i100 == 70 || i100 == 80 ? 'one' : i10 == 3 || i10 == 4 || i1000 == 100 || i1000 == 200 || i1000 == 300 || i1000 == 400 || i1000 == 500 || i1000 == 600 || i1000 == 700 || i1000 == 800 || i1000 == 900 ? 'few' : i == 0 || i10 == 6 || i100 == 40 || i100 == 60 || i100 == 90 ? 'many' : 'other';
        },
        be: function be(n) {
            var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2);
            return (n10 == 2 || n10 == 3) && n100 != 12 && n100 != 13 ? 'few' : 'other';
        },
        bg: cp[0],
        bn: function bn(n) {
            return n == 1 || n == 5 || n == 7 || n == 8 || n == 9 || n == 10 ? 'one' : n == 2 || n == 3 ? 'two' : n == 4 ? 'few' : n == 6 ? 'many' : 'other';
        },
        bs: cp[0],
        ca: function ca(n) {
            return n == 1 || n == 3 ? 'one' : n == 2 ? 'two' : n == 4 ? 'few' : 'other';
        },
        ce: cp[0],
        cs: cp[0],
        cy: function cy(n) {
            return n == 0 || n == 7 || n == 8 || n == 9 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n == 3 || n == 4 ? 'few' : n == 5 || n == 6 ? 'many' : 'other';
        },
        da: cp[0],
        de: cp[0],
        dsb: cp[0],
        el: cp[0],
        en: function en(n) {
            var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2);
            return n10 == 1 && n100 != 11 ? 'one' : n10 == 2 && n100 != 12 ? 'two' : n10 == 3 && n100 != 13 ? 'few' : 'other';
        },
        es: cp[0],
        et: cp[0],
        eu: cp[0],
        fa: cp[0],
        fi: cp[0],
        fil: cp[1],
        fr: cp[1],
        fy: cp[0],
        ga: cp[1],
        gl: cp[0],
        gu: function gu(n) {
            return n == 1 ? 'one' : n == 2 || n == 3 ? 'two' : n == 4 ? 'few' : n == 6 ? 'many' : 'other';
        },
        he: cp[0],
        hi: function hi(n) {
            return n == 1 ? 'one' : n == 2 || n == 3 ? 'two' : n == 4 ? 'few' : n == 6 ? 'many' : 'other';
        },
        hr: cp[0],
        hsb: cp[0],
        hu: function hu(n) {
            return n == 1 || n == 5 ? 'one' : 'other';
        },
        hy: cp[1],
        id: cp[0],
        in: cp[0],
        is: cp[0],
        it: function it(n) {
            return n == 11 || n == 8 || n == 80 || n == 800 ? 'many' : 'other';
        },
        iw: cp[0],
        ja: cp[0],
        ka: function ka(n) {
            var s = String(n).split('.'),
                i = s[0],
                i100 = i.slice(-2);
            return i == 1 ? 'one' : i == 0 || i100 >= 2 && i100 <= 20 || i100 == 40 || i100 == 60 || i100 == 80 ? 'many' : 'other';
        },
        kk: function kk(n) {
            var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1);
            return n10 == 6 || n10 == 9 || t0 && n10 == 0 && n != 0 ? 'many' : 'other';
        },
        km: cp[0],
        kn: cp[0],
        ko: cp[0],
        ky: cp[0],
        lo: cp[1],
        lt: cp[0],
        lv: cp[0],
        mk: function mk(n) {
            var s = String(n).split('.'),
                i = s[0],
                i10 = i.slice(-1),
                i100 = i.slice(-2);
            return i10 == 1 && i100 != 11 ? 'one' : i10 == 2 && i100 != 12 ? 'two' : (i10 == 7 || i10 == 8) && i100 != 17 && i100 != 18 ? 'many' : 'other';
        },
        ml: cp[0],
        mn: cp[0],
        mo: cp[1],
        mr: function mr(n) {
            return n == 1 ? 'one' : n == 2 || n == 3 ? 'two' : n == 4 ? 'few' : 'other';
        },
        ms: cp[1],
        my: cp[0],
        nb: cp[0],
        ne: function ne(n) {
            var s = String(n).split('.'),
                t0 = Number(s[0]) == n;
            return t0 && n >= 1 && n <= 4 ? 'one' : 'other';
        },
        nl: cp[0],
        pa: cp[0],
        pl: cp[0],
        prg: cp[0],
        pt: cp[0],
        ro: cp[1],
        root: cp[0],
        ru: cp[0],
        sh: cp[0],
        si: cp[0],
        sk: cp[0],
        sl: cp[0],
        sq: function sq(n) {
            var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2);
            return n == 1 ? 'one' : n10 == 4 && n100 != 14 ? 'many' : 'other';
        },
        sr: cp[0],
        sv: function sv(n) {
            var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2);
            return (n10 == 1 || n10 == 2) && n100 != 11 && n100 != 12 ? 'one' : 'other';
        },
        sw: cp[0],
        ta: cp[0],
        te: cp[0],
        th: cp[0],
        tl: cp[1],
        tr: cp[0],
        uk: function uk(n) {
            var s = String(n).split('.'),
                t0 = Number(s[0]) == n,
                n10 = t0 && s[0].slice(-1),
                n100 = t0 && s[0].slice(-2);
            return n10 == 3 && n100 != 13 ? 'few' : 'other';
        },
        ur: cp[0],
        uz: cp[0],
        vi: cp[1],
        zh: cp[0],
        zu: cp[0]
    }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function isStructurallyValidLanguageTag(locale) {
    // does not check for duplicate subtags
    return locale.split('-').every(function (subtag) {
        return (/[a-z0-9]+/i.test(subtag)
        );
    });
}

function canonicalizeLocaleList(locales) {
    if (!locales) return [];
    if (!Array.isArray(locales)) locales = [locales];
    return locales.map(function (tag) {
        // Requiring tag to be a String or Object means that the Number value
        // NaN will not be interpreted as the language tag "nan", which stands
        // for Min Nan Chinese.
        switch (typeof tag === 'undefined' ? 'undefined' : _typeof(tag)) {
            case 'string':
                break;
            case 'object':
                tag = tag.toString();break;
            default:
                throw new TypeError('Locales should be strings, ' + JSON.stringify(tag) + " isn't.");
        }
        if (!isStructurallyValidLanguageTag(tag)) {
            throw new RangeError('The locale ' + JSON.stringify(tag) + ' is not a structurally valid BCP 47 language tag.');
        }
        return tag;
    }).reduce(function (seen, tag) {
        if (seen.indexOf(tag) < 0) seen.push(tag);
        return seen;
    }, []);
}

function defaultLocale() {
    return typeof window !== 'undefined' && window.navigator && (window.navigator.userLanguage || window.navigator.language) || 'en-US';
}

function findLocale(locales, locale) {
    do {
        if (locales[locale]) return locale;
        locale = locale.replace(/-?[^-]*$/, '');
    } while (locale);
    return null;
}

function resolveLocale(availableLocales, requestedLocales) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = requestedLocales[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var locale = _step.value;

            var availableLocale = findLocale(availableLocales, locale);
            if (availableLocale) return availableLocale;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return findLocale(availableLocales, defaultLocale());
}

function getStyle(_ref) {
    var style = _ref.style;

    if (!style) return 'cardinal';
    if (['cardinal', 'ordinal'].indexOf(style) < 0) {
        throw new RangeError('Not a valid plural syle: ' + JSON.stringify(style));
    }
    return style;
}

var PluralRules = function () {
    function PluralRules(locales) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        classCallCheck(this, PluralRules);

        // ignores options.localeMatcher
        var requestedLocales = canonicalizeLocaleList(locales);
        this.style = getStyle(options);
        this.locale = resolveLocale(pluralData[this.style], requestedLocales);
        this.select = pluralData[this.style][this.locale];
    }

    createClass(PluralRules, [{
        key: 'resolvedOptions',
        value: function resolvedOptions() {
            return { locale: this.locale, style: this.style };
        }
    }], [{
        key: 'supportedLocalesOf',
        value: function supportedLocalesOf(locales) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            // ignores options.localeMatcher
            var requestedLocales = canonicalizeLocaleList(locales);
            var style = getStyle(options);
            return requestedLocales.filter(function (locale) {
                return findLocale(pluralData[style], locale);
            });
        }
    }]);
    return PluralRules;
}();

/*global ClobberIntlPluralRules:false */

if (typeof Intl === 'undefined') {
    if (typeof global !== 'undefined') {
        global.Intl = { PluralRules: PluralRules };
    } else if (typeof window !== 'undefined') {
        window.Intl = { PluralRules: PluralRules };
    } else {
        this.Intl = { PluralRules: PluralRules };
    }
} else if (!Intl.PluralRules || typeof ClobberIntlPluralRules !== 'undefined' && ClobberIntlPluralRules) {
    Intl.PluralRules = PluralRules;
} else if (typeof console !== 'undefined') {
    console.warn('Intl.PluralRules already exists, and has NOT been replaced by this polyfill');
    console.log('To force, set a global ClobberIntlPluralRules = true');
}

/*
 * @module
 *
 * fluent-intl-polyfill provides polyfills for ECMA 402 proposals which are
 * required by the fluent package.
 *
 */

// The following are simple fixes which aren't included in any of the popular
// polyfill libraries.

// IE, Safari and Opera don't support it yet
if (typeof navigator !== 'undefined' && navigator.languages === undefined) {
  navigator.languages = [navigator.language];
}

// iOS Safari doesn't even have the Intl object defined
if (typeof Intl === 'undefined') {
  window.Intl = {};
}

/*  eslint no-magic-numbers: [0]  */

var MAX_PLACEABLES = 100;

/**
 * The `Parser` class is responsible for parsing FTL resources.
 *
 * It's only public method is `getResource(source)` which takes an FTL string
 * and returns a two element Array with an Object of entries generated from the
 * source as the first element and an array of SyntaxError objects as the
 * second.
 *
 * This parser is optimized for runtime performance.
 *
 * There is an equivalent of this parser in syntax/parser which is
 * generating full AST which is useful for FTL tools.
 */

var RuntimeParser = function () {
  function RuntimeParser() {
    classCallCheck(this, RuntimeParser);
  }

  createClass(RuntimeParser, [{
    key: 'getResource',

    /**
     * @param {string} string
     * @returns {Array<Object, Array>}
     */
    value: function getResource(string) {
      this._source = string;
      this._index = 0;
      this._length = string.length;

      var entries = {};
      var errors = [];

      this.getWS();
      while (this._index < this._length) {
        try {
          this.getEntry(entries);
        } catch (e) {
          if (e instanceof SyntaxError) {
            errors.push(e);

            var nextEntity = this._findNextEntryStart();
            this._index = nextEntity === -1 ? this._length : nextEntity;
          } else {
            throw e;
          }
        }
        this.getWS();
      }

      return [entries, errors];
    }
  }, {
    key: 'getEntry',
    value: function getEntry(entries) {
      // The pointer here should either be at the beginning of the file
      // or right after new line.
      if (this._index !== 0 && this._source[this._index - 1] !== '\n') {
        throw this.error('Expected new line and a new entry');
      }

      var ch = this._source[this._index];

      // We don't care about comments or sections at runtime
      if (ch === '/') {
        this.getComment();
        return;
      }

      if (ch === '[') {
        this.getSection();
        return;
      }

      if (ch !== '\n') {
        this.getMessage(entries);
      }
    }
  }, {
    key: 'getSection',
    value: function getSection() {
      this._index += 1;
      if (this._source[this._index] !== '[') {
        throw this.error('Expected "[[" to open a section');
      }

      this._index += 1;

      this.getLineWS();
      this.getSymbol();
      this.getLineWS();

      if (this._source[this._index] !== ']' || this._source[this._index + 1] !== ']') {
        throw this.error('Expected "]]" to close a section');
      }

      this._index += 2;

      // sections are ignored in the runtime ast
      return undefined;
    }
  }, {
    key: 'getMessage',
    value: function getMessage(entries) {
      var id = this.getIdentifier();
      var attrs = null;
      var tags = null;

      this.getLineWS();

      var ch = this._source[this._index];

      var val = void 0;

      if (ch === '=') {
        this._index++;

        this.getLineWS();

        val = this.getPattern();
      } else {
        this.getWS();
      }

      ch = this._source[this._index];

      if (ch === '\n') {
        this._index++;
        this.getLineWS();
        ch = this._source[this._index];
      }

      if (ch === '.') {
        attrs = this.getAttributes();
      }

      if (ch === '#') {
        if (attrs !== null) {
          throw this.error('Tags cannot be added to a message with attributes.');
        }
        tags = this.getTags();
      }

      if (tags === null && attrs === null && typeof val === 'string') {
        entries[id] = val;
      } else {
        if (val === undefined) {
          if (tags === null && attrs === null) {
            throw this.error('Expected a value (like: " = value") or\n            an attribute (like: ".key = value")');
          }
        }

        entries[id] = { val: val };
        if (attrs) {
          entries[id].attrs = attrs;
        }
        if (tags) {
          entries[id].tags = tags;
        }
      }
    }
  }, {
    key: 'getWS',
    value: function getWS() {
      var cc = this._source.charCodeAt(this._index);
      // space, \n, \t, \r
      while (cc === 32 || cc === 10 || cc === 9 || cc === 13) {
        cc = this._source.charCodeAt(++this._index);
      }
    }
  }, {
    key: 'getLineWS',
    value: function getLineWS() {
      var cc = this._source.charCodeAt(this._index);
      // space, \t
      while (cc === 32 || cc === 9) {
        cc = this._source.charCodeAt(++this._index);
      }
    }
  }, {
    key: 'getIdentifier',
    value: function getIdentifier() {
      var start = this._index;
      var cc = this._source.charCodeAt(this._index);

      if (cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc === 95) {
        // _
        cc = this._source.charCodeAt(++this._index);
      } else {
        throw this.error('Expected an identifier (starting with [a-zA-Z_])');
      }

      while (cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc >= 48 && cc <= 57 || // 0-9
      cc === 95 || cc === 45) {
        // _-
        cc = this._source.charCodeAt(++this._index);
      }

      return this._source.slice(start, this._index);
    }
  }, {
    key: 'getSymbol',
    value: function getSymbol() {
      var name = '';

      var start = this._index;
      var cc = this._source.charCodeAt(this._index);

      if (cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc === 95 || cc === 32) {
        //  _
        cc = this._source.charCodeAt(++this._index);
      } else if (name.length === 0) {
        throw this.error('Expected a keyword (starting with [a-zA-Z_])');
      }

      while (cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc >= 48 && cc <= 57 || // 0-9
      cc === 95 || cc === 45 || cc === 32) {
        //  _-
        cc = this._source.charCodeAt(++this._index);
      }

      // If we encountered the end of name, we want to test is the last
      // collected character is a space.
      // If it is, we will backtrack to the last non-space character because
      // the keyword cannot end with a space character.
      while (this._source.charCodeAt(this._index - 1) === 32) {
        this._index--;
      }

      name += this._source.slice(start, this._index);

      return { type: 'sym', name: name };
    }
  }, {
    key: 'getString',
    value: function getString() {
      var value = '';

      while (++this._index < this._length) {
        var ch = this._source[this._index];

        if (ch === '"') {
          break;
        }

        if (ch === '\n') {
          break;
        }

        value += ch;
      }

      this._index++;
      return value;
    }

    // We're going to first try to see if the pattern is simple.
    // If it is we can just look for the end of the line and read the string.
    //
    // Then, if either the line contains a placeable opening `{` or the
    // next line starts with a pipe `|`, we switch to complex pattern.

  }, {
    key: 'getPattern',
    value: function getPattern() {
      var start = this._index;
      var eol = this._source.indexOf('\n', this._index);

      if (eol === -1) {
        eol = this._length;
      }

      var line = start !== eol ? this._source.slice(start, eol) : undefined;

      if (line !== undefined && line.includes('{')) {
        return this.getComplexPattern();
      }

      this._index = eol + 1;

      if (this._source[this._index] === ' ') {
        this._index = start;
        return this.getComplexPattern();
      }

      return line;
    }

    /* eslint-disable complexity */

  }, {
    key: 'getComplexPattern',
    value: function getComplexPattern() {
      var buffer = '';
      var content = [];
      var placeables = 0;

      var ch = this._source[this._index];

      // If the string starts with \", \{ or \\ skip the first `\` and add the
      // following character to the buffer without interpreting it.
      if (ch === '\\' && (this._source[this._index + 1] === '"' || this._source[this._index + 1] === '{' || this._source[this._index + 1] === '\\')) {
        buffer += this._source[this._index + 1];
        this._index += 2;
        ch = this._source[this._index];
      }

      while (this._index < this._length) {
        // This block handles multi-line strings combining strings seaprated
        // by new line and `|` character at the beginning of the next one.
        if (ch === '\n') {
          this._index++;
          if (this._source[this._index] !== ' ') {
            break;
          }
          this.getLineWS();

          if (this._source[this._index] === '}' || this._source[this._index] === '[' || this._source[this._index] === '*' || this._source[this._index] === '#' || this._source[this._index] === '.') {
            break;
          }

          if (buffer.length) {
            buffer += '\n';
          }
          ch = this._source[this._index];
          continue;
        } else if (ch === '\\') {
          var ch2 = this._source[this._index + 1];
          if (ch2 === '"' || ch2 === '{') {
            ch = ch2;
            this._index++;
          }
        } else if (ch === '{') {
          // Push the buffer to content array right before placeable
          if (buffer.length) {
            content.push(buffer);
          }
          if (placeables > MAX_PLACEABLES - 1) {
            throw this.error('Too many placeables, maximum allowed is ' + MAX_PLACEABLES);
          }
          buffer = '';
          content.push(this.getPlaceable());

          this._index++;

          ch = this._source[this._index];
          placeables++;
          continue;
        }

        if (ch) {
          buffer += ch;
        }
        this._index++;
        ch = this._source[this._index];
      }

      if (content.length === 0) {
        return buffer.length ? buffer : undefined;
      }

      if (buffer.length) {
        content.push(buffer);
      }

      return content;
    }
    /* eslint-enable complexity */

  }, {
    key: 'getPlaceable',
    value: function getPlaceable() {
      var start = ++this._index;

      this.getWS();

      if (this._source[this._index] === '*' || this._source[this._index] === '[' && this._source[this._index + 1] !== ']') {
        var _variants = this.getVariants();

        return {
          type: 'sel',
          exp: null,
          vars: _variants[0],
          def: _variants[1]
        };
      }

      // Rewind the index and only support in-line white-space now.
      this._index = start;
      this.getLineWS();

      var selector = this.getSelectorExpression();
      var variants = void 0;

      this.getWS();

      var ch = this._source[this._index];

      // If the expression is followed by `->` we're going to collect
      // its members and return it as a select expression.
      if (ch !== '}') {
        if (ch !== '-' || this._source[this._index + 1] !== '>') {
          throw this.error('Expected "}", "," or "->"');
        }

        this._index += 2; // ->

        this.getLineWS();

        if (this._source[this._index] !== '\n') {
          throw this.error('Variants should be listed in a new line');
        }

        this.getWS();

        variants = this.getVariants();

        if (variants[0].length === 0) {
          throw this.error('Expected members for the select expression');
        }
      }

      if (variants === undefined) {
        return selector;
      }
      return {
        type: 'sel',
        exp: selector,
        vars: variants[0],
        def: variants[1]
      };
    }
  }, {
    key: 'getSelectorExpression',
    value: function getSelectorExpression() {
      var literal = this.getLiteral();

      if (literal.type !== 'ref') {
        return literal;
      }

      if (this._source[this._index] === '.') {
        this._index++;

        var name = this.getIdentifier();
        this._index++;
        return {
          type: 'attr',
          id: literal,
          name: name
        };
      }

      if (this._source[this._index] === '[') {
        this._index++;

        var key = this.getVariantKey();
        this._index++;
        return {
          type: 'var',
          id: literal,
          key: key
        };
      }

      if (this._source[this._index] === '(') {
        this._index++;
        var args = this.getCallArgs();

        this._index++;

        literal.type = 'fun';

        return {
          type: 'call',
          fun: literal,
          args: args
        };
      }

      return literal;
    }
  }, {
    key: 'getCallArgs',
    value: function getCallArgs() {
      var args = [];

      if (this._source[this._index] === ')') {
        return args;
      }

      while (this._index < this._length) {
        this.getLineWS();

        var exp = this.getSelectorExpression();

        // MessageReference in this place may be an entity reference, like:
        // `call(foo)`, or, if it's followed by `:` it will be a key-value pair.
        if (exp.type !== 'ref' || exp.namespace !== undefined) {
          args.push(exp);
        } else {
          this.getLineWS();

          if (this._source[this._index] === ':') {
            this._index++;
            this.getLineWS();

            var val = this.getSelectorExpression();

            // If the expression returned as a value of the argument
            // is not a quote delimited string or number, throw.
            //
            // We don't have to check here if the pattern is quote delimited
            // because that's the only type of string allowed in expressions.
            if (typeof val === 'string' || Array.isArray(val) || val.type === 'num') {
              args.push({
                type: 'narg',
                name: exp.name,
                val: val
              });
            } else {
              this._index = this._source.lastIndexOf(':', this._index) + 1;
              throw this.error('Expected string in quotes, number.');
            }
          } else {
            args.push(exp);
          }
        }

        this.getLineWS();

        if (this._source[this._index] === ')') {
          break;
        } else if (this._source[this._index] === ',') {
          this._index++;
        } else {
          throw this.error('Expected "," or ")"');
        }
      }

      return args;
    }
  }, {
    key: 'getNumber',
    value: function getNumber() {
      var num = '';
      var cc = this._source.charCodeAt(this._index);

      // The number literal may start with negative sign `-`.
      if (cc === 45) {
        num += '-';
        cc = this._source.charCodeAt(++this._index);
      }

      // next, we expect at least one digit
      if (cc < 48 || cc > 57) {
        throw this.error('Unknown literal "' + num + '"');
      }

      // followed by potentially more digits
      while (cc >= 48 && cc <= 57) {
        num += this._source[this._index++];
        cc = this._source.charCodeAt(this._index);
      }

      // followed by an optional decimal separator `.`
      if (cc === 46) {
        num += this._source[this._index++];
        cc = this._source.charCodeAt(this._index);

        // followed by at least one digit
        if (cc < 48 || cc > 57) {
          throw this.error('Unknown literal "' + num + '"');
        }

        // and optionally more digits
        while (cc >= 48 && cc <= 57) {
          num += this._source[this._index++];
          cc = this._source.charCodeAt(this._index);
        }
      }

      return {
        type: 'num',
        val: num
      };
    }
  }, {
    key: 'getAttributes',
    value: function getAttributes() {
      var attrs = {};

      while (this._index < this._length) {
        var ch = this._source[this._index];

        if (ch !== '.') {
          break;
        }
        this._index++;

        var key = this.getIdentifier();

        this.getLineWS();

        this._index++;

        this.getLineWS();

        var val = this.getPattern();

        if (typeof val === 'string') {
          attrs[key] = val;
        } else {
          attrs[key] = {
            val: val
          };
        }

        this.getWS();
      }

      return attrs;
    }
  }, {
    key: 'getTags',
    value: function getTags() {
      var tags = [];

      while (this._index < this._length) {
        var ch = this._source[this._index];

        if (ch !== '#') {
          break;
        }
        this._index++;

        var symbol = this.getSymbol();

        tags.push(symbol.name);

        this.getWS();
      }

      return tags;
    }
  }, {
    key: 'getVariants',
    value: function getVariants() {
      var variants = [];
      var index = 0;
      var defaultIndex = void 0;

      while (this._index < this._length) {
        var ch = this._source[this._index];

        if ((ch !== '[' || this._source[this._index + 1] === '[') && ch !== '*') {
          break;
        }
        if (ch === '*') {
          this._index++;
          defaultIndex = index;
        }

        if (this._source[this._index] !== '[') {
          throw this.error('Expected "["');
        }

        this._index++;

        var key = this.getVariantKey();

        this.getLineWS();

        var variant = {
          key: key,
          val: this.getPattern()
        };
        variants[index++] = variant;

        this.getWS();
      }

      return [variants, defaultIndex];
    }

    // VariantKey may be a Keyword or Number

  }, {
    key: 'getVariantKey',
    value: function getVariantKey() {
      var cc = this._source.charCodeAt(this._index);
      var literal = void 0;

      if (cc >= 48 && cc <= 57 || cc === 45) {
        literal = this.getNumber();
      } else {
        literal = this.getSymbol();
      }

      if (this._source[this._index] !== ']') {
        throw this.error('Expected "]"');
      }

      this._index++;
      return literal;
    }
  }, {
    key: 'getLiteral',
    value: function getLiteral() {
      var cc = this._source.charCodeAt(this._index);
      if (cc >= 48 && cc <= 57 || cc === 45) {
        return this.getNumber();
      } else if (cc === 34) {
        // "
        return this.getString();
      } else if (cc === 36) {
        // $
        this._index++;
        return {
          type: 'ext',
          name: this.getIdentifier()
        };
      }

      return {
        type: 'ref',
        name: this.getIdentifier()
      };
    }

    // At runtime, we don't care about comments so we just have
    // to parse them properly and skip their content.

  }, {
    key: 'getComment',
    value: function getComment() {
      var eol = this._source.indexOf('\n', this._index);

      while (eol !== -1 && this._source[eol + 1] === '/' && this._source[eol + 2] === '/') {
        this._index = eol + 3;

        eol = this._source.indexOf('\n', this._index);

        if (eol === -1) {
          break;
        }
      }

      if (eol === -1) {
        this._index = this._length;
      } else {
        this._index = eol + 1;
      }
    }
  }, {
    key: 'error',
    value: function error(message) {
      return new SyntaxError(message);
    }
  }, {
    key: '_findNextEntryStart',
    value: function _findNextEntryStart() {
      var start = this._index;

      while (true) {
        if (start === 0 || this._source[start - 1] === '\n') {
          var cc = this._source.charCodeAt(start);

          if (cc >= 97 && cc <= 122 || // a-z
          cc >= 65 && cc <= 90 || // A-Z
          cc === 95 || cc === 47 || cc === 91) {
            // _/[
            break;
          }
        }

        start = this._source.indexOf('\n', start);

        if (start === -1) {
          break;
        }
        start++;
      }

      return start;
    }
  }]);
  return RuntimeParser;
}();

function parse(string) {
  var parser = new RuntimeParser();
  return parser.getResource(string);
}

/* global Intl */

/**
 * The `FluentType` class is the base of Fluent's type system.
 *
 * Fluent types wrap JavaScript values and store additional configuration for
 * them, which can then be used in the `valueOf` method together with a proper
 * `Intl` formatter.
 */
var FluentType = function () {

  /**
   * Create an `FluentType` instance.
   *
   * @param   {Any}    value - JavaScript value to wrap.
   * @param   {Object} opts  - Configuration.
   * @returns {FluentType}
   */
  function FluentType(value, opts) {
    classCallCheck(this, FluentType);

    this.value = value;
    this.opts = opts;
  }

  /**
   * Unwrap the instance of `FluentType`.
   *
   * Unwrapped values are suitable for use outside of the `MessageContext`.
   * This method can use `Intl` formatters memoized by the `MessageContext`
   * instance passed as an argument.
   *
   * @param   {MessageContext} [ctx]
   * @returns {string}
   */


  createClass(FluentType, [{
    key: 'valueOf',
    value: function valueOf() {
      throw new Error('Subclasses of FluentType must implement valueOf.');
    }
  }]);
  return FluentType;
}();

var FluentNone = function (_FluentType) {
  inherits(FluentNone, _FluentType);

  function FluentNone() {
    classCallCheck(this, FluentNone);
    return possibleConstructorReturn(this, (FluentNone.__proto__ || Object.getPrototypeOf(FluentNone)).apply(this, arguments));
  }

  createClass(FluentNone, [{
    key: 'valueOf',
    value: function valueOf() {
      return this.value || '???';
    }
  }]);
  return FluentNone;
}(FluentType);

var FluentNumber = function (_FluentType2) {
  inherits(FluentNumber, _FluentType2);

  function FluentNumber(value, opts) {
    classCallCheck(this, FluentNumber);
    return possibleConstructorReturn(this, (FluentNumber.__proto__ || Object.getPrototypeOf(FluentNumber)).call(this, parseFloat(value), opts));
  }

  createClass(FluentNumber, [{
    key: 'valueOf',
    value: function valueOf(ctx) {
      var nf = ctx._memoizeIntlObject(Intl.NumberFormat, this.opts);
      return nf.format(this.value);
    }
  }, {
    key: 'match',
    value: function match(ctx, other) {
      if (other instanceof FluentNumber) {
        return this.value === other.value;
      }
      return false;
    }
  }]);
  return FluentNumber;
}(FluentType);

var FluentDateTime = function (_FluentType3) {
  inherits(FluentDateTime, _FluentType3);

  function FluentDateTime(value, opts) {
    classCallCheck(this, FluentDateTime);
    return possibleConstructorReturn(this, (FluentDateTime.__proto__ || Object.getPrototypeOf(FluentDateTime)).call(this, new Date(value), opts));
  }

  createClass(FluentDateTime, [{
    key: 'valueOf',
    value: function valueOf(ctx) {
      var dtf = ctx._memoizeIntlObject(Intl.DateTimeFormat, this.opts);
      return dtf.format(this.value);
    }
  }]);
  return FluentDateTime;
}(FluentType);

var FluentSymbol = function (_FluentType4) {
  inherits(FluentSymbol, _FluentType4);

  function FluentSymbol() {
    classCallCheck(this, FluentSymbol);
    return possibleConstructorReturn(this, (FluentSymbol.__proto__ || Object.getPrototypeOf(FluentSymbol)).apply(this, arguments));
  }

  createClass(FluentSymbol, [{
    key: 'valueOf',
    value: function valueOf() {
      return this.value;
    }
  }, {
    key: 'match',
    value: function match(ctx, other) {
      if (other instanceof FluentSymbol) {
        return this.value === other.value;
      } else if (typeof other === 'string') {
        return this.value === other;
      } else if (other instanceof FluentNumber) {
        var pr = ctx._memoizeIntlObject(Intl.PluralRules, other.opts);
        return this.value === pr.select(other.value);
      } else if (Array.isArray(other)) {
        var values = other.map(function (symbol) {
          return symbol.value;
        });
        return values.includes(this.value);
      }
      return false;
    }
  }]);
  return FluentSymbol;
}(FluentType);

/**
 * @overview
 *
 * The FTL resolver ships with a number of functions built-in.
 *
 * Each function take two arguments:
 *   - args - an array of positional args
 *   - opts - an object of key-value args
 *
 * Arguments to functions are guaranteed to already be instances of
 * `FluentType`.  Functions must return `FluentType` objects as well.
 */

var builtins = {
  'NUMBER': function NUMBER(_ref, opts) {
    var _ref2 = slicedToArray(_ref, 1),
        arg = _ref2[0];

    return new FluentNumber(arg.value, merge(arg.opts, opts));
  },
  'DATETIME': function DATETIME(_ref3, opts) {
    var _ref4 = slicedToArray(_ref3, 1),
        arg = _ref4[0];

    return new FluentDateTime(arg.value, merge(arg.opts, opts));
  }
};

function merge(argopts, opts) {
  return Object.assign({}, argopts, values(opts));
}

function values(opts) {
  var unwrapped = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(opts)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var name = _step.value;

      unwrapped[name] = opts[name].value;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return unwrapped;
}

/**
 * @overview
 *
 * The role of the Fluent resolver is to format a translation object to an
 * instance of `FluentType` or an array of instances.
 *
 * Translations can contain references to other messages or external arguments,
 * conditional logic in form of select expressions, traits which describe their
 * grammatical features, and can use Fluent builtins which make use of the
 * `Intl` formatters to format numbers, dates, lists and more into the
 * context's language.  See the documentation of the Fluent syntax for more
 * information.
 *
 * In case of errors the resolver will try to salvage as much of the
 * translation as possible.  In rare situations where the resolver didn't know
 * how to recover from an error it will return an instance of `FluentNone`.
 *
 * `MessageReference`, `VariantExpression`, `AttributeExpression` and
 * `SelectExpression` resolve to raw Runtime Entries objects and the result of
 * the resolution needs to be passed into `Type` to get their real value.
 * This is useful for composing expressions.  Consider:
 *
 *     brand-name[nominative]
 *
 * which is a `VariantExpression` with properties `id: MessageReference` and
 * `key: Keyword`.  If `MessageReference` was resolved eagerly, it would
 * instantly resolve to the value of the `brand-name` message.  Instead, we
 * want to get the message object and look for its `nominative` variant.
 *
 * All other expressions (except for `FunctionReference` which is only used in
 * `CallExpression`) resolve to an instance of `FluentType`.  The caller should
 * use the `valueOf` method to convert the instance to a native value.
 */

// Prevent expansion of too long placeables.
var MAX_PLACEABLE_LENGTH = 2500;

// Unicode bidi isolation characters.
var FSI = '\u2068';
var PDI = '\u2069';

/**
 * Helper for computing the total character length of a placeable.
 *
 * Used in Pattern.
 *
 * @private
 */
function PlaceableLength(env, parts) {
  var ctx = env.ctx;

  return parts.reduce(function (sum, part) {
    return sum + part.valueOf(ctx).length;
  }, 0);
}

/**
 * Helper for choosing the default value from a set of members.
 *
 * Used in SelectExpressions and Type.
 *
 * @private
 */
function DefaultMember(env, members, def) {
  if (members[def]) {
    return members[def];
  }

  var errors = env.errors;

  errors.push(new RangeError('No default'));
  return new FluentNone();
}

/**
 * Resolve a reference to a message to the message object.
 *
 * @private
 */
function MessageReference(env, _ref) {
  var name = _ref.name;
  var ctx = env.ctx,
      errors = env.errors;

  var message = ctx.messages.get(name);

  if (!message) {
    errors.push(new ReferenceError('Unknown message: ' + name));
    return new FluentNone(name);
  }

  return message;
}

/**
 * Resolve an array of tags.
 *
 * @private
 */
function Tags(env, _ref2) {
  var name = _ref2.name;
  var ctx = env.ctx,
      errors = env.errors;

  var message = ctx.messages.get(name);

  if (!message) {
    errors.push(new ReferenceError('Unknown message: ' + name));
    return new FluentNone(name);
  }

  if (!message.tags) {
    errors.push(new RangeError('No tags in message "' + name + '"'));
    return new FluentNone(name);
  }

  return message.tags.map(function (tag) {
    return new FluentSymbol(tag);
  });
}

/**
 * Resolve a variant expression to the variant object.
 *
 * @private
 */
function VariantExpression(env, _ref3) {
  var id = _ref3.id,
      key = _ref3.key;

  var message = MessageReference(env, id);
  if (message instanceof FluentNone) {
    return message;
  }

  var ctx = env.ctx,
      errors = env.errors;

  var keyword = Type(env, key);

  function isVariantList(node) {
    return Array.isArray(node) && node[0].type === 'sel' && node[0].exp === null;
  }

  if (isVariantList(message.val)) {
    // Match the specified key against keys of each variant, in order.
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = message.val[0].vars[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var variant = _step.value;

        var variantKey = Type(env, variant.key);
        if (keyword.match(ctx, variantKey)) {
          return variant;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  errors.push(new ReferenceError('Unknown variant: ' + keyword.valueOf(ctx)));
  return Type(env, message);
}

/**
 * Resolve an attribute expression to the attribute object.
 *
 * @private
 */
function AttributeExpression(env, _ref4) {
  var id = _ref4.id,
      name = _ref4.name;

  var message = MessageReference(env, id);
  if (message instanceof FluentNone) {
    return message;
  }

  if (message.attrs) {
    // Match the specified name against keys of each attribute.
    for (var attrName in message.attrs) {
      if (name === attrName) {
        return message.attrs[name];
      }
    }
  }

  var errors = env.errors;

  errors.push(new ReferenceError('Unknown attribute: ' + name));
  return Type(env, message);
}

/**
 * Resolve a select expression to the member object.
 *
 * @private
 */
function SelectExpression(env, _ref5) {
  var exp = _ref5.exp,
      vars = _ref5.vars,
      def = _ref5.def;

  if (exp === null) {
    return DefaultMember(env, vars, def);
  }

  var selector = exp.type === 'ref' ? Tags(env, exp) : Type(env, exp);
  if (selector instanceof FluentNone) {
    return DefaultMember(env, vars, def);
  }

  // Match the selector against keys of each variant, in order.
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = vars[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var variant = _step2.value;

      var key = Type(env, variant.key);
      var keyCanMatch = key instanceof FluentNumber || key instanceof FluentSymbol;

      if (!keyCanMatch) {
        continue;
      }

      var ctx = env.ctx;


      if (key.match(ctx, selector)) {
        return variant;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return DefaultMember(env, vars, def);
}

/**
 * Resolve expression to a Fluent type.
 *
 * JavaScript strings are a special case.  Since they natively have the
 * `valueOf` method they can be used as if they were a Fluent type without
 * paying the cost of creating a instance of one.
 *
 * @param   {Object} expr
 * @returns {FluentType}
 * @private
 */
function Type(env, expr) {
  // A fast-path for strings which are the most common case, and for
  // `FluentNone` which doesn't require any additional logic.
  if (typeof expr === 'string' || expr instanceof FluentNone) {
    return expr;
  }

  // The Runtime AST (Entries) encodes patterns (complex strings with
  // placeables) as Arrays.
  if (Array.isArray(expr)) {
    return Pattern(env, expr);
  }

  switch (expr.type) {
    case 'sym':
      return new FluentSymbol(expr.name);
    case 'num':
      return new FluentNumber(expr.val);
    case 'ext':
      return ExternalArgument(env, expr);
    case 'fun':
      return FunctionReference(env, expr);
    case 'call':
      return CallExpression(env, expr);
    case 'ref':
      {
        var message = MessageReference(env, expr);
        return Type(env, message);
      }
    case 'attr':
      {
        var attr = AttributeExpression(env, expr);
        return Type(env, attr);
      }
    case 'var':
      {
        var variant = VariantExpression(env, expr);
        return Type(env, variant);
      }
    case 'sel':
      {
        var member = SelectExpression(env, expr);
        return Type(env, member);
      }
    case undefined:
      {
        // If it's a node with a value, resolve the value.
        if (expr.val !== undefined) {
          return Type(env, expr.val);
        }

        var errors = env.errors;

        errors.push(new RangeError('No value'));
        return new FluentNone();
      }
    default:
      return new FluentNone();
  }
}

/**
 * Resolve a reference to an external argument.
 *
 * @private
 */
function ExternalArgument(env, _ref6) {
  var name = _ref6.name;
  var args = env.args,
      errors = env.errors;


  if (!args || !args.hasOwnProperty(name)) {
    errors.push(new ReferenceError('Unknown external: ' + name));
    return new FluentNone(name);
  }

  var arg = args[name];

  if (arg instanceof FluentType) {
    return arg;
  }

  // Convert the argument to a Fluent type.
  switch (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) {
    case 'string':
      return arg;
    case 'number':
      return new FluentNumber(arg);
    case 'object':
      if (arg instanceof Date) {
        return new FluentDateTime(arg);
      }
    default:
      errors.push(new TypeError('Unsupported external type: ' + name + ', ' + (typeof arg === 'undefined' ? 'undefined' : _typeof(arg))));
      return new FluentNone(name);
  }
}

/**
 * Resolve a reference to a function.
 *
 * @private
 */
function FunctionReference(env, _ref7) {
  var name = _ref7.name;

  // Some functions are built-in.  Others may be provided by the runtime via
  // the `MessageContext` constructor.
  var functions = env.ctx.functions,
      errors = env.errors;

  var func = functions[name] || builtins[name];

  if (!func) {
    errors.push(new ReferenceError('Unknown function: ' + name + '()'));
    return new FluentNone(name + '()');
  }

  if (typeof func !== 'function') {
    errors.push(new TypeError('Function ' + name + '() is not callable'));
    return new FluentNone(name + '()');
  }

  return func;
}

/**
 * Resolve a call to a Function with positional and key-value arguments.
 *
 * @private
 */
function CallExpression(env, _ref8) {
  var fun = _ref8.fun,
      args = _ref8.args;

  var callee = FunctionReference(env, fun);

  if (callee instanceof FluentNone) {
    return callee;
  }

  var posargs = [];
  var keyargs = [];

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = args[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var arg = _step3.value;

      if (arg.type === 'narg') {
        keyargs[arg.name] = Type(env, arg.val);
      } else {
        posargs.push(Type(env, arg));
      }
    }

    // XXX functions should also report errors
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return callee(posargs, keyargs);
}

/**
 * Resolve a pattern (a complex string with placeables).
 *
 * @private
 */
function Pattern(env, ptn) {
  var ctx = env.ctx,
      dirty = env.dirty,
      errors = env.errors;


  if (dirty.has(ptn)) {
    errors.push(new RangeError('Cyclic reference'));
    return new FluentNone();
  }

  // Tag the pattern as dirty for the purpose of the current resolution.
  dirty.add(ptn);
  var result = [];

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = ptn[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var elem = _step4.value;

      if (typeof elem === 'string') {
        result.push(elem);
        continue;
      }

      var part = Type(env, elem);

      if (ctx.useIsolating) {
        result.push(FSI);
      }

      if (Array.isArray(part)) {
        var len = PlaceableLength(env, part);

        if (len > MAX_PLACEABLE_LENGTH) {
          errors.push(new RangeError('Too many characters in placeable ' + ('(' + len + ', max allowed is ' + MAX_PLACEABLE_LENGTH + ')')));
          result.push(new FluentNone());
        } else {
          result.push.apply(result, toConsumableArray(part));
        }
      } else {
        result.push(part);
      }

      if (ctx.useIsolating) {
        result.push(PDI);
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  dirty.delete(ptn);
  return result;
}

/**
 * Format a translation into an `FluentType`.
 *
 * The return value must be unwrapped via `valueOf` by the caller.
 *
 * @param   {MessageContext} ctx
 * @param   {Object}         args
 * @param   {Object}         message
 * @param   {Array}          errors
 * @returns {FluentType}
 */
function resolve(ctx, args, message) {
  var errors = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  var env = {
    ctx: ctx, args: args, errors: errors, dirty: new WeakSet()
  };
  return Type(env, message);
}

/**
 * Message contexts are single-language stores of translations.  They are
 * responsible for parsing translation resources in the Fluent syntax and can
 * format translation units (entities) to strings.
 *
 * Always use `MessageContext.format` to retrieve translation units from
 * a context.  Translations can contain references to other entities or
 * external arguments, conditional logic in form of select expressions, traits
 * which describe their grammatical features, and can use Fluent builtins which
 * make use of the `Intl` formatters to format numbers, dates, lists and more
 * into the context's language.  See the documentation of the Fluent syntax for
 * more information.
 */
var MessageContext = function () {

  /**
   * Create an instance of `MessageContext`.
   *
   * The `locales` argument is used to instantiate `Intl` formatters used by
   * translations.  The `options` object can be used to configure the context.
   *
   * Examples:
   *
   *     const ctx = new MessageContext(locales);
   *
   *     const ctx = new MessageContext(locales, { useIsolating: false });
   *
   *     const ctx = new MessageContext(locales, {
   *       useIsolating: true,
   *       functions: {
   *         NODE_ENV: () => process.env.NODE_ENV
   *       }
   *     });
   *
   * Available options:
   *
   *   - `functions` - an object of additional functions available to
   *                   translations as builtins.
   *
   *   - `useIsolating` - boolean specifying whether to use Unicode isolation
   *                    marks (FSI, PDI) for bidi interpolations.
   *
   * @param   {string|Array<string>} locales - Locale or locales of the context
   * @param   {Object} [options]
   * @returns {MessageContext}
   */
  function MessageContext(locales) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$functions = _ref.functions,
        functions = _ref$functions === undefined ? {} : _ref$functions,
        _ref$useIsolating = _ref.useIsolating,
        useIsolating = _ref$useIsolating === undefined ? true : _ref$useIsolating;

    classCallCheck(this, MessageContext);

    this.locales = Array.isArray(locales) ? locales : [locales];
    this.functions = functions;
    this.useIsolating = useIsolating;
    this.messages = new Map();
    this.intls = new WeakMap();
  }

  /**
   * Add a translation resource to the context.
   *
   * The translation resource must use the Fluent syntax.  It will be parsed by
   * the context and each translation unit (message) will be available in the
   * `messages` map by its identifier.
   *
   *     ctx.addMessages('foo = Foo');
   *     ctx.messages.get('foo');
   *
   *     // Returns a raw representation of the 'foo' message.
   *
   * Parsed entities should be formatted with the `format` method in case they
   * contain logic (references, select expressions etc.).
   *
   * @param   {string} source - Text resource with translations.
   * @returns {Array<Error>}
   */


  createClass(MessageContext, [{
    key: 'addMessages',
    value: function addMessages(source) {
      var _parse = parse(source),
          _parse2 = slicedToArray(_parse, 2),
          entries = _parse2[0],
          errors = _parse2[1];

      for (var id in entries) {
        this.messages.set(id, entries[id]);
      }

      return errors;
    }

    /**
     * Format a message to an array of `FluentTypes` or null.
     *
     * Format a raw `message` from the context's `messages` map into an array of
     * `FluentType` instances which may be used to build the final result.  It
     * may also return `null` if it has a null value.  `args` will be used to
     * resolve references to external arguments inside of the translation.
     *
     * See the documentation of {@link MessageContext#format} for more
     * information about error handling.
     *
     * In case of errors `format` will try to salvage as much of the translation
     * as possible and will still return a string.  For performance reasons, the
     * encountered errors are not returned but instead are appended to the
     * `errors` array passed as the third argument.
     *
     *     ctx.addMessages('hello = Hello, { $name }!');
     *     const hello = ctx.messages.get('hello');
     *     ctx.formatToParts(hello, { name: 'Jane' }, []);
     *     // → ['Hello, ', '\u2068', 'Jane', '\u2069']
     *
     * The returned parts need to be formatted via `valueOf` before they can be
     * used further.  This will ensure all values are correctly formatted
     * according to the `MessageContext`'s locale.
     *
     *     const parts = ctx.formatToParts(hello, { name: 'Jane' }, []);
     *     const str = parts.map(part => part.valueOf(ctx)).join('');
     *
     * @see MessageContext#format
     * @param   {Object | string}    message
     * @param   {Object | undefined} args
     * @param   {Array}              errors
     * @returns {?Array<FluentType>}
     */

  }, {
    key: 'formatToParts',
    value: function formatToParts(message, args, errors) {
      // optimize entities which are simple strings with no attributes
      if (typeof message === 'string') {
        return [message];
      }

      // optimize simple-string entities with attributes
      if (typeof message.val === 'string') {
        return [message.val];
      }

      // optimize entities with null values
      if (message.val === undefined) {
        return null;
      }

      var result = resolve(this, args, message, errors);

      return result instanceof FluentNone ? null : result;
    }

    /**
     * Format a message to a string or null.
     *
     * Format a raw `message` from the context's `messages` map into a string (or
     * a null if it has a null value).  `args` will be used to resolve references
     * to external arguments inside of the translation.
     *
     * In case of errors `format` will try to salvage as much of the translation
     * as possible and will still return a string.  For performance reasons, the
     * encountered errors are not returned but instead are appended to the
     * `errors` array passed as the third argument.
     *
     *     const errors = [];
     *     ctx.addMessages('hello = Hello, { $name }!');
     *     const hello = ctx.messages.get('hello');
     *     ctx.format(hello, { name: 'Jane' }, errors);
     *
     *     // Returns 'Hello, Jane!' and `errors` is empty.
     *
     *     ctx.format(hello, undefined, errors);
     *
     *     // Returns 'Hello, name!' and `errors` is now:
     *
     *     [<ReferenceError: Unknown external: name>]
     *
     * @param   {Object | string}    message
     * @param   {Object | undefined} args
     * @param   {Array}              errors
     * @returns {?string}
     */

  }, {
    key: 'format',
    value: function format(message, args, errors) {
      var _this = this;

      // optimize entities which are simple strings with no attributes
      if (typeof message === 'string') {
        return message;
      }

      // optimize simple-string entities with attributes
      if (typeof message.val === 'string') {
        return message.val;
      }

      // optimize entities with null values
      if (message.val === undefined) {
        return null;
      }

      var result = resolve(this, args, message, errors);

      if (result instanceof FluentNone) {
        return null;
      }

      return result.map(function (part) {
        return part.valueOf(_this);
      }).join('');
    }
  }, {
    key: '_memoizeIntlObject',
    value: function _memoizeIntlObject(ctor, opts) {
      var cache = this.intls.get(ctor) || {};
      var id = JSON.stringify(opts);

      if (!cache[id]) {
        cache[id] = new ctor(this.locales, opts);
        this.intls.set(ctor, cache);
      }

      return cache[id];
    }
  }]);
  return MessageContext;
}();

/**
 * Below is a manually a list of likely subtags corresponding to Unicode
 * CLDR likelySubtags list.
 * This list is curated by the maintainers of Project Fluent and is
 * intended to be used in place of the full likelySubtags list in use cases
 * where full list cannot be (for example, due to the size).
 *
 * This version of the list is based on CLDR 30.0.3.
 */
var likelySubtagsMin = {
  'ar': 'ar-arab-eg',
  'az-arab': 'az-arab-ir',
  'az-ir': 'az-arab-ir',
  'be': 'be-cyrl-by',
  'da': 'da-latn-dk',
  'el': 'el-grek-gr',
  'en': 'en-latn-us',
  'fa': 'fa-arab-ir',
  'ja': 'ja-jpan-jp',
  'ko': 'ko-kore-kr',
  'pt': 'pt-latn-br',
  'sr': 'sr-cyrl-rs',
  'sr-ru': 'sr-latn-ru',
  'sv': 'sv-latn-se',
  'ta': 'ta-taml-in',
  'uk': 'uk-cyrl-ua',
  'zh': 'zh-hans-cn',
  'zh-gb': 'zh-hant-gb',
  'zh-us': 'zh-hant-us'
};

var regionMatchingLangs = ['az', 'bg', 'cs', 'de', 'es', 'fi', 'fr', 'hu', 'it', 'lt', 'lv', 'nl', 'pl', 'ro', 'ru'];

function getLikelySubtagsMin(loc) {
  if (likelySubtagsMin.hasOwnProperty(loc)) {
    return new Locale(likelySubtagsMin[loc]);
  }
  var locale = new Locale(loc);
  if (regionMatchingLangs.includes(locale.language)) {
    locale.region = locale.language;
    locale.string = locale.language + '-' + locale.region;
    return locale;
  }
  return null;
}

/* eslint no-magic-numbers: 0 */

var languageCodeRe = '([a-z]{2,3}|\\*)';
var scriptCodeRe = '(?:-([a-z]{4}|\\*))';
var regionCodeRe = '(?:-([a-z]{2}|\\*))';
var variantCodeRe = '(?:-([a-z]{3}|\\*))';

/**
 * Regular expression splitting locale id into four pieces:
 *
 * Example: `en-Latn-US-mac`
 *
 * language: en
 * script:   Latn
 * region:   US
 * variant:  mac
 *
 * It can also accept a range `*` character on any position.
 */
var localeRe = new RegExp('^' + languageCodeRe + scriptCodeRe + '?' + regionCodeRe + '?' + variantCodeRe + '?$', 'i');

var localeParts = ['language', 'script', 'region', 'variant'];

var Locale = function () {
  /**
   * Parses a locale id using the localeRe into an array with four elements.
   *
   * If the second argument `range` is set to true, it places range `*` char
   * in place of any missing piece.
   *
   * It also allows skipping the script section of the id, so `en-US` is
   * properly parsed as `en-*-US-*`.
   */
  function Locale(locale) {
    var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, Locale);

    var result = localeRe.exec(locale.replace(/_/g, '-'));
    if (!result) {
      return;
    }

    var missing = range ? '*' : undefined;

    var language = result[1] || missing;
    var script = result[2] || missing;
    var region = result[3] || missing;
    var variant = result[4] || missing;

    this.language = language;
    this.script = script;
    this.region = region;
    this.variant = variant;
    this.string = locale;
  }

  createClass(Locale, [{
    key: 'isEqual',
    value: function isEqual(locale) {
      var _this = this;

      return localeParts.every(function (part) {
        return _this[part] === locale[part];
      });
    }
  }, {
    key: 'matches',
    value: function matches(locale) {
      var _this2 = this;

      return localeParts.every(function (part) {
        return _this2[part] === '*' || locale[part] === '*' || _this2[part] === undefined && locale[part] === undefined || _this2[part] !== undefined && locale[part] !== undefined && _this2[part].toLowerCase() === locale[part].toLowerCase();
      });
    }
  }, {
    key: 'setVariantRange',
    value: function setVariantRange() {
      this.variant = '*';
    }
  }, {
    key: 'setRegionRange',
    value: function setRegionRange() {
      this.region = '*';
    }
  }, {
    key: 'addLikelySubtags',
    value: function addLikelySubtags() {
      var _this3 = this;

      var newLocale = getLikelySubtagsMin(this.string.toLowerCase());

      if (newLocale) {
        localeParts.forEach(function (part) {
          return _this3[part] = newLocale[part];
        });
        this.string = newLocale.string;
        return true;
      }
      return false;
    }
  }]);
  return Locale;
}();

/* eslint no-magic-numbers: 0 */
/* eslint complexity: ["error", { "max": 27 }] */

/**
 * Negotiates the languages between the list of requested locales against
 * a list of available locales.
 *
 * The algorithm is based on the BCP4647 3.3.2 Extended Filtering algorithm,
 * with several modifications:
 *
 *  1) available locales are treated as ranges
 *
 *    This change allows us to match a more specific request against
 *    more generic available locale.
 *
 *    For example, if the available locale list provides locale `en`,
 *    and the requested locale is `en-US`, we treat the available locale as
 *    a locale that matches all possible english requests.
 *
 *    This means that we expect available locale ID to be as precize as
 *    the matches they want to cover.
 *
 *    For example, if there is only `sr` available, it's ok to list
 *    it in available locales. But once the available locales has both,
 *    Cyrl and Latn variants, the locale IDs should be `sr-Cyrl` and `sr-Latn`
 *    to avoid any `sr-*` request to match against whole `sr` range.
 *
 *    What it does ([requested] * [available] = [supported]):
 *
 *    ['en-US'] * ['en'] = ['en']
 *
 *  2) likely subtags from LDML 4.3 Likely Subtags has been added
 *
 *    The most obvious likely subtag that can be computed is a duplication
 *    of the language field onto region field (`fr` => `fr-FR`).
 *
 *    On top of that, likely subtags may use a list of mappings, that
 *    allow the algorithm to handle non-obvious matches.
 *    For example, making sure that we match `en` to `en-US` or `sr` to
 *    `sr-Cyrl`, while `sr-RU` to `sr-Latn-RU`.
 *
 *    This list can be taken directly from CLDR Supplemental Data.
 *
 *    What it does ([requested] * [available] = [supported]):
 *
 *    ['fr'] * ['fr-FR'] = ['fr-FR']
 *    ['en'] * ['en-US'] = ['en-US']
 *    ['sr'] * ['sr-Latn', 'sr-Cyrl'] = ['sr-Cyrl']
 *
 *  3) variant/region range check has been added
 *
 *    Lastly, the last form of check is against the requested locale ID
 *    but with the variant/region field replaced with a `*` range.
 *
 *    The rationale here laid out in LDML 4.4 Language Matching:
 *      "(...) normally the fall-off between the user's languages is
 *      substantially greated than regional variants."
 *
 *    In other words, if we can't match for the given region, maybe
 *    we can match for the same language/script but other region, and
 *    it will in most cases be preferred over falling back on the next
 *    language.
 *
 *    What it does ([requested] * [available] = [supported]):
 *
 *    ['en-AU'] * ['en-US'] = ['en-US']
 *    ['sr-RU'] * ['sr-Latn-RO'] = ['sr-Latn-RO'] // sr-RU -> sr-Latn-RU
 *
 *    It works similarly to getParentLocales algo, except that we stop
 *    after matching against variant/region ranges and don't try to match
 *    ignoring script ranges. That means that `sr-Cyrl` will never match
 *    against `sr-Latn`.
 */
function filterMatches(requestedLocales, availableLocales, strategy) {
  var supportedLocales = new Set();

  var availLocales = new Set(availableLocales.map(function (locale) {
    return new Locale(locale, true);
  }));

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    outer: for (var _iterator = requestedLocales[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var reqLocStr = _step.value;

      var reqLocStrLC = reqLocStr.toLowerCase();
      var requestedLocale = new Locale(reqLocStrLC);

      if (requestedLocale.language === undefined) {
        continue;
      }

      // Attempt to make an exact match
      // Example: `en-US` === `en-US`
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = availableLocales[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _availableLocale = _step2.value;

          if (reqLocStrLC === _availableLocale.toLowerCase()) {
            supportedLocales.add(_availableLocale);
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = availLocales[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var loc = _step7.value;

                if (loc.isEqual(requestedLocale)) {
                  availLocales.delete(loc);
                  break;
                }
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7.return) {
                  _iterator7.return();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
            }

            if (strategy === 'lookup') {
              return Array.from(supportedLocales);
            } else if (strategy === 'matching') {
              continue outer;
            } else {
              break;
            }
          }
        }

        // Attempt to match against the available range
        // This turns `en` into `en-*-*-*` and `en-US` into `en-*-US-*`
        // Example: ['en-US'] * ['en'] = ['en']
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = availLocales[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _availableLocale2 = _step3.value;

          if (requestedLocale.matches(_availableLocale2)) {
            supportedLocales.add(_availableLocale2.string);
            availLocales.delete(_availableLocale2);
            if (strategy === 'lookup') {
              return Array.from(supportedLocales);
            } else if (strategy === 'matching') {
              continue outer;
            } else {
              break;
            }
          }
        }

        // Attempt to retrieve a maximal version of the requested locale ID
        // If data is available, it'll expand `en` into `en-Latn-US` and
        // `zh` into `zh-Hans-CN`.
        // Example: ['en'] * ['en-GB', 'en-US'] = ['en-US']
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (requestedLocale.addLikelySubtags()) {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = availLocales[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var availableLocale = _step4.value;

            if (requestedLocale.matches(availableLocale)) {
              supportedLocales.add(availableLocale.string);
              availLocales.delete(availableLocale);
              if (strategy === 'lookup') {
                return Array.from(supportedLocales);
              } else if (strategy === 'matching') {
                continue outer;
              } else {
                break;
              }
            }
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }

      // Attempt to look up for a different variant for the same locale ID
      // Example: ['en-US-mac'] * ['en-US-win'] = ['en-US-win']
      requestedLocale.setVariantRange();

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = availLocales[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var _availableLocale3 = _step5.value;

          if (requestedLocale.matches(_availableLocale3)) {
            supportedLocales.add(_availableLocale3.string);
            availLocales.delete(_availableLocale3);
            if (strategy === 'lookup') {
              return Array.from(supportedLocales);
            } else if (strategy === 'matching') {
              continue outer;
            } else {
              break;
            }
          }
        }

        // Attempt to look up for a different region for the same locale ID
        // Example: ['en-US'] * ['en-AU'] = ['en-AU']
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      requestedLocale.setRegionRange();

      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = availLocales[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var _availableLocale4 = _step6.value;

          if (requestedLocale.matches(_availableLocale4)) {
            supportedLocales.add(_availableLocale4.string);
            availLocales.delete(_availableLocale4);
            if (strategy === 'lookup') {
              return Array.from(supportedLocales);
            } else if (strategy === 'matching') {
              continue outer;
            } else {
              break;
            }
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return Array.from(supportedLocales);
}

/*
 * @module fluent-langneg
 * @overview
 *
 * `fluent-langneg` provides language negotiation API that fits into
 * Project Fluent localization composition and fallbacking strategy.
 *
 */

function GetOption(options, property, type, values, fallback) {
  var value = options[property];

  if (value !== undefined) {
    if (type === 'boolean') {
      value = new Boolean(value);
    } else if (type === 'string') {
      value = String(value);
    }

    if (values !== undefined && values.indexOf(value) === -1) {
      throw new Error('Invalid option value');
    }

    return value;
  }

  return fallback;
}

/**
 * Negotiates the languages between the list of requested locales against
 * a list of available locales.
 *
 * It accepts three arguments:
 *
 *   requestedLocales:
 *     an Array of strings with BCP47 locale IDs sorted
 *     according to user preferences.
 *
 *   availableLocales:
 *     an Array of strings with BCP47 locale IDs of locale for which
 *     resources are available. Unsorted.
 *
 *   options:
 *     An object with the following, optional keys:
 *
 *       strategy: 'filtering' (default) | 'matching' | 'lookup'
 *
 *       defaultLocale:
 *         a string with BCP47 locale ID to be used
 *         as a last resort locale.
 *
 *       likelySubtags:
 *         a key-value map of locale keys to their most expanded variants.
 *         For example:
 *           'en' -> 'en-Latn-US',
 *           'ru' -> 'ru-Cyrl-RU',
 *
 *
 * It returns an Array of strings with BCP47 locale IDs sorted according to the
 * user preferences.
 *
 * The exact list will be selected differently depending on the strategy:
 *
 *   'filtering':
 *     In the filtering strategy, the algorithm will attempt to find the
 *     best possible match for each element of the requestedLocales list.
 *
 *   'matching':
 *     In the matching strategy, the algorithm will attempt to match
 *     as many keys in the available locales in order of the requested locales.
 *
 *   'lookup':
 *     In the lookup strategy, the algorithm will attempt to find a single
 *     best available locale based on the requested locales list.
 *
 *     This strategy requires defaultLocale option to be set.
 */
function negotiateLanguages(requestedLocales, availableLocales) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


  var defaultLocale = GetOption(options, 'defaultLocale', 'string');
  var likelySubtags = GetOption(options, 'likelySubtags', 'object', undefined);
  var strategy = GetOption(options, 'strategy', 'string', ['filtering', 'matching', 'lookup'], 'filtering');

  if (strategy === 'lookup' && !defaultLocale) {
    throw new Error('defaultLocale cannot be undefined for strategy `lookup`');
  }

  var resolvedReqLoc = Array.from(Object(requestedLocales)).map(function (loc) {
    return String(loc);
  });
  var resolvedAvailLoc = Array.from(Object(availableLocales)).map(function (loc) {
    return String(loc);
  });

  var supportedLocales = filterMatches(resolvedReqLoc, resolvedAvailLoc, strategy, likelySubtags);

  if (strategy === 'lookup') {
    if (supportedLocales.length === 0) {
      supportedLocales.push(defaultLocale);
    }
  } else if (defaultLocale && !supportedLocales.includes(defaultLocale)) {
    supportedLocales.push(defaultLocale);
  }
  return supportedLocales;
}

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

/**
 * An `L10nError` with information about language and entity ID in which
 * the error happened.
 */
var L10nError = function (_extendableBuiltin2) {
  inherits(L10nError, _extendableBuiltin2);

  function L10nError(message, id, lang) {
    classCallCheck(this, L10nError);

    var _this = possibleConstructorReturn(this, (L10nError.__proto__ || Object.getPrototypeOf(L10nError)).call(this));

    _this.name = 'L10nError';
    _this.message = message;
    _this.id = id;
    _this.lang = lang;
    return _this;
  }

  return L10nError;
}(_extendableBuiltin(Error));

var properties = new WeakMap();
var contexts = new WeakMap();

/**
 * The `Localization` class is responsible for fetching resources and
 * formatting translations.
 *
 * It implements the fallback strategy in case of errors encountered during the
 * formatting of translations.
 *
 * In HTML and XUL, l20n.js will create an instance of `Localization` for the
 * default set of `<link rel="localization">` elements.  You can get
 * a reference to it via:
 *
 *     const localization = document.l10n.get('main');
 *
 * Different names can be specified via the `name` attribute on the `<link>`
 * elements.  One `document` can have more than one `Localization` instance,
 * but one `Localization` instance can only be assigned to a single `document`.
 */

var Localization = function () {

  /**
   * Create an instance of the `Localization` class.
   *
   * The instance's configuration is provided by two runtime-dependent
   * functions passed to the constructor.
   *
   * The `requestBundles` function takes an array of language codes and returns
   * a Promise of an array of lazy `ResourceBundle` instances.  The
   * `Localization` instance will imediately call the `fetch` method of the
   * first bundle returned by `requestBundles` and may call `fetch` on
   * subsequent bundles in fallback scenarios.
   *
   * The array of bundles is the de-facto current fallback chain of languages
   * and fetch locations.
   *
   * The `createContext` function takes a language code and returns an instance
   * of `Intl.MessageContext`.  Since it's also provided to the constructor by
   * the runtime it may pass runtime-specific `functions` to the
   * `MessageContext` instances it creates.
   *
   * @param   {Function}     requestBundles
   * @param   {Function}     createContext
   * @returns {Localization}
   */
  function Localization(requestBundles, createContext) {
    classCallCheck(this, Localization);

    var createHeadContext = function createHeadContext(bundles) {
      return createHeadContextWith(createContext, bundles);
    };

    // Keep `requestBundles` and `createHeadContext` private.
    properties.set(this, {
      requestBundles: requestBundles, createHeadContext: createHeadContext
    });

    /**
     * A Promise which resolves when the `Localization` instance has fetched
     * and parsed all localization resources in the user's first preferred
     * language (if available).
     *
     *     localization.interactive.then(callback);
     */
    this.interactive = requestBundles().then(
    // Create a `MessageContext` for the first bundle right away.
    function (bundles) {
      return createHeadContext(bundles).then(
      // Force `this.interactive` to resolve to the list of bundles.
      function () {
        return bundles;
      });
    });
  }

  /**
   * Initiate the change of the currently negotiated languages.
   *
   * `requestLanguages` takes an array of language codes representing user's
   * updated language preferences.
   *
   * @param   {Array<string>}     requestedLangs
   * @returns {Promise<Array<ResourceBundle>>}
   */


  createClass(Localization, [{
    key: 'requestLanguages',
    value: function requestLanguages(requestedLangs) {
      var _properties$get = properties.get(this),
          requestBundles = _properties$get.requestBundles,
          createHeadContext = _properties$get.createHeadContext;

      // Assign to `this.interactive` to make all translations requested after
      // the language change request come from the new fallback chain.


      return this.interactive = Promise.all(
      // Get the current bundles to be able to compare them to the new result
      // of the language negotiation.
      [this.interactive, requestBundles(requestedLangs)]).then(function (_ref) {
        var _ref2 = slicedToArray(_ref, 2),
            oldBundles = _ref2[0],
            newBundles = _ref2[1];

        if (equal(oldBundles, newBundles)) {
          return oldBundles;
        }

        return createHeadContext(newBundles).then(function () {
          return newBundles;
        });
      });
    }

    /**
     * Format translations and handle fallback if needed.
     *
     * Format translations for `keys` from `MessageContext` instances
     * corresponding to the current bundles.  In case of errors, fetch the next
     * bundle in the fallback chain, create a context for it, and recursively
     * call `formatWithFallback` again.
     *
     * @param   {Array<ResourceBundle>} bundles - Current bundles.
     * @param   {Array<Array>}          keys    - Translation keys to format.
     * @param   {Function}              method  - Formatting function.
     * @param   {Array<string>}         [prev]  - Previous translations.
     * @returns {Array<string> | Promise<Array<string>>}
     * @private
     */

  }, {
    key: 'formatWithFallback',
    value: function formatWithFallback(bundles, ctx, keys, method, prev) {
      var _this = this;

      // If a context for the head bundle doesn't exist we've reached the last
      // bundle in the fallback chain.  This is the end condition which returns
      // the translations formatted during the previous (recursive) calls to
      // `formatWithFallback`.
      if (!ctx) {
        return prev.translations;
      }

      var current = keysFromContext(method, this.sanitizeArgs, ctx, keys, prev);

      // In Gecko `console` needs to imported explicitly.
      if (typeof console !== 'undefined') {
        // The `errors` property is an array of arrays, each containing all
        // errors encountered for the translation at the same position in `keys`.
        // If there were no errors for a given translation, `errors` will contain
        // an `undefined` instead of the array of errors.  Most translations are
        // simple string which don't produce errors.
        current.errors.forEach(function (errs) {
          return errs ? errs.forEach(function (e) {
            return console.warn(e);
          } // eslint-disable-line no-console
          ) : null;
        });
      }

      // `hasFatalErrors` is a flag set by `keysFromContext` to notify about
      // errors during the formatting.  We can't just check the `length` of the
      // `errors` property because it is fixed and equal to the length of `keys`.
      if (!current.hasFatalErrors) {
        return current.translations;
      }

      // At this point we need to fetch the next bundle in the fallback chain and
      // create a `MessageContext` instance for it.
      var tailBundles = bundles.slice(1);

      var _properties$get2 = properties.get(this),
          createHeadContext = _properties$get2.createHeadContext;

      return createHeadContext(tailBundles).then(function (next) {
        return _this.formatWithFallback(tailBundles, next, keys, method, current);
      });
    }

    /**
     * Format translations into {value, attrs} objects.
     *
     * This is an internal method used by `LocalizationObserver` instances.  The
     * fallback logic is the same as in `formatValues` but the argument type is
     * stricter (an array of arrays) and it returns {value, attrs} objects which
     * are suitable for the translation of DOM elements.
     *
     *     document.l10n.formatEntities([j
     *       ['hello', { who: 'Mary' }],
     *       ['welcome', undefined]
     *     ]).then(console.log);
     *
     *     // [
     *     //   { value: 'Hello, Mary!', attrs: null },
     *     //   { value: 'Welcome!', attrs: { title: 'Hello' } }
     *     // ]
     *
     * Returns a Promise resolving to an array of the translation strings.
     *
     * @param   {Array<Array>} keys
     * @returns {Promise<Array<{value: string, attrs: Object}>>}
     * @private
     */

  }, {
    key: 'formatEntities',
    value: function formatEntities(keys) {
      var _this2 = this;

      return this.interactive.then(function (bundles) {
        return _this2.formatWithFallback(bundles, contexts.get(bundles[0]), keys, _this2.entityFromContext);
      });
    }

    /**
     * Retrieve translations corresponding to the passed keys.
     *
     * A generalized version of `Localization.formatValue`.  Keys can either be
     * simple string identifiers or `[id, args]` arrays.
     *
     *     document.l10n.formatValues(
     *       ['hello', { who: 'Mary' }],
     *       ['hello', { who: 'John' }],
     *       'welcome'
     *     ).then(console.log);
     *
     *     // ['Hello, Mary!', 'Hello, John!', 'Welcome!']
     *
     * Returns a Promise resolving to an array of the translation strings.
     *
     * @param   {...(Array | string)} keys
     * @returns {Promise<Array<string>>}
     */

  }, {
    key: 'formatValues',
    value: function formatValues() {
      var _this3 = this;

      for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
        keys[_key] = arguments[_key];
      }

      // Convert string keys into arrays that `formatWithFallback` expects.
      var keyTuples = keys.map(function (key) {
        return Array.isArray(key) ? key : [key, null];
      });
      return this.interactive.then(function (bundles) {
        return _this3.formatWithFallback(bundles, contexts.get(bundles[0]), keyTuples, _this3.valueFromContext);
      });
    }

    /**
     * Retrieve the translation corresponding to the `id` identifier.
     *
     * If passed, `args` is a simple hash object with a list of variables that
     * will be interpolated in the value of the translation.
     *
     *     localization.formatValue(
     *       'hello', { who: 'world' }
     *     ).then(console.log);
     *
     *     // 'Hello, world!'
     *
     * Returns a Promise resolving to the translation string.
     *
     * Use this sparingly for one-off messages which don't need to be
     * retranslated when the user changes their language preferences, e.g. in
     * notifications.
     *
     * @param   {string}  id     - Identifier of the translation to format
     * @param   {Object}  [args] - Optional external arguments
     * @returns {Promise<string>}
     */

  }, {
    key: 'formatValue',
    value: function formatValue(id, args) {
      return this.formatValues([id, args]).then(function (_ref3) {
        var _ref4 = slicedToArray(_ref3, 1),
            val = _ref4[0];

        return val;
      });
    }

    /**
     * Sanitize external arguments.
     *
     * Subclasses of `Localization` can override this method to provide
     * environment-specific sanitization of arguments passed into translations.
     *
     * @param   {Object} args
     * @returns {Object}
     * @private
     */

  }, {
    key: 'sanitizeArgs',
    value: function sanitizeArgs(args) {
      return args;
    }

    /**
     * Format all public values of a message into a { value, attrs } object.
     *
     * This function is passed as a method to `keysFromContext` and resolve
     * a single L10n Entity using provided `MessageContext`.
     *
     * The function will return an object with a value and attributes of the
     * entity.
     *
     * If the function fails to retrieve the entity, the value is set to the ID of
     * an entity, and attrs to `null`. If formatting fails, it will return
     * a partially resolved value and attributes.
     *
     * In both cases, an error is being added to the errors array.
     *
     * Subclasses of `Localization` can override this method to provide
     * environment-specific formatting behavior.
     *
     * @param   {MessageContext} ctx
     * @param   {Array<Error>}   errors
     * @param   {String}         id
     * @param   {Object}         args
     * @returns {Object}
     * @private
     */

  }, {
    key: 'entityFromContext',
    value: function entityFromContext(ctx, errors, id, args) {
      var entity = ctx.messages.get(id);

      if (entity === undefined) {
        errors.push(new L10nError('Unknown entity: ' + id));
        return { value: id, attrs: null };
      }

      var formatted = {
        value: ctx.format(entity, args, errors),
        attrs: null
      };

      if (entity.attrs) {
        formatted.attrs = {};
        for (var name in entity.attrs) {
          var attr = ctx.format(entity.attrs[name], args, errors);
          if (attr !== null) {
            formatted.attrs[name] = attr;
          }
        }
      }

      return formatted;
    }

    /**
     * Format the value of a message into a string.
     *
     * This function is passed as a method to `keysFromContext` and resolve
     * a value of a single L10n Entity using provided `MessageContext`.
     *
     * If the function fails to retrieve the entity, it will return an ID of it.
     * If formatting fails, it will return a partially resolved entity.
     *
     * In both cases, an error is being added to the errors array.
     *
     * Subclasses of `Localization` can override this method to provide
     * environment-specific formatting behavior.
     *
     * @param   {MessageContext} ctx
     * @param   {Array<Error>}   errors
     * @param   {string}         id
     * @param   {Object}         args
     * @returns {string}
     * @private
     */

  }, {
    key: 'valueFromContext',
    value: function valueFromContext(ctx, errors, id, args) {
      var entity = ctx.messages.get(id);

      if (entity === undefined) {
        errors.push(new L10nError('Unknown entity: ' + id));
        return id;
      }

      return ctx.format(entity, args, errors);
    }
  }]);
  return Localization;
}();

function createHeadContextWith(createContext, bundles) {
  var _bundles = slicedToArray(bundles, 1),
      bundle = _bundles[0];

  if (!bundle) {
    return Promise.resolve(null);
  }

  return bundle.fetch().then(function (resources) {
    var ctx = createContext(bundle.lang);
    resources
    // Filter out resources which failed to load correctly (e.g. 404).
    .filter(function (res) {
      return res !== null;
    }).forEach(function (res) {
      return ctx.addMessages(res);
    });
    // Save the reference to the context.
    contexts.set(bundle, ctx);
    return ctx;
  });
}

/**
 *
 * Test if two fallback chains are functionally the same.
 *
 * @param   {Array<ResourceBundle>} bundles1
 * @param   {Array<ResourceBundle>} bundles2
 * @returns {boolean}
 * @private
 */
function equal(bundles1, bundles2) {
  return bundles1.length === bundles2.length && bundles1.every(function (_ref5, i) {
    var lang = _ref5.lang;
    return lang === bundles2[i].lang;
  });
}

/**
 * @private
 *
 * This function is an inner function for `Localization.formatWithFallback`.
 *
 * It takes a `MessageContext`, list of l10n-ids and a method to be used for
 * key resolution (either `valueFromContext` or `entityFromContext`) and
 * optionally a value returned from `keysFromContext` executed against
 * another `MessageContext`.
 *
 * The idea here is that if the previous `MessageContext` did not resolve
 * all keys, we're calling this function with the next context to resolve
 * the remaining ones.
 *
 * In the function, we loop oer `keys` and check if we have the `prev`
 * passed and if it has an error entry for the position we're in.
 *
 * If it doesn't, it means that we have a good translation for this key and
 * we return it. If it does, we'll try to resolve the key using the passed
 * `MessageContext`.
 *
 * In the end, we return an Object with resolved translations, errors and
 * a boolean indicating if there were any errors found.
 *
 * The translations are either strings, if the method is `valueFromContext`
 * or objects with value and attributes if the method is `entityFromContext`.
 *
 * See `Localization.formatWithFallback` for more info on how this is used.
 *
 * @param {MessageContext} ctx
 * @param {Array<string>}  keys
 * @param {Function}       method
 * @param {{
 *   errors: Array<Error>,
 *   withoutFatal: Array<boolean>,
 *   hasFatalErrors: boolean,
 *   translations: Array<string>|Array<{value: string, attrs: Object}>}} prev
 *
 * @returns {{
 *   errors: Array<Error>,
 *   withoutFatal: Array<boolean>,
 *   hasFatalErrors: boolean,
 *   translations: Array<string>|Array<{value: string, attrs: Object}>}}
 */
function keysFromContext(method, sanitizeArgs, ctx, keys, prev) {
  var entityErrors = [];
  var result = {
    errors: new Array(keys.length),
    withoutFatal: new Array(keys.length),
    hasFatalErrors: false
  };

  result.translations = keys.map(function (key, i) {
    // Use a previously formatted good value if it had no errors.
    if (prev && !prev.errors[i]) {
      return prev.translations[i];
    }

    // Clear last entity's errors.
    entityErrors.length = 0;
    var args = sanitizeArgs(key[1]);
    var translation = method(ctx, entityErrors, key[0], args);

    // No errors still? Use this translation as fallback to the previous one
    // which had errors.
    if (entityErrors.length === 0) {
      return translation;
    }

    // The rest of this function handles the scenario in which the translation
    // was formatted with errors.  Copy the errors to the result object so that
    // the Localization can handle them (e.g. console.warn about them).
    result.errors[i] = entityErrors.slice();

    // Formatting errors are not fatal and the translations are usually still
    // usable and can be good fallback values.  Fatal errors should signal to
    // the Localization that another fallback should be loaded.
    if (!entityErrors.some(isL10nError)) {
      result.withoutFatal[i] = true;
    } else if (!result.hasFatalErrors) {
      result.hasFatalErrors = true;
    }

    // Use the previous translation for this `key` even if it had formatting
    // errors.  This is usually closer the user's preferred language anyways.
    if (prev && prev.withoutFatal[i]) {
      // Mark this previous translation as a good potential fallback value in
      // case of further fallbacks.
      result.withoutFatal[i] = true;
      return prev.translations[i];
    }

    // If no good or almost good previous translation is available, return the
    // current translation.  In case of minor errors it's a partially
    // formatted translation.  In the worst-case scenario it an identifier of
    // the requested entity.
    return translation;
  });

  return result;
}

/**
 * @private
 *
 * Test if an error is an instance of L10nError.
 *
 * @param   {Error}   error
 * @returns {boolean}
 */
function isL10nError(error) {
  return error instanceof L10nError;
}

// Match the opening angle bracket (<) in HTML tags, and HTML entities like
// &amp;, &#0038;, &#x0026;.
var reOverlay = /<|&#?\w+;/;

// XXX The allowed list should be amendable; https://bugzil.la/922573.
var ALLOWED_ELEMENTS = {
  'http://www.w3.org/1999/xhtml': ['a', 'em', 'strong', 'small', 's', 'cite', 'q', 'dfn', 'abbr', 'data', 'time', 'code', 'var', 'samp', 'kbd', 'sub', 'sup', 'i', 'b', 'u', 'mark', 'ruby', 'rt', 'rp', 'bdi', 'bdo', 'span', 'br', 'wbr']
};

var ALLOWED_ATTRIBUTES = {
  'http://www.w3.org/1999/xhtml': {
    global: ['title', 'aria-label', 'aria-valuetext', 'aria-moz-hint'],
    a: ['download'],
    area: ['download', 'alt'],
    // value is special-cased in isAttrAllowed
    input: ['alt', 'placeholder'],
    menuitem: ['label'],
    menu: ['label'],
    optgroup: ['label'],
    option: ['label'],
    track: ['label'],
    img: ['alt'],
    textarea: ['placeholder'],
    th: ['abbr']
  },
  'http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul': {
    global: ['accesskey', 'aria-label', 'aria-valuetext', 'aria-moz-hint', 'label'],
    key: ['key', 'keycode'],
    textbox: ['placeholder'],
    toolbarbutton: ['tooltiptext']
  }
};

/**
 * Overlay translation onto a DOM element.
 *
 * @param   {Element}      element
 * @param   {string}       translation
 * @private
 */
function overlayElement(element, translation) {
  var value = translation.value;

  if (typeof value === 'string') {
    if (!reOverlay.test(value)) {
      // If the translation doesn't contain any markup skip the overlay logic.
      element.textContent = value;
    } else {
      // Else start with an inert template element and move its children into
      // `element` but such that `element`'s own children are not replaced.
      var tmpl = element.ownerDocument.createElementNS('http://www.w3.org/1999/xhtml', 'template');
      tmpl.innerHTML = value;
      // Overlay the node with the DocumentFragment.
      overlay(element, tmpl.content);
    }
  }

  if (translation.attrs === null) {
    return;
  }

  for (var name in translation.attrs) {
    if (isAttrAllowed({ name: name }, element)) {
      element.setAttribute(name, translation.attrs[name]);
    }
  }
}

// The goal of overlay is to move the children of `translationElement`
// into `sourceElement` such that `sourceElement`'s own children are not
// replaced, but only have their text nodes and their attributes modified.
//
// We want to make it possible for localizers to apply text-level semantics to
// the translations and make use of HTML entities. At the same time, we
// don't trust translations so we need to filter unsafe elements and
// attributes out and we don't want to break the Web by replacing elements to
// which third-party code might have created references (e.g. two-way
// bindings in MVC frameworks).
function overlay(sourceElement, translationElement) {
  var result = translationElement.ownerDocument.createDocumentFragment();
  var k = void 0,
      attr = void 0;

  // Take one node from translationElement at a time and check it against
  // the allowed list or try to match it with a corresponding element
  // in the source.
  var childElement = void 0;
  while (childElement = translationElement.childNodes[0]) {
    translationElement.removeChild(childElement);

    if (childElement.nodeType === childElement.TEXT_NODE) {
      result.appendChild(childElement);
      continue;
    }

    var index = getIndexOfType(childElement);
    var sourceChild = getNthElementOfType(sourceElement, childElement, index);
    if (sourceChild) {
      // There is a corresponding element in the source, let's use it.
      overlay(sourceChild, childElement);
      result.appendChild(sourceChild);
      continue;
    }

    if (isElementAllowed(childElement)) {
      var sanitizedChild = childElement.ownerDocument.createElement(childElement.nodeName);
      overlay(sanitizedChild, childElement);
      result.appendChild(sanitizedChild);
      continue;
    }

    // Otherwise just take this child's textContent.
    result.appendChild(translationElement.ownerDocument.createTextNode(childElement.textContent));
  }

  // Clear `sourceElement` and append `result` which by this time contains
  // `sourceElement`'s original children, overlayed with translation.
  sourceElement.textContent = '';
  sourceElement.appendChild(result);

  // If we're overlaying a nested element, translate the allowed
  // attributes; top-level attributes are handled in `overlayElement`.
  // XXX Attributes previously set here for another language should be
  // cleared if a new language doesn't use them; https://bugzil.la/922577
  if (translationElement.attributes) {
    for (k = 0, attr; attr = translationElement.attributes[k]; k++) {
      if (isAttrAllowed(attr, sourceElement)) {
        sourceElement.setAttribute(attr.name, attr.value);
      }
    }
  }
}

/**
 * Check if element is allowed in the translation.
 *
 * This method is used by the sanitizer when the translation markup contains
 * an element which is not present in the source code.
 *
 * @param   {Element} element
 * @returns {boolean}
 * @private
 */
function isElementAllowed(element) {
  var allowed = ALLOWED_ELEMENTS[element.namespaceURI];
  if (!allowed) {
    return false;
  }

  return allowed.indexOf(element.tagName.toLowerCase()) !== -1;
}

/**
 * Check if attribute is allowed for the given element.
 *
 * This method is used by the sanitizer when the translation markup contains
 * DOM attributes, or when the translation has traits which map to DOM
 * attributes.
 *
 * @param   {{name: string}} attr
 * @param   {Element}        element
 * @returns {boolean}
 * @private
 */
function isAttrAllowed(attr, element) {
  var allowed = ALLOWED_ATTRIBUTES[element.namespaceURI];
  if (!allowed) {
    return false;
  }

  var attrName = attr.name.toLowerCase();
  var elemName = element.tagName.toLowerCase();

  // Is it a globally safe attribute?
  if (allowed.global.indexOf(attrName) !== -1) {
    return true;
  }

  // Are there no allowed attributes for this element?
  if (!allowed[elemName]) {
    return false;
  }

  // Is it allowed on this element?
  if (allowed[elemName].indexOf(attrName) !== -1) {
    return true;
  }

  // Special case for value on HTML inputs with type button, reset, submit
  if (element.namespaceURI === 'http://www.w3.org/1999/xhtml' && elemName === 'input' && attrName === 'value') {
    var type = element.type.toLowerCase();
    if (type === 'submit' || type === 'button' || type === 'reset') {
      return true;
    }
  }

  return false;
}

// Get n-th immediate child of context that is of the same type as element.
// XXX Use querySelector(':scope > ELEMENT:nth-of-type(index)'), when:
// 1) :scope is widely supported in more browsers and 2) it works with
// DocumentFragments.
function getNthElementOfType(context, element, index) {
  var nthOfType = 0;
  for (var i = 0, child; child = context.children[i]; i++) {
    if (child.nodeType === child.ELEMENT_NODE && child.tagName.toLowerCase() === element.tagName.toLowerCase()) {
      if (nthOfType === index) {
        return child;
      }
      nthOfType++;
    }
  }
  return null;
}

// Get the index of the element among siblings of the same type.
function getIndexOfType(element) {
  var index = 0;
  var child = void 0;
  while (child = element.previousElementSibling) {
    if (child.tagName === element.tagName) {
      index++;
    }
  }
  return index;
}

// A regexp to sanitize HTML tags and entities.
var reHtml = /[&<>]/g;
var htmlEntities = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};

function getDirection(code) {
  var tag = code.split('-')[0];
  return ['ar', 'he', 'fa', 'ps', 'ur'].indexOf(tag) >= 0 ? 'rtl' : 'ltr';
}

/**
 * The `DOMLocalization` class localizes DOM trees.
 */

var DOMLocalization = function (_Localization) {
  inherits(DOMLocalization, _Localization);

  /**
   * @param   {Function}             requestBundles
   * @param   {Function}             createContext
   * @param   {string}               name
   * @param   {DocumentLocalization} [observer]
   * @returns {DOMLocalization}
   */
  function DOMLocalization(requestBundles, createContext, name, observer) {
    classCallCheck(this, DOMLocalization);

    var _this = possibleConstructorReturn(this, (DOMLocalization.__proto__ || Object.getPrototypeOf(DOMLocalization)).call(this, requestBundles, createContext));

    _this.name = name;
    _this.query = '[data-l10n-with=' + name + ']';
    _this.roots = new Set();
    _this.observer = observer;
    return _this;
  }

  createClass(DOMLocalization, [{
    key: 'handleEvent',
    value: function handleEvent() {
      return this.requestLanguages();
    }

    /**
     * Trigger the language negotation process with an array of language codes.
     * Returns a promise with the negotiated array of language objects as above.
     *
     * ```javascript
     * localization.requestLanguages(['de-DE', 'de', 'en-US']);
     * ```
     *
     * @param   {Array<string>} requestedLangs - array of requested languages
     * @returns {Promise<Array<string>>}
     */

  }, {
    key: 'requestLanguages',
    value: function requestLanguages(requestedLangs) {
      var _this2 = this;

      get(DOMLocalization.prototype.__proto__ || Object.getPrototypeOf(DOMLocalization.prototype), 'requestLanguages', this).call(this, requestedLangs).then(function () {
        return _this2.translateRoots();
      });
    }

    /**
     * Set the `data-l10n-id` and `data-l10n-args` attributes on DOM elements.
     * L20n makes use of mutation observers to detect changes to `data-l10n-*`
     * attributes and translate elements asynchronously.  `setAttributes` is
     * a convenience method which allows to translate DOM elements declaratively.
     *
     * You should always prefer to use `data-l10n-id` on elements (statically in
     * HTML or dynamically via `setAttributes`) over manually retrieving
     * translations with `format`.  The use of attributes ensures that the
     * elements can be retranslated when the user changes their language
     * preferences.
     *
     * ```javascript
     * localization.setAttributes(
     *   document.querySelector('#welcome'), 'hello', { who: 'world' }
     * );
     * ```
     *
     * This will set the following attributes on the `#welcome` element.  L20n's
     * MutationObserver will pick up this change and will localize the element
     * asynchronously.
     *
     * ```html
     * <p id='welcome'
     *   data-l10n-id='hello'
     *   data-l10n-args='{"who": "world"}'>
     * </p>
     *
     * @param {Element}             element - Element to set attributes on
     * @param {string}                  id      - l10n-id string
     * @param {Object<string, string>} args    - KVP list of l10n arguments
     * ```
     */

  }, {
    key: 'setAttributes',
    value: function setAttributes(element, id, args) {
      element.setAttribute('data-l10n-id', id);
      if (args) {
        element.setAttribute('data-l10n-args', JSON.stringify(args));
      }
      return element;
    }

    /**
     * Get the `data-l10n-*` attributes from DOM elements.
     *
     * ```javascript
     * localization.getAttributes(
     *   document.querySelector('#welcome')
     * );
     * // -> { id: 'hello', args: { who: 'world' } }
     * ```
     *
     * @param   {Element}  element - HTML element
     * @returns {{id: string, args: Object}}
     */

  }, {
    key: 'getAttributes',
    value: function getAttributes(element) {
      return {
        id: element.getAttribute('data-l10n-id'),
        args: JSON.parse(element.getAttribute('data-l10n-args'))
      };
    }

    /**
     * Add `root` to the list of roots managed by this `DOMLocalization`.
     *
     * Additionally, if this `DOMLocalization` has an observer, start observing
     * `root` in order to translate mutations in it.
     *
     * @param {Element}      root - Root to observe.
     */

  }, {
    key: 'connectRoot',
    value: function connectRoot(root) {
      this.roots.add(root);

      if (this.observer) {
        this.observer.observeRoot(root);
      }
    }

    /**
     * Remove `root` from the list of roots managed by this `DOMLocalization`.
     *
     * Additionally, if this `DOMLocalization` has an observer, stop observing
     * `root`.
     *
     * Returns `true` if the root was the last one managed by this
     * `DOMLocalization`.
     *
     * @param   {Element} root - Root to disconnect.
     * @returns {boolean}
     */

  }, {
    key: 'disconnectRoot',
    value: function disconnectRoot(root) {
      this.roots.delete(root);

      if (this.observer) {
        this.observer.unobserveRoot(root);
      }

      return this.roots.size === 0;
    }

    /**
     * Translate all roots associated with this `DOMLocalization`.
     *
     * @returns {Promise}
     */

  }, {
    key: 'translateRoots',
    value: function translateRoots() {
      var _this3 = this;

      var roots = Array.from(this.roots);
      return Promise.all(roots.map(function (root) {
        return _this3.translateRoot(root);
      }));
    }

    /**
     * Translate `root`.
     *
     * This is similar to `translateFragment` but it will also set the `lang` and
     * `dir` attribute on `root`.  In XUL documents, the anonymous content
     * attached to `root` will also be translated.
     *
     * @returns {Promise}
     */

  }, {
    key: 'translateRoot',
    value: function translateRoot(root) {
      var _this4 = this;

      return this.translateRootContent(root).then(function () {
        return _this4.interactive;
      }).then(function (bundles) {
        var langs = bundles.map(function (bundle) {
          return bundle.lang;
        });
        var wasLocalizedBefore = root.hasAttribute('langs');

        root.setAttribute('langs', langs.join(' '));
        root.setAttribute('lang', langs[0]);
        root.setAttribute('dir', getDirection(langs[0]));

        if (wasLocalizedBefore) {
          root.dispatchEvent(new CustomEvent('DOMRetranslated', {
            bubbles: false,
            cancelable: false
          }));
        }
      });
    }
  }, {
    key: 'translateRootContent',
    value: function translateRootContent(root) {
      var _this5 = this;

      var anonChildren = document.getAnonymousNodes ? document.getAnonymousNodes(root) : null;
      if (!anonChildren) {
        return this.translateFragment(root);
      }

      return Promise.all([root].concat(toConsumableArray(anonChildren)).map(function (node) {
        return _this5.translateFragment(node);
      }));
    }

    /**
     * Translate a DOM element or fragment asynchronously.
     *
     * Manually trigger the translation (or re-translation) of a DOM fragment.
     * Use the `data-l10n-id` and `data-l10n-args` attributes to mark up the DOM
     * with information about which translations to use.  Only elements with
     * `data-l10n-with` attribute matching this `DOMLocalization`'s name will be
     * translated.
     *
     * Returns a `Promise` that gets resolved once the translation is complete.
     *
     * @param   {DOMFragment} frag - DOMFragment to be translated
     * @returns {Promise}
     */

  }, {
    key: 'translateFragment',
    value: function translateFragment(frag) {
      return this.translateElements(this.getTranslatables(frag));
    }
  }, {
    key: 'translateElements',
    value: function translateElements(elements) {
      var _this6 = this;

      if (!elements.length) {
        return Promise.resolve([]);
      }

      var keys = elements.map(this.getKeysForElement);
      return this.formatEntities(keys).then(function (translations) {
        return _this6.applyTranslations(elements, translations);
      });
    }

    /**
     * Translate a single DOM element asynchronously.
     *
     * The element's `data-l10n-with` must match this `DOMLocalization`'s name.
     *
     * Returns a `Promise` that gets resolved once the translation is complete.
     *
     * @param   {Element} element - HTML element to be translated
     * @returns {Promise}
     */

  }, {
    key: 'translateElement',
    value: function translateElement(element) {
      var _this7 = this;

      return this.formatEntities([this.getKeysForElement(element)]).then(function (translations) {
        return _this7.applyTranslations([element], translations);
      });
    }
  }, {
    key: 'applyTranslations',
    value: function applyTranslations(elements, translations) {
      if (this.observer) {
        this.observer.pauseObserving();
      }

      for (var i = 0; i < elements.length; i++) {
        overlayElement(elements[i], translations[i]);
      }

      if (this.observer) {
        this.observer.resumeObserving();
      }
    }
  }, {
    key: 'getTranslatables',
    value: function getTranslatables(element) {
      var nodes = Array.from(element.querySelectorAll(this.query));

      if (typeof element.hasAttribute === 'function' && element.hasAttribute('data-l10n-id')) {
        var elemBundleName = element.getAttribute('data-l10n-with');
        if (elemBundleName === this.name) {
          nodes.push(element);
        }
      }

      return nodes;
    }
  }, {
    key: 'getKeysForElement',
    value: function getKeysForElement(element) {
      return [element.getAttribute('data-l10n-id'),
      // In XUL documents missing attributes return `''` here which breaks
      // JSON.parse.  HTML documents return `null`.
      JSON.parse(element.getAttribute('data-l10n-args') || null)];
    }

    /**
     * Sanitize arguments.
     *
     * Escape HTML tags and entities in string-typed arguments.
     *
     * @param   {Object} args
     * @returns {Object}
     * @private
     */

  }, {
    key: 'sanitizeArgs',
    value: function sanitizeArgs(args) {
      for (var name in args) {
        var arg = args[name];
        if (typeof arg === 'string') {
          args[name] = arg.replace(reHtml, function (match) {
            return htmlEntities[match];
          });
        }
      }
      return args;
    }
  }]);
  return DOMLocalization;
}(Localization);

/**
 * The `DocumentLocalization` class localizes DOM documents.
 *
 * A sublcass of `DOMLocalization`, it implements methods for observing DOM
 * trees with a `MutationObserver`.  It can delegate the translation of DOM
 * elements marked with `data-l10n-with` to other named `DOMLocalizations`.
 *
 * Each `document` will have its corresponding `DocumentLocalization` instance
 * created automatically on startup, as `document.l10n`.
 */

var DocumentLocalization = function (_DOMLocalization) {
  inherits(DocumentLocalization, _DOMLocalization);

  /**
   * @returns {DocumentLocalization}
   */
  function DocumentLocalization(requestBundles, createContext) {
    classCallCheck(this, DocumentLocalization);

    // Localize elements with no explicit `data-l10n-with` too.
    var _this = possibleConstructorReturn(this, (DocumentLocalization.__proto__ || Object.getPrototypeOf(DocumentLocalization)).call(this, requestBundles, createContext, 'main'));
    // There can be only one `DocumentLocalization` per document and it's
    // always called 'main'.


    _this.query = '[data-l10n-with="main"], [data-l10n-id]:not([data-l10n-with])';

    // A map of named delegate `DOMLocalization` objects.
    _this.delegates = new Map();

    // Used by `DOMLocalization` when connecting/disconnecting roots and for
    // pausing the `MutationObserver` when translations are applied to the DOM.
    // `DocumentLocalization` is its own observer because it implements
    // `observeRoot`, `unobserveRoot`, `pauseObserving` and `resumeObserving`.
    _this.observer = _this;

    // A Set of DOM trees observed by the `MutationObserver`.
    _this.observedRoots = new Set();
    _this.mutationObserver = new MutationObserver(function (mutations) {
      return _this.translateMutations(mutations);
    });

    _this.observerConfig = {
      attributes: true,
      characterData: false,
      childList: true,
      subtree: true,
      attributeFilter: ['data-l10n-id', 'data-l10n-args', 'data-l10n-with']
    };
    return _this;
  }

  /**
   * Trigger the language negotation process for this `DocumentLocalization`
   * and any `DOMLocalization` objects which it can delegate to.
   *
   * Returns a promise which resolves to an array of arrays of negotiated
   * languages for each `Localization` available in the current document.
   *
   * ```javascript
   * document.l10n.requestLanguages(['de-DE', 'de', 'en-US']);
   * ```
   *
   * @param   {Array<string>} requestedLangs - array of requested languages
   * @returns {Promise<Array<Array<string>>>}
   */


  createClass(DocumentLocalization, [{
    key: 'requestLanguages',
    value: function requestLanguages(requestedLangs) {
      var _this2 = this;

      var requests = [get(DocumentLocalization.prototype.__proto__ || Object.getPrototypeOf(DocumentLocalization.prototype), 'requestLanguages', this).call(this, requestedLangs)].concat(Array.from(this.delegates.values(), function (delegate) {
        return delegate.requestLanguages(requestedLangs);
      }));

      return Promise.all(requests).then(function () {
        return _this2.translateDocument();
      });
    }

    /**
     * Starting observing `root` with the `MutationObserver`.
     *
     * @private
     */

  }, {
    key: 'observeRoot',
    value: function observeRoot(root) {
      this.observedRoots.add(root);
      this.mutationObserver.observe(root, this.observerConfig);
    }

    /**
     * Stop observing `root` with the `MutationObserver`.
     *
     * @private
     */

  }, {
    key: 'unobserveRoot',
    value: function unobserveRoot(root) {
      this.observedRoots.delete(root);
      // Pause and resume the mutation observer to stop observing `root`.
      this.pauseObserving();
      this.resumeObserving();
    }

    /**
     * Pauses the `MutationObserver`.
     *
     * @private
     */

  }, {
    key: 'pauseObserving',
    value: function pauseObserving() {
      this.mutationObserver.disconnect();
    }

    /**
     * Resumes the `MutationObserver`.
     *
     * @private
     */

  }, {
    key: 'resumeObserving',
    value: function resumeObserving() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.observedRoots[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var root = _step.value;

          this.mutationObserver.observe(root, this.observerConfig);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    /**
     * Translate mutations detected by the `MutationObserver`.
     *
     * The elements in the mutations can use `data-l10n-with` to specify which
     * `DOMLocalization` should be used for translating them.
     *
     * @private
     */

  }, {
    key: 'translateMutations',
    value: function translateMutations(mutations) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = mutations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var mutation = _step2.value;

          switch (mutation.type) {
            case 'attributes':
              this.translateElement(mutation.target);
              break;
            case 'childList':
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = mutation.addedNodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var addedNode = _step3.value;

                  if (addedNode.nodeType === addedNode.ELEMENT_NODE) {
                    if (addedNode.childElementCount) {
                      this.translateFragment(addedNode);
                    } else if (addedNode.hasAttribute('data-l10n-id')) {
                      this.translateElement(addedNode);
                    }
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }

              break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }

    /**
     * Triggers translation of all roots associated with this
     * `DocumentLocalization` and any `DOMLocalization` objects which it can
     * delegate to.
     *
     * Returns a `Promise` which is resolved once all translations are
     * completed.
     *
     * @returns {Promise}
     */

  }, {
    key: 'translateDocument',
    value: function translateDocument() {
      var localizations = [this].concat(toConsumableArray(this.delegates.values()));
      return Promise.all(localizations.map(function (l10n) {
        return l10n.translateRoots();
      }));
    }

    /**
     * Translate a DOM element or fragment asynchronously using this
     * `DocumentLocalization` and any `DOMLocalization` objects which it can
     * delegate to.
     *
     * Manually trigger the translation (or re-translation) of a DOM fragment.
     * Use the `data-l10n-id` and `data-l10n-args` attributes to mark up the DOM
     * with information about which translations to use.  Only elements with
     * `data-l10n-with` attribute matching this `DOMLocalization`'s name will be
     * translated.
     *
     * If `frag` or its descendants use `data-l10n-with`, the specific named
     * `DOMLocalization` will be used to translate it.  As a special case,
     * elements without `data-l10n-with` will be localized using this
     * `DocumentLocalization` (as if they had `data-l10n-with="main"`).
     *
     * Returns a `Promise` that gets resolved once the translation is complete.
     *
     * @param   {DOMFragment} frag - Element or DocumentFragment to be translated
     * @returns {Promise}
     */

  }, {
    key: 'translateFragment',
    value: function translateFragment(frag) {
      var requests = [get(DocumentLocalization.prototype.__proto__ || Object.getPrototypeOf(DocumentLocalization.prototype), 'translateFragment', this).call(this, frag)].concat(Array.from(this.delegates.values(), function (delegate) {
        return delegate.translateFragment(frag);
      }));

      return Promise.all(requests);
    }

    /**
     * Translate a single DOM element asynchronously using this
     * `DocumentLocalization` or any `DOMLocalization` objects which it can
     * delegate to.
     *
     * If `element` uses `data-l10n-with`, the specific named `DOMLocalization`
     * will be used to translate it.  As a special case, an element without
     * `data-l10n-with` will be localized using this `DocumentLocalization` (as
     * if it had `data-l10n-with="main"`).
     *
     * Returns a `Promise` that gets resolved once the translation is complete.
     *
     * @param   {Element} element - HTML element to be translated
     * @returns {Promise}
     */

  }, {
    key: 'translateElement',
    value: function translateElement(element) {
      var name = element.getAttribute('data-l10n-with');

      var l10n = void 0;
      if (!name || name === 'main') {
        l10n = this;
      } else if (this.delegates.has(name)) {
        l10n = this.delegates.get(name);
      } else {
        var err = new L10nError('Unknown Localization: ' + name + '.');
        return Promise.reject(err);
      }

      return l10n.formatEntities([l10n.getKeysForElement(element)]).then(function (translations) {
        return l10n.applyTranslations([element], translations);
      });
    }
  }, {
    key: 'getTranslatables',
    value: function getTranslatables(element) {
      var nodes = Array.from(element.querySelectorAll(this.query));

      if (typeof element.hasAttribute === 'function' && element.hasAttribute('data-l10n-id')) {
        var elemBundleName = element.getAttribute('data-l10n-with');
        if (!elemBundleName || elemBundleName === this.name) {
          nodes.push(element);
        }
      }

      return nodes;
    }
  }]);
  return DocumentLocalization;
}(DOMLocalization);

var HTTP_STATUS_CODE_OK = 200;

function load(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    if (xhr.overrideMimeType) {
      xhr.overrideMimeType('text/plain');
    }

    xhr.open('GET', url, true);

    xhr.addEventListener('load', function (e) {
      if (e.target.status === HTTP_STATUS_CODE_OK || e.target.status === 0) {
        resolve(e.target.responseText);
      } else {
        reject(new Error(url + ' not found'));
      }
    });

    xhr.addEventListener('error', function () {
      return reject(new Error(url + ' failed to load'));
    });
    xhr.addEventListener('timeout', function () {
      return reject(new Error(url + ' timed out'));
    });

    xhr.send(null);
  });
}

function fetchResource(res, lang) {
  var url = res.replace('{locale}', lang);
  return load(url).catch(function () {
    return null;
  });
}

var ResourceBundle = function () {
  function ResourceBundle(lang, resIds) {
    classCallCheck(this, ResourceBundle);

    this.lang = lang;
    this.loaded = false;
    this.resIds = resIds;
  }

  createClass(ResourceBundle, [{
    key: 'fetch',
    value: function fetch() {
      var _this = this;

      if (!this.loaded) {
        this.loaded = Promise.all(this.resIds.map(function (resId) {
          return fetchResource(resId, _this.lang);
        }));
      }

      return this.loaded;
    }
  }]);
  return ResourceBundle;
}();

// A document.ready shim
// https://github.com/whatwg/html/issues/127
function documentReady() {
  var rs = document.readyState;
  if (rs === 'interactive' || rs === 'completed') {
    return Promise.resolve();
  }

  return new Promise(function (resolve) {
    return document.addEventListener('readystatechange', resolve, { once: true });
  });
}

function getResourceLinks(elem) {
  return Array.prototype.map.call(elem.querySelectorAll('link[rel="localization"]'), function (el) {
    return [el.getAttribute('href'), el.getAttribute('name') || 'main'];
  }).reduce(function (seq, _ref) {
    var _ref2 = slicedToArray(_ref, 2),
        href = _ref2[0],
        name = _ref2[1];

    return seq.set(name, (seq.get(name) || []).concat(href));
  }, new Map());
}

function getMeta(head) {
  var availableLangs = [];
  var defaultLang = null;
  var appVersion = null;

  // XXX take last found instead of first?
  var metas = Array.from(head.querySelectorAll('meta[name="availableLanguages"],' + 'meta[name="defaultLanguage"],' + 'meta[name="appVersion"]'));
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = metas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var meta = _step.value;

      var name = meta.getAttribute('name');
      var content = meta.getAttribute('content').trim();
      switch (name) {
        case 'availableLanguages':
          availableLangs = content.split(',').map(function (lang) {
            return lang.trim();
          });
          break;
        case 'defaultLanguage':
          defaultLang = content;
          break;
        case 'appVersion':
          appVersion = content;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return {
    defaultLang: defaultLang,
    availableLangs: availableLangs,
    appVersion: appVersion
  };
}

// This function is provided to the constructor of `Localization` object and is
// used to create new `MessageContext` objects for a given `lang` with selected
// builtin functions.
function createContext(lang) {
  return new MessageContext(lang);
}

// Called for every named Localization declared via <link name=…> elements.
function createLocalization(defaultLocale, availableLangs, resIds, name) {
  // This function is called by `Localization` class to retrieve an array of
  // `ResourceBundle`s.
  function requestBundles() {
    var requestedLangs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.languages;

    var newLangs = negotiateLanguages(requestedLangs, availableLangs, { defaultLocale: defaultLocale });

    var bundles = newLangs.map(function (lang) {
      return new ResourceBundle(lang, resIds);
    });

    return Promise.resolve(bundles);
  }

  if (name === 'main') {
    document.l10n = new DocumentLocalization(requestBundles, createContext);
    document.l10n.ready = documentReady().then(function () {
      document.l10n.connectRoot(document.documentElement);
      return document.l10n.translateDocument();
    }).then(function () {
      window.addEventListener('languagechange', document.l10n);
    });
  } else {
    // Pass the main Localization, `document.l10n`, as the observer.
    var l10n = new DOMLocalization(requestBundles, createContext, name, document.l10n);
    // Add this Localization as a delegate of the main one.
    document.l10n.delegates.set(name, l10n);
  }
}

var _getMeta = getMeta(document.head);
var defaultLang = _getMeta.defaultLang;
var availableLangs = _getMeta.availableLangs;

// Collect all l10n resource links and create `Localization` objects. The
// 'main' Localization must be declared as the first one.


getResourceLinks(document.head).forEach(function (resIds, name) {
  return createLocalization(defaultLang, availableLangs, resIds, name);
});

}());
