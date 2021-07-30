import {
    h as e,
    Fragment as s
} from "../_snowpack/pkg/preact.hVpyV6Atzm6w.js";
import l from "./components/LinkedLogo.yr6MvfaTaLS4.js";
import {
    Match as i
} from "../_snowpack/pkg/preact-router/match.hMyu5uJ0t39_.js";
import {
    memo as c
} from "../_snowpack/pkg/preact/compat.Tn018xXnCsM5.js";
import {
    ENV as p
} from "./env.2JTs1vDsp_kk.js";
import {
    useConfig as u
} from "./api/index.Ir0Mm3dM5vL1.js";
import {
    useMemo as f
} from "../_snowpack/pkg/preact/hooks.5BhYGkK3CVDB.js";
import g, {
    Destination as t,
    Separator as a
} from "./components/NavigationDrawer.JOczqphIE9uB.js";
export default function d() {
    const {
        data: r
    } = u(), n = f(() => Object.keys(r.cameras), [r]);
    return e(g, {
        header: e(h, null)
    }, e(t, {
        href: "/",
        text: "Cameras"
    }), e(i, {
        path: "/cameras/:camera/:other?"
    }, ({
        matches: m
    }) => m ? e(s, null, e(a, null), n.map(o => e(t, {
        href: `/cameras/${o}`,
        text: o
    })), e(a, null)) : null), e(t, {
        href: "/events",
        text: "Events"
    }), e(t, {
        href: "/debug",
        text: "Debug"
    }), e(a, null), e("div", {
        className: "flex flex-grow"
    }), p !== "production" ? e(s, null, e(t, {
        href: "/styleguide",
        text: "Style Guide"
    }), e(a, null)) : null, e(t, {
        className: "self-end",
        href: "",
        text: ""
    }), e(t, {
        className: "self-end",
        href: "https://ai.wesss.nl/api/events",
        text: "API"
    }))
}
const h = c(() => e("div", {
    className: "text-gray-500"
}, e(l, null)));