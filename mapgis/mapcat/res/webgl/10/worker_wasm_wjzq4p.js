function aa() {
    this.j = {}
}
var ca;
ca = "undefined" !== typeof window ? window : self;
function fa(b) {
    var a = ha;
    a.j[b] = a.w()
}
function ka(b, a) {
    var c = ha;
    return parseFloat((c.j[a] - c.j[b]).toFixed(2))
}
aa.prototype.w = ca.performance && ca.performance.now ? function() {
    return performance.now()
}
: function() {
    return Date.now()
}
;
var ra, sa, ta, Aa, Ba, Ca, y, Ga, Ha, Ia, Ja, Ka, La, Ma, Va, Wa, Xa, Ya;
ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = function(b, a) {
    void 0 === b && (b = 0);
    void 0 === a && (a = this.byteLength);
    b = Math.floor(b);
    a = Math.floor(a);
    0 > b && (b += this.byteLength);
    0 > a && (a += this.byteLength);
    b = Math.min(Math.max(0, b), this.byteLength);
    a = Math.min(Math.max(0, a), this.byteLength);
    if (0 >= a - b)
        return new ArrayBuffer(0);
    var c = new ArrayBuffer(a - b)
      , q = new Uint8Array(c);
    b = new Uint8Array(this,b,a - b);
    q.set(b);
    return c
}
);
function Za(b, a) {
    var c = b.length;
    a = a || 2;
    Ya || (Ya = y._get_feature_points_address() >> 2);
    ta.set(b, Ya);
    y._parse_points(c, a);
    return new Float32Array(ra.slice(Ya << 2, Ya + c << 2))
}
function $a() {
    return y._get_block_vertex_count()
}
function ab() {
    La || (La = y._get_line_vertex_start());
    return new Float32Array(ra.slice(La, y._get_line_vertex_end()))
}
function ib() {
    Ka || (Ka = y._get_line_index_start());
    return new Uint16Array(ra.slice(Ka, y._get_line_index_end()))
}
function jb() {
    return y._get_line_vertex_count()
}
function kb(b, a, c, q, g, k, m, r, x, f, e) {
    var v = 0;
    q && (v = q.length,
    Ha || (Ha = y._get_line_altitudes_address() >> 1),
    Ba.set(q, Ha));
    r && r.length && (Ja || (Ja = y._get_line_turnings_address()),
    sa.set(r, Ja));
    g = g || 0;
    f = f || 0;
    e = e || m.length / 2;
    Ga || (Ga = y._get_line_data_address() >> 1);
    Ba.set(b, Ga);
    Ia || (Ia = y._get_line_points_address() >> 2);
    Aa.set(m, Ia);
    y._append_line_data(b.length, a[0], a[1], a[2], a[3], c, v, g, k ? 1 : 0, m.length, x, f, e)
}
function lb() {
    y._reset_line()
}
function mb(b) {
    if (ra)
        b && b();
    else {
        var a = nb();
        var c = new WebAssembly.Memory({
            initial: 70,
            maximum: 70
        });
        WebAssembly.instantiate(a, {
            env: {
                DYNAMICTOP_PTR: 0,
                tempDoublePtr: 0,
                ABORT: 0,
                STACKTOP: 0,
                STACK_MAX: 0,
                gb: 0,
                fb: 0,
                memory: c
            },
            global: {
                NaN: NaN,
                Infinity: Infinity
            }
        }).then(function(a) {
            ra = c.buffer;
            ta = new Float32Array(ra);
            Aa = new Int32Array(ra);
            sa = new Int8Array(ra);
            Ba = new Int16Array(ra);
            Ca = new Uint16Array(ra);
            y = a.instance.exports;
            b && b()
        })
    }
}
function ob(b, a, c, q, g) {
    var k = {
        fixedLabel: [],
        lineLabel: []
    };
    if (!b)
        return k;
    var m = [];
    if (a && a.length)
        for (var r = 0; r < a.length; r++) {
            var x = a[r]
              , f = x[0] / 4;
            H[f + 1] === pb && m.push(Q(H[f] + 1, x[0], x[0] + x[1]))
        }
    a = Q(0, c[0], c[0] + c[1]) || [];
    q = q.height;
    k.fixedLabel = qb(b, m, q, g, void 0);
    m = [];
    for (c = 0; c < a.length; c++) {
        var e = b
          , v = a[c];
        r = g;
        x = q;
        f = m;
        var d = v[0] / 4
          , w = Q(H[d] + 1, v[0], v[0] + v[1])
          , u = Q(0, w[6][0], w[6][0] + w[6][1]);
        v = [];
        for (var l = 0; l < u.length; l++)
            v[l] = new Uint16Array(e,u[l][0],u[l][1] / 2);
        u = rb;
        var p = Math.pow(2, 18 - r.zoom)
          , n = r.col * r.baseTileSize * p
          , h = r.row * r.baseTileSize * p
          , E = new Uint16Array(e,w[4][0],w[4][1] / 2)
          , t = E.length
          , A = sb[d + 1]
          , C = tb.b(ub, A, "pointText", r.useZoom, vb, !1, T);
        d = sb[d + 2];
        var B = wb(e, w[0][0], w[0][1], "utf-8")
          , z = v.length || B.split("").length;
        if (0 !== z) {
            var F = new Int32Array(e,w[1][0],w[1][1] / 4)
              , G = new Int16Array(e,w[5][0],w[5][1] / 2)
              , R = [G[0]]
              , V = Array.prototype.slice.call(F.slice(0, 2))
              , K = 2;
            for (l = 1; K < F.length; K += 2,
            l++)
                V[K] = V[K - 2] + F[K],
                V[K + 1] = V[K - 1] + F[K + 1],
                1 === G.length ? R[l] = G[0] : 1 < G.length && (R[l] = R[l - 1] + G[l]);
            var M = new Uint16Array(e,w[3][0],w[3][1] / 2);
            e = new Uint16Array(e,w[2][0],w[2][1] / 2);
            for (l = 0; l < t; l++)
                if (w = E[l],
                xb(w, r.useZoom)) {
                    if (r.processedLabelZooms && r.processedLabelZooms.length && !T) {
                        F = r.processedLabelZooms;
                        var W = !1;
                        for (K = 0; K < F.length; K++)
                            if (xb(w, F[K])) {
                                W = !0;
                                break
                            }
                        if (W)
                            continue
                    }
                    K = M[l];
                    F = l * z * 2;
                    F = V.slice(F, F + 2 * z);
                    var Y = W = 1E3
                      , X = -1E3
                      , O = -1E3
                      , J = v.slice(0);
                    K && J.reverse();
                    for (var L, U, P, N = [], D = 0; D < z; D++) {
                        var I = e[z * l + D]
                          , Z = F[2 * D] / 100
                          , da = F[2 * D + 1] / 100
                          , Na = 0;
                        0 < G.length && (Na = R[l * z] / 100);
                        0 === D && (L = Z,
                        U = da,
                        P = {
                            lng: n + L,
                            lat: h + U
                        });
                        Z = (Z - L) / p;
                        da = (da - U) / p;
                        var S = J[D]
                          , ea = null
                          , ua = null;
                        if (S && 0 < S.length) {
                            var xa = S[0];
                            ea = S[1];
                            var ia = S[2] / u;
                            S = S[3] / u;
                            ua = [ia, S];
                            var la = xa / 512
                              , ma = (x - ea - S * u) / x
                              , Oa = xa = (xa + ia * u) / 512;
                            ea = (x - ea) / x;
                            ea = [la, ma, xa, ma, Oa, ea, la, ma, Oa, ea, la, ea];
                            la = Z - ia / 2;
                            ma = da + S / 2;
                            S = da - S / 2;
                            ia = Z + ia / 2;
                            la < W && (W = la);
                            ia > X && (X = ia);
                            S < Y && (Y = S);
                            ma > O && (O = ma)
                        }
                        N.push({
                            offset: [Z, da],
                            z: Na,
                            size: ua,
                            angle: I,
                            texcoord: ea
                        })
                    }
                    J = F[2 * (z - 1)] - F[0];
                    F = F[2 * (z - 1) + 1] - F[1];
                    1 === K && (J = -J,
                    F = -F);
                    0 === J ? F = 0 < F ? 90 : 270 : (D = Math.atan(F / J) / Math.PI * 180,
                    0 > J && 0 < F ? D += 180 : 0 > J && 0 > F ? D += 180 : 0 < J && 0 > F && (D += 360),
                    360 === D && (D = 0),
                    F = D);
                    f.push({
                        type: "line",
                        rank: d,
                        name: B,
                        wordCount: z,
                        pt: P,
                        mcInTile: {
                            x: L,
                            y: U
                        },
                        reverse: K,
                        styleId: A,
                        styleText: C,
                        bds: [W, Y, X, O],
                        wordsInfo: N,
                        labelAngle: F,
                        tracer: w,
                        processedInZoom: r.useZoom,
                        key: "line_" + d + "_" + P.lng + "_" + P.lat
                    })
                }
        }
    }
    k.lineLabel = m;
    k.textureHeight = q;
    k.tileInfo = g;
    return k
}
function qb(b, a, c, q, g) {
    for (var k = [], m = 0; m < a.length; m++) {
        var r = b
          , x = a[m]
          , f = q
          , e = c
          , v = k
          , d = g;
        if (x && x.length) {
            d = d || vb;
            var w = f.useZoom;
            9 === w && (w = 8);
            for (var u = Math.pow(2, 18 - f.zoom), l = f.col * f.baseTileSize * u, p = f.row * f.baseTileSize * u, n = f.col, h, E = n, t = 1536 * Math.pow(2, f.zoom - 3) / (f.baseTileSize || 256), A = t / 2 - 1, C = -t / 2; E > A; )
                E -= t;
            for (; E < C; )
                E += t;
            h = E;
            var B = l;
            h > n ? B = l - 40075452 : h < n && (B = l + 40075452);
            for (var z = 0; z < x.length; z++) {
                var F = x[z]
                  , G = F[0] / 4
                  , R = H[G]
                  , V = H[G + 1]
                  , K = tb.b(ub, V, "point", w, d, !1, T)
                  , M = tb.b(ub, V, "pointText", w, d, !1, T)
                  , W = Q(R + 1, F[0], F[0] + F[1]);
                if (!(M && 0 !== M.length || K && 0 !== K.length))
                    if (5 === w) {
                        if (!W || !W.length)
                            continue;
                        for (var Y = 0; Y < W.length; Y++) {
                            var X = W[Y], O = X[0] / 4, J = H[O], L = Q(J + 1, X[0], X[0] + X[1]), U;
                            X[1] && L[1][1] && (U = wb(r, L[1][0], L[1][1], "utf-8"));
                            if ("\u5317\u4eac" === U) {
                                K = tb.b(ub, V, "point", 6, d, !1, T);
                                M = tb.b(ub, V, "pointText", 6, d, !1, T);
                                break
                            }
                        }
                    } else
                        continue;
                if (W) {
                    var P = null
                      , N = 1
                      , D = 0
                      , I = 0;
                    K && K[0] && (K = K[0],
                    P = K.icon,
                    N = (K.zoom || 100) / 100);
                    for (Y = 0; Y < W.length; Y++)
                        if (X = W[Y],
                        O = X[0] / 4,
                        J = H[O],
                        L = Q(J + 1, X[0], X[0] + X[1]),
                        X[1]) {
                            var Z = H[O + 1];
                            if (xb(Z, f.useZoom)) {
                                if (f.processedLabelZooms && f.processedLabelZooms.length && !T) {
                                    for (var da = f.processedLabelZooms, Na = !1, S = 0; S < da.length; S++)
                                        if (xb(Z, da[S])) {
                                            Na = !0;
                                            break
                                        }
                                    if (Na)
                                        continue
                                }
                                var ea = Q(0, L[2][0], L[2][0] + L[2][1])
                                  , ua = [];
                                for (S = 0; S < ea.length; S++)
                                    ua[S] = new Uint16Array(r,ea[S][0],ea[S][1]);
                                var xa = void 0;
                                L[1][1] && (xa = wb(r, L[1][0], L[1][1], "utf-8"));
                                var ia = xa || "";
                                if (!(M && 0 < M.length && 0 === ua.length && "" === ia)) {
                                    var la = H[O + 2]
                                      , ma = H[O + 3]
                                      , Oa = H[O + 4]
                                      , dc = Math.round(la / 100)
                                      , ec = Math.round(ma / 100)
                                      , zb = {
                                        lng: l + dc,
                                        lat: p + ec
                                    }
                                      , Hc = {
                                        lng: B + dc,
                                        lat: p + ec
                                    }
                                      , fc = void 0;
                                    L[0][1] && (fc = wb(r, L[0][0], L[0][1], void 0));
                                    var Ab = H[O + 5]
                                      , gc = 0 < ua.length || "" !== ia && 0 < M.length
                                      , Bb = yb(P)
                                      , ic = !(4 !== Ab || !gc || !Bb)
                                      , Ic = !!ia.match(/[qypjg]/g)
                                      , Jc = fc || ""
                                      , Kc = zb
                                      , Lc = Hc
                                      , Mc = ia
                                      , Nc = Ic
                                      , Oc = Oa
                                      , Pc = V
                                      , Qc = M
                                      , Rc = P
                                      , Sc = ic
                                      , Tc = Ab
                                      , Uc = x.R;
                                    a: {
                                        var va = void 0
                                          , bb = Z
                                          , jc = f.useZoom;
                                        Cb[bb] || (va = bb.toString(2),
                                        8 > va.length && (va = Array(8 - va.length + 1).join("0") + va),
                                        Cb[bb] = va);
                                        va = Cb[bb];
                                        for (var kc = Rb[jc].start, Vc = Rb[jc].end - kc + 1, cb = 0; cb < Vc; cb++)
                                            if ("1" === va[cb]) {
                                                var lc = cb + kc;
                                                break a
                                            }
                                        lc = 99
                                    }
                                    var ba = {
                                        type: "fixed",
                                        guid: Jc,
                                        pt: Kc,
                                        ptFix: Lc,
                                        name: Mc,
                                        containDescendings: Nc,
                                        rank: Oc,
                                        iconPos: null,
                                        textPos: null,
                                        styleId: Pc,
                                        styleText: Qc,
                                        icon: Rc,
                                        textOnIcon: Sc,
                                        direction: Tc,
                                        onDefaultFloor: Uc,
                                        startZoom: lc || 99,
                                        tilePosStr: la + "," + ma,
                                        tracer: Z,
                                        processedInZoom: f.useZoom,
                                        key: "fixed_" + Oa + "_" + zb.lng + "_" + zb.lat
                                    };
                                    if (null === P || ic)
                                        null !== P && (ba.iconSize = Bb);
                                    else {
                                        var Db = yb(P);
                                        if (Db) {
                                            var Eb = Db[0] / 2 * N
                                              , Fb = Db[1] / 2 * N
                                              , db = Math.round(-Eb / 2)
                                              , eb = Math.round(-Fb / 2)
                                              , Gb = db + Eb
                                              , Hb = eb + Fb;
                                            var mc = {
                                                vertex: [db, eb, Gb, eb, Gb, Hb, db, eb, Gb, Hb, db, Hb],
                                                texcoord: null,
                                                width: Eb,
                                                height: Fb,
                                                iconType: P
                                            }
                                        } else
                                            mc = null;
                                        ba.iconPos = mc;
                                        ba.iconPos && (D = ba.iconPos.width,
                                        I = ba.iconPos.height)
                                    }
                                    if (ua.length) {
                                        var Wc = ba
                                          , fb = Ab
                                          , Ib = ua
                                          , Jb = D
                                          , nc = I
                                          , gb = e
                                          , Pa = rb;
                                        "number" !== typeof fb && (fb = 0);
                                        for (var Da = Ib.length, oc = [], pc = [], Ea = 0, Qa = 0, ja = 0; ja < Da; ja++)
                                            Qa += Math.round(Ib[ja][3] / Pa);
                                        for (ja = 0; ja < Da; ja++) {
                                            var hb = Ib[ja]
                                              , qc = hb[0]
                                              , rc = hb[1]
                                              , Fa = Math.round(hb[2] / Pa)
                                              , ya = Math.round(hb[3] / Pa);
                                            0 === Jb && (fb = 4);
                                            switch (fb) {
                                            case 3:
                                                var na = Qa / 2 - ya + 2 * (Da - 1) / 2;
                                                var wa = Math.round(-Jb / 2 - Fa - 2);
                                                var za = Math.round(na - Ea - 2 * ja);
                                                break;
                                            case 1:
                                                na = Qa / 2 - ya + 2 * (Da - 1) / 2;
                                                wa = Math.round(Jb / 2 + 2);
                                                za = Math.round(na - Ea - 2 * ja);
                                                break;
                                            case 2:
                                                na = nc / 2 + Qa - ya + 2 * Da;
                                                wa = Math.round(-Fa / 2);
                                                za = Math.round(na - Ea - 2 * ja);
                                                break;
                                            case 0:
                                                na = -nc / 2 - 2 - ya;
                                                wa = Math.round(-Fa / 2);
                                                za = Math.round(na - Ea - 2 * ja);
                                                break;
                                            case 4:
                                                na = -Qa / 2 - 2 * (Da - 1) / 2,
                                                wa = Math.round(-Fa / 2),
                                                za = Math.round(na - Ea - 2 * ja)
                                            }
                                            Ea += ya;
                                            var sc = wa + Math.round(Fa)
                                              , tc = za
                                              , uc = sc
                                              , Kb = tc + Math.round(ya)
                                              , Lb = qc / 512
                                              , Mb = (gb - rc - ya * Pa) / gb
                                              , vc = (qc + Fa * Pa) / 512
                                              , Xc = Mb
                                              , wc = vc
                                              , Nb = (gb - rc) / gb
                                              , Yc = Lb
                                              , Zc = Nb;
                                            oc.push(wa, za, sc, tc, uc, Kb, wa, za, uc, Kb, wa, Kb);
                                            pc.push(Lb, Mb, vc, Xc, wc, Nb, Lb, Mb, wc, Nb, Yc, Zc)
                                        }
                                        Wc.textPos = {
                                            vertex: oc,
                                            texcoord: pc
                                        }
                                    }
                                    if (ba.textPos || ba.iconPos) {
                                        var Ra = 1E3
                                          , Sa = 1E3
                                          , Ta = -1E3
                                          , Ua = -1E3;
                                        if (ba.iconPos)
                                            for (var Ob = ba.iconPos.vertex, oa = 0, Pb = Ob.length; oa < Pb; oa += 2) {
                                                var pa = Ob[oa]
                                                  , qa = Ob[oa + 1];
                                                pa < Ra && (Ra = pa);
                                                pa > Ta && (Ta = pa);
                                                qa < Sa && (Sa = qa);
                                                qa > Ua && (Ua = qa)
                                            }
                                        if (ba.textPos) {
                                            var Qb = ba.textPos.vertex;
                                            oa = 0;
                                            for (Pb = Qb.length; oa < Pb; oa += 2)
                                                pa = Qb[oa],
                                                qa = Qb[oa + 1],
                                                pa < Ra && (Ra = pa),
                                                pa > Ta && (Ta = pa),
                                                qa < Sa && (Sa = qa),
                                                qa > Ua && (Ua = qa)
                                        }
                                        ba.bds = [Ra, Sa, Ta, Ua]
                                    }
                                    (Bb || gc) && v.push(ba)
                                }
                            }
                        }
                }
            }
        }
    }
    return k
}
function yb(b) {
    if (!b || "disekong" === b)
        return null;
    var a = Sb[b] || Sb["MapRes/" + b];
    !a && b && 48 <= b.charCodeAt(0) && 57 >= b.charCodeAt(0) && (a = Sb["_" + b]);
    return a
}
var Tb;
Tb = function(b, a, c, q) {
    var g, k;
    a = Q(0, a[0], a[0] + a[1]);
    if (!a.length)
        return {};
    for (var m = {}, r = [], x = [], f = [], e = [], v = 0; v < a.length; v++) {
        var d = Q(0, a[v][0], a[v][0] + a[v][1])
          , w = d[0];
        w = Q(0, w[0], w[0] + w[1]);
        d = d[1];
        var u = Q(H[d[0] >> 2] + 1, d[0], d[0] + d[1]);
        a: {
            var l = b;
            if ((g = Q(0, u[2][0], u[2][0] + u[2][1])) && g[0]) {
                for (var p = 0; p < g.length; p++) {
                    var n = g[p]
                      , h = n[0] >> 2;
                    h = H[h];
                    n = Q(h + 1, n[0], n[0] + n[1]);
                    if (!n[0][1]) {
                        l = [];
                        g = [0, 0];
                        var E = k = void 0;
                        break a
                    }
                }
                k = [];
                var t = [0, 0]
                  , A = [2.003772637E7, 1.102819087E7];
                d = [-2.003772637E7, -1.060158079E7];
                E = 0;
                p = c.mercatorSize;
                var C = c.col * p
                  , B = c.row * p;
                for (p = 0; p < g.length; p++) {
                    n = g[p];
                    h = n[0] >> 2;
                    h = H[h];
                    n = Q(h + 1, n[0], n[0] + n[1]);
                    n = new Int32Array(l,n[0][0],n[0][1] >> 2);
                    h = [C + n[0] / 100, B + n[1] / 100];
                    t[0] += h[0];
                    t[1] += h[1];
                    h[0] < A[0] && (A[0] = h[0]);
                    h[1] < A[1] && (A[1] = h[1]);
                    h[0] > d[0] && (d[0] = h[0]);
                    h[1] > d[1] && (d[1] = h[1]);
                    for (var z = 2; z < n.length; z += 2)
                        h[z] = h[z - 2] + n[z] / 100,
                        h[z + 1] = h[z - 1] + n[z + 1] / 100,
                        t[0] += h[z],
                        t[1] += h[z + 1],
                        h[z] < A[0] && (A[0] = h[z]),
                        h[z + 1] < A[1] && (A[1] = h[z + 1]),
                        h[z] > d[0] && (d[0] = h[z]),
                        h[z + 1] > d[1] && (d[1] = h[z + 1]);
                    E += n.length;
                    k.push(h)
                }
                t[0] /= E / 2;
                t[1] /= E / 2;
                l = k;
                g = t;
                k = A;
                E = d
            } else
                l = [],
                g = [0, 0],
                E = k = void 0
        }
        A = Q(0, u[3][0], u[3][0] + u[3][1]);
        d = [];
        for (t = 0; t < A.length; t++)
            d[t] = String.fromCharCode.apply(String, new Uint8Array(b,A[t][0],A[t][1]));
        C = String.fromCharCode.apply(String, new Uint8Array(b,u[1][0],u[1][1]));
        A = void 0;
        u = String.fromCharCode.apply(String, new Uint8Array(b,u[0][0],u[0][1]));
        for (t = 0; t < d.length; t++)
            if (d[t] === C) {
                A = t;
                break
            }
        l = {
            defaultFloor: A,
            currentFloor: A,
            uid: u,
            floors: [],
            contour: l,
            boundsMin: k,
            boundsMax: E,
            center: g,
            floorLength: d.length
        };
        for (t = 0; t < d.length; t++) {
            k = d[t];
            a: {
                g = b;
                E = w;
                C = k;
                for (p = 0; p < E.length; p++)
                    if (B = Q(H[E[p][0] >> 2] + 1, E[p][0], E[p][0] + E[p][1]),
                    String.fromCharCode.apply(String, new Uint8Array(g,B[0][0],B[0][1])) === C) {
                        C = B[1];
                        break a
                    }
                C = null
            }
            g = b;
            B = u;
            n = k;
            k = c;
            var F = q;
            E = t === A ? !0 : !1;
            if (C)
                if (C = Q(0, C[0], C[0] + C[1]),
                C.length) {
                    p = {
                        base: [],
                        contour: []
                    };
                    for (var G = 0; G < C.length; G++) {
                        h = C[G];
                        z = h[0] >> 2;
                        var R = H[z + 1];
                        7 === R && (F = Ub(g, h, k, p.contour, F, 1, {
                            v: !0,
                            M: !0
                        }))
                    }
                    for (G = 0; G < p.contour.length; G++)
                        p.contour[G].uid = B;
                    for (G = 0; G < C.length; G++)
                        h = C[G],
                        z = h[0] >> 2,
                        R = H[z + 1],
                        7 === R && (F = Ub(g, h, k, p.base, F, 2, {
                            v: !0
                        }));
                    for (G = 0; G < p.base.length; G++)
                        p.base[G].uid = B;
                    (h = Vb(g, C, k, !0)) && 0 !== h.vertex.length && (p.area3D = h,
                    p.area3D.uid = B,
                    p.area3D.border && (p.indoorBorder3D = p.area3D.border,
                    p.indoorBorder3D.uid = B,
                    delete p.area3D.border));
                    p.floorName = n;
                    B = [];
                    for (n = 0; n < C.length; n++)
                        h = C[n],
                        z = h[0] >> 2,
                        R = H[z + 1],
                        R === pb && (h = Q(H[z] + 1, h[0], h[0] + h[1]),
                        h.R = E,
                        B.push(h));
                    p.pois = qb(g, B, E ? H[2] : H[3], k, Wb);
                    g = p
                } else
                    g = {
                        floorName: n
                    };
            else
                g = {
                    floorName: n
                };
            l.floors[t] = g
        }
        m[u] = l;
        if (l.floors[A]) {
            if (l.floors[A].base)
                for (t = 0; t < l.floors[A].base.length; t++)
                    r.push(l.floors[A].base[t]);
            if (l.floors[A].contour)
                for (t = 0; t < l.floors[A].contour.length; t++)
                    x.push(l.floors[A].contour[t]);
            l.floors[A].indoorBorder3D && f.push(l.floors[A].indoorBorder3D);
            l.floors[A].area3D && e.push(l.floors[A].area3D)
        }
        m.tileInfo = c
    }
    0 === r.length && (r = null);
    0 === x.length && (x = null);
    0 === f.length && (f = null);
    0 === e.length && (e = null);
    return {
        indoorDataResult: m,
        indoorBase: r,
        indoorBaseContour: x,
        indoorArea3D: e,
        indoorBorder3D: f
    }
}
;
var tb = function() {
    function b(b, q, c, g, f) {
        if (g = g || null) {
            f = g[2];
            switch (q) {
            case "point":
                f = f[0];
                break;
            case "pointText":
                f = f[1];
                break;
            case "line":
                f = f[3];
                break;
            case "polygon":
                f = f[4];
                break;
            case "polygon3d":
                f = f[5]
            }
            var e = c - 1;
            "line" === q && 12 === c && (e = c);
            e = g[1][e][0];
            e = e[b];
            !e && 21 > c && ("point" === q || "pointText" === q) && (e = g[1][c][0],
            e = e[b]);
            c = {
                l: e,
                style: f,
                s: []
            }
        } else if (f) {
            g = f.baseFs;
            b: {
                var k = f.pa;
                if ("[object Object]" === Object.prototype.toString.call(k)) {
                    for (e in k) {
                        e = !1;
                        break b
                    }
                    e = !0
                } else
                    e = !1
            }
            f = e ? f.StyleBody || [] : f.zoomStyleBody[c] || [];
            e = g[2];
            switch (q) {
            case "point":
                e = e[0];
                f = f[0] || {};
                break;
            case "pointText":
                e = e[1];
                f = f[1] || {};
                break;
            case "line":
                e = e[3];
                f = f[3] || {};
                break;
            case "polygon":
                e = e[4];
                f = f[4] || {};
                break;
            case "polygon3d":
                e = e[5],
                f = f[5] || {}
            }
            k = g[1][c - 1][0];
            k = k[b];
            !k && 21 > c && ("point" === q || "pointText" === q) && (k = g[1][c][0],
            k = k[b]);
            c = {
                l: k,
                style: e,
                s: f
            }
        } else
            c = {
                l: null,
                style: [],
                s: []
            };
        f = c;
        c = f.l;
        g = f.style;
        f = f.s;
        e = [];
        if (!c)
            return e;
        for (k = 0; k < c.length; k++) {
            var d = f[c[k]] || g[c[k]];
            if (d) {
                switch (q) {
                case "polygon":
                    d = {
                        g: b,
                        f: a(d[0]),
                        c: a(d[1]),
                        borderWidth: d[2],
                        B: d[3],
                        C: d[4],
                        oa: d[5],
                        Y: d[6],
                        la: d[7],
                        ma: a(d[8])
                    };
                    break;
                case "line":
                    d = {
                        g: b,
                        c: a(d[0]),
                        f: a(d[1]),
                        borderWidth: d[2],
                        o: d[3],
                        V: d[4],
                        G: d[5],
                        aa: d[6],
                        ba: d[7],
                        ca: d[8],
                        ea: d[9],
                        fa: d[10],
                        B: d[11],
                        i: d[12],
                        C: d[13],
                        X: d[14],
                        da: d[15],
                        Z: d[16],
                        ha: d[17],
                        ka: d[18]
                    };
                    break;
                case "pointText":
                    d = d && 0 !== d.length ? {
                        sid: b,
                        fontRgba: a(d[0]),
                        haloRgba: a(d[1]),
                        backRgba: a(d[2]),
                        fontSize: d[3],
                        haloSize: d[4],
                        fontWeight: d[5],
                        fontStyle: d[6],
                        density: d[7]
                    } : null;
                    break;
                case "point":
                    d = {
                        sid: b,
                        rank: d[0],
                        na: d[1],
                        icon: d[2],
                        iconType: d[3],
                        ia: d[4],
                        density: d[5],
                        zoom: d[6]
                    };
                    break;
                case "polygon3d":
                    d = {
                        g: b,
                        filter: d[0],
                        ratio: d[1],
                        $: d[2],
                        borderWidth: d[3],
                        c: a(d[4]),
                        H: a(d[5]),
                        m: a(d[6]),
                        ja: d[7]
                    }
                }
                d && (d.W = c[k],
                e[e.length] = d)
            }
        }
        return e
    }
    function a(a) {
        var b = a;
        if (g[b])
            return g[b];
        a >>>= 0;
        g[b] = [a & 255, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255];
        return g[b]
    }
    var c = {}
      , q = {}
      , g = {};
    return {
        b: function(a, g, r, x, f, e, v) {
            a = (a || "default") + "-" + g + "-" + r + "-" + x;
            e && (a += "-indoor");
            if (f)
                return q[a] || (q[a] = b(g, r, x, f)),
                q[a];
            c[a] || (c[a] = b(g, r, x, f, v));
            return c[a]
        }
    }
}();
function Xb(b, a) {
    if (b.fill)
        b.fill(a);
    else
        for (var c = 0; c < b.length; c++)
            b[c] = a
}
Uint8Array.prototype.slice || (Object.defineProperty(Uint8Array.prototype, "slice", {
    value: Array.prototype.slice
}),
Object.defineProperty(Uint16Array.prototype, "slice", {
    value: Array.prototype.slice
}),
Object.defineProperty(Uint32Array.prototype, "slice", {
    value: Array.prototype.slice
}),
Object.defineProperty(Int8Array.prototype, "slice", {
    value: Array.prototype.slice
}),
Object.defineProperty(Int16Array.prototype, "slice", {
    value: Array.prototype.slice
}),
Object.defineProperty(Int32Array.prototype, "slice", {
    value: Array.prototype.slice
}),
Object.defineProperty(Float32Array.prototype, "slice", {
    value: Array.prototype.slice
}));
var sb, H, Yb;
function wb(b, a, c, q) {
    b = new Uint8Array(b,a,c);
    if (self.TextDecoder)
        return Yb || (Yb = new TextDecoder("utf-8")),
        Yb.decode(b).replace(/\\\\/g, "\\");
    if ("utf-8" === q)
        for (q = "",
        a = 0; a < b.length; a++)
            c = b[a],
            128 > c ? q += String.fromCharCode(c) : 191 < c && 224 > c ? (q += String.fromCharCode((c & 31) << 6 | b[a + 1] & 63),
            a += 1) : 223 < c && 240 > c ? (q += String.fromCharCode((c & 15) << 12 | (b[a + 1] & 63) << 6 | b[a + 2] & 63),
            a += 2) : (c = ((c & 7) << 18 | (b[a + 1] & 63) << 12 | (b[a + 2] & 63) << 6 | b[a + 3] & 63) - 65536,
            q += String.fromCharCode(c >> 10 | 55296, c & 1023 | 56320),
            a += 3);
    else {
        if (4096 >= c)
            return String.fromCharCode.apply(String, b);
        q = "";
        var g = Math.ceil(c / 4096);
        for (a = 0; a < g; a++)
            q += String.fromCharCode.apply(String, b.slice(4096 * a, a === g - 1 ? c : 4096 * (a + 1)))
    }
    return q.replace(/\\\\/g, "\\")
}
function Q(b, a, c) {
    var q = a >> 2
      , g = H[q + b];
    a = 4 * (g + b + 1) + a;
    var k = [];
    if (a > c)
        return k;
    for (c = 0; c < g; c++) {
        var m = H[q + b + 1 + c]
          , r = a + m;
        k[c] = [a, m];
        0 !== r % 4 ? a = r + 4 - r % 4 : a = r
    }
    return k
}
var pb = 3, Zb = 1E-5, $b = 1, vb = null, Wb = null, Sb = null, ub = "", T = null, ha = new aa, ac = 20, bc = 65536, cc = [245, 245, 245, 255], hc = 1, xc = null, yc = null, Rb = {
    3: {
        start: 3,
        end: 3,
        a: 3
    },
    4: {
        start: 4,
        end: 5,
        a: 5
    },
    5: {
        start: 4,
        end: 5,
        a: 5
    },
    6: {
        start: 6,
        end: 7,
        a: 7
    },
    7: {
        start: 6,
        end: 7,
        a: 7
    },
    8: {
        start: 8,
        end: 9,
        a: 9
    },
    9: {
        start: 8,
        end: 9,
        a: 9
    },
    10: {
        start: 10,
        end: 10,
        a: 10
    },
    11: {
        start: 11,
        end: 13,
        a: 12
    },
    12: {
        start: 11,
        end: 13,
        a: 12
    },
    13: {
        start: 11,
        end: 13,
        a: 12
    },
    14: {
        start: 14,
        end: 15,
        a: 15
    },
    15: {
        start: 14,
        end: 15,
        a: 15
    },
    16: {
        start: 16,
        end: 17,
        a: 17
    },
    17: {
        start: 16,
        end: 17,
        a: 17
    },
    18: {
        start: 18,
        end: 25,
        a: 19
    },
    19: {
        start: 18,
        end: 25,
        a: 19
    },
    20: {
        start: 18,
        end: 25,
        a: 19
    },
    21: {
        start: 18,
        end: 25,
        a: 19
    },
    22: {
        start: 18,
        end: 25,
        a: 19
    },
    23: {
        start: 18,
        end: 25,
        a: 19
    },
    24: {
        start: 18,
        end: 25,
        a: 19
    },
    25: {
        start: 18,
        end: 25,
        a: 19
    }
}, rb, zc, Ac = !1, Bc = [], Cc = !1;
function nb() {
    for (var b = atob("AGFzbQEAAAABNAdgAX8Bf2AAAX9gAX8AYAJ/fwBgAABgDX9/f39/fH9/f39/f38AYAt/f3x/f39/f39/fwACngEKA2Vudg5EWU5BTUlDVE9QX1BUUgN/AANlbnYNdGVtcERvdWJsZVB0cgN/AANlbnYFQUJPUlQDfwADZW52CFNUQUNLVE9QA38AA2VudglTVEFDS19NQVgDfwADZW52AmdiA38AA2VudgJmYgN/AAZnbG9iYWwDTmFOA3wABmdsb2JhbAhJbmZpbml0eQN8AANlbnYGbWVtb3J5AgFGRgMeHQABAgMDAQEBAQEBAQEBBAEBBAEBAQEBAQMFAwYEBnMUfwEjAAt/ASMBC38BIwILfwEjAwt/ASMEC38BIwULfwEjBgt/AUEAC38BQQALfwFBAAt/AUEAC3wBIwcLfAEjCAt/AUEAC38BQQALfwFBAAt/AUEAC3wBRAAAAAAAAAAAC38BQQALfAFEAAAAAAAAAAALB/AEHAtfcmVzZXRfbGluZQAOFl9nZXRfYmxvY2tfaW5kZXhfc3RhcnQAEghzZXRUaHJldwAEGl9nZXRfbGluZV90dXJuaW5nc19hZGRyZXNzAAgjX2dldF9ibG9ja190cmlhbmdsZV9pbmRpY2VzX2FkZHJlc3MAEBZfZ2V0X2xpbmVfdmVydGV4X2NvdW50AA0Kc3RhY2tBbGxvYwAAF19nZXRfYmxvY2tfdmVydGV4X2NvdW50ABYXX2dldF9ibG9ja192ZXJ0ZXhfc3RhcnQAFBRfZ2V0X2xpbmVfdmVydGV4X2VuZAAMG19nZXRfZmVhdHVyZV9wb2ludHNfYWRkcmVzcwAXDHN0YWNrUmVzdG9yZQACFF9nZXRfYmxvY2tfaW5kZXhfZW5kABMbX2dldF9saW5lX2FsdGl0dWRlc19hZGRyZXNzAAYVX2dldF9ibG9ja192ZXJ0ZXhfZW5kABUJc3RhY2tTYXZlAAELcnVuUG9zdFNldHMAHBZfZ2V0X2xpbmVfdmVydGV4X3N0YXJ0AAsNX3BhcnNlX3BvaW50cwAYGF9nZXRfbGluZV9wb2ludHNfYWRkcmVzcwAHE2VzdGFibGlzaFN0YWNrU3BhY2UAAxNfZ2V0X2xpbmVfaW5kZXhfZW5kAAoRX2FwcGVuZF9saW5lX2RhdGEAGRVfZ2V0X2xpbmVfaW5k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"), a = b.length, c = new Uint8Array(a), q = 0; q < a; q++)
        c[q] = b.charCodeAt(q);
    return c.buffer
}
function Dc() {
    Cc || (Cc = !0,
    mb(function() {
        Ac = !0;
        if (Bc.length)
            for (var b = 0; b < Bc.length; b++) {
                var a = Bc[b];
                Ec(a.data, a.u, a.T)
            }
        Bc = []
    }))
}
self.onmessage = function(b) {
    b = b.data;
    var a = b.action
      , c = b.isText
      , q = b.isPoi;
    if (self[a])
        self[a](b);
    self.isText = c;
    self.isPoi = q
}
;
var Cb = {
    0: "00000000",
    16: "00010000",
    32: "00100000",
    48: "00110000",
    64: "01000000",
    96: "01100000"
};
function xb(b, a) {
    if (!Cb[b]) {
        var c = b.toString(2);
        8 > c.length && (c = Array(8 - c.length + 1).join("0") + c);
        Cb[b] = c
    }
    c = Cb[b];
    return "1" === c[a - Rb[a].start]
}
function Ec(b, a, c) {
    fa("finishLoadTile");
    try {
        fa("begin(ParseData)"),
        Fc(b, a, c, function(a) {
            fa("finishParseData");
            a.base = a.a;
            a.base3d = a.A;
            a.virtual = a.U;
            a.building3d = a.D;
            a.building3dMesh = a.F;
            a.indoorData = a.N;
            a.indoorBase = a.J;
            a.indoorBaseContour = a.K;
            a.indoorBorder3D = a.L;
            a.indoorArea3D = a.I;
            a.label = a.label;
            a.tileInfo = a.u;
            for (var b = [], c = 0; c < a.base.length; c++) {
                var m = a.base[c];
                b.push(m.data[0].buffer);
                b.push(m.data[1].buffer)
            }
            if (a.base3d)
                for (c = 0; c < a.base3d.length; c++)
                    m = a.base3d[c],
                    "block" === m.type ? (b.push(m.data.vertex.buffer),
                    b.push(m.data.index.buffer)) : (b.push(m.data[0].buffer),
                    b.push(m.data[1].buffer));
            if (a.virtual)
                for (c = 0; c < a.virtual.length; c++)
                    m = a.virtual[c],
                    b.push(m.data[0].buffer),
                    b.push(m.data[1].buffer);
            a.building3d && (b.push(a.building3d.vertex.buffer),
            b.push(a.building3d.index.buffer));
            if (a.indoorBase)
                for (c = 0; c < a.indoorBase.length; c++)
                    m = a.indoorBase[c],
                    b.push(m.data[0].buffer),
                    b.push(m.data[1].buffer);
            if (a.indoorBaseContour)
                for (c = 0; c < a.indoorBaseContour.length; c++)
                    m = a.indoorBaseContour[c],
                    b.push(m.data[0].buffer),
                    b.push(m.data[1].buffer);
            if (a.indoorBorder3D && a.indoorBorder3D && 0 < a.indoorBorder3D.length)
                for (c = 0; c < a.indoorBorder3D.length; c++)
                    b.push(a.indoorBorder3D[c].data[0].buffer),
                    b.push(a.indoorBorder3D[c].data[1].buffer);
            if (a.indoorArea3D && 0 < a.indoorArea3D.length)
                for (c = 0; c < a.indoorArea3D.length; c++)
                    b.push(a.indoorArea3D[c].vertex.buffer),
                    b.push(a.indoorArea3D[c].index.buffer);
            a.label && (a.label.textImageBitmap && b.push(a.label.textImageBitmap),
            a.label.indoorTextImageBitmap && b.push(a.label.indoorTextImageBitmap));
            a.perfStat = [ka("beginLoadTile", "finishLoadTile"), ka("finishLoadTile", "beginParseData"), ka("beginParseData", "finishParseData"), zc];
            a.endTime = Date.now();
            postMessage(a, b)
        })
    } catch (q) {
        postMessage({
            tileInfo: a,
            tileKey: c,
            error: "parse_error",
            message: q.message
        })
    }
}
self.loadTileData = function(b) {
    var a = b.url
      , c = {};
    c.baseTileSize = b.tileInfo.baseTileSize;
    c.col = b.tileInfo.col;
    c.loopOffsetX = b.tileInfo.loopOffsetX;
    c.mercatorSize = b.tileInfo.mercatorSize;
    c.row = b.tileInfo.row;
    c.tileSize = b.tileInfo.tileSize;
    c.tileTypeName = b.tileInfo.tileTypeName;
    c.useZoom = b.tileInfo.useZoom;
    c.zoom = b.tileInfo.zoom;
    c.processedLabelZooms = b.tileInfo.processedLabelZooms;
    var q = b.tileKey;
    b.featureStyle && (vb = JSON.parse(b.featureStyle),
    T = null);
    b.indoorStyle && (Wb = JSON.parse(b.indoorStyle));
    b.iconSetInfo && (Sb = JSON.parse(b.iconSetInfo));
    b.iconInfo && (rb = b.iconInfo.textSizeRatio);
    b.mapStyleId && (ub = b.mapStyleId);
    b.customMapStyle && (T = JSON.parse(b.customMapStyle),
    vb = null);
    c.style = ub;
    xc = yc = null;
    zc = 0;
    var g = new XMLHttpRequest;
    g.open("GET", a, !0);
    b = b.tileInfo.header;
    if (b instanceof Array)
        for (var k = 0; k < b.length; k++)
            b[k] && b[k].hasOwnProperty("key") && b[k].hasOwnProperty("value") && g.setRequestHeader(b[k].key, b[k].value);
    g.responseType = "arraybuffer";
    g.timeout = 1E4;
    g.ontimeout = function() {
        postMessage({
            tileInfo: c,
            tileKey: q,
            error: "net_timeout",
            message: "net status: timeout"
        })
    }
    ;
    g.onreadystatechange = function() {
        4 === this.readyState && (200 === this.status && (zc = Math.round(g.response.byteLength / 1024),
        Ac ? Ec(g.response, c, q) : Bc[Bc.length] = {
            data: g.response,
            u: c,
            T: q
        }),
        (400 <= this.status || 0 === this.status) && postMessage({
            tileInfo: c,
            tileKey: q,
            error: "net_error",
            message: "net status: " + this.status,
            event: {
                title: a,
                ga: JSON.stringify({
                    responseURL: a,
                    status: this.status
                })
            }
        }))
    }
    ;
    g.send();
    Dc();
    fa("beginLoadTile")
}
;
function Fc(b, a, c, q) {
    var g = []
      , k = []
      , m = []
      , r = 0
      , x = a.useZoom
      , f = null
      , e = null;
    H = new Uint32Array(b);
    sb = new Int32Array(b);
    hc = H[0];
    for (var v = Q(H[1] + 2, 0, b.byteLength), d = Q(0, v[0][0], v[0][0] + v[0][1]), w, u = !1, l = 0; l < d.length; l++) {
        f = d[l];
        var p = f[0] >> 2
          , n = H[p + 1];
        if (7 === n) {
            u = !0;
            break
        }
    }
    !1 === u && (r = Ub(null, null, a, g, r, 0));
    for (l = 0; l < d.length; l++)
        f = d[l],
        p = f[0] >> 2,
        n = H[p + 1],
        u = H[p + 2],
        7 === n ? r = Ub(b, f, a, g, r, 0) : 4 === n ? 13E3 === u || 83500 === u ? Gc(b, f, x, m, 0) : r = Gc(b, f, x, g, r) : 15 === n ? (w = r,
        r = Ub(b, f, a, k, r, 1, {
            O: !0
        })) : 16 === n ? r = Gc(b, f, x, k, r, !0) : 18 === n ? T && T.zoomFrontStyle && T.zoomFrontStyle[x] && "off" === T.zoomFrontStyle[x].bmapRoadarrowVisibility || (r = $c(b, f, x, k, r)) : 19 === n ? r = ad(b, f, x, g, r) : 20 === n && (r = bd(b, f, x, k, r));
    (l = cd(d, a)) && k.push({
        type: "block",
        data: l,
        has3D: !0,
        has2D: !1
    });
    f = Vb(b, d, a);
    l = dd(b, d, a);
    0 < l && (e = {
        vertex: new Float32Array(7 * l),
        index: new Uint16Array(l / 3)
    },
    dd(b, d, a, e.vertex, e.index));
    l = {
        S: wb(b, v[3][0], v[3][1], void 0) || "",
        height: H[2] || 0
    };
    var h = ob(b, d, v[2], l, a) || {};
    h.textImgStr = l.S || null;
    v[4][1] && H[3] ? (h.indoorTextImgStr = wb(b, v[4][0], v[4][1], void 0) || null,
    h.indoorTextureHeight = H[3]) : h.indoorTextImgStr = null;
    b = Tb(b, v[1], a, w ? w : r);
    h.indoorLabel = [];
    if (b.indoorDataResult)
        for (var E in b.indoorDataResult)
            if ("tileInfo" !== E)
                for (r = b.indoorDataResult[E],
                v = r.defaultFloor,
                b.indoorDataResult[E].tileKey = c,
                l = 0; l < r.floors.length; l++)
                    v === l && r.floors[l].pois && (h.indoorLabel = h.indoorLabel.concat(r.floors[l].pois));
    H = sb = null;
    g.length && (g = ed(g));
    var t = {
        a: g,
        A: k.length ? k : null,
        U: m.length ? m : null,
        D: f,
        F: e,
        N: b.indoorDataResult,
        J: b.indoorBase,
        K: b.indoorBaseContour,
        L: b.indoorBorder3D,
        I: b.indoorArea3D,
        label: h,
        u: a
    };
    if ((h.textImgStr || h.indoorTextImgStr) && self.fetch && self.createImageBitmap && self.Promise) {
        var A = function() {
            q(t)
        }
          , C = 0;
        h.textImgStr && (C++,
        fetch(h.textImgStr).then(function(a) {
            a.blob().then(function(a) {
                createImageBitmap(a, {
                    imageOrientation: "flipY"
                }).then(function(a) {
                    h.textImageBitmap = a;
                    h.textImgStr = null;
                    C--;
                    0 === C && q(t)
                }, A)
            }, A)
        }, A));
        h.indoorTextImgStr && (C++,
        fetch(h.indoorTextImgStr).then(function(a) {
            a.blob().then(function(a) {
                createImageBitmap(a, {
                    imageOrientation: "flipY"
                }).then(function(a) {
                    h.indoorTextImageBitmap = a;
                    h.indoorTextImgStr = null;
                    C--;
                    0 === C && q(t)
                }, A)
            }, A)
        }, A))
    } else
        q(t)
}
function ed(b) {
    for (var a = void 0, c = 0, q = 0, g = !1, k = 0; k < b.length; k++)
        "fill" !== b[k].type ? a = void 0 : b[k].type === a ? (b[c] = fd(b[c], b[k], q),
        b[k].P = !0,
        q += b[k].h,
        g = !0) : (c = k,
        a = b[k].type,
        q = b[k].h);
    return g ? b.filter(function(a) {
        return !a.P
    }) : b
}
function fd(b, a, c) {
    var q = b.data[1]
      , g = a.data[1];
    b.data[0] = gd(b.data[0], a.data[0]);
    b.data[1] = gd(q, g, c);
    b.has3D = b.has3D || a.has3D;
    b.has2D = b.has2D || a.has2D;
    return b
}
function gd(b, a, c) {
    if (b.constructor === ArrayBuffer) {
        var q = new Uint8Array(b.byteLength + a.byteLength);
        q.set(new Uint8Array(b), 0);
        q.set(new Uint8Array(a), b.byteLength);
        return q.buffer
    }
    q = new b.constructor(b.length + a.length);
    q.set(b, 0);
    if (c)
        for (var g = 0; g < a.length; g++)
            a[g] += c;
    q.set(a, b.length);
    return q
}
function Ub(b, a, c, q, g, k, m) {
    var r = [];
    b && (r = a ? a[0] >> 2 : 0,
    r = H[r],
    r = Q(r + 1, a[0], a[0] + a[1]));
    a = 0;
    var x = c.baseTileSize;
    c = c.useZoom;
    var f = []
      , e = []
      , v = []
      , d = [];
    m = m || {};
    var w = m.v || !1
      , u = m.O || !1;
    m = m.M || !1;
    if (!u && 0 === g) {
        e = cc;
        if (T && T.bmapLandColor) {
            e = T.bmapLandColor.replace("#", "");
            3 === e.length ? e += "f" : 6 === e.length && (e += "ff");
            v = [];
            d = e.length;
            f = 8 === d ? 2 : 1;
            for (var l = 0; l < d; l += f)
                2 === f ? v.push(parseInt(e.slice(l, l + 2), 16)) : v.push(parseInt(e.slice(l, l + 1) + e.slice(l, l + 1), 16));
            e = v
        }
        f = [0, 0, 0, e[0], e[1], e[2], e[3], 0, x, 0, 0, e[0], e[1], e[2], e[3], 0, x, x, 0, e[0], e[1], e[2], e[3], 0, 0, x, 0, e[0], e[1], e[2], e[3], 0];
        e = [0, 1, 2, 0, 2, 3];
        v = [72];
        d = [20]
    }
    1 === k ? (g++,
    a = g,
    g += 5) : 2 === k && (a = g + 3 * r.length + 1);
    l = [];
    for (var p = [], n = !1, h = !1, E = 0; E < r.length; E++) {
        var t = r[E]
          , A = t[0] >> 2
          , C = H[A];
        A = H[A + 1];
        var B = tb.b(ub, A, "polygon", c, w ? Wb : vb, w, T);
        if (B && B.length) {
            B = B[0];
            if (B.g) {
                if (6 < c && (71013 === B.g || 71012 === B.g || 71011 === B.g))
                    continue;
                if (5 < c && 71011 === B.g)
                    continue;
                if (5 > c && (71012 === B.g || 71013 === B.g))
                    continue
            }
            var z = B.f[0]
              , F = B.f[1]
              , G = B.f[2]
              , R = B.f[3]
              , V = B.c[0]
              , K = B.c[1]
              , M = B.c[2]
              , W = B.c[3]
              , Y = B.borderWidth / 4
              , X = 2.5 * Y;
            t = Q(C + 1, t[0], t[0] + t[1]);
            g += 3;
            for (C = 0; C < t.length; C++) {
                var O = t[C]
                  , J = O[0] >> 2
                  , L = H[J];
                if (xb(H[J + 1], c)) {
                    var U = Q(L + 1, O[0], O[0] + O[1]);
                    O = new Int32Array(b,U[0][0],U[0][1] >> 2);
                    if (O.length && !(4E3 < O.length)) {
                        var P = new Uint16Array(b,U[2][0],U[2][1] >> 1);
                        !0 !== m && P && f.length / 8 + O.length / 2 > bc && (f = hd(f),
                        q.push({
                            type: "fill",
                            data: [f, new Uint16Array(e)],
                            h: f.byteLength / ac,
                            has3D: n,
                            has2D: h,
                            verticesLength: d,
                            styleIds: v
                        }),
                        f = [],
                        e = [],
                        v = [],
                        d = [],
                        h = n = !1);
                        L = null;
                        var N = !1;
                        if (u) {
                            var D = 1 < hc ? new Int16Array(b,U[1][0],U[1][1] >> 1) : new Uint16Array(b,U[1][0],U[1][1] >> 1);
                            if (1 === D.length && D[0])
                                L = Array(O.length >> 1),
                                0 > D[0] && (N = !0),
                                Xb(L, D[0]),
                                n = !0;
                            else if (1 < D.length) {
                                L = [];
                                for (var I = 0; I < D.length; I++)
                                    0 > D[I] && (N = !0),
                                    L[I] = D[I] || $b;
                                n = !0
                            } else
                                h = !0
                        }
                        I = f.length / 8;
                        D = Za(O);
                        J = H[J + 2];
                        m && 1 === J && (Y = X);
                        if (!0 !== m && P) {
                            J = e;
                            for (var Z = 0; Z < P.length; Z++)
                                J[J.length] = P[Z] + I;
                            I = 0;
                            for (P = D.length / 2; I < P; I++)
                                J = L ? L[I] : 0,
                                f.push(D[2 * I], D[2 * I + 1], J, z, F, G, R, g);
                            v.push(A);
                            d.push(f.length / 1.6)
                        }
                        if (L && !N)
                            for (l.length / 8 + D.length / 2 * 2 > bc && (l = hd(l),
                            p = new Uint16Array(p),
                            q.push({
                                type: "fill",
                                data: [l, p],
                                h: l.byteLength / ac,
                                has3D: n,
                                has2D: h
                            }),
                            p = [],
                            l = []),
                            N = l.length / 8,
                            I = 0; I < D.length; I += 2) {
                                J = L[I / 2];
                                P = J - 280;
                                0 > P && (P = 0);
                                l.push(D[I], D[I + 1], J, V, K, M, W, g, D[I], D[I + 1], P, V, K, M, W, g);
                                J = D[I];
                                P = D[I + 1];
                                Z = I === D.length - 2 ? D[1] : D[I + 3];
                                var da = !1;
                                if (J === (I === D.length - 2 ? D[0] : D[I + 2])) {
                                    if (Math.abs(J) < Zb || Math.abs(J - x) < Zb)
                                        da = !0
                                } else
                                    P === Z && (Math.abs(P) < Zb || Math.abs(P - x) < Zb) && (da = !0);
                                da || (I === D.length - 2 ? p.push(N + I, N + I + 1, N, N, N + I + 1, N + 1) : p.push(N + I, N + I + 1, N + I + 2, N + I + 2, N + I + 1, N + I + 3))
                            }
                        if (k && B.borderWidth && D.length) {
                            if (D[0] - D[D.length - 2] > Zb || D[1] - D[D.length - 1] > Zb)
                                D[D.length] = D[0],
                                D[D.length] = D[1],
                                L && (L[L.length] = L[0]);
                            if (U[3])
                                for (U = Q(0, U[3][0], U[3][0] + U[3][1]),
                                D = 0; D < U.length; D++)
                                    N = U[D],
                                    J = Q(0, N[0], N[0] + N[1]),
                                    N = new Int16Array(b,J[0][0],J[0][1] >> 1),
                                    jb() + N.length / 2 > bc && (q.push({
                                        type: "line",
                                        data: [ab(), ib()],
                                        has3D: n,
                                        has2D: h
                                    }),
                                    lb()),
                                    I = new Uint16Array(b,J[1][0],J[1][1] >> 1),
                                    J = new Int8Array(b,J[2][0],J[2][1]),
                                    kb(N, [V, K, M, W], Y, L, a, !1, O, J, 0, I[0], I[1])
                        }
                    }
                }
            }
        }
    }
    l.length && (l = hd(l),
    p = new Uint16Array(p),
    q.push({
        type: "fill",
        data: [l, p],
        h: l.byteLength / ac,
        has3D: n,
        has2D: h
    }));
    f.length && (f = hd(f),
    q.push({
        type: "fill",
        data: [f, new Uint16Array(e)],
        h: f.byteLength / ac,
        has3D: n,
        has2D: h,
        verticesLength: d,
        styleIds: v
    }));
    k && (q.push({
        type: "line",
        data: [ab(), ib()],
        has3D: n,
        has2D: h
    }),
    lb());
    return Math.max(g, a)
}
function Gc(b, a, c, q, g, k) {
    a = Q(H[a[0] >> 2] + 1, a[0], a[0] + a[1]);
    for (var m = !1, r = !1, x = [], f = [], e = 0; 2 > e; e++) {
        0 === e && g++;
        for (var v = 0; v < a.length; v++) {
            var d = a[v]
              , w = d[0] >> 2
              , u = H[w]
              , l = H[w + 1];
            if ((w = tb.b(ub, l, "line", c, vb, !1, T)) && w.length && (71059 !== l || self.isText) && (0 !== e || w[0].borderWidth) && (d = Q(u + 1, d[0], d[0] + d[1]),
            0 !== e || !w[0].i))
                if (1 === e && w[0].i) {
                    var p = w[0].i;
                    u = p;
                    var n = Sb[u] || Sb["MapRes/" + u];
                    if (n) {
                        n = [n[0], n[1]];
                        jb() && (q[q.length] = {
                            type: "line",
                            data: [ab(), ib()],
                            has3D: m,
                            has2D: r,
                            styleIds: x,
                            verticesLength: f
                        },
                        lb(),
                        r = m = !1,
                        f = [],
                        x = []);
                        /guojietianqiaojieti/.test(p) ? g += 20 : g++;
                        var h = w[0].o / 4
                          , E = k ? !0 : !1
                          , t = !1;
                        /\b(32|16|8|4)$/.test(u) && (h *= 5,
                        n[1] *= 2,
                        t = E = !0,
                        p = p.replace(/\b4$/, "8"));
                        var A = !1
                          , C = !1;
                        for (u = 0; u < d.length; u++) {
                            var B = d[u]
                              , z = B[0] >> 2
                              , F = H[z];
                            z = H[z + 1];
                            if (xb(z, c) && (z = Q(F + 1, B[0], B[0] + B[1]),
                            B = null,
                            F = new Int32Array(b,z[0][0],z[0][1] >> 2),
                            F.length && !(8E3 < F.length))) {
                                if (t && 4 === F.length) {
                                    var G = F
                                      , R = G[2]
                                      , V = G[3]
                                      , K = Math.sqrt(R * R + V * V);
                                    K = 800 * ~~(K / 800) / K;
                                    G[2] = ~~(R * K);
                                    G[3] = ~~(V * K)
                                }
                                if (k) {
                                    var M = 1 < hc ? new Int16Array(b,z[1][0],z[1][1] >> 1) : new Uint16Array(b,z[1][0],z[1][1] >> 1);
                                    if (1 === M.length && M[0])
                                        B = Array(F.length >> 1),
                                        Xb(B, M[0]),
                                        A = !0;
                                    else if (1 < M.length) {
                                        B = [];
                                        for (A = 0; A < M.length; A++)
                                            B[A] = M[A] || $b;
                                        A = !0
                                    } else
                                        C = !0
                                }
                                G = new Int16Array(b,z[2][0],z[2][1] >> 1);
                                R = new Int8Array(b,z[3][0],z[3][1]);
                                kb(G, w[0].f, h, B, g, !0, F, R, 1);
                                x.push(l);
                                f.push(5 * jb())
                            }
                        }
                        jb() && (q[q.length] = {
                            type: "line",
                            textureSize: n,
                            texture: p + ".png",
                            lineWidth: w[0].o / 2,
                            data: [ab(), ib()],
                            has3D: A,
                            has2D: C,
                            zoomWithMap: E,
                            styleIds: x,
                            verticesLength: f
                        },
                        x = [],
                        f = [],
                        lb())
                    }
                } else if (0 === e ? (l = w[0].c,
                p = w[0].borderWidth) : (l = w[0].f,
                p = w[0].o),
                p /= 4,
                !(0 === p || 0 === l[3] || 100 < p))
                    for (1 === e && g++,
                    u = 0; u < d.length; u++)
                        if (B = d[u],
                        z = B[0] >> 2,
                        F = H[z],
                        z = H[z + 1],
                        xb(z, c) && (z = Q(F + 1, B[0], B[0] + B[1]),
                        F = new Int32Array(b,z[0][0],z[0][1] >> 2),
                        F.length && !(8E3 < F.length))) {
                            G = new Int16Array(b,z[2][0],z[2][1] >> 1);
                            R = new Int8Array(b,z[3][0],z[3][1]);
                            jb() + G.length / 2 > bc && (q[q.length] = {
                                type: "line",
                                data: [ab(), ib()],
                                has3D: m,
                                has2D: r
                            },
                            r = m = !1,
                            lb());
                            B = null;
                            if (k)
                                if (1 < hc ? M = new Int16Array(b,z[1][0],z[1][1] >> 1) : M = new Uint16Array(b,z[1][0],z[1][1] >> 1),
                                1 === M.length && M[0])
                                    B = Array(F.length >> 1),
                                    Xb(B, M[0]),
                                    m = !0;
                                else if (1 < M.length) {
                                    B = [];
                                    for (m = 0; m < M.length; m++)
                                        B[m] = M[m] || $b;
                                    m = !0
                                } else
                                    r = !0;
                            kb(G, l, p, B, g, 1 === w[0].G, F, R, 0)
                        }
        }
    }
    jb() && (q[q.length] = {
        type: "line",
        data: [ab(), ib()],
        has3D: m,
        has2D: r,
        styleIds: x,
        verticesLength: f
    },
    lb());
    return g
}
function bd(b, a, c, q, g) {
    var k = Q(H[a[0] >> 2] + 1, a[0], a[0] + a[1])
      , m = [];
    a = [];
    for (var r = !1, x = !1, f = 0; f < k.length; f++) {
        var e = k[f];
        e = Q(H[e[0] >> 2] + 1, e[0], e[0] + e[1])[0];
        var v = e[0] >> 2
          , d = H[v];
        if (xb(H[v + 1], c)) {
            var w = Q(d + 1, e[0], e[0] + e[1]);
            e = new Int32Array(b,w[0][0],w[0][1] >> 2);
            e = Za(e);
            d = 1 < hc ? new Int16Array(b,w[3][0],w[3][1] >> 1) : new Uint16Array(b,w[3][0],w[3][1] >> 1);
            v = void 0;
            if (1 === d.length && d[0])
                v = Array(e.length >> 1),
                Xb(v, d[0]),
                r = !0;
            else if (1 < d.length) {
                v = [];
                for (var u = 0; u < d.length; u++)
                    v[u] = d[u] || 1;
                r = !0
            } else
                x = !0;
            d = new Uint32Array(b,w[2][0],w[2][1] >> 2);
            u = m.length / 8;
            g += 8;
            var l = tb.b(ub, d[0], "polygon", c, vb, !1, T)
              , p = tb.b(ub, d[1], "polygon", c, vb, !1, T);
            if (l && l.length && p && p.length) {
                var n = new Int32Array(b,w[1][0],w[1][1] >> 2);
                d = [n[0] / 100, n[1] / 100];
                l = l[0].f;
                n = [n[2] / 100, n[3] / 100];
                p = p[0].f;
                var h = [n[0] - d[0], n[1] - d[1]]
                  , E = Math.sqrt(Math.pow(h[0], 2) + Math.pow(h[1], 2))
                  , t = a;
                w = new Uint16Array(b,w[4][0],w[4][1] >> 1);
                for (var A = 0; A < w.length; A++)
                    t[t.length] = w[A] + u;
                u = 0;
                for (w = e.length / 2; u < w; u++) {
                    t = [e[2 * u], e[2 * u + 1]];
                    if (0 === h[0]) {
                        A = d[0];
                        var C = t[1]
                    } else
                        C = -((d[0] - t[0]) * h[0] + (d[1] - t[1]) * h[1]) / (h[0] * h[0] + h[1] * h[1]),
                        A = C * h[0] + d[0],
                        C = C * h[1] + d[1];
                    C = Math.sqrt(Math.pow(A - n[0], 2) + Math.pow(C - n[1], 2)) / E;
                    if (d[0] < n[0] && A < d[0] || d[0] > n[0] && A > d[0])
                        C = 1;
                    else if (d[0] < n[0] && A > n[0] || d[0] > n[0] && A < n[0])
                        C = 0;
                    m.push(t[0], t[1], v ? v[u] : 0, C * l[0] + (1 - C) * p[0], C * l[1] + (1 - C) * p[1], C * l[2] + (1 - C) * p[2], C * l[3] + (1 - C) * p[3], g)
                }
            }
        }
    }
    m.length && (b = hd(m),
    q.push({
        type: "fill",
        data: [b, new Uint16Array(a)],
        h: b.byteLength / ac,
        has3D: r,
        has2D: x
    }));
    return g
}
function $c(b, a, c, q, g) {
    var k = Q(H[a[0] >> 2] + 1, a[0], a[0] + a[1]);
    if (!k.length)
        return g;
    a = [];
    var m = [];
    g++;
    var r = Za(new Int32Array(b,k[0][0],k[0][1] >> 2))
      , x = new Int32Array(b,k[1][0],k[1][1] >> 2);
    b = new Int16Array(b,k[2][0],k[2][1] >> 1);
    var f = k = !1;
    1 === b.length && 0 === b[0] ? f = !0 : k = !0;
    b = Za(b, 1);
    if (1 === b.length) {
        var e = b[0];
        b = Array(r.length >> 1);
        Xb(b, e)
    }
    for (e = 0; e < x.length; e++)
        if (xb(x[e], c)) {
            var v = [r[4 * e], r[4 * e + 1], b[2 * e]]
              , d = [r[4 * e + 2], r[4 * e + 3], b[2 * e + 1]]
              , w = [(v[0] + d[0]) / 2, (v[1] + d[1]) / 2, (v[2] + d[2]) / 2]
              , u = w[0] - v[0]
              , l = w[1] - v[1]
              , p = [d[0] - v[0], d[1] - v[1]]
              , n = p[0] * p[0] + p[1] * p[1];
            0 < n && (n = 1 / Math.sqrt(n),
            p[0] *= n,
            p[1] *= n);
            n = a.length / 10;
            a[a.length] = w[0];
            a[a.length] = w[1];
            a[a.length] = v[2];
            a[a.length] = -u;
            a[a.length] = -l;
            a[a.length] = -p[1];
            a[a.length] = p[0];
            a[a.length] = .125;
            a[a.length] = .3125;
            a[a.length] = g;
            a[a.length] = w[0];
            a[a.length] = w[1];
            a[a.length] = v[2];
            a[a.length] = -u;
            a[a.length] = -l;
            a[a.length] = p[1];
            a[a.length] = -p[0];
            a[a.length] = .125;
            a[a.length] = .6875;
            a[a.length] = g;
            a[a.length] = w[0];
            a[a.length] = w[1];
            a[a.length] = d[2];
            a[a.length] = u;
            a[a.length] = l;
            a[a.length] = -p[1];
            a[a.length] = p[0];
            a[a.length] = 1;
            a[a.length] = .3125;
            a[a.length] = g;
            a[a.length] = w[0];
            a[a.length] = w[1];
            a[a.length] = d[2];
            a[a.length] = u;
            a[a.length] = l;
            a[a.length] = p[1];
            a[a.length] = -p[0];
            a[a.length] = 1;
            a[a.length] = .6875;
            a[a.length] = g;
            m[m.length] = n;
            m[m.length] = n + 1;
            m[m.length] = n + 2;
            m[m.length] = n + 2;
            m[m.length] = n + 1;
            m[m.length] = n + 3
        }
    m.length && q.push({
        type: "arrow",
        data: [new Float32Array(a), new Uint16Array(m)],
        has3D: k,
        has2D: f
    });
    return g
}
function ad(b, a, c, q, g) {
    a = Q(H[a[0] >> 2] + 1, a[0], a[0] + a[1]);
    g++;
    for (var k = 0; k < a.length; k++) {
        var m = a[k]
          , r = m[0] >> 2
          , x = H[r];
        if ((r = tb.b(ub, H[r + 1], "line", c, vb, !1, T)) && r.length) {
            var f = r[0];
            if ("undefined" !== typeof f.i) {
                f = f.i + ".png";
                m = Q(x + 1, m[0], m[0] + m[1]);
                for (x = 0; x < m.length; x++) {
                    var e = m[x]
                      , v = e[0] >> 2
                      , d = H[v];
                    xb(H[v + 1], c) && (v = H[v + 2] / 20,
                    e = Q(d + 1, e[0], e[0] + e[1]),
                    kb(new Int16Array(b,e[2][0],e[2][1] >> 1), r[0].f, v, null, g, !0, new Int32Array(b,e[0][0],e[0][1] >> 2), new Int8Array(b,e[3][0],e[3][1]), 2))
                }
                q[q.length] = {
                    type: "line",
                    texture: f,
                    isSingle: !0,
                    data: [ab(), ib()]
                };
                lb()
            }
        }
    }
    return g
}
function Vb(b, a, c, q) {
    var g = c.useZoom;
    if (!a || !a.length)
        return null;
    c = [];
    for (var k = [], m = 0; m < a.length; m++) {
        var r = a[m]
          , x = r[0] >> 2
          , f = H[x];
        if (8 === H[x + 1])
            for (r = Q(f + 1, r[0], r[0] + r[1]),
            x = 0; x < r.length; x++) {
                var e = r[x];
                f = e[0] >> 2;
                var v = H[f];
                f = H[f + 1];
                var d = tb.b(ub, f, "polygon3d", g, q ? Wb : vb, !1, T);
                if (d && d[0]) {
                    d = d[0];
                    var w = d.H
                      , u = d.m;
                    if (T) {
                        if (T.buildingFill) {
                            var l = void 0
                              , p = u[0] / 255
                              , n = u[1] / 255;
                            u = u[2] / 255;
                            var h = Math.max(p, n, u)
                              , E = h - Math.min(p, n, u);
                            for (0 === E ? l = 0 : h === p ? l = (n - u) / E % 6 * 60 : h === n ? l = 60 * ((u - p) / E + 2) : h === u && (l = 60 * ((p - n) / E + 4)); 0 > l; )
                                l += 360;
                            var t = [l, 0 === h ? 0 : E / h, h];
                            t[2] += .05;
                            0 > t[2] && (t[2] = 0);
                            p = l = u = void 0;
                            n = t[2] * t[1];
                            h = n * (1 - Math.abs(t[0] / 60 % 2 - 1));
                            E = t[2] - n;
                            t = t[0];
                            0 <= t && 60 > t ? (p = n,
                            l = h,
                            u = 0) : 60 <= t && 120 > t ? (p = h,
                            l = n,
                            u = 0) : 120 <= t && 180 > t ? (p = 0,
                            l = n,
                            u = h) : 180 <= t && 240 > t ? (p = 0,
                            l = h,
                            u = n) : 240 <= t && 300 > t ? (p = h,
                            l = 0,
                            u = n) : 300 <= t && 360 > t && (p = n,
                            l = 0,
                            u = h);
                            u = [Math.round(255 < 255 * (p + E) ? 255 : 255 * (p + E)), Math.round(255 < 255 * (l + E) ? 255 : 255 * (l + E)), Math.round(255 < 255 * (u + E) ? 255 : 255 * (u + E))];
                            u[3] = w[3] || 255
                        }
                        xc || (xc = w,
                        yc = u)
                    }
                    e = Q(v + 1, e[0], e[0] + e[1]);
                    v = 0;
                    if (d.borderWidth) {
                        var A = d.c[0]
                          , C = d.c[1]
                          , B = d.c[2]
                          , z = d.c[3];
                        v = d.borderWidth / 4
                    }
                    for (l = 0; l < e.length; l++)
                        if (p = e[l],
                        n = p[0] >> 2,
                        h = H[n],
                        xb(H[n + 1], g) && (n = H[n + 2],
                        !(n < d.filter))) {
                            h = Q(h + 1, p[0], p[0] + p[1]);
                            p = new Int32Array(b,h[0][0],h[0][1] >> 2);
                            t = new Uint16Array(b,h[1][0],h[1][1] >> 1);
                            E = p;
                            var F = n
                              , G = w[0]
                              , R = w[1]
                              , V = w[2]
                              , K = w[3]
                              , M = u[0]
                              , W = u[1]
                              , Y = u[2]
                              , X = u[3]
                              , O = E;
                            Ma || (Ma = y._get_block_points_address() >> 2);
                            Aa.set(O, Ma);
                            O = t;
                            Va || (Va = y._get_block_triangle_indices_address() >> 1);
                            Ca.set(O, Va);
                            y._append_block_data(E.length, t.length, F, G, R, V, K, M, W, Y, X);
                            c.push(f);
                            k.push(7 * $a());
                            if (d.borderWidth && p.length && (E = Array(p.length >> 1),
                            Xb(E, 100 * n),
                            h[2]))
                                for (n = Q(0, h[2][0], h[2][0] + h[2][1]),
                                h = 0; h < n.length; h++)
                                    t = n[h],
                                    G = Q(0, t[0], t[0] + t[1]),
                                    t = new Int16Array(b,G[0][0],G[0][1] >> 1),
                                    F = new Uint16Array(b,G[1][0],G[1][1] >> 1),
                                    G = new Int8Array(b,G[2][0],G[2][1]),
                                    kb(t, [A, C, B, z], v, E, 2, !0, p, G, 0, F[0], F[1])
                        }
                }
            }
    }
    b = {
        type: "line",
        data: [ab(), ib()]
    };
    lb();
    return 0 < $a() ? (Xa || (Xa = y._get_block_vertex_start()),
    a = new Float32Array(ra.slice(Xa, y._get_block_vertex_end())),
    Wa || (Wa = y._get_block_index_start()),
    q = new Uint16Array(ra.slice(Wa, y._get_block_index_end())),
    c = {
        vertex: a,
        index: q,
        styleIds: c,
        verticesLength: k
    },
    y._reset_block(),
    c.border = b,
    c) : null
}
function hd(b) {
    var a = new ArrayBuffer(b.length / 8 * 20)
      , c = new Float32Array(a);
    a = new Uint8Array(a);
    for (var q = 0, g = 12, k = 4, m = 0; m < b.length; m += 8)
        c[q] = b[m],
        c[q + 1] = b[m + 1],
        c[q + 2] = b[m + 2] / 100,
        a[g] = b[m + 3],
        a[g + 1] = b[m + 4],
        a[g + 2] = b[m + 5],
        a[g + 3] = b[m + 6],
        c[k] = b[m + 7],
        q += 5,
        g += 20,
        k += 5;
    return c
}
function dd(b, a, c, q, g) {
    if (!a || !a.length)
        return 0;
    c = c.useZoom;
    for (var k = 0, m = 0, r = 0, x = 0, f = 0; f < a.length; f++) {
        var e = a[f]
          , v = e[0] >> 2;
        if (25 === H[v + 1]) {
            e = Q(H[v] + 1, e[0], e[0] + e[1])[0];
            var d = e[0] >> 2;
            v = H[d];
            if ((d = tb.b(ub, H[d + 1], "polygon3d", c, vb, !1, T)) && d[0]) {
                d = d[0];
                var w = d.m;
                yc && (w = yc);
                e = Q(v + 1, e[0], e[0] + e[1])[0];
                v = Q(H[e[0] >> 2] + 1, e[0], e[0] + e[1]);
                e = new Int32Array(b,v[1][0],v[1][1] >> 2);
                k += e.length;
                if (q) {
                    d = new Int32Array(b,v[2][0],v[2][1] >> 2);
                    v = e;
                    for (var u = q, l = x, p = new DataView(u.buffer), n, h = 0; h < v.length; h += 3)
                        n = h / 3 * 7 + l,
                        u[n] = v[h] / 100,
                        u[n + 1] = v[h + 1] / 100,
                        u[n + 2] = v[h + 2] / 100,
                        u[n + 3] = d[h],
                        u[n + 4] = d[h + 1],
                        u[n + 5] = d[h + 2],
                        p.setUint8(4 * n + 24, w[0]),
                        p.setUint8(4 * n + 25, w[1]),
                        p.setUint8(4 * n + 26, w[2]),
                        p.setUint8(4 * n + 27, w[3]);
                    v = [];
                    for (d = 0; d < e.length / 3; d++)
                        v.push(d + m);
                    g.set(v, r);
                    x += e.length / 3 * 7;
                    r += v.length;
                    m += e.length / 3
                }
            }
        }
    }
    return k
}
function cd(b, a) {
    var c = []
      , q = [];
    a = a.useZoom;
    for (var g = 0; g < b.length; g++) {
        var k = b[g]
          , m = k[0] >> 2;
        if (24 === H[m + 1]) {
            m = Q(H[m] + 1, k[0], k[0] + k[1])[0];
            k = m[0] >> 2;
            var r = H[k];
            if ((k = tb.b(ub, H[k + 1], "polygon3d", a, vb, !1, T)) && k[0])
                for (k = k[0],
                k = k.m,
                yc && (k = yc),
                m = Q(r + 1, m[0], m[0] + m[1]),
                r = 0; r < m.length; r++) {
                    var x = m[r][0] / 4
                      , f = c
                      , e = q
                      , v = c.length / 10
                      , d = H[x + 1] / 100
                      , w = H[x + 2] / 100
                      , u = H[x + 3] / 100
                      , l = H[x + 4] / 100
                      , p = k[0]
                      , n = k[1]
                      , h = k[2];
                    for (x = 0; 360 >= x; x += 36) {
                        var E = Math.cos(x * Math.PI / 180) * w + u
                          , t = Math.sin(x * Math.PI / 180) * w + l
                          , A = E + u
                          , C = t + l;
                        f.push(E, t, 0, A, C, 0, p, n, h, 255);
                        f.push(E, t, d, A, C, 0, p, n, h, 255)
                    }
                    for (x = 0; 10 > x; x++)
                        f = 2 * x + v,
                        e.push(f, f + 2, f + 3),
                        e.push(f, f + 3, f + 1)
                }
        }
    }
    if (0 < c.length) {
        b = c.length / 10;
        a = new Float32Array(7 * b);
        g = new DataView(a.buffer);
        for (m = 0; m < b; m++)
            k = 7 * m,
            a[k] = c[10 * m],
            a[k + 1] = c[10 * m + 1],
            a[k + 2] = c[10 * m + 2],
            a[k + 3] = c[10 * m + 3],
            a[k + 4] = c[10 * m + 4],
            a[k + 5] = c[10 * m + 5],
            g.setUint8(4 * k + 24, c[10 * m + 6]),
            g.setUint8(4 * k + 25, c[10 * m + 7]),
            g.setUint8(4 * k + 26, c[10 * m + 8]),
            g.setUint8(4 * k + 27, c[10 * m + 9]);
        c = {
            vertex: a,
            index: new Uint16Array(q)
        }
    } else
        c = null;
    return c
}
;