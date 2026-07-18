import { jsx as e, jsxs as n, Fragment as G } from "react/jsx-runtime";
import * as d from "react";
import * as Pe from "@radix-ui/react-accordion";
import { ChevronDown as U, MapPin as ot, Receipt as kn, Phone as Tt, Mail as ha, Building2 as ye, X as ve, MoreHorizontal as dt, ChevronRight as de, Loader2 as lr, ChevronLeft as Ke, ArrowRight as zn, ArrowLeft as Dt, Check as Y, Eye as sr, Search as Je, Circle as ga, Calendar as Re, ChevronUp as Sn, Dot as jn, Minus as Cn, ArrowDownRight as Pn, ArrowUpRight as Rn, UploadCloud as Mn, FileText as Ne, Clock as It, Users as ir, Columns3 as or, Bookmark as Tn, RotateCcw as Dn, SlidersHorizontal as In, Filter as dr, ArrowUp as cr, ArrowDown as ur, Copy as Ft, Trash2 as mr, Image as Fn, Send as Ln, LineChart as On, Edit as An, PackagePlus as fr, ClipboardList as ba, CreditCard as xa, CheckCircle2 as Wn, Plus as Lt, MessageSquareText as $n, ChevronsUpDown as _n, Pencil as oa, File as $a, FileImage as Bn, FileVideo as Kn, AlertCircle as En, Sun as _a, Moon as Ba, Monitor as Zn, Truck as pr, ShoppingCart as Hn, Tag as hr, Eraser as Gn, Download as gr, LogOut as br, Bold as Un, Italic as qn, Underline as Yn, List as Xn, ListOrdered as Vn, ChevronsLeft as xr, ChevronsRight as yr, ArrowUpDown as Jn, Inbox as Qn, Bell as el, User as tl, Settings as al } from "lucide-react";
import { clsx as rl } from "clsx";
import { twMerge as nl } from "tailwind-merge";
import { cva as fe } from "class-variance-authority";
import * as ll from "@radix-ui/react-aspect-ratio";
import * as Ee from "@radix-ui/react-avatar";
import * as ya from "recharts";
import { BarChart as sl, CartesianGrid as Nr, XAxis as vr, YAxis as wr, Bar as il, PieChart as ol, Pie as dl, Cell as cl, LineChart as ul, Line as ml } from "recharts";
import { Slot as Te } from "@radix-ui/react-slot";
import { DayPicker as fl } from "react-day-picker";
import pl from "embla-carousel-react";
import * as da from "@radix-ui/react-checkbox";
import * as L from "@radix-ui/react-dropdown-menu";
import { Command as De } from "cmdk";
import * as O from "@radix-ui/react-dialog";
import * as A from "@radix-ui/react-context-menu";
import { format as Qe, isSameDay as kr, startOfWeek as hl, addDays as zr } from "date-fns";
import * as We from "@radix-ui/react-popover";
import { Drawer as Q } from "vaul";
import * as $ from "@radix-ui/react-select";
import * as Ot from "@radix-ui/react-hover-card";
import { OTPInput as gl, OTPInputContext as bl } from "input-otp";
import * as Sr from "@radix-ui/react-label";
import * as F from "@radix-ui/react-menubar";
import * as ca from "@radix-ui/react-progress";
import * as et from "@radix-ui/react-radio-group";
import * as Ce from "@radix-ui/react-scroll-area";
import * as jr from "@radix-ui/react-separator";
import * as Xe from "@radix-ui/react-slider";
import * as ua from "@radix-ui/react-switch";
import * as we from "@radix-ui/react-tabs";
import { Toaster as xl } from "sonner";
import { toast as Eu } from "sonner";
import * as Cr from "@radix-ui/react-toggle";
import * as At from "@radix-ui/react-toggle-group";
import * as $e from "@radix-ui/react-tooltip";
import { useDropzone as yl } from "react-dropzone";
import { useTheme as Nl } from "next-themes";
import { useReactTable as vl, getPaginationRowModel as wl, getFilteredRowModel as kl, getSortedRowModel as zl, getCoreRowModel as Sl, flexRender as ra } from "@tanstack/react-table";
function c(...t) {
  return nl(rl(t));
}
const Wc = Pe.Root, jl = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  Pe.Item,
  {
    ref: r,
    className: c("border-b border-border last:border-b-0", t),
    ...a
  }
));
jl.displayName = "AccordionItem";
const Cl = d.forwardRef(({ className: t, children: a, ...r }, l) => /* @__PURE__ */ e(Pe.Header, { className: "flex", children: /* @__PURE__ */ n(
  Pe.Trigger,
  {
    ref: l,
    className: c(
      "flex flex-1 items-center justify-between py-4 text-sm font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      t
    ),
    ...r,
    children: [
      a,
      /* @__PURE__ */ e(U, { className: "size-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
Cl.displayName = Pe.Trigger.displayName;
const Pl = d.forwardRef(({ className: t, children: a, ...r }, l) => /* @__PURE__ */ e(
  Pe.Content,
  {
    ref: l,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: /* @__PURE__ */ e("div", { className: c("pb-4 pt-0 text-muted-foreground", t), children: a })
  }
));
Pl.displayName = Pe.Content.displayName;
const Rl = fe(
  "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary-soft text-primary",
        success: "bg-success-soft text-success",
        warning: "bg-warning-soft text-warning",
        destructive: "bg-destructive-soft text-destructive",
        info: "bg-info-soft text-info",
        neutral: "bg-muted text-muted-foreground",
        outline: "border bg-card text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function R({ className: t, variant: a, ...r }) {
  return /* @__PURE__ */ e("div", { className: c(Rl({ variant: a }), t), ...r });
}
const T = d.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("div", { ref: r, className: c("juz-card", t), ...a })
);
T.displayName = "Card";
const Ml = d.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("div", { ref: r, className: c("flex flex-col gap-1.5 p-6", t), ...a })
);
Ml.displayName = "CardHeader";
const Tl = d.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("h3", { ref: r, className: c("text-xl font-bold leading-tight", t), ...a })
);
Tl.displayName = "CardTitle";
const Dl = d.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("p", { ref: r, className: c("text-sm text-muted-foreground", t), ...a })
);
Dl.displayName = "CardDescription";
const Il = d.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("div", { ref: r, className: c("p-6 pt-0", t), ...a })
);
Il.displayName = "CardContent";
const Fl = d.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("div", { ref: r, className: c("flex items-center gap-2 p-6 pt-0", t), ...a })
);
Fl.displayName = "CardFooter";
const Ll = fe(
  "inline-flex items-center justify-center rounded-lg [&_svg]:size-5",
  {
    variants: {
      tone: {
        primary: "bg-primary-soft text-primary",
        success: "bg-success-soft text-success",
        warning: "bg-warning-soft text-warning",
        destructive: "bg-destructive-soft text-destructive",
        muted: "bg-muted text-muted-foreground"
      },
      size: {
        sm: "size-8 [&_svg]:size-4",
        default: "size-10",
        lg: "size-12 [&_svg]:size-6"
      }
    },
    defaultVariants: { tone: "primary", size: "default" }
  }
), Wt = d.forwardRef(
  ({ className: t, tone: a, size: r, icon: l, children: s, ...i }, o) => /* @__PURE__ */ e(
    "span",
    {
      ref: o,
      className: c(Ll({ tone: a, size: r }), t),
      ...i,
      children: l ?? s
    }
  )
);
Wt.displayName = "IconTile";
function St({ icon: t, label: a, value: r }) {
  return /* @__PURE__ */ n("div", { className: "flex items-start gap-2", children: [
    /* @__PURE__ */ e("span", { className: "mt-0.5 inline-flex size-4 shrink-0 items-center justify-center text-muted-foreground [&_svg]:size-4", children: t }),
    /* @__PURE__ */ n("div", { className: "flex min-w-0 flex-col", children: [
      /* @__PURE__ */ e("span", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground", children: a }),
      /* @__PURE__ */ e("span", { className: "truncate text-sm font-semibold text-foreground", children: r })
    ] })
  ] });
}
const Ol = d.forwardRef(
  ({
    name: t,
    street: a,
    city: r,
    postalCode: l,
    country: s,
    tax: i,
    phone: o,
    email: u,
    isPrimary: m,
    className: f,
    ...p
  }, h) => /* @__PURE__ */ n(
    T,
    {
      ref: h,
      className: c("flex flex-col gap-4 p-6", f),
      ...p,
      children: [
        /* @__PURE__ */ n("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ e(Wt, { tone: "primary", icon: /* @__PURE__ */ e(ot, {}) }),
          /* @__PURE__ */ n("div", { className: "flex min-w-0 flex-1 flex-col gap-1", children: [
            /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e("span", { className: "truncate text-base font-bold text-foreground", children: t }),
              m ? /* @__PURE__ */ e(R, { variant: "success", children: "Główny" }) : null
            ] }),
            /* @__PURE__ */ e("span", { className: "text-sm text-muted-foreground", children: a }),
            /* @__PURE__ */ n("span", { className: "text-sm text-muted-foreground", children: [
              l,
              " ",
              r,
              s ? `, ${s}` : ""
            ] })
          ] })
        ] }),
        i || o || u ? /* @__PURE__ */ n("div", { className: "grid grid-cols-1 gap-3 border-t border-border pt-4 sm:grid-cols-2", children: [
          i ? /* @__PURE__ */ e(St, { icon: /* @__PURE__ */ e(kn, {}), label: "NIP", value: i }) : null,
          o ? /* @__PURE__ */ e(St, { icon: /* @__PURE__ */ e(Tt, {}), label: "Telefon", value: o }) : null,
          u ? /* @__PURE__ */ e(St, { icon: /* @__PURE__ */ e(ha, {}), label: "E-mail", value: u }) : null,
          !i && !o && !u ? /* @__PURE__ */ e(St, { icon: /* @__PURE__ */ e(ye, {}), label: "Firma", value: t }) : null
        ] }) : null
      ]
    }
  )
);
Ol.displayName = "AddressCard";
const Al = fe(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:size-4",
  {
    variants: {
      variant: {
        default: "bg-card text-foreground [&>svg]:text-foreground border-border",
        info: "bg-primary-soft/45 text-foreground border-primary/30 [&>svg]:text-primary",
        success: "bg-success-soft text-foreground border-success/30 [&>svg]:text-success",
        warning: "bg-warning-soft text-foreground border-warning/40 [&>svg]:text-warning",
        destructive: "bg-destructive-soft text-foreground border-destructive/30 [&>svg]:text-destructive"
      }
    },
    defaultVariants: { variant: "default" }
  }
), Wl = d.forwardRef(({ className: t, variant: a, ...r }, l) => /* @__PURE__ */ e(
  "div",
  {
    ref: l,
    role: "alert",
    className: c(Al({ variant: a }), t),
    ...r
  }
));
Wl.displayName = "Alert";
const $l = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  "h5",
  {
    ref: r,
    className: c("mb-1 font-semibold leading-none tracking-tight", t),
    ...a
  }
));
$l.displayName = "AlertTitle";
const _l = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  "div",
  {
    ref: r,
    className: c("text-sm text-muted-foreground [&_p]:leading-relaxed", t),
    ...a
  }
));
_l.displayName = "AlertDescription";
const Bl = O.Root, $c = O.Trigger, Kl = O.Portal, _c = O.Close, Pr = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  O.Overlay,
  {
    className: c(
      "fixed inset-0 z-50 bg-foreground/28 backdrop-blur-[2px] data-[state=closed]:animate-out data-[state=open]:animate-in",
      t
    ),
    ref: r,
    ...a
  }
));
Pr.displayName = O.Overlay.displayName;
const Rr = d.forwardRef(({ className: t, children: a, hideClose: r = !1, ...l }, s) => /* @__PURE__ */ n(Kl, { children: [
  /* @__PURE__ */ e(Pr, {}),
  /* @__PURE__ */ n(
    O.Content,
    {
      className: c(
        "fixed left-1/2 top-1/2 z-50 grid w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border bg-card text-card-foreground shadow-juz-lg",
        "data-[state=closed]:animate-out data-[state=open]:animate-in",
        t
      ),
      ref: s,
      ...l,
      children: [
        a,
        r ? null : /* @__PURE__ */ e(
          O.Close,
          {
            "aria-label": "Zamknij",
            className: "absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-md border bg-card text-muted-foreground shadow-juz-sm transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
            children: /* @__PURE__ */ e(ve, { className: "size-4" })
          }
        )
      ]
    }
  )
] }));
Rr.displayName = O.Content.displayName;
function Bc({ className: t, ...a }) {
  return /* @__PURE__ */ e("div", { className: c("space-y-2 border-b p-5 pr-14", t), ...a });
}
function Kc({ className: t, ...a }) {
  return /* @__PURE__ */ e("div", { className: c("flex flex-col-reverse gap-2 p-5 sm:flex-row sm:justify-end", t), ...a });
}
const El = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(O.Title, { className: c("text-xl font-extrabold text-foreground", t), ref: r, ...a }));
El.displayName = O.Title.displayName;
const Zl = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  O.Description,
  {
    className: c("text-sm leading-6 text-muted-foreground", t),
    ref: r,
    ...a
  }
));
Zl.displayName = O.Description.displayName;
const Ec = ll.Root, tt = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  Ee.Root,
  {
    ref: r,
    className: c(
      "relative flex size-10 shrink-0 overflow-hidden rounded-full",
      t
    ),
    ...a
  }
));
tt.displayName = Ee.Root.displayName;
const $t = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  Ee.Image,
  {
    ref: r,
    className: c("aspect-square size-full", t),
    ...a
  }
));
$t.displayName = Ee.Image.displayName;
const at = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  Ee.Fallback,
  {
    ref: r,
    className: c(
      "flex size-full items-center justify-center rounded-full bg-primary-soft text-sm font-semibold text-primary",
      t
    ),
    ...a
  }
));
at.displayName = Ee.Fallback.displayName;
const Hl = { light: "", dark: ".dark" }, Mr = d.createContext(null);
function Gl() {
  const t = d.useContext(Mr);
  if (!t) throw new Error("useChart musi być w <ChartContainer />");
  return t;
}
const _t = d.forwardRef(({ id: t, className: a, children: r, config: l, ...s }, i) => {
  const o = d.useId(), u = `chart-${t ?? o.replace(/:/g, "")}`;
  return /* @__PURE__ */ e(Mr.Provider, { value: { config: l }, children: /* @__PURE__ */ n(
    "div",
    {
      "data-chart": u,
      ref: i,
      className: c(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line]:stroke-border/60 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
        a
      ),
      ...s,
      children: [
        /* @__PURE__ */ e(Ul, { id: u, config: l }),
        /* @__PURE__ */ e(ya.ResponsiveContainer, { children: r })
      ]
    }
  ) });
});
_t.displayName = "ChartContainer";
const Ul = ({ id: t, config: a }) => {
  const r = Object.entries(a).filter(
    ([, l]) => l.theme || l.color
  );
  return r.length ? /* @__PURE__ */ e(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(Hl).map(
          ([l, s]) => `
${s} [data-chart=${t}] {
${r.map(([i, o]) => {
            var m;
            const u = ((m = o.theme) == null ? void 0 : m[l]) || o.color;
            return u ? `  --color-${i}: ${u};` : null;
          }).filter(Boolean).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, Na = ya.Tooltip, Bt = d.forwardRef(
  ({
    active: t,
    payload: a,
    className: r,
    indicator: l = "dot",
    hideLabel: s = !1,
    hideIndicator: i = !1,
    label: o,
    labelFormatter: u,
    labelClassName: m,
    formatter: f,
    color: p,
    nameKey: h,
    labelKey: g
  }, b) => {
    const { config: x } = Gl();
    return !t || !(a != null && a.length) ? null : /* @__PURE__ */ n(
      "div",
      {
        ref: b,
        className: c(
          "grid min-w-32 items-start gap-1.5 rounded-lg border bg-background px-2.5 py-1.5 text-xs shadow-juz",
          r
        ),
        children: [
          s ? null : /* @__PURE__ */ e("div", { className: c("font-semibold", m), children: u ? u(o, a) : o }),
          /* @__PURE__ */ e("div", { className: "grid gap-1.5", children: a.map((w, S) => {
            var W;
            const z = `${h || w.name || w.dataKey || "value"}`, y = x[z], j = p || ((W = w.payload) == null ? void 0 : W.fill) || w.color;
            return /* @__PURE__ */ n(
              "div",
              {
                className: "flex w-full items-center gap-2",
                children: [
                  i ? null : /* @__PURE__ */ e(
                    "div",
                    {
                      className: c(
                        "shrink-0 rounded-[2px] border-border bg-(--color-bg)",
                        l === "dot" && "size-2.5 rounded-full",
                        l === "line" && "h-2.5 w-1 rounded-sm",
                        l === "dashed" && "h-2.5 w-3 border-[1.5px] border-dashed bg-transparent"
                      ),
                      style: {
                        "--color-bg": j,
                        "--color-border": j
                      }
                    }
                  ),
                  /* @__PURE__ */ n("div", { className: "flex flex-1 justify-between leading-none", children: [
                    /* @__PURE__ */ e("span", { className: "text-muted-foreground", children: (y == null ? void 0 : y.label) || w.name }),
                    /* @__PURE__ */ e("span", { className: "font-mono font-semibold tabular-nums", children: f && w.value !== void 0 ? f(w.value, w.name, w, S, w.payload) : w.value })
                  ] })
                ]
              },
              w.dataKey || S
            );
          }) })
        ]
      }
    );
  }
);
Bt.displayName = "ChartTooltipContent";
const Zc = ya.Legend, Hc = ({
  data: t,
  categoryKey: a,
  series: r,
  config: l,
  stacked: s,
  className: i,
  hideGrid: o,
  hideAxis: u
}) => {
  const m = l || r.reduce(
    (f, p, h) => ({
      ...f,
      [p.key]: {
        label: p.label ?? p.key,
        color: p.color ?? `hsl(var(--chart-${h % 5 + 1}, var(--primary)))`
      }
    }),
    {}
  );
  return /* @__PURE__ */ e(_t, { config: m, className: c("aspect-auto h-64 w-full", i), children: /* @__PURE__ */ n(sl, { data: t, children: [
    o ? null : /* @__PURE__ */ e(Nr, { vertical: !1 }),
    u ? null : /* @__PURE__ */ n(G, { children: [
      /* @__PURE__ */ e(
        vr,
        {
          dataKey: a,
          tickLine: !1,
          axisLine: !1,
          tickMargin: 8
        }
      ),
      /* @__PURE__ */ e(wr, { tickLine: !1, axisLine: !1, width: 32 })
    ] }),
    /* @__PURE__ */ e(Na, { content: /* @__PURE__ */ e(Bt, {}) }),
    r.map((f) => /* @__PURE__ */ e(
      il,
      {
        dataKey: f.key,
        stackId: s ? "stack" : void 0,
        fill: `var(--color-${f.key})`,
        radius: s ? 0 : 6
      },
      f.key
    ))
  ] }) });
}, va = d.forwardRef(({ ...t }, a) => /* @__PURE__ */ e("nav", { ref: a, "aria-label": "breadcrumb", ...t }));
va.displayName = "Breadcrumb";
const wa = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  "ol",
  {
    ref: r,
    className: c(
      "flex flex-wrap items-center gap-1.5 wrap-break-word text-sm text-muted-foreground sm:gap-2.5",
      t
    ),
    ...a
  }
));
wa.displayName = "BreadcrumbList";
const ka = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  "li",
  {
    ref: r,
    className: c("inline-flex items-center gap-1.5", t),
    ...a
  }
));
ka.displayName = "BreadcrumbItem";
const za = d.forwardRef(({ asChild: t, className: a, ...r }, l) => /* @__PURE__ */ e(
  t ? Te : "a",
  {
    ref: l,
    className: c("transition-colors hover:text-foreground", a),
    ...r
  }
));
za.displayName = "BreadcrumbLink";
const Sa = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  "span",
  {
    ref: r,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: c("font-semibold text-foreground", t),
    ...a
  }
));
Sa.displayName = "BreadcrumbPage";
const ja = ({
  children: t,
  className: a,
  ...r
}) => /* @__PURE__ */ e(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: c("[&>svg]:size-3.5", a),
    ...r,
    children: t ?? /* @__PURE__ */ e(de, {})
  }
);
ja.displayName = "BreadcrumbSeparator";
const ql = ({
  className: t,
  ...a
}) => /* @__PURE__ */ n(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: c("flex size-9 items-center justify-center", t),
    ...a,
    children: [
      /* @__PURE__ */ e(dt, { className: "size-4" }),
      /* @__PURE__ */ e("span", { className: "sr-only", children: "More" })
    ]
  }
);
ql.displayName = "BreadcrumbEllipsis";
const Yl = fe("animate-spin text-muted-foreground", {
  variants: {
    size: {
      sm: "size-4",
      default: "size-5",
      lg: "size-8"
    },
    variant: {
      default: "text-muted-foreground",
      primary: "text-primary",
      destructive: "text-destructive",
      success: "text-success"
    }
  },
  defaultVariants: {
    size: "default",
    variant: "default"
  }
}), Tr = d.forwardRef(
  ({ className: t, size: a, variant: r, label: l = "Ładowanie", ...s }, i) => /* @__PURE__ */ n(
    "div",
    {
      ref: i,
      role: "status",
      "aria-live": "polite",
      "aria-label": l,
      className: c("inline-flex items-center justify-center", t),
      ...s,
      children: [
        /* @__PURE__ */ e(lr, { className: c(Yl({ size: a, variant: r })) }),
        /* @__PURE__ */ e("span", { className: "sr-only", children: l })
      ]
    }
  )
);
Tr.displayName = "Spinner";
const Rt = fe(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-juz hover:bg-primary/90",
        secondary: "border bg-card text-foreground shadow-juz-sm hover:bg-muted",
        ghost: "border border-border bg-background text-foreground shadow-juz-sm hover:bg-muted hover:text-foreground",
        success: "bg-success text-success-foreground shadow-juz-sm hover:bg-success/90",
        warning: "bg-warning text-warning-foreground shadow-juz-sm hover:bg-warning/90",
        destructive: "bg-destructive text-destructive-foreground shadow-juz-sm hover:bg-destructive/90",
        outline: "border bg-background text-foreground shadow-juz-sm hover:bg-muted",
        subtle: "bg-muted text-muted-foreground hover:bg-muted/70",
        link: "text-primary underline-offset-4 hover:underline shadow-none"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-sm px-3",
        lg: "h-12 rounded-lg px-6 text-base",
        icon: "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), v = d.forwardRef(
  ({ className: t, variant: a, size: r, asChild: l = !1, isLoading: s = !1, disabled: i, children: o, ...u }, m) => /* @__PURE__ */ n(
    l ? Te : "button",
    {
      className: c(Rt({ variant: a, size: r, className: t })),
      ref: m,
      disabled: i || s,
      "aria-busy": s || void 0,
      ...u,
      children: [
        s ? /* @__PURE__ */ e(Tr, { size: r === "lg" ? "default" : "sm", className: "text-current" }) : null,
        o
      ]
    }
  )
);
v.displayName = "Button";
const Xl = d.forwardRef(
  ({ className: t, orientation: a = "horizontal", ...r }, l) => /* @__PURE__ */ e(
    "div",
    {
      ref: l,
      role: "group",
      className: c(
        "inline-flex shadow-juz-sm",
        a === "horizontal" ? "flex-row [&>button]:rounded-none [&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md [&>button+button]:-ml-px" : "flex-col [&>button]:rounded-none [&>button:first-child]:rounded-t-md [&>button:last-child]:rounded-b-md [&>button+button]:-mt-px",
        t
      ),
      ...r
    }
  )
);
Xl.displayName = "ButtonGroup";
function na(t) {
  return (a = {}) => {
    const r = a.width ? String(a.width) : t.defaultWidth;
    return t.formats[r] || t.formats[t.defaultWidth];
  };
}
function Ue(t) {
  return (a, r) => {
    const l = r != null && r.context ? String(r.context) : "standalone";
    let s;
    if (l === "formatting" && t.formattingValues) {
      const o = t.defaultFormattingWidth || t.defaultWidth, u = r != null && r.width ? String(r.width) : o;
      s = t.formattingValues[u] || t.formattingValues[o];
    } else {
      const o = t.defaultWidth, u = r != null && r.width ? String(r.width) : t.defaultWidth;
      s = t.values[u] || t.values[o];
    }
    const i = t.argumentCallback ? t.argumentCallback(a) : a;
    return s[i];
  };
}
function qe(t) {
  return (a, r = {}) => {
    const l = r.width, s = l && t.matchPatterns[l] || t.matchPatterns[t.defaultMatchWidth], i = a.match(s);
    if (!i)
      return null;
    const o = i[0], u = l && t.parsePatterns[l] || t.parsePatterns[t.defaultParseWidth], m = Array.isArray(u) ? Jl(u, (h) => h.test(o)) : (
      // [TODO] -- I challenge you to fix the type
      Vl(u, (h) => h.test(o))
    );
    let f;
    f = t.valueCallback ? t.valueCallback(m) : m, f = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(f)
    ) : f;
    const p = a.slice(o.length);
    return { value: f, rest: p };
  };
}
function Vl(t, a) {
  for (const r in t)
    if (Object.prototype.hasOwnProperty.call(t, r) && a(t[r]))
      return r;
}
function Jl(t, a) {
  for (let r = 0; r < t.length; r++)
    if (a(t[r]))
      return r;
}
function Ql(t) {
  return (a, r = {}) => {
    const l = a.match(t.matchPattern);
    if (!l) return null;
    const s = l[0], i = a.match(t.parsePattern);
    if (!i) return null;
    let o = t.valueCallback ? t.valueCallback(i[0]) : i[0];
    o = r.valueCallback ? r.valueCallback(o) : o;
    const u = a.slice(s.length);
    return { value: o, rest: u };
  };
}
const Ka = Symbol.for("constructDateFrom");
function Dr(t, a) {
  return typeof t == "function" ? t(a) : t && typeof t == "object" && Ka in t ? t[Ka](a) : t instanceof Date ? new t.constructor(a) : new Date(a);
}
function es(t, ...a) {
  const r = Dr.bind(
    null,
    t || a.find((l) => typeof l == "object")
  );
  return a.map(r);
}
let ts = {};
function as() {
  return ts;
}
function rs(t, a) {
  return Dr(a || t, t);
}
function Ea(t, a) {
  var u, m, f, p;
  const r = as(), l = (a == null ? void 0 : a.weekStartsOn) ?? ((m = (u = a == null ? void 0 : a.locale) == null ? void 0 : u.options) == null ? void 0 : m.weekStartsOn) ?? r.weekStartsOn ?? ((p = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : p.weekStartsOn) ?? 0, s = rs(t, a == null ? void 0 : a.in), i = s.getDay(), o = (i < l ? 7 : 0) + i - l;
  return s.setDate(s.getDate() - o), s.setHours(0, 0, 0, 0), s;
}
function ns(t, a, r) {
  const [l, s] = es(
    r == null ? void 0 : r.in,
    t,
    a
  );
  return +Ea(l, r) == +Ea(s, r);
}
const ls = {
  lessThanXSeconds: {
    one: {
      regular: "mniej niż sekunda",
      past: "mniej niż sekundę",
      future: "mniej niż sekundę"
    },
    twoFour: "mniej niż {{count}} sekundy",
    other: "mniej niż {{count}} sekund"
  },
  xSeconds: {
    one: {
      regular: "sekunda",
      past: "sekundę",
      future: "sekundę"
    },
    twoFour: "{{count}} sekundy",
    other: "{{count}} sekund"
  },
  halfAMinute: {
    one: "pół minuty",
    twoFour: "pół minuty",
    other: "pół minuty"
  },
  lessThanXMinutes: {
    one: {
      regular: "mniej niż minuta",
      past: "mniej niż minutę",
      future: "mniej niż minutę"
    },
    twoFour: "mniej niż {{count}} minuty",
    other: "mniej niż {{count}} minut"
  },
  xMinutes: {
    one: {
      regular: "minuta",
      past: "minutę",
      future: "minutę"
    },
    twoFour: "{{count}} minuty",
    other: "{{count}} minut"
  },
  aboutXHours: {
    one: {
      regular: "około godziny",
      past: "około godziny",
      future: "około godzinę"
    },
    twoFour: "około {{count}} godziny",
    other: "około {{count}} godzin"
  },
  xHours: {
    one: {
      regular: "godzina",
      past: "godzinę",
      future: "godzinę"
    },
    twoFour: "{{count}} godziny",
    other: "{{count}} godzin"
  },
  xDays: {
    one: {
      regular: "dzień",
      past: "dzień",
      future: "1 dzień"
    },
    twoFour: "{{count}} dni",
    other: "{{count}} dni"
  },
  aboutXWeeks: {
    one: "około tygodnia",
    twoFour: "około {{count}} tygodni",
    other: "około {{count}} tygodni"
  },
  xWeeks: {
    one: "tydzień",
    twoFour: "{{count}} tygodnie",
    other: "{{count}} tygodni"
  },
  aboutXMonths: {
    one: "około miesiąc",
    twoFour: "około {{count}} miesiące",
    other: "około {{count}} miesięcy"
  },
  xMonths: {
    one: "miesiąc",
    twoFour: "{{count}} miesiące",
    other: "{{count}} miesięcy"
  },
  aboutXYears: {
    one: "około rok",
    twoFour: "około {{count}} lata",
    other: "około {{count}} lat"
  },
  xYears: {
    one: "rok",
    twoFour: "{{count}} lata",
    other: "{{count}} lat"
  },
  overXYears: {
    one: "ponad rok",
    twoFour: "ponad {{count}} lata",
    other: "ponad {{count}} lat"
  },
  almostXYears: {
    one: "prawie rok",
    twoFour: "prawie {{count}} lata",
    other: "prawie {{count}} lat"
  }
};
function ss(t, a) {
  if (a === 1)
    return t.one;
  const r = a % 100;
  if (r <= 20 && r > 10)
    return t.other;
  const l = r % 10;
  return l >= 2 && l <= 4 ? t.twoFour : t.other;
}
function la(t, a, r) {
  const l = ss(t, a);
  return (typeof l == "string" ? l : l[r]).replace("{{count}}", String(a));
}
const is = (t, a, r) => {
  const l = ls[t];
  return r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "za " + la(l, a, "future") : la(l, a, "past") + " temu" : la(l, a, "regular");
}, os = {
  full: "EEEE, do MMMM y",
  long: "do MMMM y",
  medium: "do MMM y",
  short: "dd.MM.y"
}, ds = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, cs = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, us = {
  date: na({
    formats: os,
    defaultWidth: "full"
  }),
  time: na({
    formats: ds,
    defaultWidth: "full"
  }),
  dateTime: na({
    formats: cs,
    defaultWidth: "full"
  })
}, ms = {
  masculine: "ostatni",
  feminine: "ostatnia"
}, fs = {
  masculine: "ten",
  feminine: "ta"
}, ps = {
  masculine: "następny",
  feminine: "następna"
}, hs = {
  0: "feminine",
  1: "masculine",
  2: "masculine",
  3: "feminine",
  4: "masculine",
  5: "masculine",
  6: "feminine"
};
function Za(t, a, r, l) {
  let s;
  if (ns(a, r, l))
    s = fs;
  else if (t === "lastWeek")
    s = ms;
  else if (t === "nextWeek")
    s = ps;
  else
    throw new Error(`Cannot determine adjectives for token ${t}`);
  const i = a.getDay(), o = hs[i];
  return `'${s[o]}' eeee 'o' p`;
}
const gs = {
  lastWeek: Za,
  yesterday: "'wczoraj o' p",
  today: "'dzisiaj o' p",
  tomorrow: "'jutro o' p",
  nextWeek: Za,
  other: "P"
}, bs = (t, a, r, l) => {
  const s = gs[t];
  return typeof s == "function" ? s(t, a, r, l) : s;
}, xs = {
  narrow: ["p.n.e.", "n.e."],
  abbreviated: ["p.n.e.", "n.e."],
  wide: ["przed naszą erą", "naszej ery"]
}, ys = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["I kw.", "II kw.", "III kw.", "IV kw."],
  wide: ["I kwartał", "II kwartał", "III kwartał", "IV kwartał"]
}, Ns = {
  narrow: ["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"],
  abbreviated: [
    "sty",
    "lut",
    "mar",
    "kwi",
    "maj",
    "cze",
    "lip",
    "sie",
    "wrz",
    "paź",
    "lis",
    "gru"
  ],
  wide: [
    "styczeń",
    "luty",
    "marzec",
    "kwiecień",
    "maj",
    "czerwiec",
    "lipiec",
    "sierpień",
    "wrzesień",
    "październik",
    "listopad",
    "grudzień"
  ]
}, vs = {
  narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
  abbreviated: [
    "sty",
    "lut",
    "mar",
    "kwi",
    "maj",
    "cze",
    "lip",
    "sie",
    "wrz",
    "paź",
    "lis",
    "gru"
  ],
  wide: [
    "stycznia",
    "lutego",
    "marca",
    "kwietnia",
    "maja",
    "czerwca",
    "lipca",
    "sierpnia",
    "września",
    "października",
    "listopada",
    "grudnia"
  ]
}, ws = {
  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
  short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
  abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
  wide: [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota"
  ]
}, ks = {
  narrow: ["n", "p", "w", "ś", "c", "p", "s"],
  short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
  abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
  wide: [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota"
  ]
}, zs = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "półn.",
    noon: "poł",
    morning: "rano",
    afternoon: "popoł.",
    evening: "wiecz.",
    night: "noc"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "północ",
    noon: "południe",
    morning: "rano",
    afternoon: "popołudnie",
    evening: "wieczór",
    night: "noc"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "północ",
    noon: "południe",
    morning: "rano",
    afternoon: "popołudnie",
    evening: "wieczór",
    night: "noc"
  }
}, Ss = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "o półn.",
    noon: "w poł.",
    morning: "rano",
    afternoon: "po poł.",
    evening: "wiecz.",
    night: "w nocy"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "o północy",
    noon: "w południe",
    morning: "rano",
    afternoon: "po południu",
    evening: "wieczorem",
    night: "w nocy"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "o północy",
    noon: "w południe",
    morning: "rano",
    afternoon: "po południu",
    evening: "wieczorem",
    night: "w nocy"
  }
}, js = (t, a) => String(t), Cs = {
  ordinalNumber: js,
  era: Ue({
    values: xs,
    defaultWidth: "wide"
  }),
  quarter: Ue({
    values: ys,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: Ue({
    values: Ns,
    defaultWidth: "wide",
    formattingValues: vs,
    defaultFormattingWidth: "wide"
  }),
  day: Ue({
    values: ws,
    defaultWidth: "wide",
    formattingValues: ks,
    defaultFormattingWidth: "wide"
  }),
  dayPeriod: Ue({
    values: zs,
    defaultWidth: "wide",
    formattingValues: Ss,
    defaultFormattingWidth: "wide"
  })
}, Ps = /^(\d+)?/i, Rs = /\d+/i, Ms = {
  narrow: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
  abbreviated: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
  wide: /^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i
}, Ts = {
  any: [/^p/i, /^n/i]
}, Ds = {
  narrow: /^[1234]/i,
  abbreviated: /^(I|II|III|IV)\s*kw\.?/i,
  wide: /^(I|II|III|IV)\s*kwarta(ł|l)/i
}, Is = {
  narrow: [/1/i, /2/i, /3/i, /4/i],
  any: [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i]
}, Fs = {
  narrow: /^[slmkcwpg]/i,
  abbreviated: /^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,
  wide: /^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i
}, Ls = {
  narrow: [
    /^s/i,
    /^l/i,
    /^m/i,
    /^k/i,
    /^m/i,
    /^c/i,
    /^l/i,
    /^s/i,
    /^w/i,
    /^p/i,
    /^l/i,
    /^g/i
  ],
  any: [
    /^st/i,
    /^lu/i,
    /^mar/i,
    /^k/i,
    /^maj/i,
    /^c/i,
    /^lip/i,
    /^si/i,
    /^w/i,
    /^p/i,
    /^lis/i,
    /^g/i
  ]
}, Os = {
  narrow: /^[npwścs]/i,
  short: /^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,
  abbreviated: /^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,
  wide: /^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i
}, As = {
  narrow: [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i],
  abbreviated: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pt/i, /^so/i],
  any: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i]
}, Ws = {
  narrow: /^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,
  any: /^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i
}, $s = {
  narrow: {
    am: /^a$/i,
    pm: /^p$/i,
    midnight: /pó(ł|l)n/i,
    noon: /po(ł|l)/i,
    morning: /rano/i,
    afternoon: /po\s*po(ł|l)/i,
    evening: /wiecz/i,
    night: /noc/i
  },
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /pó(ł|l)n/i,
    noon: /po(ł|l)/i,
    morning: /rano/i,
    afternoon: /po\s*po(ł|l)/i,
    evening: /wiecz/i,
    night: /noc/i
  }
}, _s = {
  ordinalNumber: Ql({
    matchPattern: Ps,
    parsePattern: Rs,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: qe({
    matchPatterns: Ms,
    defaultMatchWidth: "wide",
    parsePatterns: Ts,
    defaultParseWidth: "any"
  }),
  quarter: qe({
    matchPatterns: Ds,
    defaultMatchWidth: "wide",
    parsePatterns: Is,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: qe({
    matchPatterns: Fs,
    defaultMatchWidth: "wide",
    parsePatterns: Ls,
    defaultParseWidth: "any"
  }),
  day: qe({
    matchPatterns: Os,
    defaultMatchWidth: "wide",
    parsePatterns: As,
    defaultParseWidth: "any"
  }),
  dayPeriod: qe({
    matchPatterns: Ws,
    defaultMatchWidth: "any",
    parsePatterns: $s,
    defaultParseWidth: "any"
  })
}, _e = {
  code: "pl",
  formatDistance: is,
  formatLong: us,
  formatRelative: bs,
  localize: Cs,
  match: _s,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
function ct({
  className: t,
  classNames: a,
  showOutsideDays: r = !0,
  ...l
}) {
  return /* @__PURE__ */ e(
    fl,
    {
      locale: _e,
      showOutsideDays: r,
      className: c("p-3", t),
      classNames: {
        months: "flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-semibold",
        nav: "space-x-1 flex items-center",
        button_previous: c(
          Rt({ variant: "ghost", size: "icon" }),
          "size-8 bg-transparent p-0 opacity-70 hover:opacity-100 absolute left-1"
        ),
        button_next: c(
          Rt({ variant: "ghost", size: "icon" }),
          "size-8 bg-transparent p-0 opacity-70 hover:opacity-100 absolute right-1"
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday: "text-muted-foreground rounded-md w-9 font-normal text-[0.75rem] leading-[1.5]",
        week: "flex w-full mt-2",
        day: c(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
          "has-aria-[selected]:bg-primary-soft",
          "[&:has([aria-selected].day-range-end)]:rounded-r-md",
          "[&:has([aria-selected].day-outside)]:bg-primary-soft/40"
        ),
        day_button: c(
          Rt({ variant: "ghost" }),
          "size-9 p-0 font-normal aria-selected:opacity-100"
        ),
        range_end: "day-range-end",
        selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        today: "bg-muted text-foreground",
        // Outside (adjacent-month) days are decorative — but axe-core still
        // checks their text contrast. `opacity-50` on `text-muted-foreground`
        // blends to ~#878a92 on a white card (~3.4:1, FAIL). Drop the opacity
        // and rely on the tinted `bg-primary-soft/40` parent to keep outside
        // days visually de-emphasised without dropping below WCAG AA in
        // either light or dark mode (muted-foreground alone reads ~5.4:1).
        outside: "day-outside text-muted-foreground aria-selected:bg-primary-soft/40 aria-selected:text-muted-foreground",
        // `disabled` calendar buttons get the native `disabled` attribute from
        // react-day-picker which axe-core's color-contrast rule skips — so
        // the opacity here is fine and preserves the "unavailable" look.
        disabled: "text-muted-foreground opacity-50",
        range_middle: "aria-selected:bg-primary-soft aria-selected:text-foreground",
        hidden: "invisible",
        ...a
      },
      modifiersClassNames: {
        selected: "[&_button]:bg-primary [&_button]:text-primary-foreground [&_button]:hover:bg-primary [&_button]:hover:text-primary-foreground [&_button]:focus:bg-primary [&_button]:focus:text-primary-foreground"
      },
      components: {
        Chevron: ({ orientation: s, ...i }) => s === "left" ? /* @__PURE__ */ e(Ke, { className: "size-4", ...i }) : /* @__PURE__ */ e(de, { className: "size-4", ...i })
      },
      ...l
    }
  );
}
ct.displayName = "Calendar";
const Ir = d.createContext(null);
function Kt() {
  const t = d.useContext(Ir);
  if (!t) throw new Error("useCarousel musi być w <Carousel />");
  return t;
}
const Bs = d.forwardRef(
  ({
    orientation: t = "horizontal",
    opts: a,
    setApi: r,
    plugins: l,
    className: s,
    children: i,
    ...o
  }, u) => {
    const [m, f] = pl(
      { ...a, axis: t === "horizontal" ? "x" : "y" },
      l
    ), [p, h] = d.useState(!1), [g, b] = d.useState(!1), x = d.useCallback((w) => {
      w && (h(w.canScrollPrev()), b(w.canScrollNext()));
    }, []);
    return d.useEffect(() => {
      !f || !r || r(f);
    }, [f, r]), d.useEffect(() => {
      if (f)
        return x(f), f.on("reInit", x), f.on("select", x), () => {
          f == null || f.off("select", x);
        };
    }, [f, x]), /* @__PURE__ */ e(
      Ir.Provider,
      {
        value: {
          carouselRef: m,
          api: f,
          opts: a,
          orientation: t,
          scrollPrev: () => f == null ? void 0 : f.scrollPrev(),
          scrollNext: () => f == null ? void 0 : f.scrollNext(),
          canScrollPrev: p,
          canScrollNext: g
        },
        children: /* @__PURE__ */ e(
          "div",
          {
            ref: u,
            className: c("relative", s),
            role: "region",
            "aria-roledescription": "carousel",
            ...o,
            children: i
          }
        )
      }
    );
  }
);
Bs.displayName = "Carousel";
const Ks = d.forwardRef(({ className: t, ...a }, r) => {
  const { carouselRef: l, orientation: s } = Kt();
  return /* @__PURE__ */ e("div", { ref: l, className: "overflow-hidden", children: /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      className: c(
        "flex",
        s === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        t
      ),
      ...a
    }
  ) });
});
Ks.displayName = "CarouselContent";
const Es = d.forwardRef(({ className: t, ...a }, r) => {
  const { orientation: l } = Kt();
  return /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      role: "group",
      "aria-roledescription": "slide",
      className: c(
        "min-w-0 shrink-0 grow-0 basis-full",
        l === "horizontal" ? "pl-4" : "pt-4",
        t
      ),
      ...a
    }
  );
});
Es.displayName = "CarouselItem";
const Zs = d.forwardRef(({ className: t, variant: a = "outline", size: r = "icon", ...l }, s) => {
  const { orientation: i, scrollPrev: o, canScrollPrev: u } = Kt();
  return /* @__PURE__ */ n(
    v,
    {
      ref: s,
      variant: a,
      size: r,
      className: c(
        "absolute size-9 rounded-full",
        i === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        t
      ),
      disabled: !u,
      onClick: o,
      ...l,
      children: [
        /* @__PURE__ */ e(Dt, { className: "size-4" }),
        /* @__PURE__ */ e("span", { className: "sr-only", children: "Poprzednie" })
      ]
    }
  );
});
Zs.displayName = "CarouselPrevious";
const Hs = d.forwardRef(({ className: t, variant: a = "outline", size: r = "icon", ...l }, s) => {
  const { orientation: i, scrollNext: o, canScrollNext: u } = Kt();
  return /* @__PURE__ */ n(
    v,
    {
      ref: s,
      variant: a,
      size: r,
      className: c(
        "absolute size-9 rounded-full",
        i === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        t
      ),
      disabled: !u,
      onClick: o,
      ...l,
      children: [
        /* @__PURE__ */ e(zn, { className: "size-4" }),
        /* @__PURE__ */ e("span", { className: "sr-only", children: "Następne" })
      ]
    }
  );
});
Hs.displayName = "CarouselNext";
const Be = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  da.Root,
  {
    ref: r,
    className: c(
      "peer size-5 shrink-0 rounded-md border border-input bg-background shadow-juz-sm transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground",
      t
    ),
    ...a,
    children: /* @__PURE__ */ e(
      da.Indicator,
      {
        className: c("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ e(Y, { className: "size-3.5", strokeWidth: 3 })
      }
    )
  }
));
Be.displayName = da.Root.displayName;
function Gc({
  trigger: t,
  children: a,
  defaultOpen: r = !1,
  open: l,
  disabled: s = !1,
  onOpenChange: i,
  className: o,
  ...u
}) {
  const [m, f] = d.useState(r), p = l !== void 0, h = p ? l : m, g = () => {
    if (s) return;
    const b = !h;
    p || f(b), i == null || i(b);
  };
  return /* @__PURE__ */ n("div", { className: c("rounded-md border bg-card shadow-juz-sm", o), ...u, children: [
    /* @__PURE__ */ n(
      "button",
      {
        "aria-expanded": h,
        className: "flex w-full items-center justify-between gap-4 px-4 py-3 text-left font-semibold transition-colors hover:bg-primary-soft/45 disabled:cursor-not-allowed disabled:opacity-50",
        disabled: s,
        onClick: g,
        type: "button",
        children: [
          /* @__PURE__ */ e("span", { children: t }),
          /* @__PURE__ */ e(U, { className: c("size-4 text-muted-foreground transition-transform", h && "rotate-180") })
        ]
      }
    ),
    h ? /* @__PURE__ */ e("div", { className: "border-t px-4 py-3 text-muted-foreground", children: a }) : null
  ] });
}
const ut = L.Root, mt = L.Trigger, Uc = L.Group, qc = L.Portal, Yc = L.Sub, Xc = L.RadioGroup, Ze = d.forwardRef(({ className: t, sideOffset: a = 8, ...r }, l) => /* @__PURE__ */ e(L.Portal, { children: /* @__PURE__ */ e(
  L.Content,
  {
    className: c(
      "z-50 min-w-52 overflow-hidden rounded-lg border bg-card p-1 text-card-foreground shadow-juz",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      t
    ),
    ref: l,
    sideOffset: a,
    ...r
  }
) }));
Ze.displayName = L.Content.displayName;
const oe = d.forwardRef(({ className: t, inset: a, ...r }, l) => /* @__PURE__ */ e(
  L.Item,
  {
    className: c(
      "relative flex cursor-default select-none items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold outline-hidden transition-colors focus:bg-primary-soft focus:text-primary data-disabled:pointer-events-none data-disabled:opacity-50",
      a && "pl-8",
      t
    ),
    ref: l,
    ...r
  }
));
oe.displayName = L.Item.displayName;
const Fr = d.forwardRef(({ className: t, children: a, checked: r, ...l }, s) => /* @__PURE__ */ n(
  L.CheckboxItem,
  {
    checked: r,
    className: c(
      "relative flex cursor-default select-none items-center rounded-md py-2 pl-9 pr-3 text-sm font-semibold outline-hidden transition-colors focus:bg-primary-soft focus:text-primary",
      t
    ),
    ref: s,
    ...l,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-3 inline-flex size-4 items-center justify-center", children: /* @__PURE__ */ e(L.ItemIndicator, { children: /* @__PURE__ */ e(Y, { className: "size-4" }) }) }),
      a
    ]
  }
));
Fr.displayName = L.CheckboxItem.displayName;
const Gs = d.forwardRef(({ className: t, children: a, ...r }, l) => /* @__PURE__ */ n(
  L.RadioItem,
  {
    className: c(
      "relative flex cursor-default select-none items-center rounded-md py-2 pl-9 pr-3 text-sm font-semibold outline-hidden transition-colors focus:bg-primary-soft focus:text-primary",
      t
    ),
    ref: l,
    ...r,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-3 inline-flex size-4 items-center justify-center", children: /* @__PURE__ */ e(L.ItemIndicator, { children: /* @__PURE__ */ e("span", { className: "size-2 rounded-full bg-current" }) }) }),
      a
    ]
  }
));
Gs.displayName = L.RadioItem.displayName;
const ft = d.forwardRef(({ className: t, inset: a, ...r }, l) => /* @__PURE__ */ e(
  L.Label,
  {
    className: c("px-3 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground", a && "pl-8", t),
    ref: l,
    ...r
  }
));
ft.displayName = L.Label.displayName;
const Me = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(L.Separator, { className: c("-mx-1 my-1 h-px bg-border", t), ref: r, ...a }));
Me.displayName = L.Separator.displayName;
const Us = ({ className: t, ...a }) => /* @__PURE__ */ e("span", { className: c("ml-auto text-xs tracking-widest text-muted-foreground", t), ...a });
Us.displayName = "DropdownMenuShortcut";
const qs = d.forwardRef(({ className: t, inset: a, children: r, ...l }, s) => /* @__PURE__ */ n(
  L.SubTrigger,
  {
    className: c(
      "flex cursor-default select-none items-center rounded-md px-3 py-2 text-sm font-semibold outline-hidden focus:bg-primary-soft focus:text-primary",
      a && "pl-8",
      t
    ),
    ref: s,
    ...l,
    children: [
      r,
      /* @__PURE__ */ e(de, { className: "ml-auto size-4" })
    ]
  }
));
qs.displayName = L.SubTrigger.displayName;
const Ys = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  L.SubContent,
  {
    className: c("z-50 min-w-44 overflow-hidden rounded-lg border bg-card p-1 text-card-foreground shadow-juz", t),
    ref: r,
    ...a
  }
));
Ys.displayName = L.SubContent.displayName;
const Xs = d.forwardRef(
  ({
    columns: t,
    onChange: a,
    label: r = "Widoczność kolumn",
    triggerLabel: l = "Kolumny",
    className: s,
    align: i = "end"
  }, o) => /* @__PURE__ */ n(ut, { children: [
    /* @__PURE__ */ e(mt, { asChild: !0, children: /* @__PURE__ */ n(
      v,
      {
        ref: o,
        variant: "secondary",
        className: c("gap-2", s),
        "aria-label": r,
        children: [
          /* @__PURE__ */ e(sr, { className: "size-4" }),
          l
        ]
      }
    ) }),
    /* @__PURE__ */ n(Ze, { align: i, className: "min-w-56", children: [
      /* @__PURE__ */ e(ft, { children: r }),
      /* @__PURE__ */ e(Me, {}),
      t.map((u) => /* @__PURE__ */ e(
        Fr,
        {
          checked: u.visible,
          disabled: u.disabled,
          onSelect: (m) => m.preventDefault(),
          onCheckedChange: (m) => a(u.id, !!m),
          children: u.label
        },
        u.id
      ))
    ] })
  ] })
);
Xs.displayName = "ColumnVisibilitySwitch";
const He = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  De,
  {
    ref: r,
    className: c(
      "flex size-full flex-col overflow-hidden rounded-lg bg-popover text-popover-foreground",
      t
    ),
    ...a
  }
));
He.displayName = "Command";
const Vc = ({
  children: t,
  ...a
}) => /* @__PURE__ */ e(Bl, { ...a, children: /* @__PURE__ */ e(Rr, { className: "overflow-hidden p-0 shadow-juz", children: /* @__PURE__ */ e(He, { className: "**:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:font-semibold **:[[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 **:[[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:size-5 **:[[cmdk-input]]:h-12 **:[[cmdk-item]]:px-2 **:[[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:size-5", children: t }) }) }), pt = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ n("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ e(Je, { className: "mr-2 size-4 shrink-0 text-muted-foreground" }),
  /* @__PURE__ */ e(
    De.Input,
    {
      ref: r,
      className: c(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      ...a
    }
  )
] }));
pt.displayName = "CommandInput";
const ht = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  De.List,
  {
    ref: r,
    className: c(
      "max-h-[320px] overflow-y-auto overflow-x-hidden p-1",
      t
    ),
    ...a
  }
));
ht.displayName = "CommandList";
const gt = d.forwardRef((t, a) => /* @__PURE__ */ e(
  De.Empty,
  {
    ref: a,
    className: "py-6 text-center text-sm text-muted-foreground",
    ...t
  }
));
gt.displayName = "CommandEmpty";
const bt = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  De.Group,
  {
    ref: r,
    className: c(
      "overflow-hidden p-1 text-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-semibold **:[[cmdk-group-heading]]:text-muted-foreground",
      t
    ),
    ...a
  }
));
bt.displayName = "CommandGroup";
const Vs = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  De.Separator,
  {
    ref: r,
    className: c("-mx-1 h-px bg-border", t),
    ...a
  }
));
Vs.displayName = "CommandSeparator";
const xt = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  De.Item,
  {
    ref: r,
    className: c(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected=true]:bg-muted data-[selected=true]:text-foreground data-[disabled=true]:opacity-50",
      t
    ),
    ...a
  }
));
xt.displayName = "CommandItem";
const Js = ({
  className: t,
  ...a
}) => /* @__PURE__ */ e(
  "span",
  {
    className: c(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      t
    ),
    ...a
  }
);
Js.displayName = "CommandShortcut";
const Jc = A.Root, Qc = A.Trigger, eu = A.Group, tu = A.Portal, au = A.Sub, ru = A.RadioGroup, Qs = d.forwardRef(({ className: t, inset: a, children: r, ...l }, s) => /* @__PURE__ */ n(
  A.SubTrigger,
  {
    ref: s,
    className: c(
      "flex cursor-default select-none items-center rounded-md px-3 py-2 text-sm font-semibold outline-hidden focus:bg-primary-soft focus:text-primary data-[state=open]:bg-primary-soft data-[state=open]:text-primary",
      a && "pl-8",
      t
    ),
    ...l,
    children: [
      r,
      /* @__PURE__ */ e(de, { className: "ml-auto size-4" })
    ]
  }
));
Qs.displayName = A.SubTrigger.displayName;
const ei = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  A.SubContent,
  {
    ref: r,
    className: c(
      "z-50 min-w-44 overflow-hidden rounded-lg border bg-card p-1 text-card-foreground shadow-juz",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      t
    ),
    ...a
  }
));
ei.displayName = A.SubContent.displayName;
const ti = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(A.Portal, { children: /* @__PURE__ */ e(
  A.Content,
  {
    ref: r,
    className: c(
      "z-50 min-w-52 overflow-hidden rounded-lg border bg-card p-1 text-card-foreground shadow-juz",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      t
    ),
    ...a
  }
) }));
ti.displayName = A.Content.displayName;
const ai = d.forwardRef(({ className: t, inset: a, ...r }, l) => /* @__PURE__ */ e(
  A.Item,
  {
    ref: l,
    className: c(
      "relative flex cursor-default select-none items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold outline-hidden transition-colors focus:bg-primary-soft focus:text-primary data-disabled:pointer-events-none data-disabled:opacity-50",
      a && "pl-8",
      t
    ),
    ...r
  }
));
ai.displayName = A.Item.displayName;
const ri = d.forwardRef(({ className: t, children: a, checked: r, ...l }, s) => /* @__PURE__ */ n(
  A.CheckboxItem,
  {
    ref: s,
    checked: r,
    className: c(
      "relative flex cursor-default select-none items-center rounded-md py-2 pl-9 pr-3 text-sm font-semibold outline-hidden transition-colors focus:bg-primary-soft focus:text-primary data-disabled:pointer-events-none data-disabled:opacity-50",
      t
    ),
    ...l,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-3 inline-flex size-4 items-center justify-center", children: /* @__PURE__ */ e(A.ItemIndicator, { children: /* @__PURE__ */ e(Y, { className: "size-4" }) }) }),
      a
    ]
  }
));
ri.displayName = A.CheckboxItem.displayName;
const ni = d.forwardRef(({ className: t, children: a, ...r }, l) => /* @__PURE__ */ n(
  A.RadioItem,
  {
    ref: l,
    className: c(
      "relative flex cursor-default select-none items-center rounded-md py-2 pl-9 pr-3 text-sm font-semibold outline-hidden transition-colors focus:bg-primary-soft focus:text-primary data-disabled:pointer-events-none data-disabled:opacity-50",
      t
    ),
    ...r,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-3 inline-flex size-4 items-center justify-center", children: /* @__PURE__ */ e(A.ItemIndicator, { children: /* @__PURE__ */ e(ga, { className: "size-2 fill-current" }) }) }),
      a
    ]
  }
));
ni.displayName = A.RadioItem.displayName;
const li = d.forwardRef(({ className: t, inset: a, ...r }, l) => /* @__PURE__ */ e(
  A.Label,
  {
    ref: l,
    className: c(
      "px-3 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground",
      a && "pl-8",
      t
    ),
    ...r
  }
));
li.displayName = A.Label.displayName;
const si = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  A.Separator,
  {
    ref: r,
    className: c("-mx-1 my-1 h-px bg-border", t),
    ...a
  }
));
si.displayName = A.Separator.displayName;
const ii = ({
  className: t,
  ...a
}) => /* @__PURE__ */ e(
  "span",
  {
    className: c(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      t
    ),
    ...a
  }
);
ii.displayName = "ContextMenuShortcut";
const ke = We.Root, ze = We.Trigger, nu = We.Anchor, pe = d.forwardRef(({ className: t, align: a = "center", sideOffset: r = 4, ...l }, s) => /* @__PURE__ */ e(We.Portal, { children: /* @__PURE__ */ e(
  We.Content,
  {
    ref: s,
    align: a,
    sideOffset: r,
    className: c(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-juz outline-hidden",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...l
  }
) }));
pe.displayName = We.Content.displayName;
const oi = d.forwardRef(
  ({
    value: t,
    onValueChange: a,
    label: r,
    placeholder: l = "Filtr daty",
    disabled: s,
    className: i,
    clearable: o = !0
  }, u) => {
    const [m, f] = d.useState(!1), p = t ? Qe(t, "d MMM yyyy", { locale: _e }) : null, h = o && t;
    return (
      // Clear affordance lives next to the trigger button rather than inside
      // it because axe-core `nested-interactive` forbids interactive
      // children (role="button", tabindex>=0, focusable) under another
      // button. Wrapping both in a single inline-flex preserves the visual
      // pill shape.
      /* @__PURE__ */ n("div", { className: c("inline-flex items-stretch", i), children: [
        /* @__PURE__ */ n(ke, { open: m, onOpenChange: f, children: [
          /* @__PURE__ */ e(ze, { asChild: !0, children: /* @__PURE__ */ n(
            v,
            {
              ref: u,
              type: "button",
              variant: "secondary",
              disabled: s,
              "aria-label": r ?? l,
              className: c(
                "h-10 justify-start gap-2 font-semibold",
                !t && "text-muted-foreground",
                h && "rounded-r-none"
              ),
              children: [
                /* @__PURE__ */ e(Re, { className: "size-4" }),
                r ? /* @__PURE__ */ n("span", { children: [
                  r,
                  ":"
                ] }) : null,
                /* @__PURE__ */ e("span", { children: p ?? l })
              ]
            }
          ) }),
          /* @__PURE__ */ e(pe, { align: "start", className: "w-auto p-0", children: /* @__PURE__ */ e(
            ct,
            {
              mode: "single",
              selected: t,
              onSelect: (g) => {
                a == null || a(g), f(!1);
              },
              autoFocus: !0
            }
          ) })
        ] }),
        h ? /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            "aria-label": "Wyczyść datę",
            onClick: () => a == null ? void 0 : a(void 0),
            className: "inline-flex h-10 items-center justify-center rounded-r-md border border-l-0 border-input bg-secondary px-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
            children: /* @__PURE__ */ e(ve, { className: "size-3" })
          }
        ) : null
      ] })
    );
  }
);
oi.displayName = "DateFilter";
const C = d.forwardRef(({ className: t, type: a, ...r }, l) => /* @__PURE__ */ e(
  "input",
  {
    type: a,
    className: c(
      "flex h-11 w-full rounded-md border border-input bg-card px-3 py-2 text-base font-normal text-foreground shadow-juz-sm transition-colors placeholder:text-muted-foreground focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t
    ),
    ref: l,
    ...r
  }
));
C.displayName = "Input";
const Ha = (t) => t ? Qe(t, "d MMM yyyy", { locale: _e }) : "", di = d.forwardRef(
  ({
    value: t,
    onValueChange: a,
    placeholder: r = { from: "Data od", to: "Data do" },
    disabled: l,
    className: s,
    numberOfMonths: i = 2
  }, o) => {
    const [u, m] = d.useState(!1);
    return /* @__PURE__ */ n(ke, { open: u, onOpenChange: m, children: [
      /* @__PURE__ */ e(ze, { asChild: !0, children: /* @__PURE__ */ n(
        "div",
        {
          ref: o,
          role: "button",
          tabIndex: l ? -1 : 0,
          "aria-disabled": l,
          className: c(
            "flex w-full items-stretch gap-2 rounded-md border border-input bg-card p-1.5 shadow-juz-sm transition-colors focus-within:ring-2 focus-within:ring-ring",
            l && "cursor-not-allowed opacity-50",
            s
          ),
          children: [
            /* @__PURE__ */ n("div", { className: "flex flex-1 items-center gap-2 px-2", children: [
              /* @__PURE__ */ e(Re, { className: "size-4 shrink-0 text-muted-foreground" }),
              /* @__PURE__ */ e(
                C,
                {
                  readOnly: !0,
                  value: Ha(t == null ? void 0 : t.from),
                  placeholder: r.from,
                  className: "h-auto border-0 bg-transparent p-0 shadow-none focus-visible:ring-0",
                  tabIndex: -1
                }
              )
            ] }),
            /* @__PURE__ */ e("span", { className: "self-center text-sm text-muted-foreground", children: "–" }),
            /* @__PURE__ */ e("div", { className: "flex flex-1 items-center gap-2 px-2", children: /* @__PURE__ */ e(
              C,
              {
                readOnly: !0,
                value: Ha(t == null ? void 0 : t.to),
                placeholder: r.to,
                className: "h-auto border-0 bg-transparent p-0 shadow-none focus-visible:ring-0",
                tabIndex: -1
              }
            ) })
          ]
        }
      ) }),
      /* @__PURE__ */ e(pe, { align: "start", className: "w-auto p-0", children: /* @__PURE__ */ e(
        ct,
        {
          mode: "range",
          selected: t,
          onSelect: a,
          numberOfMonths: i,
          autoFocus: !0
        }
      ) })
    ] });
  }
);
di.displayName = "DateRangeInput";
const Et = d.forwardRef(
  ({ className: t, leading: a, trailing: r, children: l, ...s }, i) => /* @__PURE__ */ n(
    "div",
    {
      ref: i,
      className: c(
        "flex h-10 items-stretch overflow-hidden rounded-md border border-input bg-background text-sm shadow-juz-sm focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        t
      ),
      ...s,
      children: [
        a ? /* @__PURE__ */ e("div", { className: "flex select-none items-center border-r bg-muted/40 px-3 text-muted-foreground", children: a }) : null,
        /* @__PURE__ */ e("div", { className: "flex flex-1 items-center [&>input]:border-0 [&>input]:bg-transparent [&>input]:shadow-none focus-visible:[&>input]:ring-0 focus-visible:[&>input]:ring-offset-0", children: l }),
        r ? /* @__PURE__ */ e("div", { className: "flex select-none items-stretch border-l [&>button]:rounded-none [&>button]:border-0 [&>button]:shadow-none", children: r }) : null
      ]
    }
  )
);
Et.displayName = "InputGroup";
const ci = ",";
function Mt(t) {
  if (t == null) return null;
  const a = t.trim();
  if (!a) return null;
  const r = a.replace(/\s/g, "").replace(/\./g, "").replace(",", "."), l = Number(r);
  return Number.isNaN(l) ? null : l;
}
function sa(t, a) {
  if (t == null || t === "") return "";
  const r = typeof t == "number" ? t : Mt(String(t));
  if (r === null || Number.isNaN(r)) return "";
  const l = {};
  return typeof a == "number" ? (l.minimumFractionDigits = a, l.maximumFractionDigits = a) : l.maximumFractionDigits = 20, new Intl.NumberFormat("pl-PL", l).format(r);
}
function Ga(t, a, r) {
  let l = t;
  return typeof a == "number" && l < a && (l = a), typeof r == "number" && l > r && (l = r), l;
}
const ui = d.forwardRef(
  ({
    className: t,
    value: a,
    onValueChange: r,
    precision: l,
    min: s,
    max: i,
    prefix: o,
    suffix: u,
    onBlur: m,
    onFocus: f,
    placeholder: p,
    inputMode: h = "decimal",
    ...g
  }, b) => {
    const [x, w] = d.useState(!1), [S, z] = d.useState(
      () => sa(a ?? null, l)
    );
    d.useEffect(() => {
      x || z(sa(a ?? null, l));
    }, [a, l, x]);
    const K = /* @__PURE__ */ e(
      C,
      {
        ref: b,
        type: "text",
        inputMode: h,
        value: S,
        onChange: (H) => {
          const D = H.target.value.replace(/[^\d\s.,-]/g, "");
          z(D);
          const X = Mt(D);
          X === null ? r == null || r(null) : r == null || r(Ga(X, s, i));
        },
        onFocus: (H) => {
          w(!0);
          const M = Mt(S);
          if (M !== null) {
            const D = typeof l == "number" ? M.toFixed(l) : String(M);
            z(D.replace(".", ci));
          }
          f == null || f(H);
        },
        onBlur: (H) => {
          w(!1);
          const M = Mt(S);
          if (M === null)
            z(""), r == null || r(null);
          else {
            const D = Ga(M, s, i);
            z(sa(D, l)), r == null || r(D);
          }
          m == null || m(H);
        },
        placeholder: p ?? "0,00",
        className: c("text-right tabular-nums", t),
        ...g
      }
    );
    return o || u ? /* @__PURE__ */ e(Et, { leading: o, trailing: u, children: K }) : K;
  }
);
ui.displayName = "DecimalInput";
const lu = ({
  data: t,
  className: a,
  innerRadius: r = 60,
  outerRadius: l = 90,
  centerLabel: s
}) => {
  const i = t.reduce(
    (o, u, m) => ({
      ...o,
      [u.key]: {
        label: u.label ?? u.key,
        color: u.color ?? `hsl(var(--chart-${m % 5 + 1}, var(--primary)))`
      }
    }),
    {}
  );
  return /* @__PURE__ */ n("div", { className: c("relative inline-flex items-center justify-center", a), children: [
    /* @__PURE__ */ e(_t, { config: i, className: "aspect-square h-56", children: /* @__PURE__ */ n(ol, { children: [
      /* @__PURE__ */ e(Na, { content: /* @__PURE__ */ e(Bt, { hideLabel: !0 }) }),
      /* @__PURE__ */ e(
        dl,
        {
          data: t,
          dataKey: "value",
          nameKey: "key",
          innerRadius: r,
          outerRadius: l,
          paddingAngle: 2,
          strokeWidth: 0,
          children: t.map((o) => /* @__PURE__ */ e(cl, { fill: `var(--color-${o.key})` }, o.key))
        }
      )
    ] }) }),
    s ? /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center text-center", children: s }) : null
  ] });
}, mi = ({
  shouldScaleBackground: t = !0,
  ...a
}) => /* @__PURE__ */ e(
  Q.Root,
  {
    shouldScaleBackground: t,
    ...a
  }
);
mi.displayName = "Drawer";
const su = Q.Trigger, fi = Q.Portal, iu = Q.Close, Lr = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  Q.Overlay,
  {
    ref: r,
    className: c("fixed inset-0 z-50 bg-black/40", t),
    ...a
  }
));
Lr.displayName = Q.Overlay.displayName;
const pi = d.forwardRef(({ className: t, children: a, ...r }, l) => /* @__PURE__ */ n(fi, { children: [
  /* @__PURE__ */ e(Lr, {}),
  /* @__PURE__ */ n(
    Q.Content,
    {
      ref: l,
      className: c(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-2xl border bg-background shadow-juz-lg",
        t
      ),
      ...r,
      children: [
        /* @__PURE__ */ e("div", { className: "mx-auto mt-3 h-1.5 w-12 rounded-full bg-muted" }),
        a
      ]
    }
  )
] }));
pi.displayName = "DrawerContent";
const hi = ({
  className: t,
  ...a
}) => /* @__PURE__ */ e(
  "div",
  {
    className: c("grid gap-1.5 p-4 text-center sm:text-left", t),
    ...a
  }
);
hi.displayName = "DrawerHeader";
const gi = ({
  className: t,
  ...a
}) => /* @__PURE__ */ e(
  "div",
  {
    className: c("mt-auto flex flex-col gap-2 p-4", t),
    ...a
  }
);
gi.displayName = "DrawerFooter";
const bi = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  Q.Title,
  {
    ref: r,
    className: c(
      "text-lg font-semibold leading-none tracking-tight",
      t
    ),
    ...a
  }
));
bi.displayName = Q.Title.displayName;
const xi = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  Q.Description,
  {
    ref: r,
    className: c("text-sm text-muted-foreground", t),
    ...a
  }
));
xi.displayName = Q.Description.displayName;
const Or = d.forwardRef(
  ({ className: t, icon: a, title: r, description: l, action: s, children: i, ...o }, u) => /* @__PURE__ */ n(
    "div",
    {
      ref: u,
      className: c(
        "flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed bg-muted/30 px-6 py-10 text-center",
        t
      ),
      ...o,
      children: [
        a ? /* @__PURE__ */ e("div", { className: "flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground [&_svg]:size-6", children: a }) : null,
        r ? /* @__PURE__ */ e("div", { className: "text-base font-semibold", children: r }) : null,
        l ? /* @__PURE__ */ e("p", { className: "max-w-sm text-sm text-muted-foreground", children: l }) : null,
        s,
        i
      ]
    }
  )
);
Or.displayName = "Empty";
const yi = d.forwardRef(
  ({
    className: t,
    illustration: a,
    title: r,
    description: l,
    primaryAction: s,
    secondaryAction: i,
    ...o
  }, u) => /* @__PURE__ */ n(
    "div",
    {
      ref: u,
      className: c(
        "grid place-items-center gap-5 rounded-xl border bg-card px-8 py-12 text-center shadow-juz-sm",
        t
      ),
      ...o,
      children: [
        a ? /* @__PURE__ */ e("div", { className: "flex size-20 items-center justify-center rounded-full bg-primary-soft text-primary [&_svg]:size-9", children: a }) : null,
        /* @__PURE__ */ n("div", { className: "space-y-1", children: [
          /* @__PURE__ */ e("h3", { className: "text-lg font-semibold", children: r }),
          l ? /* @__PURE__ */ e("p", { className: "mx-auto max-w-md text-sm text-muted-foreground", children: l }) : null
        ] }),
        s || i ? /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center justify-center gap-2", children: [
          s,
          i
        ] }) : null
      ]
    }
  )
);
yi.displayName = "EmptyState";
const Ni = d.forwardRef(
  ({ className: t, label: a, value: r, hint: l, orientation: s = "vertical", ...i }, o) => /* @__PURE__ */ n(
    "div",
    {
      ref: o,
      className: c(
        s === "vertical" ? "flex flex-col gap-1" : "flex items-baseline justify-between gap-3",
        t
      ),
      ...i,
      children: [
        /* @__PURE__ */ e("span", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: a }),
        /* @__PURE__ */ e("span", { className: "text-sm font-semibold text-foreground", children: r }),
        l ? /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground", children: l }) : null
      ]
    }
  )
);
Ni.displayName = "FieldDisplay";
const Ca = $.Root, ou = $.Group, Pa = $.Value, Zt = d.forwardRef(({ className: t, children: a, ...r }, l) => /* @__PURE__ */ n(
  $.Trigger,
  {
    className: c(
      "flex h-12 w-full items-center justify-between rounded-md border border-input bg-card px-4 py-2 text-left text-sm font-semibold text-foreground shadow-juz-sm transition-colors placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t
    ),
    ref: l,
    ...r,
    children: [
      a,
      /* @__PURE__ */ e($.Icon, { asChild: !0, children: /* @__PURE__ */ e(U, { className: "opacity-80" }) })
    ]
  }
));
Zt.displayName = $.Trigger.displayName;
const Ar = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  $.ScrollUpButton,
  {
    className: c("flex cursor-default items-center justify-center py-1 text-muted-foreground", t),
    ref: r,
    ...a,
    children: /* @__PURE__ */ e(Sn, { className: "size-4" })
  }
));
Ar.displayName = $.ScrollUpButton.displayName;
const Wr = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  $.ScrollDownButton,
  {
    className: c("flex cursor-default items-center justify-center py-1 text-muted-foreground", t),
    ref: r,
    ...a,
    children: /* @__PURE__ */ e(U, { className: "size-4" })
  }
));
Wr.displayName = $.ScrollDownButton.displayName;
const Ht = d.forwardRef(({ className: t, children: a, position: r = "popper", ...l }, s) => /* @__PURE__ */ e($.Portal, { children: /* @__PURE__ */ n(
  $.Content,
  {
    className: c(
      "relative z-50 max-h-80 min-w-32 overflow-hidden rounded-lg border bg-card text-card-foreground shadow-juz",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
      t
    ),
    position: r,
    ref: s,
    ...l,
    children: [
      /* @__PURE__ */ e(Ar, {}),
      /* @__PURE__ */ e($.Viewport, { className: c("p-1", r === "popper" && "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width)"), children: a }),
      /* @__PURE__ */ e(Wr, {})
    ]
  }
) }));
Ht.displayName = $.Content.displayName;
const vi = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  $.Label,
  {
    className: c("px-3 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground", t),
    ref: r,
    ...a
  }
));
vi.displayName = $.Label.displayName;
const rt = d.forwardRef(({ className: t, children: a, ...r }, l) => /* @__PURE__ */ n(
  $.Item,
  {
    className: c(
      "relative flex w-full cursor-default select-none items-center rounded-md py-2 pl-9 pr-3 text-sm font-semibold outline-hidden focus:bg-primary-soft focus:text-primary data-disabled:pointer-events-none data-disabled:opacity-50",
      t
    ),
    ref: l,
    ...r,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-3 flex size-4 items-center justify-center", children: /* @__PURE__ */ e($.ItemIndicator, { children: /* @__PURE__ */ e(Y, { className: "size-4" }) }) }),
      /* @__PURE__ */ e($.ItemText, { children: a })
    ]
  }
));
rt.displayName = $.Item.displayName;
const wi = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e($.Separator, { className: c("-mx-1 my-1 h-px bg-border", t), ref: r, ...a }));
wi.displayName = $.Separator.displayName;
const ki = d.forwardRef(
  ({
    options: t,
    value: a,
    onValueChange: r,
    placeholder: l = "Wybierz...",
    label: s,
    clearable: i = !0,
    disabled: o,
    className: u,
    contentClassName: m
  }, f) => {
    const p = t.find((h) => h.value === a);
    return /* @__PURE__ */ n(
      Ca,
      {
        value: a ?? "",
        onValueChange: (h) => r == null ? void 0 : r(h || void 0),
        disabled: o,
        children: [
          /* @__PURE__ */ e(
            Zt,
            {
              ref: f,
              className: c("h-10 gap-2", u),
              "aria-label": s ?? l,
              children: /* @__PURE__ */ n("div", { className: "flex flex-1 items-center gap-2", children: [
                s ? /* @__PURE__ */ n("span", { className: "text-sm font-semibold text-muted-foreground", children: [
                  s,
                  ":"
                ] }) : null,
                p ? /* @__PURE__ */ n(R, { variant: "default", className: "gap-1 pl-2 pr-1", children: [
                  p.label,
                  i ? /* @__PURE__ */ e(
                    "span",
                    {
                      role: "button",
                      tabIndex: -1,
                      onPointerDown: (h) => {
                        h.preventDefault(), h.stopPropagation(), r == null || r(void 0);
                      },
                      className: "ml-0.5 inline-flex size-4 items-center justify-center rounded-full hover:bg-primary/20",
                      "aria-label": "Wyczyść filtr",
                      children: /* @__PURE__ */ e(ve, { className: "size-3" })
                    }
                  ) : null
                ] }) : /* @__PURE__ */ e(Pa, { placeholder: l })
              ] })
            }
          ),
          /* @__PURE__ */ e(Ht, { className: m, children: t.map((h) => /* @__PURE__ */ e(rt, { value: h.value, disabled: h.disabled, children: h.label }, h.value)) })
        ]
      }
    );
  }
);
ki.displayName = "FilterSelect";
const du = Ot.Root, cu = Ot.Trigger, zi = d.forwardRef(({ className: t, align: a = "center", sideOffset: r = 4, ...l }, s) => /* @__PURE__ */ e(
  Ot.Content,
  {
    ref: s,
    align: a,
    sideOffset: r,
    className: c(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-juz outline-hidden",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...l
  }
));
zi.displayName = Ot.Content.displayName;
const Si = fe(
  "inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border bg-card text-foreground shadow-juz-sm hover:bg-muted",
        ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
        primary: "bg-primary text-primary-foreground shadow-juz-sm hover:bg-primary/90",
        destructive: "bg-destructive-soft text-destructive hover:bg-destructive-soft/70"
      },
      size: {
        sm: "size-8",
        default: "size-9",
        lg: "size-10"
      }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
), me = d.forwardRef(({ className: t, variant: a, size: r, asChild: l, label: s, children: i, ...o }, u) => /* @__PURE__ */ e(
  l ? Te : "button",
  {
    ref: u,
    type: l ? void 0 : "button",
    "aria-label": s,
    title: s,
    className: c(Si({ variant: a, size: r }), t),
    ...o,
    children: i
  }
));
me.displayName = "IconActionButton";
const ji = d.forwardRef(({ className: t, containerClassName: a, ...r }, l) => /* @__PURE__ */ e(
  gl,
  {
    ref: l,
    containerClassName: c(
      "flex items-center gap-2 has-disabled:opacity-50",
      a
    ),
    className: c("disabled:cursor-not-allowed", t),
    ...r
  }
));
ji.displayName = "InputOTP";
const Ci = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e("div", { ref: r, className: c("flex items-center", t), ...a }));
Ci.displayName = "InputOTPGroup";
const Pi = d.forwardRef(({ index: t, className: a, ...r }, l) => {
  const i = d.useContext(bl).slots[t], o = i == null ? void 0 : i.char, u = i == null ? void 0 : i.hasFakeCaret, m = i == null ? void 0 : i.isActive;
  return /* @__PURE__ */ n(
    "div",
    {
      ref: l,
      className: c(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input bg-background text-sm font-semibold shadow-juz-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        m && "z-10 ring-2 ring-ring ring-offset-background",
        a
      ),
      ...r,
      children: [
        o,
        u ? /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ e("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) }) : null
      ]
    }
  );
});
Pi.displayName = "InputOTPSlot";
const Ri = d.forwardRef(({ ...t }, a) => /* @__PURE__ */ e("div", { ref: a, role: "separator", ...t, children: /* @__PURE__ */ e(jn, { className: "size-4 text-muted-foreground" }) }));
Ri.displayName = "InputOTPSeparator";
const ma = d.forwardRef(
  ({ className: t, size: a = "default", children: r, ...l }, s) => /* @__PURE__ */ e(
    "kbd",
    {
      ref: s,
      className: c(
        "inline-flex items-center justify-center gap-0.5 rounded-md border border-border bg-muted font-mono font-semibold text-muted-foreground shadow-juz-sm",
        {
          sm: "h-5 min-w-5 px-1 text-[10px] leading-5",
          default: "h-6 min-w-6 px-1.5 text-xs",
          lg: "h-7 min-w-7 px-2 text-sm"
        }[a],
        t
      ),
      ...l,
      children: r
    }
  )
);
ma.displayName = "Kbd";
const le = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  Sr.Root,
  {
    className: c("text-sm font-bold leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70", t),
    ref: r,
    ...a
  }
));
le.displayName = Sr.Root.displayName;
const uu = ({
  data: t,
  categoryKey: a,
  series: r,
  config: l,
  className: s,
  hideGrid: i,
  hideAxis: o
}) => {
  const u = l || r.reduce(
    (m, f, p) => ({
      ...m,
      [f.key]: {
        label: f.label ?? f.key,
        color: f.color ?? `hsl(var(--chart-${p % 5 + 1}, var(--primary)))`
      }
    }),
    {}
  );
  return /* @__PURE__ */ e(_t, { config: u, className: c("aspect-auto h-64 w-full", s), children: /* @__PURE__ */ n(ul, { data: t, children: [
    i ? null : /* @__PURE__ */ e(Nr, { vertical: !1 }),
    o ? null : /* @__PURE__ */ n(G, { children: [
      /* @__PURE__ */ e(
        vr,
        {
          dataKey: a,
          tickLine: !1,
          axisLine: !1,
          tickMargin: 8
        }
      ),
      /* @__PURE__ */ e(wr, { tickLine: !1, axisLine: !1, width: 32 })
    ] }),
    /* @__PURE__ */ e(Na, { content: /* @__PURE__ */ e(Bt, {}) }),
    r.map((m) => /* @__PURE__ */ e(
      ml,
      {
        type: "monotone",
        dataKey: m.key,
        stroke: `var(--color-${m.key})`,
        strokeWidth: 2,
        strokeDasharray: m.dashed ? "6 4" : void 0,
        dot: !1,
        activeDot: { r: 4 }
      },
      m.key
    ))
  ] }) });
}, mu = F.Menu, fu = F.Group, pu = F.Portal, hu = F.RadioGroup, gu = F.Sub, Mi = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  F.Root,
  {
    ref: r,
    className: c(
      "flex h-10 items-center gap-1 rounded-md border bg-background p-1 shadow-juz-sm",
      t
    ),
    ...a
  }
));
Mi.displayName = F.Root.displayName;
const Ti = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  F.Trigger,
  {
    ref: r,
    className: c(
      "flex cursor-pointer select-none items-center rounded-sm px-3 py-1.5 text-sm font-semibold outline-hidden hover:bg-muted data-[highlighted]:bg-muted focus:bg-muted data-[state=open]:bg-muted",
      t
    ),
    ...a
  }
));
Ti.displayName = F.Trigger.displayName;
const Di = d.forwardRef(({ className: t, inset: a, children: r, ...l }, s) => /* @__PURE__ */ n(
  F.SubTrigger,
  {
    ref: s,
    className: c(
      "flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden hover:bg-muted data-[highlighted]:bg-muted focus:bg-muted data-[state=open]:bg-muted",
      a && "pl-8",
      t
    ),
    ...l,
    children: [
      r,
      /* @__PURE__ */ e(de, { className: "ml-auto size-4" })
    ]
  }
));
Di.displayName = F.SubTrigger.displayName;
const Ii = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  F.SubContent,
  {
    ref: r,
    className: c(
      "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-juz",
      t
    ),
    ...a
  }
));
Ii.displayName = F.SubContent.displayName;
const Fi = d.forwardRef(
  ({ className: t, align: a = "start", alignOffset: r = -4, sideOffset: l = 8, ...s }, i) => /* @__PURE__ */ e(F.Portal, { children: /* @__PURE__ */ e(
    F.Content,
    {
      ref: i,
      align: a,
      alignOffset: r,
      sideOffset: l,
      className: c(
        "z-50 min-w-48 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-juz",
        t
      ),
      ...s
    }
  ) })
);
Fi.displayName = F.Content.displayName;
const Li = d.forwardRef(({ className: t, inset: a, ...r }, l) => /* @__PURE__ */ e(
  F.Item,
  {
    ref: l,
    className: c(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden hover:bg-muted data-[highlighted]:bg-muted focus:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50",
      a && "pl-8",
      t
    ),
    ...r
  }
));
Li.displayName = F.Item.displayName;
const Oi = d.forwardRef(({ className: t, children: a, checked: r, ...l }, s) => /* @__PURE__ */ n(
  F.CheckboxItem,
  {
    ref: s,
    className: c(
      "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden hover:bg-muted data-[highlighted]:bg-muted focus:bg-muted",
      t
    ),
    checked: r,
    ...l,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ e(F.ItemIndicator, { children: /* @__PURE__ */ e(Y, { className: "size-4" }) }) }),
      a
    ]
  }
));
Oi.displayName = F.CheckboxItem.displayName;
const Ai = d.forwardRef(({ className: t, children: a, ...r }, l) => /* @__PURE__ */ n(
  F.RadioItem,
  {
    ref: l,
    className: c(
      "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden hover:bg-muted data-[highlighted]:bg-muted focus:bg-muted",
      t
    ),
    ...r,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ e(F.ItemIndicator, { children: /* @__PURE__ */ e(ga, { className: "size-2 fill-current" }) }) }),
      a
    ]
  }
));
Ai.displayName = F.RadioItem.displayName;
const Wi = d.forwardRef(({ className: t, inset: a, ...r }, l) => /* @__PURE__ */ e(
  F.Label,
  {
    ref: l,
    className: c(
      "px-2 py-1.5 text-sm font-semibold",
      a && "pl-8",
      t
    ),
    ...r
  }
));
Wi.displayName = F.Label.displayName;
const $i = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  F.Separator,
  {
    ref: r,
    className: c("-mx-1 my-1 h-px bg-border", t),
    ...a
  }
));
$i.displayName = F.Separator.displayName;
const _i = ({
  className: t,
  ...a
}) => /* @__PURE__ */ e(
  "span",
  {
    className: c(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      t
    ),
    ...a
  }
);
_i.displayname = "MenubarShortcut";
const Bi = d.forwardRef(
  ({ icon: t, label: a, value: r, tone: l = "primary", size: s = "default", className: i, ...o }, u) => /* @__PURE__ */ n(
    "div",
    {
      ref: u,
      className: c("flex items-center gap-3", i),
      ...o,
      children: [
        /* @__PURE__ */ e(Wt, { tone: l, size: s, icon: t }),
        /* @__PURE__ */ n("div", { className: "flex min-w-0 flex-col gap-0.5", children: [
          /* @__PURE__ */ e("span", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground", children: a }),
          /* @__PURE__ */ e("span", { className: "truncate text-sm font-semibold text-foreground", children: r })
        ] })
      ]
    }
  )
);
Bi.displayName = "MetaTile";
const Ki = fe("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-bold tracking-tight",
      h2: "scroll-m-20 text-3xl font-bold tracking-tight",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold",
      h6: "scroll-m-20 text-base font-semibold",
      body: "leading-7 text-base",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm leading-none",
      muted: "text-sm text-muted-foreground",
      caption: "text-xs text-muted-foreground",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
    }
  },
  defaultVariants: { variant: "body" }
}), Ei = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  lead: "p",
  large: "p",
  small: "small",
  muted: "p",
  caption: "span",
  code: "code"
}, se = d.forwardRef(
  ({ className: t, variant: a = "body", asChild: r, as: l, ...s }, i) => {
    const o = r ? Te : l ?? Ei[a ?? "body"];
    return /* @__PURE__ */ e(
      o,
      {
        ref: i,
        className: c(Ki({ variant: a }), t),
        ...s
      }
    );
  }
);
se.displayName = "Typography";
const Zi = {
  up: {
    className: "text-success bg-success-soft",
    icon: /* @__PURE__ */ e(Rn, { className: "size-3.5" })
  },
  down: {
    className: "text-destructive bg-destructive-soft",
    icon: /* @__PURE__ */ e(Pn, { className: "size-3.5" })
  },
  flat: {
    className: "text-muted-foreground bg-muted",
    icon: /* @__PURE__ */ e(Cn, { className: "size-3.5" })
  }
}, Hi = d.forwardRef(
  ({ label: t, value: a, description: r, trend: l, icon: s, className: i, ...o }, u) => {
    const m = l ? Zi[l.direction] : null;
    return /* @__PURE__ */ n(
      T,
      {
        ref: u,
        className: c("flex flex-col gap-4 p-6", i),
        ...o,
        children: [
          /* @__PURE__ */ n("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ e(se, { variant: "caption", className: "font-semibold uppercase tracking-[0.12em]", children: t }),
            s ? /* @__PURE__ */ e(Wt, { tone: "primary", size: "sm", icon: s }) : null
          ] }),
          /* @__PURE__ */ n("div", { className: "flex items-end justify-between gap-3", children: [
            /* @__PURE__ */ e(se, { variant: "h2", className: "leading-none", children: a }),
            l && m ? /* @__PURE__ */ n(
              "span",
              {
                className: c(
                  "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold",
                  m.className
                ),
                children: [
                  m.icon,
                  l.value
                ]
              }
            ) : null
          ] }),
          r ? /* @__PURE__ */ e(se, { variant: "muted", children: r }) : null,
          l != null && l.label ? /* @__PURE__ */ e(se, { variant: "caption", children: l.label }) : null
        ]
      }
    );
  }
);
Hi.displayName = "MetricCard";
const Gi = d.forwardRef(
  ({ month: t, events: a = [], selected: r, onSelect: l, className: s }, i) => {
    const o = d.useMemo(
      () => ({
        hasEvent: (u) => a.some((m) => kr(m, u))
      }),
      [a]
    );
    return /* @__PURE__ */ e("div", { ref: i, className: c("inline-block", s), children: /* @__PURE__ */ e(
      ct,
      {
        mode: "single",
        month: t,
        selected: r,
        onSelect: l,
        showOutsideDays: !0,
        numberOfMonths: 1,
        disableNavigation: !0,
        modifiers: o,
        modifiersClassNames: {
          hasEvent: "relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:size-1 after:rounded-full after:bg-primary"
        },
        className: "p-2",
        classNames: {
          caption_label: "text-xs font-semibold",
          nav: "hidden",
          weekday: "text-muted-foreground rounded-md w-7 font-normal text-[0.65rem] leading-[1.5]",
          day: c(
            "relative p-0 text-center text-xs focus-within:relative focus-within:z-20 size-7",
            "has-aria-[selected]:bg-primary-soft"
          ),
          day_button: "size-7 p-0 font-normal text-xs aria-selected:opacity-100 rounded-md hover:bg-muted",
          selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
          today: "bg-muted text-foreground"
        }
      }
    ) });
  }
);
Gi.displayName = "MiniMonth";
const Ui = d.forwardRef(
  ({
    options: t,
    value: a,
    onValueChange: r,
    placeholder: l = "Wybierz...",
    searchPlaceholder: s = "Szukaj...",
    empty: i = "Brak wyników.",
    maxBadges: o = 3,
    disabled: u,
    className: m,
    contentClassName: f
  }, p) => {
    const [h, g] = d.useState(!1), b = d.useMemo(
      () => t.filter((y) => a.includes(y.value)),
      [t, a]
    ), x = (y) => {
      a.includes(y) ? r(a.filter((j) => j !== y)) : r([...a, y]);
    }, w = (y, j) => {
      j.preventDefault(), j.stopPropagation(), r(a.filter((W) => W !== y));
    }, S = b.slice(0, o), z = b.length - S.length;
    return /* @__PURE__ */ n(ke, { open: h, onOpenChange: g, children: [
      /* @__PURE__ */ e(ze, { asChild: !0, children: /* @__PURE__ */ n(
        "button",
        {
          ref: p,
          type: "button",
          disabled: u,
          "aria-label": l,
          className: c(
            "flex min-h-12 w-full items-center justify-between gap-2 rounded-md border border-input bg-card px-3 py-2 text-left text-sm font-semibold text-foreground shadow-juz-sm transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            m
          ),
          children: [
            /* @__PURE__ */ e("div", { className: "flex flex-1 flex-wrap items-center gap-1.5", children: b.length === 0 ? /* @__PURE__ */ e("span", { className: "text-muted-foreground font-normal", children: l }) : /* @__PURE__ */ n(G, { children: [
              S.map((y) => /* @__PURE__ */ n(
                R,
                {
                  variant: "default",
                  className: "gap-1 pl-2 pr-1",
                  children: [
                    y.label,
                    /* @__PURE__ */ e(
                      "span",
                      {
                        role: "button",
                        tabIndex: -1,
                        onClick: (j) => w(y.value, j),
                        className: "ml-0.5 inline-flex size-4 items-center justify-center rounded-full hover:bg-primary/20",
                        "aria-label": `Usuń ${y.label}`,
                        children: /* @__PURE__ */ e(ve, { className: "size-3" })
                      }
                    )
                  ]
                },
                y.value
              )),
              z > 0 ? /* @__PURE__ */ n(R, { variant: "neutral", children: [
                "+",
                z
              ] }) : null
            ] }) }),
            /* @__PURE__ */ e(U, { className: "size-4 shrink-0 opacity-80" })
          ]
        }
      ) }),
      /* @__PURE__ */ e(
        pe,
        {
          align: "start",
          className: c("w-(--radix-popover-trigger-width) p-0", f),
          children: /* @__PURE__ */ n(He, { children: [
            /* @__PURE__ */ e(pt, { placeholder: s }),
            /* @__PURE__ */ n(ht, { children: [
              /* @__PURE__ */ e(gt, { children: i }),
              /* @__PURE__ */ e(bt, { children: t.map((y) => {
                const j = a.includes(y.value);
                return /* @__PURE__ */ n(
                  xt,
                  {
                    value: y.label,
                    disabled: y.disabled,
                    onSelect: () => x(y.value),
                    children: [
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: c(
                            "mr-2 flex size-4 items-center justify-center rounded-sm border border-input",
                            j ? "border-primary bg-primary text-primary-foreground" : "bg-background"
                          ),
                          children: j ? /* @__PURE__ */ e(Y, { className: "size-3.5", strokeWidth: 3 }) : null
                        }
                      ),
                      y.label
                    ]
                  },
                  y.value
                );
              }) })
            ] })
          ] })
        }
      )
    ] });
  }
);
Ui.displayName = "MultiSelect";
const J = d.forwardRef(
  ({ className: t, invalid: a, children: r, ...l }, s) => /* @__PURE__ */ n("div", { className: "relative", children: [
    /* @__PURE__ */ e(
      "select",
      {
        ref: s,
        "aria-invalid": a || void 0,
        className: c(
          "h-10 w-full appearance-none rounded-md border border-input bg-background bg-none px-3 pr-9 text-sm shadow-juz-sm transition-colors",
          "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          a && "border-destructive focus-visible:ring-destructive",
          t
        ),
        ...l,
        children: r
      }
    ),
    /* @__PURE__ */ e(
      U,
      {
        "aria-hidden": !0,
        className: "pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
      }
    )
  ] })
);
J.displayName = "NativeSelect";
const qi = [10, 25, 50, 100], Yi = d.forwardRef(
  ({
    value: t,
    onValueChange: a,
    options: r = qi,
    label: l = "Wierszy na stronę",
    itemSuffix: s = "/ strona",
    className: i,
    disabled: o
  }, u) => /* @__PURE__ */ n(
    "div",
    {
      ref: u,
      className: c("inline-flex items-center gap-2", i),
      children: [
        l ? /* @__PURE__ */ n("span", { className: "text-sm font-semibold text-muted-foreground", children: [
          l,
          ":"
        ] }) : null,
        /* @__PURE__ */ n(
          Ca,
          {
            value: String(t),
            onValueChange: (m) => a(Number(m)),
            disabled: o,
            children: [
              /* @__PURE__ */ e(Zt, { className: "h-9 w-auto min-w-28 gap-2", "aria-label": l, children: /* @__PURE__ */ e(Pa, {}) }),
              /* @__PURE__ */ e(Ht, { children: r.map((m) => /* @__PURE__ */ n(rt, { value: String(m), children: [
                m,
                " ",
                s
              ] }, m)) })
            ]
          }
        )
      ]
    }
  )
);
Yi.displayName = "PageSizeControl";
const Xi = {
  iphone: {
    frame: "rounded-[2.75rem] border-10 border-foreground bg-foreground p-2 shadow-juz-lg",
    screen: "relative overflow-hidden rounded-4xl bg-background",
    notch: /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-2 z-10 flex h-7 w-32 -translate-x-1/2 items-center justify-center rounded-full bg-foreground" })
  },
  android: {
    frame: "rounded-4xl border-8 border-foreground bg-foreground p-1.5 shadow-juz-lg",
    screen: "relative overflow-hidden rounded-3xl bg-background",
    notch: /* @__PURE__ */ e("div", { className: "pointer-events-none absolute left-1/2 top-3 z-10 size-2.5 -translate-x-1/2 rounded-full bg-foreground" })
  }
}, Vi = d.forwardRef(
  ({ device: t = "iphone", className: a, children: r, ...l }, s) => {
    const i = Xi[t];
    return /* @__PURE__ */ e(
      "div",
      {
        ref: s,
        className: c(
          "mx-auto w-full max-w-88 aspect-9/19",
          i.frame,
          a
        ),
        "aria-label": t === "iphone" ? "Podgląd iPhone" : "Podgląd Android",
        ...l,
        children: /* @__PURE__ */ n("div", { className: c("size-full", i.screen), children: [
          i.notch,
          /* @__PURE__ */ e("div", { className: "size-full overflow-auto", children: r })
        ] })
      }
    );
  }
);
Vi.displayName = "PhoneFrame";
const Ji = d.forwardRef(({ className: t, value: a, ...r }, l) => /* @__PURE__ */ e(
  ca.Root,
  {
    ref: l,
    className: c(
      "relative h-2 w-full overflow-hidden rounded-full bg-muted",
      t
    ),
    ...r,
    children: /* @__PURE__ */ e(
      ca.Indicator,
      {
        className: "size-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (a ?? 0)}%)` }
      }
    )
  }
));
Ji.displayName = ca.Root.displayName;
const Qi = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  et.Root,
  {
    ref: r,
    className: c("grid gap-2", t),
    ...a
  }
));
Qi.displayName = et.Root.displayName;
const eo = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  et.Item,
  {
    ref: r,
    className: c(
      "aspect-square size-5 rounded-full border border-input bg-background text-primary shadow-juz-sm transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary",
      t
    ),
    ...a,
    children: /* @__PURE__ */ e(et.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ e(ga, { className: "size-2.5 fill-primary text-primary" }) })
  }
));
eo.displayName = et.Item.displayName;
const yt = d.forwardRef(({ className: t, children: a, ...r }, l) => /* @__PURE__ */ n(
  Ce.Root,
  {
    ref: l,
    className: c("relative overflow-hidden", t),
    ...r,
    children: [
      /* @__PURE__ */ e(Ce.Viewport, { className: "size-full rounded-[inherit]", children: a }),
      /* @__PURE__ */ e($r, {}),
      /* @__PURE__ */ e(Ce.Corner, {})
    ]
  }
));
yt.displayName = Ce.Root.displayName;
const $r = d.forwardRef(({ className: t, orientation: a = "vertical", ...r }, l) => /* @__PURE__ */ e(
  Ce.ScrollAreaScrollbar,
  {
    ref: l,
    orientation: a,
    className: c(
      "flex touch-none select-none transition-colors",
      a === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px",
      a === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px",
      t
    ),
    ...r,
    children: /* @__PURE__ */ e(Ce.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
$r.displayName = Ce.ScrollAreaScrollbar.displayName;
const to = d.forwardRef(
  ({
    options: t,
    value: a,
    onValueChange: r,
    placeholder: l = "Wybierz...",
    searchPlaceholder: s = "Szukaj...",
    empty: i = "Brak wyników.",
    disabled: o,
    className: u,
    contentClassName: m
  }, f) => {
    const [p, h] = d.useState(!1), g = t.find((b) => b.value === a);
    return /* @__PURE__ */ n(ke, { open: p, onOpenChange: h, children: [
      /* @__PURE__ */ e(ze, { asChild: !0, children: /* @__PURE__ */ n(
        "button",
        {
          ref: f,
          type: "button",
          disabled: o,
          "aria-label": l,
          className: c(
            "flex h-12 w-full items-center justify-between gap-2 rounded-md border border-input bg-card px-4 py-2 text-left text-sm font-semibold text-foreground shadow-juz-sm transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            u
          ),
          children: [
            /* @__PURE__ */ e("span", { className: c("truncate", !g && "font-normal text-muted-foreground"), children: g ? g.label : l }),
            /* @__PURE__ */ e(U, { className: "size-4 shrink-0 opacity-80" })
          ]
        }
      ) }),
      /* @__PURE__ */ e(
        pe,
        {
          align: "start",
          className: c("w-(--radix-popover-trigger-width) p-0", m),
          children: /* @__PURE__ */ n(He, { children: [
            /* @__PURE__ */ e(pt, { placeholder: s }),
            /* @__PURE__ */ n(ht, { children: [
              /* @__PURE__ */ e(gt, { children: i }),
              /* @__PURE__ */ e(bt, { children: t.map((b) => /* @__PURE__ */ n(
                xt,
                {
                  value: b.label,
                  disabled: b.disabled,
                  onSelect: () => {
                    r == null || r(b.value), h(!1);
                  },
                  children: [
                    /* @__PURE__ */ e(
                      Y,
                      {
                        className: c(
                          "mr-2 size-4",
                          b.value === a ? "opacity-100 text-primary" : "opacity-0"
                        )
                      }
                    ),
                    b.label
                  ]
                },
                b.value
              )) })
            ] })
          ] })
        }
      )
    ] });
  }
);
to.displayName = "SearchableSelect";
const _r = d.forwardRef(
  ({
    className: t,
    asChild: a,
    icon: r,
    label: l,
    description: s,
    active: i,
    badge: o,
    trailing: u,
    ...m
  }, f) => /* @__PURE__ */ n(
    a ? Te : "a",
    {
      ref: f,
      "data-active": i || void 0,
      className: c(
        "group relative flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors",
        "hover:bg-muted",
        i ? "bg-primary-soft text-primary font-semibold" : "text-foreground",
        t
      ),
      ...m,
      children: [
        r ? /* @__PURE__ */ e(
          "span",
          {
            className: c(
              "flex size-8 shrink-0 items-center justify-center rounded-md [&_svg]:size-4",
              i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            ),
            children: r
          }
        ) : null,
        /* @__PURE__ */ n("span", { className: "flex flex-1 flex-col gap-0.5 text-left", children: [
          /* @__PURE__ */ e("span", { className: "font-semibold leading-tight", children: l }),
          s ? /* @__PURE__ */ e("span", { className: "text-xs font-normal text-muted-foreground", children: s }) : null
        ] }),
        o,
        u
      ]
    }
  )
);
_r.displayName = "SectionNavItem";
const Gt = d.forwardRef(
  ({ className: t, orientation: a = "horizontal", decorative: r = !0, ...l }, s) => /* @__PURE__ */ e(
    jr.Root,
    {
      ref: s,
      decorative: r,
      orientation: a,
      className: c(
        "shrink-0 bg-border",
        a === "horizontal" ? "h-px w-full" : "h-full w-px",
        t
      ),
      ...l
    }
  )
);
Gt.displayName = jr.Root.displayName;
const ao = O.Root, bu = O.Trigger, xu = O.Close, ro = O.Portal, Br = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  O.Overlay,
  {
    className: c(
      "fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...a,
    ref: r
  }
));
Br.displayName = O.Overlay.displayName;
const no = fe(
  "fixed z-50 gap-4 bg-background p-6 shadow-juz-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:duration-300",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 max-w-sm border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        right: "inset-y-0 right-0 h-full w-3/4 max-w-sm border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
      }
    },
    defaultVariants: { side: "right" }
  }
), Kr = d.forwardRef(({ side: t = "right", className: a, children: r, ...l }, s) => /* @__PURE__ */ n(ro, { children: [
  /* @__PURE__ */ e(Br, {}),
  /* @__PURE__ */ n(
    O.Content,
    {
      ref: s,
      className: c(no({ side: t }), a),
      ...l,
      children: [
        /* @__PURE__ */ n(O.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ e(ve, { className: "size-4" }),
          /* @__PURE__ */ e("span", { className: "sr-only", children: "Close" })
        ] }),
        r
      ]
    }
  )
] }));
Kr.displayName = "SheetContent";
const Er = ({
  className: t,
  ...a
}) => /* @__PURE__ */ e(
  "div",
  {
    className: c("flex flex-col space-y-2 text-center sm:text-left", t),
    ...a
  }
);
Er.displayName = "SheetHeader";
const Zr = ({
  className: t,
  ...a
}) => /* @__PURE__ */ e(
  "div",
  {
    className: c(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...a
  }
);
Zr.displayName = "SheetFooter";
const Hr = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  O.Title,
  {
    ref: r,
    className: c("text-lg font-semibold text-foreground", t),
    ...a
  }
));
Hr.displayName = O.Title.displayName;
const Gr = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  O.Description,
  {
    ref: r,
    className: c("text-sm text-muted-foreground", t),
    ...a
  }
));
Gr.displayName = O.Description.displayName;
function yu({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: c("animate-pulse rounded-md bg-muted", t),
      ...a
    }
  );
}
const lo = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ n(
  Xe.Root,
  {
    ref: r,
    className: c(
      "relative flex w-full touch-none select-none items-center",
      t
    ),
    ...a,
    children: [
      /* @__PURE__ */ e(Xe.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ e(Xe.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ e(Xe.Thumb, { className: "block size-5 rounded-full border-2 border-primary bg-background shadow-juz-sm transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
lo.displayName = Xe.Root.displayName;
const so = d.forwardRef(
  ({ label: t, value: a, hint: r, className: l, ...s }, i) => /* @__PURE__ */ n(
    T,
    {
      ref: i,
      className: c("flex flex-col gap-1 p-4", l),
      ...s,
      children: [
        /* @__PURE__ */ e("span", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground", children: t }),
        /* @__PURE__ */ e("span", { className: "text-lg font-bold leading-tight text-foreground", children: a }),
        r ? /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground", children: r }) : null
      ]
    }
  )
);
so.displayName = "SummaryTile";
const io = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  ua.Root,
  {
    className: c(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input shadow-juz-sm",
      t
    ),
    ...a,
    ref: r,
    children: /* @__PURE__ */ e(
      ua.Thumb,
      {
        className: c(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-juz-sm ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
io.displayName = ua.Root.displayName;
const Ut = d.forwardRef(
  ({ className: t, wrapperClassName: a, ...r }, l) => (
    // tabIndex=0 keeps the horizontally-scrolling wrapper keyboard reachable
    // (axe-core `scrollable-region-focusable`). The table itself remains the
    // landmark via its `<table>` role.
    /* @__PURE__ */ e(
      "div",
      {
        className: c(
          "w-full overflow-auto rounded-lg border bg-card shadow-juz-sm",
          a
        ),
        tabIndex: 0,
        children: /* @__PURE__ */ e("table", { ref: l, className: c("w-full caption-bottom text-sm", t), ...r })
      }
    )
  )
);
Ut.displayName = "Table";
const qt = d.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("thead", { ref: r, className: c("bg-muted/60", t), ...a })
);
qt.displayName = "TableHeader";
const Yt = d.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("tbody", { ref: r, className: c("[&_tr:last-child]:border-0", t), ...a })
);
Yt.displayName = "TableBody";
const xe = d.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("tr", { ref: r, className: c("border-b transition-colors hover:bg-muted/40", t), ...a })
);
xe.displayName = "TableRow";
const V = d.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e(
    "th",
    {
      ref: r,
      className: c("h-12 px-4 text-left align-middle text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground", t),
      ...a
    }
  )
);
V.displayName = "TableHead";
const q = d.forwardRef(
  ({ className: t, ...a }, r) => /* @__PURE__ */ e("td", { ref: r, className: c("p-4 align-middle text-foreground", t), ...a })
);
q.displayName = "TableCell";
const oo = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e("div", { className: "relative w-full overflow-auto", tabIndex: 0, children: /* @__PURE__ */ e(
  "table",
  {
    ref: r,
    className: c("w-full caption-bottom text-sm", t),
    ...a
  }
) }));
oo.displayName = "TablePrimitive";
const co = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  "thead",
  {
    ref: r,
    className: c("[&_tr]:border-b bg-muted/40", t),
    ...a
  }
));
co.displayName = "TablePrimitiveHeader";
const uo = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  "tbody",
  {
    ref: r,
    className: c("[&_tr:last-child]:border-0", t),
    ...a
  }
));
uo.displayName = "TablePrimitiveBody";
const mo = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  "tr",
  {
    ref: r,
    className: c(
      "border-b transition-colors hover:bg-muted/40 data-[state=selected]:bg-primary-soft/45",
      t
    ),
    ...a
  }
));
mo.displayName = "TablePrimitiveRow";
const fo = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  "th",
  {
    ref: r,
    className: c(
      "h-11 px-3 text-left align-middle text-xs font-semibold uppercase tracking-wide text-muted-foreground",
      t
    ),
    ...a
  }
));
fo.displayName = "TablePrimitiveHead";
const po = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e("td", { ref: r, className: c("px-3 py-2.5 align-middle", t), ...a }));
po.displayName = "TablePrimitiveCell";
const ho = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  "caption",
  {
    ref: r,
    className: c("mt-4 text-sm text-muted-foreground", t),
    ...a
  }
));
ho.displayName = "TablePrimitiveCaption";
function Ua(t) {
  return t && (t.normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase() || "tab");
}
const Ra = d.createContext(null), Ma = d.forwardRef(({ value: t, defaultValue: a, onValueChange: r, children: l, ...s }, i) => {
  const o = d.useRef({
    toSlug: /* @__PURE__ */ new Map(),
    fromSlug: /* @__PURE__ */ new Map()
  }), u = d.useCallback((g) => {
    if (!g) return g;
    const b = o.current;
    if (b.toSlug.has(g)) return b.toSlug.get(g);
    let x = Ua(g), w = 1;
    for (; b.fromSlug.has(x) && b.fromSlug.get(x) !== g; )
      x = `${Ua(g)}-${w++}`;
    return b.toSlug.set(g, x), b.fromSlug.set(x, g), x;
  }, []), m = d.useMemo(
    () => ({
      toSlug: (g) => u(g),
      fromSlug: (g) => o.current.fromSlug.get(g) ?? g
    }),
    [u]
  ), f = t !== void 0 ? m.toSlug(t) : void 0, p = a !== void 0 ? m.toSlug(a) : void 0, h = d.useCallback(
    (g) => {
      r == null || r(m.fromSlug(g));
    },
    [m, r]
  );
  return /* @__PURE__ */ e(Ra.Provider, { value: m, children: /* @__PURE__ */ e(
    we.Root,
    {
      ref: i,
      defaultValue: p,
      onValueChange: r ? h : void 0,
      value: f,
      ...s,
      children: l
    }
  ) });
});
Ma.displayName = we.Root.displayName;
const Ta = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  we.List,
  {
    className: c("inline-flex min-h-11 items-center gap-1 rounded-lg bg-muted p-1 text-muted-foreground", t),
    ref: r,
    ...a
  }
));
Ta.displayName = we.List.displayName;
const Da = d.forwardRef(({ className: t, value: a, ...r }, l) => {
  const s = d.useContext(Ra), i = s && typeof a == "string" ? s.toSlug(a) : a;
  return /* @__PURE__ */ e(
    we.Trigger,
    {
      className: c(
        "inline-flex min-h-9 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-extrabold transition-colors focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-juz-sm",
        t
      ),
      ref: l,
      value: i,
      ...r
    }
  );
});
Da.displayName = we.Trigger.displayName;
const Ia = d.forwardRef(({ className: t, value: a, ...r }, l) => {
  const s = d.useContext(Ra), i = s && typeof a == "string" ? s.toSlug(a) : a;
  return /* @__PURE__ */ e(
    we.Content,
    {
      className: c("mt-4 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring", t),
      ref: l,
      value: i,
      ...r
    }
  );
});
Ia.displayName = we.Content.displayName;
const go = d.forwardRef(({ className: t, ...a }, r) => /* @__PURE__ */ e(
  "textarea",
  {
    className: c(
      "flex min-h-28 w-full rounded-md border border-input bg-card px-3 py-2 text-base font-normal text-foreground shadow-juz-sm transition-colors placeholder:text-muted-foreground focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t
    ),
    ref: r,
    ...a
  }
));
go.displayName = "Textarea";
const Nu = ({ className: t, ...a }) => /* @__PURE__ */ e(
  xl,
  {
    className: c("toaster group", t),
    toastOptions: {
      classNames: {
        toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-juz",
        description: "group-[.toast]:text-muted-foreground",
        actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        success: "group-[.toaster]:bg-success-soft group-[.toaster]:text-foreground group-[.toaster]:border-success/40",
        error: "group-[.toaster]:bg-destructive-soft group-[.toaster]:text-foreground group-[.toaster]:border-destructive/40",
        warning: "group-[.toaster]:bg-warning-soft group-[.toaster]:text-foreground group-[.toaster]:border-warning/40"
      }
    },
    ...a
  }
), Ur = fe(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-primary-soft data-[state=on]:text-primary [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-juz-sm hover:bg-muted hover:text-foreground"
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-9 px-2.5 min-w-9",
        lg: "h-11 px-5 min-w-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), bo = d.forwardRef(({ className: t, variant: a, size: r, ...l }, s) => /* @__PURE__ */ e(
  Cr.Root,
  {
    ref: s,
    className: c(Ur({ variant: a, size: r, className: t })),
    ...l
  }
));
bo.displayName = Cr.Root.displayName;
const qr = d.createContext({
  size: "default",
  variant: "default"
}), Yr = d.forwardRef(({ className: t, variant: a, size: r, children: l, ...s }, i) => /* @__PURE__ */ e(
  At.Root,
  {
    ref: i,
    className: c("inline-flex items-center justify-center gap-1", t),
    ...s,
    children: /* @__PURE__ */ e(qr.Provider, { value: { variant: a, size: r }, children: l })
  }
));
Yr.displayName = At.Root.displayName;
const Xr = d.forwardRef(({ className: t, children: a, variant: r, size: l, ...s }, i) => {
  const o = d.useContext(qr);
  return /* @__PURE__ */ e(
    At.Item,
    {
      ref: i,
      className: c(
        Ur({
          variant: o.variant || r,
          size: o.size || l
        }),
        t
      ),
      ...s,
      children: a
    }
  );
});
Xr.displayName = At.Item.displayName;
const Vr = $e.Provider, Jr = $e.Root, Qr = $e.Trigger, Fa = d.forwardRef(({ className: t, sideOffset: a = 8, ...r }, l) => /* @__PURE__ */ e($e.Portal, { children: /* @__PURE__ */ e(
  $e.Content,
  {
    className: c(
      "z-50 overflow-hidden rounded-md border bg-foreground px-3 py-1.5 text-xs font-semibold text-background shadow-juz-sm",
      "data-[state=closed]:animate-out data-[state=delayed-open]:animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1",
      t
    ),
    ref: l,
    sideOffset: a,
    ...r
  }
) }));
Fa.displayName = $e.Content.displayName;
const xo = d.forwardRef(
  ({
    value: t,
    onValueChange: a,
    onDropAccepted: r,
    onDropRejected: l,
    className: s,
    hint: i = "Przeciągnij pliki tutaj lub kliknij, aby wybrać",
    label: o = "Dodaj pliki",
    showFileList: u = !0,
    ...m
  }, f) => {
    const [p, h] = d.useState(t ?? []), g = t ?? p, b = (y) => {
      t || h(y), a == null || a(y);
    }, { getRootProps: x, getInputProps: w, isDragActive: S } = yl({
      ...m,
      onDrop: (y, j) => {
        const W = [...g, ...y];
        b(W), r == null || r(y), j.length && (l == null || l(j));
      }
    }), z = (y) => {
      b(g.filter((j) => j !== y));
    };
    return /* @__PURE__ */ n("div", { ref: f, className: c("space-y-3", s), children: [
      /* @__PURE__ */ n(
        "div",
        {
          ...x(),
          className: c(
            "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-muted/30 p-8 text-center transition-colors",
            "hover:border-primary/60 hover:bg-primary-soft/40",
            S && "border-primary bg-primary-soft text-primary"
          ),
          children: [
            /* @__PURE__ */ e(
              "input",
              {
                ...w(),
                "aria-label": typeof o == "string" ? o : "Dodaj pliki"
              }
            ),
            /* @__PURE__ */ e(Mn, { className: "size-8 text-muted-foreground" }),
            /* @__PURE__ */ e("div", { className: "text-sm font-semibold", children: o }),
            /* @__PURE__ */ e("div", { className: "text-xs text-muted-foreground", children: i })
          ]
        }
      ),
      u && g.length > 0 ? /* @__PURE__ */ e("ul", { className: "space-y-2", children: g.map((y, j) => /* @__PURE__ */ n(
        "li",
        {
          className: "flex items-center gap-3 rounded-md border bg-card px-3 py-2 text-sm shadow-juz-sm",
          children: [
            /* @__PURE__ */ e(Ne, { className: "size-4 text-muted-foreground" }),
            /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: y.name }),
            /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground", children: yo(y.size) }),
            /* @__PURE__ */ e(
              v,
              {
                type: "button",
                variant: "ghost",
                size: "icon",
                className: "size-8",
                onClick: () => z(y),
                "aria-label": `Usuń ${y.name}`,
                children: /* @__PURE__ */ e(ve, {})
              }
            )
          ]
        },
        `${y.name}-${j}`
      )) }) : null
    ] });
  }
);
xo.displayName = "Upload";
function yo(t) {
  if (t === 0) return "0 B";
  const a = 1024, r = ["B", "KB", "MB", "GB"], l = Math.floor(Math.log(t) / Math.log(a));
  return `${(t / Math.pow(a, l)).toFixed(1)} ${r[l]}`;
}
const No = d.forwardRef(
  ({ actions: t, compact: a = !1, className: r, ...l }, s) => /* @__PURE__ */ e(
    "div",
    {
      ref: s,
      className: c("inline-flex items-center gap-2", r),
      role: "group",
      ...l,
      children: t.map(
        (i) => a ? /* @__PURE__ */ e(
          me,
          {
            label: i.label,
            variant: i.variant === "destructive" ? "destructive" : "default",
            disabled: i.disabled,
            onClick: i.onClick,
            children: i.icon
          },
          i.key
        ) : /* @__PURE__ */ n(
          v,
          {
            variant: i.variant ?? "secondary",
            size: "sm",
            disabled: i.disabled,
            onClick: i.onClick,
            children: [
              i.icon,
              /* @__PURE__ */ e("span", { children: i.label })
            ]
          },
          i.key
        )
      )
    }
  )
);
No.displayName = "ActionButtons";
function vu({
  open: t,
  onOpenChange: a,
  filters: r,
  onFiltersChange: l,
  onApply: s,
  onReset: i,
  statusOptions: o = [],
  tagOptions: u = [],
  title: m = "Filtry zaawansowane",
  description: f = "Zawęź wyniki używając kryteriów poniżej.",
  dateRangeSlot: p,
  tagsSlot: h,
  extraSlot: g,
  className: b
}) {
  const x = d.useCallback(
    (z) => {
      l == null || l({ ...r, ...z });
    },
    [r, l]
  ), w = (z, y) => {
    const j = r.statuses ?? [];
    x({
      statuses: y ? [...j, z] : j.filter((W) => W !== z)
    });
  }, S = (z, y) => {
    const j = r.tags ?? [];
    x({
      tags: y ? [...j, z] : j.filter((W) => W !== z)
    });
  };
  return /* @__PURE__ */ e(ao, { open: t, onOpenChange: a, children: /* @__PURE__ */ n(
    Kr,
    {
      side: "right",
      className: c("flex w-full max-w-md flex-col gap-0 p-0", b),
      children: [
        /* @__PURE__ */ n(Er, { className: "border-b p-6", children: [
          /* @__PURE__ */ e(Hr, { children: m }),
          f ? /* @__PURE__ */ e(Gr, { children: f }) : null
        ] }),
        /* @__PURE__ */ n("div", { className: "flex-1 space-y-6 overflow-y-auto p-6", children: [
          p ? /* @__PURE__ */ n("section", { className: "space-y-3", children: [
            /* @__PURE__ */ e(le, { children: "Zakres dat" }),
            p
          ] }) : null,
          o.length > 0 ? /* @__PURE__ */ n("section", { className: "space-y-3", children: [
            /* @__PURE__ */ e(le, { children: "Statusy" }),
            /* @__PURE__ */ e("div", { className: "space-y-2", children: o.map((z) => {
              const y = (r.statuses ?? []).includes(z.value);
              return /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e(
                  Be,
                  {
                    id: `filter-status-${z.value}`,
                    checked: y,
                    onCheckedChange: (j) => w(z.value, j === !0)
                  }
                ),
                /* @__PURE__ */ e(
                  le,
                  {
                    htmlFor: `filter-status-${z.value}`,
                    className: "cursor-pointer text-sm font-medium text-foreground",
                    children: z.label
                  }
                )
              ] }, z.value);
            }) })
          ] }) : null,
          h ? /* @__PURE__ */ n("section", { className: "space-y-3", children: [
            /* @__PURE__ */ e(le, { children: "Tagi" }),
            h
          ] }) : u.length > 0 ? /* @__PURE__ */ n("section", { className: "space-y-3", children: [
            /* @__PURE__ */ e(le, { children: "Tagi" }),
            /* @__PURE__ */ e("div", { className: "space-y-2", children: u.map((z) => {
              const y = (r.tags ?? []).includes(z.value);
              return /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e(
                  Be,
                  {
                    id: `filter-tag-${z.value}`,
                    checked: y,
                    onCheckedChange: (j) => S(z.value, j === !0)
                  }
                ),
                /* @__PURE__ */ e(
                  le,
                  {
                    htmlFor: `filter-tag-${z.value}`,
                    className: "cursor-pointer text-sm font-medium text-foreground",
                    children: z.label
                  }
                )
              ] }, z.value);
            }) })
          ] }) : null,
          g ? /* @__PURE__ */ n(G, { children: [
            /* @__PURE__ */ e(Gt, {}),
            /* @__PURE__ */ e("section", { className: "space-y-3", children: g })
          ] }) : null
        ] }),
        /* @__PURE__ */ n(Zr, { className: "border-t bg-muted/30 p-4", children: [
          /* @__PURE__ */ e(
            v,
            {
              type: "button",
              variant: "ghost",
              onClick: () => {
                i == null || i();
              },
              children: "Wyczyść"
            }
          ),
          /* @__PURE__ */ e(
            v,
            {
              type: "button",
              onClick: () => {
                s == null || s(r), a(!1);
              },
              children: "Zastosuj filtry"
            }
          )
        ] })
      ]
    }
  ) });
}
const vo = d.forwardRef(
  ({
    value: t,
    onValueChange: a,
    options: r,
    onSearch: l,
    loading: s,
    placeholder: i = "Wybierz...",
    searchPlaceholder: o = "Szukaj...",
    emptyMessage: u = "Brak wyników.",
    disabled: m,
    className: f
  }, p) => {
    const [h, g] = d.useState(!1), [b, x] = d.useState(""), w = r.find((y) => y.value === t), S = (y) => {
      x(y), l == null || l(y);
    }, z = l ? r : r.filter(
      (y) => y.label.toLowerCase().includes(b.toLowerCase())
    );
    return /* @__PURE__ */ n(ke, { open: h, onOpenChange: g, children: [
      /* @__PURE__ */ e(ze, { asChild: !0, children: /* @__PURE__ */ n(
        "button",
        {
          ref: p,
          type: "button",
          role: "combobox",
          "aria-expanded": h,
          "aria-label": (w == null ? void 0 : w.label) ?? i,
          disabled: m,
          className: c(
            "flex h-11 w-full items-center justify-between gap-2 rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground shadow-juz-sm transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            !w && "text-muted-foreground",
            f
          ),
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: w ? w.label : i }),
            /* @__PURE__ */ e(U, { className: "size-4 shrink-0 text-muted-foreground" })
          ]
        }
      ) }),
      /* @__PURE__ */ e(
        pe,
        {
          className: "w-(--radix-popover-trigger-width) p-0",
          align: "start",
          children: /* @__PURE__ */ n(He, { shouldFilter: !l, children: [
            /* @__PURE__ */ e(
              pt,
              {
                placeholder: o,
                value: b,
                onValueChange: S
              }
            ),
            /* @__PURE__ */ e(ht, { children: s ? /* @__PURE__ */ n("div", { className: "flex items-center justify-center gap-2 py-6 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ e(lr, { className: "size-4 animate-spin" }),
              /* @__PURE__ */ e("span", { children: "Ładowanie..." })
            ] }) : /* @__PURE__ */ n(G, { children: [
              /* @__PURE__ */ e(gt, { children: u }),
              /* @__PURE__ */ e(bt, { children: z.map((y) => /* @__PURE__ */ n(
                xt,
                {
                  value: y.value,
                  disabled: y.disabled,
                  onSelect: (j) => {
                    a == null || a(j), g(!1);
                  },
                  children: [
                    /* @__PURE__ */ e(
                      Y,
                      {
                        className: c(
                          "mr-2 size-4",
                          t === y.value ? "opacity-100" : "opacity-0"
                        )
                      }
                    ),
                    y.label
                  ]
                },
                y.value
              )) })
            ] }) })
          ] })
        }
      )
    ] });
  }
);
vo.displayName = "Autocomplete";
const en = d.forwardRef(
  ({ icon: t, label: a, active: r, count: l, asChild: s, className: i, children: o, ...u }, m) => /* @__PURE__ */ e(
    s ? Te : "button",
    {
      ref: m,
      type: s ? void 0 : "button",
      "data-active": r || void 0,
      "aria-current": r ? "page" : void 0,
      className: c(
        "group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors",
        "hover:bg-muted hover:text-foreground",
        "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        r && "bg-primary-soft text-primary hover:bg-primary-soft",
        i
      ),
      ...u,
      children: s ? o : /* @__PURE__ */ n(G, { children: [
        t ? /* @__PURE__ */ e(
          "span",
          {
            className: c(
              "inline-flex size-5 items-center justify-center text-muted-foreground [&_svg]:size-4 [&_svg]:shrink-0",
              r && "text-primary"
            ),
            children: t
          }
        ) : null,
        /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: a }),
        typeof l == "number" ? /* @__PURE__ */ e(
          R,
          {
            variant: r ? "default" : "neutral",
            className: "shrink-0",
            children: l
          }
        ) : null
      ] })
    }
  )
);
en.displayName = "BasicMenuItem";
const wo = {
  new: "Nowe",
  planned: "Zaplanowane",
  progress: "W toku",
  done: "Gotowe",
  warning: "Wymaga uwagi",
  blocked: "Zablokowane"
}, ko = {
  new: "border-l-primary bg-primary-soft/65",
  planned: "border-l-primary bg-primary-soft/45",
  progress: "border-l-warning bg-warning-soft/65",
  done: "border-l-success bg-success-soft/65",
  warning: "border-l-warning bg-warning-soft/75",
  blocked: "border-l-destructive bg-destructive-soft/70"
}, zo = {
  new: "neutral",
  planned: "default",
  progress: "warning",
  done: "success",
  warning: "warning",
  blocked: "destructive"
};
function wu({
  eventId: t,
  status: a,
  title: r,
  startTime: l,
  endTime: s,
  station: i,
  owner: o,
  description: u,
  isActive: m,
  className: f,
  onClick: p,
  ...h
}) {
  const g = l && s ? `${l} - ${s}` : l || s, b = /* @__PURE__ */ n(G, { children: [
    /* @__PURE__ */ n("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ n("div", { className: "min-w-0", children: [
        /* @__PURE__ */ e("p", { className: "truncate font-mono text-sm font-extrabold text-foreground", children: r }),
        u ? /* @__PURE__ */ e("p", { className: "mt-0.5 truncate text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground", children: u }) : null
      ] }),
      /* @__PURE__ */ e(R, { className: "shrink-0 whitespace-nowrap", variant: zo[a], children: wo[a] })
    ] }),
    /* @__PURE__ */ n("div", { className: "mt-2 space-y-1 text-sm font-semibold", children: [
      /* @__PURE__ */ n("p", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ e(It, { className: "size-4 text-primary" }),
        g
      ] }),
      i || o ? /* @__PURE__ */ n("p", { className: "text-muted-foreground", children: [
        i ? `[${i}]` : null,
        " ",
        o
      ] }) : null
    ] })
  ] }), x = c(
    "min-w-[240px] rounded-md border border-l-4 p-3 shadow-juz-sm transition-colors",
    ko[a],
    m && "ring-2 ring-ring ring-offset-2 ring-offset-background",
    p && "cursor-pointer hover:border-primary/60",
    f
  );
  return p ? /* @__PURE__ */ e("button", { className: c(x, "text-left"), onClick: () => p(t), type: "button", ...h, children: b }) : /* @__PURE__ */ e("article", { className: x, ...h, children: b });
}
function So(t) {
  return t.split(" ").filter(Boolean).slice(0, 2).map((a) => a.charAt(0).toUpperCase()).join("");
}
const jo = d.forwardRef(
  ({
    title: t,
    date: a,
    time: r,
    location: l,
    description: s,
    participants: i,
    actions: o,
    className: u,
    ...m
  }, f) => /* @__PURE__ */ e(
    "div",
    {
      ref: f,
      className: c("juz-card overflow-hidden", u),
      ...m,
      children: /* @__PURE__ */ n("div", { className: "space-y-4 p-6", children: [
        /* @__PURE__ */ n("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ n("div", { className: "min-w-0 space-y-1", children: [
            /* @__PURE__ */ e(se, { variant: "h4", className: "truncate", children: t }),
            s ? /* @__PURE__ */ e(se, { variant: "muted", className: "line-clamp-2", children: s }) : null
          ] }),
          o ? /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-2", children: o }) : null
        ] }),
        /* @__PURE__ */ n("dl", { className: "grid gap-3 text-sm sm:grid-cols-2", children: [
          /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e(Re, { className: "size-4 shrink-0 text-primary" }),
            /* @__PURE__ */ e("dt", { className: "sr-only", children: "Data" }),
            /* @__PURE__ */ e("dd", { className: "font-semibold text-foreground", children: a })
          ] }),
          r ? /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e(It, { className: "size-4 shrink-0 text-primary" }),
            /* @__PURE__ */ e("dt", { className: "sr-only", children: "Godzina" }),
            /* @__PURE__ */ e("dd", { className: "font-semibold text-foreground", children: r })
          ] }) : null,
          l ? /* @__PURE__ */ n("div", { className: "flex items-center gap-2 sm:col-span-2", children: [
            /* @__PURE__ */ e(ot, { className: "size-4 shrink-0 text-primary" }),
            /* @__PURE__ */ e("dt", { className: "sr-only", children: "Lokalizacja" }),
            /* @__PURE__ */ e("dd", { className: "truncate font-medium text-muted-foreground", children: l })
          ] }) : null
        ] }),
        i && i.length > 0 ? /* @__PURE__ */ n("div", { className: "flex items-center gap-3 border-t pt-4", children: [
          /* @__PURE__ */ e(ir, { className: "size-4 shrink-0 text-muted-foreground" }),
          /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground", children: "Uczestnicy" }),
          /* @__PURE__ */ n("div", { className: "flex -space-x-2", children: [
            i.slice(0, 5).map((p) => /* @__PURE__ */ n(
              tt,
              {
                className: "size-8 border-2 border-card",
                title: p.name,
                children: [
                  p.avatarUrl ? /* @__PURE__ */ e($t, { src: p.avatarUrl, alt: p.name }) : null,
                  /* @__PURE__ */ e(at, { children: So(p.name) })
                ]
              },
              p.id
            )),
            i.length > 5 ? /* @__PURE__ */ e(tt, { className: "size-8 border-2 border-card", children: /* @__PURE__ */ n(at, { className: "bg-muted text-muted-foreground", children: [
              "+",
              i.length - 5
            ] }) }) : null
          ] })
        ] }) : null
      ] })
    }
  )
);
jo.displayName = "CalendarEventSection";
const Co = {
  primary: "hsl(var(--primary))",
  success: "hsl(var(--success))",
  warning: "hsl(var(--warning))",
  destructive: "hsl(var(--destructive))",
  muted: "hsl(var(--muted))"
}, Po = {
  primary: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  destructive: "bg-destructive",
  muted: "bg-muted"
};
function La({
  title: t,
  description: a,
  badge: r,
  className: l,
  children: s
}) {
  return /* @__PURE__ */ n(T, { className: ["p-5", l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n("div", { className: "mb-5 flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e("h3", { className: "font-extrabold", children: t }),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: a })
      ] }),
      r ? /* @__PURE__ */ e(R, { variant: "neutral", children: r }) : null
    ] }),
    s
  ] });
}
function ku({
  title: t = "Zlecenia wedlug dnia",
  description: a = "Os X: dni tygodnia, os Y: liczba złeceń.",
  data: r,
  className: l
}) {
  const s = Math.max(...r.map((i) => i.value), 1);
  return /* @__PURE__ */ e(La, { title: t, description: a, badge: "Bar", className: l, children: /* @__PURE__ */ n("div", { className: "grid h-56 grid-cols-[44px_minmax(0,1fr)] gap-3", children: [
    /* @__PURE__ */ n("div", { className: "grid content-between text-right text-xs font-semibold text-muted-foreground", children: [
      /* @__PURE__ */ e("span", { children: "100" }),
      /* @__PURE__ */ e("span", { children: "75" }),
      /* @__PURE__ */ e("span", { children: "50" }),
      /* @__PURE__ */ e("span", { children: "25" }),
      /* @__PURE__ */ e("span", { children: "0" })
    ] }),
    /* @__PURE__ */ n("div", { className: "relative grid grid-cols-7 items-end gap-3 border-b border-l px-3 pb-7", children: [
      /* @__PURE__ */ e("div", { className: "absolute inset-x-0 bottom-7 border-t border-dashed border-border" }),
      /* @__PURE__ */ e("div", { className: "absolute inset-x-0 bottom-[88px] border-t border-dashed border-border" }),
      /* @__PURE__ */ e("div", { className: "absolute inset-x-0 bottom-[149px] border-t border-dashed border-border" }),
      r.map((i) => /* @__PURE__ */ n("div", { className: "relative z-10 flex h-full flex-col justify-end gap-2", children: [
        /* @__PURE__ */ e("span", { className: "text-center text-xs font-bold", children: i.value }),
        /* @__PURE__ */ e("div", { className: "rounded-t-md bg-primary", style: { height: `${i.value / s * 150}px` } }),
        /* @__PURE__ */ e("span", { className: "absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground", children: i.label })
      ] }, i.label))
    ] })
  ] }) });
}
function zu({
  title: t = "Wydajność linii",
  description: a = "Linia z punktami i wartościami.",
  data: r,
  className: l
}) {
  const o = { left: 40, right: 470, top: 28, bottom: 200 }, u = Math.max(...r.map((g) => g.value), 1), m = Math.min(...r.map((g) => g.value), 0), f = Math.max(u - m, 1), p = (o.right - o.left) / Math.max(r.length - 1, 1), h = r.map((g, b) => ({
    ...g,
    x: o.left + b * p,
    y: o.bottom - (g.value - m) / f * (o.bottom - o.top)
  }));
  return /* @__PURE__ */ e(La, { title: t, description: a, badge: "Line", className: l, children: /* @__PURE__ */ n("svg", { className: "h-56 w-full overflow-visible", viewBox: "0 0 500 240", role: "img", "aria-label": t, children: [
    [0, 1, 2, 3].map((g) => /* @__PURE__ */ e("line", { x1: o.left, x2: o.right, y1: o.top + g * 45, y2: o.top + g * 45, stroke: "hsl(var(--border))", strokeDasharray: "5 5" }, g)),
    /* @__PURE__ */ e("line", { x1: o.left, x2: o.left, y1: o.top, y2: o.bottom, stroke: "hsl(var(--border))" }),
    /* @__PURE__ */ e("line", { x1: o.left, x2: o.right, y1: o.bottom, y2: o.bottom, stroke: "hsl(var(--border))" }),
    /* @__PURE__ */ e("polyline", { points: h.map((g) => `${g.x},${g.y}`).join(" "), fill: "none", stroke: "hsl(var(--primary))", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round" }),
    h.map((g) => /* @__PURE__ */ n("g", { children: [
      /* @__PURE__ */ e("circle", { cx: g.x, cy: g.y, r: "6", fill: "hsl(var(--primary))" }),
      /* @__PURE__ */ e("text", { x: g.x, y: g.y - 14, textAnchor: "middle", className: "fill-foreground text-[13px] font-bold", children: g.value })
    ] }, g.label)),
    h.map((g) => /* @__PURE__ */ e("text", { x: g.x, y: "224", textAnchor: "middle", className: "fill-muted-foreground text-[13px]", children: g.label }, g.label)),
    [u, Math.round(u * 0.75), Math.round(u * 0.5), Math.round(u * 0.25), 0].map((g, b) => /* @__PURE__ */ e("text", { x: "4", y: o.top + b * 43, className: "fill-muted-foreground text-[13px]", children: g }, `${g}-${b}`))
  ] }) });
}
function Su({
  title: t = "Udzial statusow produkcji",
  description: a = "Wykres kolowy z legenda i danymi.",
  data: r,
  centerLabel: l = "100%",
  centerCaption: s = "kanaly",
  className: i
}) {
  const o = r.reduce((f, p) => f + p.value, 0) || 1;
  let u = 0;
  const m = r.map((f) => {
    const p = u;
    return u += f.value / o * 100, `${Co[f.tone]} ${p}% ${u}%`;
  }).join(", ");
  return /* @__PURE__ */ e(La, { title: t, description: a, badge: "Pie", className: i, children: /* @__PURE__ */ n("div", { className: "grid items-center gap-6 md:grid-cols-[220px_minmax(0,1fr)]", children: [
    /* @__PURE__ */ e("div", { className: "relative size-52 rounded-full", style: { background: `conic-gradient(${m})` }, children: /* @__PURE__ */ n("div", { className: "absolute inset-12 grid place-items-center rounded-full bg-card text-center shadow-juz-sm", children: [
      /* @__PURE__ */ e("b", { children: l }),
      /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground", children: s })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "grid gap-3 sm:grid-cols-2", children: r.map((f) => /* @__PURE__ */ n("div", { className: "flex items-center justify-between rounded-lg border bg-background p-3", children: [
      /* @__PURE__ */ n("span", { className: "flex items-center gap-2 font-semibold", children: [
        /* @__PURE__ */ e("span", { className: `size-3 rounded-full ${Po[f.tone]}` }),
        f.label
      ] }),
      /* @__PURE__ */ n("b", { children: [
        Math.round(f.value / o * 100),
        "%"
      ] })
    ] }, f.label)) })
  ] }) });
}
function Ro({
  query: t,
  filtersOpen: a,
  columnsOpen: r,
  visibleCount: l,
  searchPlaceholder: s,
  onQueryChange: i,
  onFiltersToggle: o,
  onColumnsToggle: u
}) {
  return /* @__PURE__ */ n("div", { className: "flex flex-col gap-3 border-b p-4 xl:flex-row xl:items-center", children: [
    /* @__PURE__ */ n("div", { className: "relative min-w-0 flex-1", children: [
      /* @__PURE__ */ e(Je, { className: "pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ e(
        C,
        {
          className: "h-11 pl-10",
          value: t,
          onChange: (m) => i(m.target.value),
          placeholder: s
        }
      )
    ] }),
    /* @__PURE__ */ n("div", { className: "flex flex-wrap gap-2", children: [
      /* @__PURE__ */ n(v, { className: "h-11 px-4", variant: a ? "default" : "outline", onClick: o, children: [
        /* @__PURE__ */ e(dr, {}),
        a ? "Ukryj filtry" : "Pokaż filtry",
        a ? /* @__PURE__ */ e("span", { className: "rounded-full bg-primary-soft px-1.5 text-xs text-primary", children: "1" }) : null
      ] }),
      /* @__PURE__ */ n(v, { className: "h-11 px-4", variant: r ? "default" : "outline", onClick: u, children: [
        /* @__PURE__ */ e(or, {}),
        r ? "Ukryj kolumny" : "Pokaż kolumny",
        /* @__PURE__ */ e("span", { className: "rounded-full bg-primary-soft px-1.5 text-xs text-primary", children: l })
      ] })
    ] })
  ] });
}
function Mo() {
  const [t, a] = d.useState({
    client: "",
    product: "",
    line: "",
    deadline: "",
    status: "Wszystkie",
    warehouse: "",
    source: "",
    contractor: ""
  }), [r, l] = d.useState(0);
  function s(u, m) {
    a((f) => ({ ...f, [u]: m }));
  }
  function i() {
    a({
      client: "",
      product: "",
      line: "",
      deadline: "",
      status: "Wszystkie",
      warehouse: "",
      source: "",
      contractor: ""
    }), l(0);
  }
  function o() {
    l(Object.values(t).filter((u) => u && u !== "Wszystkie").length);
  }
  return /* @__PURE__ */ n("div", { className: "border-b bg-muted/30 p-4", children: [
    /* @__PURE__ */ n("div", { className: "mb-4 flex items-center gap-2 text-lg font-bold", children: [
      /* @__PURE__ */ e(In, { className: "size-5 text-primary" }),
      "Filtry zaawansowane",
      r ? /* @__PURE__ */ e("span", { className: "rounded-full bg-primary-soft px-2 py-0.5 text-xs font-extrabold text-primary", children: r }) : null
    ] }),
    /* @__PURE__ */ n("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4", children: [
      /* @__PURE__ */ e(Ve, { label: "Klient", children: /* @__PURE__ */ e(C, { placeholder: "np. Firma testowa", value: t.client, onChange: (u) => s("client", u.target.value) }) }),
      /* @__PURE__ */ e(Ve, { label: "Produkt", children: /* @__PURE__ */ e(C, { placeholder: "np. Classic 0.7", value: t.product, onChange: (u) => s("product", u.target.value) }) }),
      /* @__PURE__ */ e(Ve, { label: "Linia", children: /* @__PURE__ */ e(C, { placeholder: "Linia A, pakowanie...", value: t.line, onChange: (u) => s("line", u.target.value) }) }),
      /* @__PURE__ */ e(Ve, { label: "Termin", children: /* @__PURE__ */ e(C, { placeholder: "Od - do", value: t.deadline, onChange: (u) => s("deadline", u.target.value) }) })
    ] }),
    /* @__PURE__ */ n("div", { className: "mt-4 flex justify-end gap-2", children: [
      /* @__PURE__ */ e(v, { variant: "ghost", onClick: i, children: "Wyczyść" }),
      /* @__PURE__ */ e(v, { variant: "outline", onClick: i, children: "Anuluj" }),
      /* @__PURE__ */ e(v, { onClick: o, children: "Filtruj" })
    ] })
  ] });
}
function Ve({ label: t, children: a }) {
  return /* @__PURE__ */ n("label", { className: "grid gap-2 text-sm font-semibold text-muted-foreground", children: [
    t,
    a
  ] });
}
function To({
  label: t,
  active: a,
  direction: r,
  filtered: l,
  align: s,
  onAsc: i,
  onDesc: o,
  onFilter: u
}) {
  return /* @__PURE__ */ n("div", { className: c("flex items-center gap-2", s === "right" && "justify-end"), children: [
    /* @__PURE__ */ e("span", { children: t }),
    /* @__PURE__ */ n("div", { className: "inline-flex h-8 overflow-hidden rounded-md border bg-background shadow-juz-sm", children: [
      /* @__PURE__ */ e(
        "button",
        {
          className: c("grid w-8 place-items-center text-muted-foreground hover:text-primary", a && r === "asc" && "bg-primary text-primary-foreground"),
          type: "button",
          onClick: i,
          "aria-label": `${t}: sortuj rosnaco`,
          children: /* @__PURE__ */ e(cr, { className: "size-4" })
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          className: c("grid w-8 place-items-center border-l text-muted-foreground hover:text-primary", a && r === "desc" && "bg-primary text-primary-foreground"),
          type: "button",
          onClick: o,
          "aria-label": `${t}: sortuj malejaco`,
          children: /* @__PURE__ */ e(ur, { className: "size-4" })
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          className: c("grid w-8 place-items-center border-l text-muted-foreground hover:text-primary", l && "bg-primary-soft text-primary"),
          type: "button",
          onClick: u,
          "aria-label": `${t}: filtr kolumny`,
          children: /* @__PURE__ */ e(dr, { className: "size-4" })
        }
      )
    ] })
  ] });
}
function Do({
  label: t,
  value: a = "",
  type: r = "text",
  options: l = [],
  onValueChange: s,
  onApply: i,
  onClear: o,
  onClose: u
}) {
  return /* @__PURE__ */ e("div", { className: "border-b bg-background p-4", children: /* @__PURE__ */ n(T, { className: "w-full overflow-hidden shadow-juz-sm", children: [
    /* @__PURE__ */ n("div", { className: "flex items-start justify-between border-b p-4", children: [
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e("p", { className: "juz-label", children: "Filtrowanie na kolumnie" }),
        /* @__PURE__ */ e("h3", { className: "text-xl font-extrabold", children: t })
      ] }),
      /* @__PURE__ */ e(v, { variant: "ghost", size: "icon", onClick: u, "aria-label": "Zamknij filtr kolumny", children: /* @__PURE__ */ e(ve, {}) })
    ] }),
    /* @__PURE__ */ n("div", { className: "grid gap-3 p-4 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end", children: [
      /* @__PURE__ */ e(Ve, { label: "Zawiera", children: r === "select" ? /* @__PURE__ */ n(
        "select",
        {
          className: "h-11 w-full rounded-md border bg-card px-3 text-sm shadow-juz-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring",
          value: a,
          onChange: (m) => s == null ? void 0 : s(m.target.value),
          children: [
            /* @__PURE__ */ e("option", { value: "", children: "Wszystkie" }),
            l.map((m) => /* @__PURE__ */ e("option", { value: m, children: m }, m))
          ]
        }
      ) : /* @__PURE__ */ e(
        C,
        {
          placeholder: `Filtruj: ${t.toLowerCase()}`,
          value: a,
          onChange: (m) => s == null ? void 0 : s(m.target.value)
        }
      ) }),
      /* @__PURE__ */ n("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ e(v, { variant: "ghost", onClick: o, children: "Wyczyść" }),
        /* @__PURE__ */ e(v, { onClick: i, children: "Zastosuj" })
      ] })
    ] })
  ] }) });
}
function Io({
  columns: t,
  visible: a,
  onVisibleChange: r,
  onReset: l
}) {
  const [s, i] = d.useState(!1);
  return /* @__PURE__ */ n("aside", { className: "border-l bg-card", children: [
    /* @__PURE__ */ n("div", { className: "border-b p-4", children: [
      /* @__PURE__ */ e("h3", { className: "text-lg font-extrabold", children: "Zarządzaj kolumnami" }),
      /* @__PURE__ */ n("p", { className: "mt-1 text-sm text-muted-foreground", children: [
        "Widoczne: ",
        /* @__PURE__ */ e("strong", { className: "text-foreground", children: Object.values(a).filter(Boolean).length })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "space-y-3 p-4", children: t.map((o) => /* @__PURE__ */ n("label", { className: "flex items-center justify-between gap-3 rounded-lg border bg-background px-3 py-2", children: [
      /* @__PURE__ */ n("span", { className: "flex items-center gap-2 font-semibold", children: [
        /* @__PURE__ */ e(or, { className: "size-4 text-muted-foreground" }),
        o.label
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          className: "h-5 w-5 accent-[hsl(var(--primary))]",
          checked: a[o.key],
          type: "checkbox",
          onChange: (u) => r(o.key, u.target.checked)
        }
      )
    ] }, o.key)) }),
    /* @__PURE__ */ n("div", { className: "space-y-2 border-t p-4", children: [
      /* @__PURE__ */ n(v, { className: "w-full", onClick: () => i(!0), children: [
        /* @__PURE__ */ e(Tn, {}),
        s ? "Widok zapisany" : "Zapisz jako widok"
      ] }),
      /* @__PURE__ */ n(
        v,
        {
          className: "w-full",
          variant: "outline",
          onClick: () => {
            l == null || l(), i(!1);
          },
          children: [
            /* @__PURE__ */ e(Dn, {}),
            "Resetuj do domyslnych"
          ]
        }
      )
    ] })
  ] });
}
const tn = [
  { key: "order", label: "Zlecenie" },
  { key: "product", label: "Produkt" },
  { key: "client", label: "Klient" },
  { key: "line", label: "Linia" },
  { key: "progress", label: "Postep", align: "right" },
  { key: "owner", label: "Opiekun" },
  { key: "status", label: "Status" },
  { key: "deadline", label: "Termin" }
], Fo = [
  {
    id: "1",
    order: "ZP/00042/05/26",
    product: "Długopis Classic 0.7",
    client: "Firma testowa",
    line: "Linia A",
    progress: 68,
    owner: "Opiekun 1",
    status: "Aktywny",
    tone: "success",
    deadline: "28.05.2026"
  },
  {
    id: "2",
    order: "ZP/00043/05/26",
    product: "Flamaster Neon Mix",
    client: "PisakLab",
    line: "Linia B",
    progress: 34,
    owner: "Tomasz Nowak",
    status: "Zaplanowany",
    tone: "neutral",
    deadline: "29.05.2026"
  },
  {
    id: "3",
    order: "ZP/00044/05/26",
    product: "Mazak Pro B2B",
    client: "NordOffice",
    line: "Linia C",
    progress: 12,
    owner: "Anna Zielinska",
    status: "Wstrzymany",
    tone: "warning",
    deadline: "30.05.2026"
  },
  {
    id: "4",
    order: "ZP/00045/05/26",
    product: "Pisaki szkolne Q2",
    client: "InkFactory",
    line: "Linia A",
    progress: 9,
    owner: "Kamil Wrobel",
    status: "Wymaga uwagi",
    tone: "destructive",
    deadline: "30.05.2026"
  },
  {
    id: "5",
    order: "ZP/00046/05/26",
    product: "Eco Pen Series",
    client: "GreenWrite",
    line: "Linia D",
    progress: 82,
    owner: "Opiekun 1",
    status: "Aktywny",
    tone: "success",
    deadline: "31.05.2026"
  },
  {
    id: "6",
    order: "ZP/00047/05/26",
    product: "Zestaw markerów B2B",
    client: "OfficeMax",
    line: "Linia B",
    progress: 55,
    owner: "Tomasz Nowak",
    status: "Aktywny",
    tone: "success",
    deadline: "02.06.2026"
  },
  {
    id: "7",
    order: "ZP/00048/05/26",
    product: "Back to school pack",
    client: "PisakLab",
    line: "Linia C",
    progress: 24,
    owner: "Anna Zielinska",
    status: "Zaplanowany",
    tone: "neutral",
    deadline: "03.06.2026"
  },
  {
    id: "8",
    order: "ZP/00049/05/26",
    product: "Seria InkFactory Premium",
    client: "InkFactory",
    line: "Linia D",
    progress: 72,
    owner: "Kamil Wrobel",
    status: "Aktywny",
    tone: "success",
    deadline: "04.06.2026"
  },
  {
    id: "9",
    order: "ZP/00050/05/26",
    product: "Zamówienie hurtowe 5000",
    client: "NordOffice",
    line: "Linia A",
    progress: 18,
    owner: "Opiekun 1",
    status: "Wstrzymany",
    tone: "warning",
    deadline: "05.06.2026"
  },
  {
    id: "10",
    order: "ZP/00051/05/26",
    product: "Limitowana seria violet",
    client: "Firma testowa",
    line: "Linia B",
    progress: 91,
    owner: "Tomasz Nowak",
    status: "Aktywny",
    tone: "success",
    deadline: "06.06.2026"
  },
  {
    id: "11",
    order: "ZP/00052/05/26",
    product: "Pakiet sprzedazowy 12 szt.",
    client: "WriteFlow",
    line: "Linia C",
    progress: 7,
    owner: "Anna Zielinska",
    status: "Wymaga uwagi",
    tone: "destructive",
    deadline: "06.06.2026"
  },
  {
    id: "12",
    order: "ZP/00053/05/26",
    product: "Ekspozycja sklepowa",
    client: "RetailPoint",
    line: "Linia D",
    progress: 63,
    owner: "Kamil Wrobel",
    status: "Aktywny",
    tone: "success",
    deadline: "07.06.2026"
  }
];
tn.reduce((t, a) => (t[a.key] = !0, t), {});
function an({
  density: t = "default",
  title: a,
  description: r,
  actionLabel: l,
  searchPlaceholder: s,
  rows: i,
  columns: o,
  defaultSort: u
}) {
  var zt, Ge;
  const m = i ?? Fo, f = o ?? tn, p = d.useMemo(() => f.reduce((k, I) => (k[I.key] = !0, k), {}), [f]), [h, g] = d.useState(""), [b, x] = d.useState(!1), [w, S] = d.useState(!1), [z, y] = d.useState(null), [j, W] = d.useState(""), [K, H] = d.useState({}), [M, D] = d.useState(p), [X, he] = d.useState(u ?? ((zt = f[0]) == null ? void 0 : zt.key) ?? "id"), [Ie, Vt] = d.useState("desc"), [Jt, ee] = d.useState(1), [te, Qt] = d.useState(10);
  d.useEffect(() => {
    var k;
    D(p), he(u ?? ((k = f[0]) == null ? void 0 : k.key) ?? "id");
  }, [u, p, f]);
  const ge = d.useMemo(() => {
    const k = h.trim().toLowerCase();
    return m.filter((I) => k ? Object.values(I).some(
      (ce) => String(ce).toLowerCase().includes(k)
    ) : !0).filter((I) => Object.entries(K).every(([ce, re]) => {
      const ne = (re ?? "").trim().toLowerCase();
      return ne ? String(I[ce]).toLowerCase().includes(ne) : !0;
    })).sort((I, ce) => {
      const re = I[X], ne = ce[X];
      return typeof re == "number" && typeof ne == "number" ? Ie === "asc" ? re - ne : ne - re : Ie === "asc" ? String(re).localeCompare(String(ne), "pl") : String(ne).localeCompare(String(re), "pl");
    });
  }, [K, h, Ie, X, m]), be = Math.max(1, Math.ceil(ge.length / te)), ae = Math.min(Jt, be), Nt = d.useMemo(() => {
    const k = (ae - 1) * te;
    return ge.slice(k, k + te);
  }, [ae, ge, te]), ea = ge.length ? (ae - 1) * te + 1 : 0, vt = Math.min(ae * te, ge.length);
  d.useEffect(() => {
    ee(1);
  }, [te, h]);
  function wt(k, I) {
    he(k), Vt(I);
  }
  function kt(k) {
    y((I) => I === k ? null : (W(K[k] ?? ""), k));
  }
  return /* @__PURE__ */ n("section", { className: "space-y-4", children: [
    /* @__PURE__ */ n("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between", children: [
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e("h2", { className: c("font-extrabold", t === "record" ? "text-2xl" : "text-3xl"), children: a ?? (t === "record" ? "Zlecenia w rekordzie" : "Lista złeceń") }),
        /* @__PURE__ */ e("p", { className: "text-muted-foreground", children: r ?? "Wspólny wzorzec listy: wyszukiwanie, filtry, kolumny, sortowanie, paginacja i akcje." })
      ] }),
      /* @__PURE__ */ e(v, { className: "h-11 px-5", children: l ?? "Nowe złeceńie" })
    ] }),
    /* @__PURE__ */ n("div", { className: "rounded-xl border bg-card shadow-juz-sm", children: [
      /* @__PURE__ */ e(
        Ro,
        {
          columnsOpen: w,
          filtersOpen: b,
          onColumnsToggle: () => S((k) => !k),
          onFiltersToggle: () => x((k) => !k),
          onQueryChange: g,
          query: h,
          searchPlaceholder: s ?? "Szukaj po złeceńiu, produkcie, kliencie... (Enter aby dodac filtr)",
          visibleCount: Object.values(M).filter(Boolean).length
        }
      ),
      b ? /* @__PURE__ */ e(Mo, {}) : null,
      z ? /* @__PURE__ */ e(
        Do,
        {
          label: ((Ge = f.find((k) => k.key === z)) == null ? void 0 : Ge.label) ?? z,
          value: j,
          onValueChange: W,
          onApply: () => {
            H((k) => ({ ...k, [z]: j })), ee(1), y(null);
          },
          onClear: () => {
            H((k) => {
              const I = { ...k };
              return delete I[z], I;
            }), W(""), ee(1);
          },
          onClose: () => y(null)
        }
      ) : null,
      /* @__PURE__ */ n("div", { className: c("grid", w && "2xl:grid-cols-[minmax(0,1fr)_360px]"), children: [
        /* @__PURE__ */ n("div", { className: "min-w-0", children: [
          /* @__PURE__ */ n(Ut, { className: "border-0 shadow-none", children: [
            /* @__PURE__ */ e(qt, { children: /* @__PURE__ */ n(xe, { children: [
              f.map(
                (k) => M[k.key] ? /* @__PURE__ */ e(V, { className: c(k.align === "right" && "text-right"), children: /* @__PURE__ */ e(
                  To,
                  {
                    label: k.label,
                    active: X === k.key,
                    direction: Ie,
                    align: k.align,
                    filtered: !!K[k.key],
                    onAsc: () => wt(k.key, "asc"),
                    onDesc: () => wt(k.key, "desc"),
                    onFilter: () => kt(k.key)
                  }
                ) }, k.key) : null
              ),
              /* @__PURE__ */ e(V, { className: "text-right", children: "Akcje" })
            ] }) }),
            /* @__PURE__ */ e(Yt, { children: Nt.map((k) => /* @__PURE__ */ n(xe, { children: [
              f.map(
                (I) => M[I.key] ? /* @__PURE__ */ e(q, { className: c(I.align === "right" && "text-right"), children: I.render ? I.render(k) : k[I.key] }, I.key) : null
              ),
              /* @__PURE__ */ e(q, { className: "text-right", children: /* @__PURE__ */ n("div", { className: "flex justify-end gap-1", children: [
                /* @__PURE__ */ e(v, { variant: "ghost", size: "icon", "aria-label": "Podgląd", children: /* @__PURE__ */ e(sr, {}) }),
                /* @__PURE__ */ e(v, { variant: "ghost", size: "icon", "aria-label": "Kopiuj", children: /* @__PURE__ */ e(Ft, {}) }),
                /* @__PURE__ */ e(v, { variant: "ghost", size: "icon", "aria-label": "Więcej", children: /* @__PURE__ */ e(dt, {}) }),
                /* @__PURE__ */ e(v, { variant: "ghost", size: "icon", "aria-label": "Usuń", className: "text-destructive hover:bg-destructive-soft", children: /* @__PURE__ */ e(mr, {}) })
              ] }) })
            ] }, k.id)) })
          ] }),
          /* @__PURE__ */ n("div", { className: "flex flex-col gap-3 border-t px-4 py-3 md:flex-row md:items-center md:justify-between", children: [
            /* @__PURE__ */ n("p", { className: "text-sm font-semibold text-muted-foreground", children: [
              "Pokazano ",
              /* @__PURE__ */ n("span", { className: "text-foreground", children: [
                ea,
                "-",
                vt
              ] }),
              " z",
              " ",
              /* @__PURE__ */ e("span", { className: "text-foreground", children: ge.length }),
              " wyników"
            ] }),
            /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center gap-3", children: [
              /* @__PURE__ */ n("label", { className: "flex items-center gap-2 text-sm font-semibold text-muted-foreground", children: [
                "Wyników na stronie",
                /* @__PURE__ */ e(
                  "select",
                  {
                    className: "h-10 rounded-md border bg-card px-3 font-bold text-foreground shadow-juz-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring",
                    onChange: (k) => Qt(Number(k.target.value)),
                    value: te,
                    children: [10, 20, 40, 60].map((k) => /* @__PURE__ */ e("option", { value: k, children: k }, k))
                  }
                )
              ] }),
              /* @__PURE__ */ n("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ e(
                  v,
                  {
                    "aria-label": "Poprzednia strona",
                    disabled: ae <= 1,
                    onClick: () => ee((k) => Math.max(1, k - 1)),
                    size: "icon",
                    variant: "outline",
                    children: /* @__PURE__ */ e(Ke, {})
                  }
                ),
                Array.from({ length: be }, (k, I) => I + 1).map((k) => /* @__PURE__ */ e(
                  v,
                  {
                    "aria-label": `Strona ${k}`,
                    onClick: () => ee(k),
                    size: "icon",
                    variant: ae === k ? "default" : "outline",
                    children: k
                  },
                  k
                )),
                /* @__PURE__ */ e(
                  v,
                  {
                    "aria-label": "Następna strona",
                    disabled: ae >= be,
                    onClick: () => ee((k) => Math.min(be, k + 1)),
                    size: "icon",
                    variant: "outline",
                    children: /* @__PURE__ */ e(de, {})
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        w ? /* @__PURE__ */ e(
          Io,
          {
            columns: f,
            visible: M,
            onVisibleChange: (k, I) => D((ce) => ({ ...ce, [k]: I })),
            onReset: () => D(p)
          }
        ) : null
      ] })
    ] })
  ] });
}
function Lo(t) {
  return t.map((a) => typeof a == "string" ? { value: a, label: a } : { label: a.value, ...a });
}
function Oo({
  items: t,
  value: a,
  defaultValue: r,
  onValueChange: l,
  sticky: s = !1,
  className: i,
  listClassName: o
}) {
  var f;
  const u = Lo(t), m = r ?? ((f = u[0]) == null ? void 0 : f.value);
  return /* @__PURE__ */ n(
    Ma,
    {
      className: c(
        "overflow-x-auto border-b bg-background/95",
        s && "sticky top-0 z-30 shadow-juz-sm backdrop-blur-sm",
        i
      ),
      defaultValue: a === void 0 ? m : void 0,
      onValueChange: l,
      value: a,
      children: [
        /* @__PURE__ */ e(Ta, { className: c("flex h-auto min-w-max gap-1 rounded-none bg-transparent p-0", o), children: u.map((p) => /* @__PURE__ */ n(
          Da,
          {
            className: "relative h-auto gap-1 rounded-none border-b-2 border-transparent bg-transparent px-4 py-3 text-sm font-bold text-muted-foreground shadow-none transition hover:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none",
            value: p.value,
            children: [
              p.label,
              p.badge ? /* @__PURE__ */ e(R, { className: "ml-1 px-1.5 py-0.5 text-[10px] leading-5", variant: p.badgeVariant ?? "destructive", children: p.badge }) : null
            ]
          },
          p.value
        )) }),
        u.map((p) => /* @__PURE__ */ e(
          Ia,
          {
            value: p.value,
            forceMount: !0,
            "aria-hidden": "true",
            className: "hidden mt-0"
          },
          p.value
        ))
      ]
    }
  );
}
const fa = [
  ["Media", "09:24", Fn, "done"],
  ["Akceptacja", "teraz", Y, "active"],
  ["Plan", "25.05", Re, "planned"],
  ["Publikacja", "10:00", Ln, "planned"],
  ["Wyniki", "po publikacji", On, "planned"]
];
function ju() {
  return /* @__PURE__ */ e("ol", { className: "grid gap-4 md:grid-cols-5", children: fa.map(([t, a, r, l], s) => /* @__PURE__ */ n("li", { className: "relative flex flex-col items-center text-center", children: [
    s < fa.length - 1 ? /* @__PURE__ */ e("span", { className: "absolute left-1/2 top-6 hidden h-0.5 w-full bg-border md:block" }) : null,
    /* @__PURE__ */ e(
      "span",
      {
        className: c(
          "relative z-10 grid size-12 place-items-center rounded-full border-4 bg-card",
          l === "done" && "border-success-soft text-success",
          l === "active" && "border-primary-soft text-primary",
          l === "planned" && "border-border text-muted-foreground"
        ),
        children: /* @__PURE__ */ e(r, { className: "size-5" })
      }
    ),
    /* @__PURE__ */ e("strong", { className: "mt-3 text-lg", children: t }),
    /* @__PURE__ */ e("span", { className: "text-sm font-semibold text-muted-foreground", children: a })
  ] }, t)) });
}
function Ao({ items: t = fa.map(([a, r, l, s]) => ({ title: a, meta: r, icon: l, state: s })) }) {
  return /* @__PURE__ */ e("ol", { className: "space-y-0", children: t.map(({ title: a, meta: r, icon: l = Y, state: s = "active", description: i }, o) => /* @__PURE__ */ n("li", { className: "grid grid-cols-[44px_minmax(0,1fr)] gap-4", children: [
    /* @__PURE__ */ n("div", { className: "relative flex justify-center", children: [
      /* @__PURE__ */ e(
        "span",
        {
          className: c(
            "grid size-10 place-items-center rounded-full border-2 bg-card",
            s === "done" && "border-success-soft text-success",
            s === "active" && "border-primary-soft text-primary",
            s === "planned" && "border-border text-muted-foreground"
          ),
          children: /* @__PURE__ */ e(l, { className: "size-4" })
        }
      ),
      o < t.length - 1 ? /* @__PURE__ */ e("span", { className: "absolute top-10 h-full w-px bg-border" }) : null
    ] }),
    /* @__PURE__ */ n("div", { className: "pb-6", children: [
      /* @__PURE__ */ e("strong", { children: a }),
      /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: r }),
      i ? /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-muted-foreground", children: i }) : null
    ] })
  ] }, `${a}-${r}`)) });
}
function Cu({ items: t }) {
  return /* @__PURE__ */ e("ol", { className: "relative space-y-6 pl-8 before:absolute before:left-3 before:top-3 before:h-[calc(100%-24px)] before:w-px before:bg-border", children: t.map(({ title: a, meta: r, description: l }) => /* @__PURE__ */ n("li", { className: "relative", children: [
    /* @__PURE__ */ e("span", { className: "absolute left-[-31px] top-1 grid size-6 place-items-center rounded-full bg-background", children: /* @__PURE__ */ e("span", { className: "size-4 rounded-full bg-primary" }) }),
    /* @__PURE__ */ e("strong", { className: "block text-lg leading-tight", children: a }),
    /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-muted-foreground", children: r }),
    l ? /* @__PURE__ */ e("p", { className: "mt-2 text-sm text-muted-foreground", children: l }) : null
  ] }, `${a}-${r}`)) });
}
const Wo = [
  "Dane podstawowe",
  "Kontakty",
  "Produkty",
  "Zamówienia",
  "Tabele",
  "Zlecenia",
  "Rozliczenia",
  "Reklamacje",
  "Komunikacja",
  "Pliki"
], $o = [
  ["Dane firmy", "Wymagane"],
  ["Dane do wysyłki", "Opcjonalne"],
  ["Sekcja handlowa", "Opcjonalne"],
  ["Dane rejestrowe", "Opcjonalne"],
  ["KSeF", "Opcjonalne"],
  ["Typ firmy", "Opcjonalne"]
], _o = [
  ["Pełna nazwa", "Firma testowa sp. z o.o."],
  ["NIP", "5421234588"],
  ["Skrót", "FIRMA-TEST"],
  ["Telefon", "+48 85 555 22 22"],
  ["Email", "produkcja@firma-testowa.pl"],
  ["Adres", "ul. Przemysłowa 14"],
  ["Kod pocztowy", "15-421"],
  ["Miasto", "Białystok"],
  ["Kraj", "Polska"]
], Bo = [
  ["Klient od", "16.05.2026"],
  ["Sposób płatności", "przelew"],
  ["Termin płatności", "14 dni"],
  ["Cennik", "Cennik standardowy 2026"],
  ["Opiekun handlowy", "Opiekun handlowy"],
  ["Sposób dostawy", "Kurier / paleta"]
], Ko = [
  ["Kontakt 1", "48", "aktywny"],
  ["Kontakt 2", "35", "aktywna"],
  ["Kontakt 3", "28", "aktywna"]
], Eo = [
  ["Długopis", "Classic 0.7 niebieski", "ZS/00015/05/26", "15.05.2026"],
  ["Marker", "Permanent czarny", "ZS/00014/05/26", "13.05.2026"],
  ["Flamaster", "Kids 12 kolorów", "ZS/00013/05/26", "14.05.2026"]
], Zo = [
  ["ZS/00015/05/26", "Oczekuje", "Długopis Classic 0.7", "26.05.2026"],
  ["ZS/00014/05/26", "Na produkcji", "Marker Permanent", "30.05.2026"],
  ["ZS/00013/05/26", "Wymaga poprawy", "Flamaster Kids 12", "14.06.2026"]
], Ho = Zo.map(([t, a, r, l]) => ({
  number: t,
  status: a,
  product: r,
  deadline: l
})), Go = [
  {
    number: "ZS/00015/05/26",
    status: "Oczekuje",
    owner: "Kontakt 1",
    product: "Długopis Classic 0.7",
    rows: [
      ["Wkład niebieski 0.7", "16 kart.", "niebieski", "kompletacja"],
      ["Korpus transparentny", "11 kart.", "PP", "wtrysk"],
      ["Nadruk logo", "24 kart.", "1 kolor", "gotowe"]
    ]
  },
  {
    number: "ZS/00014/05/26",
    status: "Na produkcji",
    owner: "Kontakt 2",
    product: "Marker Permanent",
    rows: [
      ["Marker czarny", "26 kart.", "czarny", "napełnianie"],
      ["Etykieta opakowania", "15 kart.", "CMYK", "kontrola"]
    ]
  }
];
function Pu() {
  const [t, a] = d.useState("Dane podstawowe"), [r, l] = d.useState("Dane firmy");
  return /* @__PURE__ */ n("section", { className: "space-y-5", children: [
    /* @__PURE__ */ e(Uo, {}),
    /* @__PURE__ */ e(qo, {}),
    /* @__PURE__ */ e(Yo, { activeTab: t, onChange: a }),
    t === "Dane podstawowe" ? /* @__PURE__ */ e(Xo, { activeSection: r, onSectionChange: l }) : null,
    t === "Kontakty" ? /* @__PURE__ */ e(Vo, {}) : null,
    t === "Produkty" ? /* @__PURE__ */ e(Jo, {}) : null,
    t === "Zamówienia" ? /* @__PURE__ */ e(qa, { title: "Zamówienia produkcyjne" }) : null,
    t === "Tabele" ? /* @__PURE__ */ e(ed, {}) : null,
    t === "Zlecenia" ? /* @__PURE__ */ e(qa, { title: "Zlecenia produkcyjne" }) : null,
    t === "Rozliczenia" ? /* @__PURE__ */ e(Qo, {}) : null,
    t === "Reklamacje" ? /* @__PURE__ */ e(rn, { title: "Reklamacje", text: "Brak reklamacji dla tej firmy." }) : null,
    t === "Komunikacja" ? /* @__PURE__ */ e(td, {}) : null,
    t === "Pliki" ? /* @__PURE__ */ e(ad, {}) : null
  ] });
}
function Uo() {
  return /* @__PURE__ */ n(T, { className: "overflow-hidden shadow-juz-sm", children: [
    /* @__PURE__ */ n("div", { className: "flex flex-col gap-4 border-b p-5 xl:flex-row xl:items-center xl:justify-between", children: [
      /* @__PURE__ */ n("div", { className: "flex min-w-0 items-center gap-3", children: [
        /* @__PURE__ */ n(v, { variant: "outline", size: "sm", children: [
          /* @__PURE__ */ e(Dt, {}),
          "Wróć"
        ] }),
        /* @__PURE__ */ e("div", { className: "flex size-9 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary", children: /* @__PURE__ */ e(ye, { className: "size-5" }) }),
        /* @__PURE__ */ e("div", { className: "min-w-0", children: /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ e("h2", { className: "truncate text-xl font-extrabold", children: "Podgląd firmy" }),
          /* @__PURE__ */ e(R, { variant: "success", children: "Aktywna" })
        ] }) })
      ] }),
      /* @__PURE__ */ n("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ n(v, { variant: "outline", children: [
          /* @__PURE__ */ e(An, {}),
          "Edytuj"
        ] }),
        /* @__PURE__ */ n(v, { children: [
          /* @__PURE__ */ e(fr, {}),
          "Nowe zamówienie"
        ] }),
        /* @__PURE__ */ e(v, { variant: "ghost", size: "icon", "aria-label": "Więcej akcji", children: /* @__PURE__ */ e(dt, {}) })
      ] })
    ] }),
    /* @__PURE__ */ n("div", { className: "juz-record-meta-row", children: [
      /* @__PURE__ */ n(Fe, { label: "Nazwa", children: [
        /* @__PURE__ */ e("strong", { children: "FIRMA-TEST" }),
        /* @__PURE__ */ e("span", { children: "ul. Przemysłowa 14, 15-421 Białystok" }),
        /* @__PURE__ */ e("span", { children: "Opiekun: Opiekun handlowy" })
      ] }),
      /* @__PURE__ */ e(Fe, { label: "NIP", children: /* @__PURE__ */ e("strong", { children: "5421234588" }) }),
      /* @__PURE__ */ n(Fe, { label: "Role", children: [
        /* @__PURE__ */ e("strong", { children: "Klient B2B, dystrybutor" }),
        /* @__PURE__ */ e("span", { children: "produkcja" })
      ] }),
      /* @__PURE__ */ e(Fe, { label: "Opiekun", children: /* @__PURE__ */ e("strong", { children: "Opiekun handlowy" }) }),
      /* @__PURE__ */ n(Fe, { label: "Płatność", children: [
        /* @__PURE__ */ e("strong", { children: "przelew" }),
        /* @__PURE__ */ e("span", { children: "Termin: 14 dni" })
      ] }),
      /* @__PURE__ */ e(Fe, { label: "KSeF", children: /* @__PURE__ */ e("strong", { children: "—" }) })
    ] })
  ] });
}
function qo() {
  return /* @__PURE__ */ n("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4", children: [
    /* @__PURE__ */ e(jt, { icon: ba, label: "Zamówienia (30 dni)", value: "1", helper: "1 łącznie", tone: "blue" }),
    /* @__PURE__ */ e(jt, { icon: xa, label: "Wartość zamówień (30 dni)", value: "—", helper: "brak danych cen", muted: !0 }),
    /* @__PURE__ */ e(jt, { icon: ir, label: "Kontakty", value: "3", helper: "aktywne osoby", tone: "green" }),
    /* @__PURE__ */ e(jt, { icon: Wn, label: "Reklamacje", value: "0", helper: "brak", tone: "red" })
  ] });
}
function Yo({ activeTab: t, onChange: a }) {
  return /* @__PURE__ */ e(Oo, { items: Wo, onValueChange: a, sticky: !0, value: t });
}
function Xo({
  activeSection: t,
  onSectionChange: a
}) {
  const r = d.useRef(null), l = d.useRef({});
  d.useEffect(() => {
    window.scrollTo({ top: 0 }), a("Dane firmy");
  }, [a]);
  function s(i) {
    const o = r.current, u = l.current[i];
    !o || !u || (a(i), window.scrollTo({
      behavior: "smooth",
      top: u.getBoundingClientRect().top + window.scrollY - 96
    }));
  }
  return /* @__PURE__ */ n("div", { className: "grid gap-4 xl:grid-cols-[260px_minmax(0,1fr)_340px]", children: [
    /* @__PURE__ */ e("aside", { className: "xl:sticky xl:top-20 xl:self-start", children: /* @__PURE__ */ n("div", { className: "rounded-lg border bg-card p-3 shadow-juz-sm", children: [
      /* @__PURE__ */ e("p", { className: "juz-label mb-2", children: "Sekcje" }),
      /* @__PURE__ */ e("nav", { className: "space-y-1", "aria-label": "Sekcje rekordu", children: $o.map(([i, o]) => /* @__PURE__ */ e(
        "button",
        {
          className: c(
            "relative flex w-full items-start justify-between gap-3 rounded-md px-3 py-3 text-left text-sm hover:bg-primary-soft",
            t === i && "bg-primary-soft text-primary before:absolute before:-left-3 before:top-3 before:h-8 before:w-1 before:rounded-r-full before:bg-primary"
          ),
          onClick: () => s(i),
          type: "button",
          children: /* @__PURE__ */ n("span", { children: [
            /* @__PURE__ */ e("span", { className: "block font-bold", children: i }),
            /* @__PURE__ */ e("span", { className: "block text-xs text-muted-foreground", children: o })
          ] })
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ n("main", { className: "min-w-0 space-y-5", ref: r, children: [
      /* @__PURE__ */ e("div", { ref: (i) => {
        l.current["Dane firmy"] = i;
      }, children: /* @__PURE__ */ e(Le, { icon: ye, title: "Dane firmy", action: "Edytuj", children: /* @__PURE__ */ e(ia, { fields: _o }) }) }),
      /* @__PURE__ */ e("div", { ref: (i) => {
        l.current["Dane do wysyłki"] = i;
      }, children: /* @__PURE__ */ e(Le, { icon: fr, title: "Dane do wysyłki", action: "+ Dodaj adres", children: /* @__PURE__ */ n("div", { className: "divide-y rounded-md border", children: [
        /* @__PURE__ */ e(Xa, { isDefault: !0, title: "Siedziba główna", value: "ul. Lipowa 14, 15-427 Białystok, Polska" }),
        /* @__PURE__ */ e(Xa, { title: "Oddział Starosielce", value: "ul. Wysockiego 68, 15-168 Białystok, Polska" })
      ] }) }) }),
      /* @__PURE__ */ e("div", { ref: (i) => {
        l.current["Sekcja handlowa"] = i;
      }, children: /* @__PURE__ */ e(Le, { icon: xa, title: "Sekcja handlowa", children: /* @__PURE__ */ e(ia, { fields: Bo }) }) }),
      /* @__PURE__ */ e("div", { ref: (i) => {
        l.current["Dane rejestrowe"] = i;
      }, children: /* @__PURE__ */ e(Le, { icon: Ne, title: "Dane rejestrowe", children: /* @__PURE__ */ e(ia, { fields: [["REGON", "—"], ["KRS", "—"], ["PKD", "—"], ["Status VAT", "—"], ["Data weryfikacji VAT", "—"], ["Typ podmiotu", "—"]] }) }) }),
      /* @__PURE__ */ e("div", { ref: (i) => {
        l.current.KSeF = i;
      }, children: /* @__PURE__ */ e(Le, { icon: Ne, title: "Integracja z KSeF", children: /* @__PURE__ */ n("div", { className: "space-y-3", children: [
        /* @__PURE__ */ e(Va, { label: "Wystawiaj e-faktury KSeF — faktury sprzedażowe trafiają do KSeF" }),
        /* @__PURE__ */ e(Va, { label: "Pobieraj e-faktury kosztówe z KSeF — faktury kosztówe pobierane automatycznie" })
      ] }) }) }),
      /* @__PURE__ */ e("div", { ref: (i) => {
        l.current["Typ firmy"] = i;
      }, children: /* @__PURE__ */ e(Le, { icon: ye, title: "Typ firmy", children: /* @__PURE__ */ n("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ e(R, { children: "Klient" }),
        /* @__PURE__ */ e(R, { variant: "neutral", children: "Dystrybutor" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ n("aside", { className: "space-y-5 xl:sticky xl:top-20 xl:self-start", children: [
      /* @__PURE__ */ e(rd, {}),
      /* @__PURE__ */ n(T, { className: "p-4", children: [
        /* @__PURE__ */ e("p", { className: "juz-label", children: "Kontakt" }),
        /* @__PURE__ */ n("div", { className: "mt-3 space-y-2 text-sm", children: [
          /* @__PURE__ */ n("p", { className: "flex items-center gap-2 font-semibold", children: [
            /* @__PURE__ */ e(Tt, { className: "size-4 text-primary" }),
            " +48 85 555 11 11"
          ] }),
          /* @__PURE__ */ e("p", { className: "text-muted-foreground", children: "produkcja@firma-testowa.pl" })
        ] })
      ] })
    ] })
  ] });
}
function Vo() {
  return /* @__PURE__ */ n(T, { className: "overflow-hidden", children: [
    /* @__PURE__ */ e(nt, { title: "Kontakty firmy", button: "Dodaj kontakt" }),
    /* @__PURE__ */ n(lt, { children: [
      /* @__PURE__ */ e(st, { children: /* @__PURE__ */ n(ie, { children: [
        /* @__PURE__ */ e(_, { children: "Kontakt" }),
        /* @__PURE__ */ e(_, { children: "Zamówienia" }),
        /* @__PURE__ */ e(_, { children: "Status" }),
        /* @__PURE__ */ e(_, { className: "text-right", children: "Akcje" })
      ] }) }),
      /* @__PURE__ */ e("tbody", { children: Ko.map(([t, a, r]) => /* @__PURE__ */ n(ie, { children: [
        /* @__PURE__ */ e(B, { className: "font-bold", children: t }),
        /* @__PURE__ */ e(B, { children: a }),
        /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e(R, { variant: "success", children: r }) }),
        /* @__PURE__ */ e(B, { className: "text-right", children: /* @__PURE__ */ e(v, { variant: "ghost", size: "sm", children: "Otwórz" }) })
      ] }, t)) })
    ] })
  ] });
}
function Jo() {
  return /* @__PURE__ */ n(T, { className: "overflow-hidden", children: [
    /* @__PURE__ */ e(nt, { title: "Produkty powiązane z zamówieniami", button: "Dodaj produkt" }),
    /* @__PURE__ */ n(lt, { children: [
      /* @__PURE__ */ e(st, { children: /* @__PURE__ */ n(ie, { children: [
        /* @__PURE__ */ e(_, { children: "Kategoria" }),
        /* @__PURE__ */ e(_, { children: "Nazwa produktu" }),
        /* @__PURE__ */ e(_, { children: "Ostatnie zamówienie" }),
        /* @__PURE__ */ e(_, { children: "Data" })
      ] }) }),
      /* @__PURE__ */ e("tbody", { children: Eo.map(([t, a, r, l]) => /* @__PURE__ */ n(ie, { children: [
        /* @__PURE__ */ e(B, { children: t }),
        /* @__PURE__ */ e(B, { className: "font-bold", children: a }),
        /* @__PURE__ */ e(B, { className: "font-mono text-primary", children: r }),
        /* @__PURE__ */ e(B, { children: l })
      ] }, r)) })
    ] })
  ] });
}
function qa({ title: t }) {
  const a = Ho.map((l) => ({
    id: l.number,
    number: l.number,
    status: l.status,
    product: l.product,
    deadline: l.deadline,
    search: `${l.number} ${l.status} ${l.product} ${l.deadline}`
  }));
  return /* @__PURE__ */ e(
    an,
    {
      actionLabel: "Nowe zamówienie",
      columns: [
        {
          key: "number",
          label: "Numer",
          render: (l) => /* @__PURE__ */ e("span", { className: "font-mono font-bold text-primary", children: l.number })
        },
        {
          key: "status",
          label: "Status",
          render: (l) => /* @__PURE__ */ e(R, { variant: l.status === "Wymaga poprawy" ? "destructive" : l.status === "Na produkcji" ? "default" : "warning", children: l.status })
        },
        { key: "product", label: "Produkt" },
        { key: "deadline", label: "Termin", render: (l) => /* @__PURE__ */ e("span", { className: "font-mono", children: l.deadline }) }
      ],
      defaultSort: "number",
      density: "record",
      description: "Lista w zakładce rekordu korzysta z tego samego mechanizmu co listy główne.",
      rows: a,
      searchPlaceholder: "Szukaj po numerze, produkcie albo statusie...",
      title: t
    }
  );
}
function Qo() {
  return /* @__PURE__ */ n(T, { className: "overflow-hidden", children: [
    /* @__PURE__ */ e(nt, { title: "Rozliczenia", button: "Dodaj fakturę" }),
    /* @__PURE__ */ n(lt, { children: [
      /* @__PURE__ */ e(st, { children: /* @__PURE__ */ n(ie, { children: [
        /* @__PURE__ */ e(_, { children: "Dokument" }),
        /* @__PURE__ */ e(_, { children: "Status" }),
        /* @__PURE__ */ e(_, { children: "Kwota" }),
        /* @__PURE__ */ e(_, { children: "Termin" })
      ] }) }),
      /* @__PURE__ */ e("tbody", { children: /* @__PURE__ */ n(ie, { children: [
        /* @__PURE__ */ e(B, { className: "font-mono font-bold text-primary", children: "FV/0001/05/26" }),
        /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e(R, { variant: "warning", children: "Po terminie" }) }),
        /* @__PURE__ */ e(B, { children: "2 450,00 PLN" }),
        /* @__PURE__ */ e(B, { children: "30.05.2026" })
      ] }) })
    ] })
  ] });
}
function ed() {
  return /* @__PURE__ */ n("div", { className: "space-y-5", children: [
    /* @__PURE__ */ n(T, { className: "overflow-hidden", children: [
      /* @__PURE__ */ e(nt, { title: "Tabela 2: rozwijany wiersz z pozycjami", button: "Nowe zamówienie" }),
      /* @__PURE__ */ n(lt, { children: [
        /* @__PURE__ */ e(st, { children: /* @__PURE__ */ n(ie, { children: [
          /* @__PURE__ */ e(_, { children: "Numer" }),
          /* @__PURE__ */ e(_, { children: "Status" }),
          /* @__PURE__ */ e(_, { children: "Opiekun" }),
          /* @__PURE__ */ e(_, { children: "Produkt" }),
          /* @__PURE__ */ e(_, { className: "text-right", children: "Akcje" })
        ] }) }),
        /* @__PURE__ */ e("tbody", { children: Go.map((t) => /* @__PURE__ */ n(d.Fragment, { children: [
          /* @__PURE__ */ n(ie, { children: [
            /* @__PURE__ */ e(B, { className: "font-mono font-bold text-primary", children: t.number }),
            /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e(R, { variant: t.status === "Na produkcji" ? "default" : "warning", children: t.status }) }),
            /* @__PURE__ */ e(B, { children: t.owner }),
            /* @__PURE__ */ e(B, { children: t.product }),
            /* @__PURE__ */ e(B, { className: "text-right", children: /* @__PURE__ */ e(v, { variant: "ghost", size: "sm", children: "Podgląd" }) })
          ] }),
          /* @__PURE__ */ e("tr", { className: "border-b bg-muted/25", children: /* @__PURE__ */ e("td", { className: "px-5 py-4", colSpan: 5, children: /* @__PURE__ */ e(
            Ya,
            {
              caption: `Pozycje zamówienia ${t.number}`,
              description: "Tabela zagnieżdżona ma własny, lekki panel bez cienia i bez drugiego ciężkiego kontenera.",
              rows: t.rows
            }
          ) }) })
        ] }, t.number)) })
      ] })
    ] }),
    /* @__PURE__ */ n(T, { className: "overflow-hidden", children: [
      /* @__PURE__ */ e(nt, { title: "Tabela 3: lista z podsumowaniem w wierszu", button: "Dodaj rozliczenie" }),
      /* @__PURE__ */ n(lt, { children: [
        /* @__PURE__ */ e(st, { children: /* @__PURE__ */ n(ie, { children: [
          /* @__PURE__ */ e(_, { children: "Faktura" }),
          /* @__PURE__ */ e(_, { children: "Powiązane zamówienia" }),
          /* @__PURE__ */ e(_, { children: "Status" }),
          /* @__PURE__ */ e(_, { className: "text-right", children: "Kwota" })
        ] }) }),
        /* @__PURE__ */ n("tbody", { children: [
          /* @__PURE__ */ n(ie, { children: [
            /* @__PURE__ */ e(B, { className: "font-mono font-bold text-primary", children: "FV/0001/05/26" }),
            /* @__PURE__ */ e(B, { children: /* @__PURE__ */ n("div", { className: "flex flex-wrap gap-2", children: [
              /* @__PURE__ */ e(R, { children: "ZS/00015/05/26" }),
              /* @__PURE__ */ e(R, { variant: "neutral", children: "ZS/00014/05/26" }),
              /* @__PURE__ */ e(R, { variant: "neutral", children: "+ 2" })
            ] }) }),
            /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e(R, { variant: "success", children: "Opłacona" }) }),
            /* @__PURE__ */ e(B, { className: "text-right font-bold", children: "4 820,00 PLN" })
          ] }),
          /* @__PURE__ */ e("tr", { className: "border-b bg-muted/25", children: /* @__PURE__ */ e("td", { className: "px-5 py-4", colSpan: 4, children: /* @__PURE__ */ e(
            Ya,
            {
              caption: "Rozbicie faktury",
              description: "Ten wariant pokazuje drugą tabelę jako szczegóły finansowe rekordu.",
              headers: ["Zakres", "Ilość", "Kwota", "VAT"],
              rows: [
                ["Długopisy i wkłady", "3 partie", "3 450,00 PLN", "23% VAT"],
                ["Mazaki i flamastry", "5 partii", "870,00 PLN", "23% VAT"],
                ["Dostawa", "1", "500,00 PLN", "23% VAT"]
              ]
            }
          ) }) })
        ] })
      ] })
    ] })
  ] });
}
function Ya({
  caption: t,
  description: a,
  headers: r = ["Pozycja", "Ilość", "Parametr", "Etap"],
  rows: l
}) {
  return /* @__PURE__ */ n("div", { className: "rounded-md border bg-card/80 p-3", children: [
    /* @__PURE__ */ n("div", { className: "mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between", children: [
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e("p", { className: "text-sm font-extrabold", children: t }),
        /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: a })
      ] }),
      /* @__PURE__ */ e(R, { variant: "neutral", children: "Szczegóły" })
    ] }),
    /* @__PURE__ */ e("div", { className: "overflow-x-auto rounded-sm border bg-background", children: /* @__PURE__ */ n("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ e("thead", { className: "bg-muted/55", children: /* @__PURE__ */ e("tr", { children: r.map((s) => /* @__PURE__ */ e("th", { className: "px-4 py-2 text-left text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground", children: s }, s)) }) }),
      /* @__PURE__ */ e("tbody", { children: l.map((s) => /* @__PURE__ */ e("tr", { className: "border-t last:border-b-0", children: s.map((i, o) => /* @__PURE__ */ e("td", { className: c("px-4 py-2", o === 0 && "font-semibold"), children: i }, i)) }, s.join("-"))) })
    ] }) })
  ] });
}
function td() {
  return /* @__PURE__ */ n("div", { className: "grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px]", children: [
    /* @__PURE__ */ n(T, { className: "p-5", children: [
      /* @__PURE__ */ n("div", { className: "mb-4 flex items-center justify-between", children: [
        /* @__PURE__ */ e("h3", { className: "font-extrabold", children: "Historia kontaktu" }),
        /* @__PURE__ */ n(v, { size: "sm", children: [
          /* @__PURE__ */ e(Lt, {}),
          " Dodaj kontakt"
        ] })
      ] }),
      /* @__PURE__ */ e(Ao, { items: [
        {
          title: "Telefon z recepcją: potwierdzono termin odbioru.",
          meta: "24.05.2026 · Opiekun 1",
          icon: Tt,
          state: "done",
          description: "Ustalono odbiór partii markerów Permanent czarny na wtorek do 14:00."
        },
        {
          title: "Email z nowym plikiem etykiety.",
          meta: "23.05.2026 · Opiekun 1",
          icon: ha,
          state: "active",
          description: "Klient dosłał poprawioną wersję projektu opakowania dla serii Kids 12 kolorów."
        },
        {
          title: "Notatka handlowa po wizycie opiekuna.",
          meta: "22.05.2026 · Opiekun 1",
          icon: $n,
          state: "planned",
          description: "Do sprawdzenia rabat wolumenowy dla kolejnego zamówienia długopisow Classic 0.7."
        }
      ] })
    ] }),
    /* @__PURE__ */ n(T, { className: "p-5", children: [
      /* @__PURE__ */ e("p", { className: "juz-label", children: "Szybki wpis" }),
      /* @__PURE__ */ e("textarea", { className: "mt-3 min-h-36 w-full rounded-md border bg-card p-3 text-sm", placeholder: "Dodaj notatkę..." }),
      /* @__PURE__ */ e(v, { className: "mt-3 w-full", children: "Zapisz kontakt" })
    ] })
  ] });
}
function ad() {
  return /* @__PURE__ */ e(rn, { title: "Pliki", text: "Brak plików. Tu pokazujemy dropzone, listę załączników i akcje plików.", button: "Dodaj plik" });
}
function rn({ title: t, text: a, button: r }) {
  return /* @__PURE__ */ n(T, { className: "flex min-h-[280px] flex-col items-center justify-center p-8 text-center", children: [
    /* @__PURE__ */ e("div", { className: "flex size-16 items-center justify-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ e(Ne, { className: "size-7" }) }),
    /* @__PURE__ */ e("h3", { className: "mt-4 text-xl font-extrabold", children: t }),
    /* @__PURE__ */ e("p", { className: "mt-1 max-w-md text-muted-foreground", children: a }),
    r ? /* @__PURE__ */ n(v, { className: "mt-4", children: [
      /* @__PURE__ */ e(Lt, {}),
      " ",
      r
    ] }) : null
  ] });
}
function nt({ title: t, button: a }) {
  return /* @__PURE__ */ n("div", { className: "flex flex-col gap-3 border-b p-4 lg:flex-row lg:items-center lg:justify-between", children: [
    /* @__PURE__ */ e("h3", { className: "font-extrabold", children: t }),
    /* @__PURE__ */ n("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ n("div", { className: "relative", children: [
        /* @__PURE__ */ e(Je, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ e(C, { className: "h-11 pl-9", placeholder: "Szukaj..." })
      ] }),
      /* @__PURE__ */ n(v, { className: "h-11 px-5", children: [
        /* @__PURE__ */ e(Lt, {}),
        " ",
        a
      ] })
    ] })
  ] });
}
function lt({ children: t }) {
  return /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e("table", { className: "w-full caption-bottom text-sm", children: t }) });
}
function st({ children: t }) {
  return /* @__PURE__ */ e("thead", { className: "border-b bg-muted/45", children: t });
}
function ie({ children: t, className: a }) {
  return /* @__PURE__ */ e("tr", { className: c("border-b transition-colors last:border-b-0 hover:bg-muted/35", a), children: t });
}
function _({
  children: t,
  className: a
}) {
  return /* @__PURE__ */ e("th", { className: c("h-12 px-5 text-left align-middle text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground", a), children: t });
}
function B({
  children: t,
  className: a
}) {
  return /* @__PURE__ */ e("td", { className: c("px-5 py-4 align-middle text-foreground", a), children: t });
}
function jt({
  icon: t,
  label: a,
  value: r,
  helper: l,
  muted: s,
  tone: i = "purple"
}) {
  const o = {
    purple: "bg-primary-soft text-primary",
    blue: "bg-primary-soft text-primary",
    green: "bg-success-soft text-success",
    red: "bg-destructive-soft text-destructive"
  }[i];
  return /* @__PURE__ */ n(T, { className: "p-5", children: [
    /* @__PURE__ */ n("div", { className: "flex items-center gap-2 text-sm font-semibold text-muted-foreground", children: [
      /* @__PURE__ */ e("span", { className: c("inline-flex size-8 items-center justify-center rounded-md", o), children: /* @__PURE__ */ e(t, { className: "size-4" }) }),
      a
    ] }),
    /* @__PURE__ */ e("div", { className: c("mt-4 whitespace-nowrap text-xl font-extrabold leading-tight", s && "text-muted-foreground"), children: r }),
    l ? /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-muted-foreground", children: l }) : null
  ] });
}
function Fe({ label: t, className: a, children: r }) {
  return /* @__PURE__ */ n("div", { className: c("flex min-h-28 min-w-0 flex-col gap-1 bg-card p-5 text-sm", a), children: [
    /* @__PURE__ */ e("p", { className: "juz-label", children: t }),
    /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-col gap-1 text-foreground [&_strong]:wrap-break-word [&_span]:wrap-break-word [&_span]:text-muted-foreground", children: r })
  ] });
}
function Le({
  icon: t,
  title: a,
  action: r,
  children: l
}) {
  return /* @__PURE__ */ n(T, { className: "overflow-hidden", children: [
    /* @__PURE__ */ n("div", { className: "flex items-center justify-between border-b px-5 py-3", children: [
      /* @__PURE__ */ n("h3", { className: "inline-flex items-center gap-2 font-extrabold", children: [
        /* @__PURE__ */ e("span", { className: "inline-flex size-7 items-center justify-center rounded-md bg-primary-soft text-primary", children: /* @__PURE__ */ e(t, { className: "size-4" }) }),
        a
      ] }),
      r ? /* @__PURE__ */ e(v, { variant: "ghost", size: "sm", children: r }) : null
    ] }),
    /* @__PURE__ */ e("div", { className: "p-5", children: l })
  ] });
}
function ia({ fields: t }) {
  return /* @__PURE__ */ e("dl", { className: "grid gap-x-10 gap-y-6 md:grid-cols-2 xl:grid-cols-4", children: t.map(([a, r]) => /* @__PURE__ */ n("div", { children: [
    /* @__PURE__ */ e("dt", { className: "text-sm text-muted-foreground", children: a }),
    /* @__PURE__ */ e("dd", { className: "mt-1 wrap-break-word text-sm font-semibold", children: r })
  ] }, a)) });
}
function Xa({ title: t, value: a, isDefault: r }) {
  return /* @__PURE__ */ n("div", { className: "p-4", children: [
    /* @__PURE__ */ n("p", { className: "text-sm font-bold", children: [
      t,
      " ",
      r ? /* @__PURE__ */ e("span", { className: "text-xs font-semibold text-primary", children: "(domyślny)" }) : null
    ] }),
    /* @__PURE__ */ e("p", { className: "mt-1 text-muted-foreground", children: a })
  ] });
}
function Va({ label: t }) {
  return /* @__PURE__ */ n("label", { className: "flex items-center gap-3 rounded-md border bg-muted/25 p-3 text-sm font-semibold text-muted-foreground", children: [
    /* @__PURE__ */ e("input", { disabled: !0, type: "checkbox", className: "size-4" }),
    t
  ] });
}
function rd() {
  return /* @__PURE__ */ n(T, { className: "overflow-hidden", children: [
    /* @__PURE__ */ n("div", { className: "border-b p-4", children: [
      /* @__PURE__ */ e("h3", { className: "font-extrabold", children: "Lokalizacja" }),
      /* @__PURE__ */ e("p", { className: "mt-1 font-mono text-sm text-muted-foreground", children: "53.12350, 18.00840" })
    ] }),
    /* @__PURE__ */ n("div", { className: "relative h-72 bg-primary-soft", children: [
      /* @__PURE__ */ e("div", { className: "absolute inset-0 opacity-70 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-size-[32px_32px]" }),
      /* @__PURE__ */ e("div", { className: "absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-juz", children: /* @__PURE__ */ e(ot, { className: "size-7" }) }),
      /* @__PURE__ */ n("div", { className: "absolute right-3 top-3 flex flex-col gap-2", children: [
        /* @__PURE__ */ e("button", { className: "inline-flex size-9 items-center justify-center rounded-md border bg-card font-bold shadow-juz-sm", children: "+" }),
        /* @__PURE__ */ e("button", { className: "inline-flex size-9 items-center justify-center rounded-md border bg-card font-bold shadow-juz-sm", children: "-" })
      ] })
    ] }),
    /* @__PURE__ */ n("div", { className: "flex flex-wrap gap-2 p-4", children: [
      /* @__PURE__ */ n(v, { variant: "outline", size: "sm", children: [
        /* @__PURE__ */ e(Ft, {}),
        "Kopiuj współrzędne"
      ] }),
      /* @__PURE__ */ e(v, { variant: "ghost", size: "sm", children: "Pokaż na mapie" })
    ] })
  ] });
}
const nd = d.forwardRef(
  ({
    icon: t,
    label: a,
    count: r,
    defaultOpen: l = !1,
    open: s,
    onOpenChange: i,
    items: o,
    className: u
  }, m) => {
    const [f, p] = d.useState(l), h = s !== void 0, g = h ? !!s : f, b = () => {
      const x = !g;
      h || p(x), i == null || i(x);
    };
    return /* @__PURE__ */ n("div", { ref: m, className: c("w-full", u), children: [
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          "aria-expanded": g,
          onClick: b,
          className: c(
            "group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors",
            "hover:bg-muted hover:text-foreground",
            "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            g && "text-foreground"
          ),
          children: [
            t ? /* @__PURE__ */ e("span", { className: "inline-flex size-5 items-center justify-center [&_svg]:size-4 [&_svg]:shrink-0", children: t }) : null,
            /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: a }),
            typeof r == "number" ? /* @__PURE__ */ e(R, { variant: "neutral", className: "shrink-0", children: r }) : null,
            /* @__PURE__ */ e(
              U,
              {
                "aria-hidden": !0,
                className: c(
                  "size-4 shrink-0 text-muted-foreground transition-transform",
                  g && "rotate-180"
                )
              }
            )
          ]
        }
      ),
      g ? /* @__PURE__ */ e("div", { className: "ml-6 mt-1 flex flex-col gap-0.5 border-l border-border pl-2", children: o.map((x) => {
        const { key: w, ...S } = x;
        return /* @__PURE__ */ e(en, { ...S }, w);
      }) }) : null
    ] });
  }
);
nd.displayName = "CollapsibleMenuItem";
const ld = d.forwardRef(
  ({
    value: t,
    onValueChange: a,
    options: r,
    placeholder: l = "Wybierz opcję...",
    searchPlaceholder: s = "Szukaj...",
    empty: i = "Brak wyników.",
    disabled: o,
    className: u
  }, m) => {
    const [f, p] = d.useState(!1), h = r.find((g) => g.value === t);
    return /* @__PURE__ */ n(ke, { open: f, onOpenChange: p, children: [
      /* @__PURE__ */ e(ze, { asChild: !0, children: /* @__PURE__ */ n(
        "button",
        {
          ref: m,
          type: "button",
          role: "combobox",
          "aria-expanded": f,
          "aria-label": (h == null ? void 0 : h.label) ?? l,
          disabled: o,
          className: c(
            "flex h-11 w-full items-center justify-between gap-2 rounded-md border border-input bg-card px-3 py-2 text-sm font-semibold text-foreground shadow-juz-sm transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            !h && "font-normal text-muted-foreground",
            u
          ),
          children: [
            /* @__PURE__ */ e("span", { className: "truncate", children: h ? h.label : l }),
            /* @__PURE__ */ e(_n, { className: "size-4 shrink-0 text-muted-foreground" })
          ]
        }
      ) }),
      /* @__PURE__ */ e(
        pe,
        {
          className: "w-(--radix-popover-trigger-width) p-0",
          align: "start",
          children: /* @__PURE__ */ n(He, { children: [
            /* @__PURE__ */ e(pt, { placeholder: s }),
            /* @__PURE__ */ n(ht, { children: [
              /* @__PURE__ */ e(gt, { children: i }),
              /* @__PURE__ */ e(bt, { children: r.map((g) => /* @__PURE__ */ n(
                xt,
                {
                  value: g.label,
                  disabled: g.disabled,
                  onSelect: () => {
                    a == null || a(g.value), p(!1);
                  },
                  children: [
                    /* @__PURE__ */ e(
                      Y,
                      {
                        className: c(
                          "mr-2 size-4",
                          t === g.value ? "opacity-100" : "opacity-0"
                        )
                      }
                    ),
                    g.label
                  ]
                },
                g.value
              )) })
            ] })
          ] })
        }
      )
    ] });
  }
);
ld.displayName = "Combobox";
function Ru() {
  return /* @__PURE__ */ e(an, {});
}
const sd = d.forwardRef(
  ({
    value: t,
    onValueChange: a,
    placeholder: r = "Wybierz datę",
    disabled: l,
    disabledDates: s,
    className: i,
    dateFormat: o = "d MMMM yyyy"
  }, u) => {
    const [m, f] = d.useState(!1);
    return /* @__PURE__ */ n(ke, { open: m, onOpenChange: f, children: [
      /* @__PURE__ */ e(ze, { asChild: !0, children: /* @__PURE__ */ n(
        v,
        {
          ref: u,
          type: "button",
          variant: "outline",
          disabled: l,
          className: c(
            "h-11 w-full justify-start gap-2 px-3 text-sm font-medium",
            !t && "text-muted-foreground",
            i
          ),
          children: [
            /* @__PURE__ */ e(Re, { className: "size-4 shrink-0 text-muted-foreground" }),
            t ? Qe(t, o, { locale: _e }) : r
          ]
        }
      ) }),
      /* @__PURE__ */ e(pe, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ e(
        ct,
        {
          mode: "single",
          selected: t,
          onSelect: (p) => {
            a == null || a(p), f(!1);
          },
          disabled: s
        }
      ) })
    ] });
  }
);
sd.displayName = "DatePicker";
const id = [
  { label: "Edytuj", icon: oa, variant: "default" },
  { label: "Anuluj złeceńie", icon: mr, variant: "destructive" }
], od = [
  { label: "Klient", value: "Klient testowy S.A." },
  { label: "Termin", value: "28.05.2026" },
  { label: "Postep", value: "68%" },
  { label: "Opiekun", value: "Opiekun 1" }
];
function Mu({
  title: t = "ZP/00042/05/26",
  subtitle: a = "Długopis Classic 0.7 / seria niebieska / linia A",
  status: r = "W produkcji",
  statusVariant: l = "success",
  backLabel: s = "Wróć",
  actions: i = id,
  metaItems: o = od
}) {
  return /* @__PURE__ */ n(T, { className: "overflow-hidden shadow-none", children: [
    /* @__PURE__ */ n("div", { className: "flex flex-col gap-4 border-b p-5 lg:flex-row lg:items-start lg:justify-between", children: [
      /* @__PURE__ */ n("div", { className: "flex min-w-0 items-start gap-3", children: [
        /* @__PURE__ */ n(v, { variant: "outline", size: "sm", children: [
          /* @__PURE__ */ e(Dt, {}),
          s
        ] }),
        /* @__PURE__ */ n("div", { className: "min-w-0", children: [
          /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ e("h2", { className: "truncate text-2xl font-extrabold", children: t }),
            /* @__PURE__ */ e(v, { variant: "ghost", size: "icon", "aria-label": "Kopiuj", children: /* @__PURE__ */ e(Ft, {}) }),
            /* @__PURE__ */ e(R, { variant: l, children: r })
          ] }),
          a ? /* @__PURE__ */ e("p", { className: "mt-1 text-muted-foreground", children: a }) : null
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: i.map((u) => {
        const m = u.icon;
        return /* @__PURE__ */ n(v, { variant: u.variant ?? "outline", children: [
          m ? /* @__PURE__ */ e(m, {}) : null,
          u.label
        ] }, u.label);
      }) })
    ] }),
    o.length > 0 ? /* @__PURE__ */ e("dl", { className: "grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4", children: o.map(({ label: u, value: m }) => /* @__PURE__ */ n("div", { className: "bg-card p-5", children: [
      /* @__PURE__ */ e("dt", { className: "text-sm text-muted-foreground", children: u }),
      /* @__PURE__ */ e("dd", { className: "mt-1 text-lg font-bold", children: m })
    ] }, u)) }) : null
  ] });
}
const dd = {
  2: "xl:grid-cols-2",
  3: "xl:grid-cols-3",
  4: "xl:grid-cols-4"
}, cd = d.forwardRef(
  ({ columnsXl: t = 4, className: a, ...r }, l) => /* @__PURE__ */ e(
    "dl",
    {
      ref: l,
      className: c("grid gap-x-10 gap-y-6 md:grid-cols-2", dd[t], a),
      ...r
    }
  )
);
cd.displayName = "FieldGrid";
const ud = d.forwardRef(
  ({ label: t, value: a, mono: r, className: l, children: s, ...i }, o) => /* @__PURE__ */ n("div", { ref: o, className: c("min-w-0", l), ...i, children: [
    /* @__PURE__ */ e("dt", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: t }),
    /* @__PURE__ */ e("dd", { className: c("mt-1 text-sm", r && "font-mono"), children: a ?? s ?? /* @__PURE__ */ e("span", { className: "text-muted-foreground", children: "—" }) })
  ] })
);
ud.displayName = "Field";
function md(t) {
  if (typeof t != "number" || t <= 0) return "";
  const a = ["B", "KB", "MB", "GB", "TB"], r = Math.min(
    Math.floor(Math.log(t) / Math.log(1024)),
    a.length - 1
  ), l = t / Math.pow(1024, r);
  return `${l.toFixed(l >= 10 || r === 0 ? 0 : 1)} ${a[r]}`;
}
function fd(t) {
  return t ? t.startsWith("image/") ? Bn : t.startsWith("video/") ? Kn : t.startsWith("text/") || t.includes("pdf") || t.includes("word") ? Ne : $a : $a;
}
const pd = d.forwardRef(
  ({ file: t, actions: a, className: r, ...l }, s) => {
    const i = fd(t.type), o = md(t.size);
    return /* @__PURE__ */ n(
      "div",
      {
        ref: s,
        className: c(
          "flex items-center gap-3 rounded-md border bg-card p-3 shadow-juz-sm",
          r
        ),
        ...l,
        children: [
          /* @__PURE__ */ e("div", { className: "flex size-10 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary", children: /* @__PURE__ */ e(i, { className: "size-5" }) }),
          /* @__PURE__ */ n("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ e("p", { className: "truncate text-sm font-semibold text-foreground", children: t.name }),
            o || t.type ? /* @__PURE__ */ e("p", { className: "truncate text-xs text-muted-foreground", children: [o, t.type].filter(Boolean).join(" - ") }) : null
          ] }),
          /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center gap-1", children: a.map((u) => /* @__PURE__ */ e(
            me,
            {
              label: u.label,
              variant: u.variant ?? "ghost",
              size: "sm",
              disabled: u.disabled,
              onClick: () => {
                var m;
                return (m = u.onClick) == null ? void 0 : m.call(u, t);
              },
              children: u.icon
            },
            u.key
          )) })
        ]
      }
    );
  }
);
pd.displayName = "FileActions";
const hd = d.forwardRef(
  ({
    label: t,
    htmlFor: a,
    error: r,
    hint: l,
    required: s,
    description: i,
    children: o,
    className: u,
    labelClassName: m,
    ...f
  }, p) => /* @__PURE__ */ n(
    "div",
    {
      ref: p,
      className: c("flex w-full flex-col gap-1.5", u),
      ...f,
      children: [
        t ? /* @__PURE__ */ n(
          le,
          {
            htmlFor: a,
            className: c(
              "flex items-center gap-1 text-sm font-bold text-foreground",
              m
            ),
            children: [
              /* @__PURE__ */ e("span", { children: t }),
              s ? /* @__PURE__ */ e("span", { "aria-hidden": !0, className: "text-destructive", children: "*" }) : null
            ]
          }
        ) : null,
        i ? /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: i }) : null,
        o,
        r ? /* @__PURE__ */ n(
          "p",
          {
            role: "alert",
            className: "flex items-center gap-1 text-xs font-semibold text-destructive",
            children: [
              /* @__PURE__ */ e(En, { className: "size-3.5 shrink-0" }),
              /* @__PURE__ */ e("span", { children: r })
            ]
          }
        ) : l ? /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: l }) : null
      ]
    }
  )
);
hd.displayName = "FormField";
const gd = d.forwardRef(
  ({ title: t, description: a, breadcrumbs: r, actions: l, eyebrow: s, className: i, ...o }, u) => /* @__PURE__ */ n(
    "header",
    {
      ref: u,
      className: c("flex flex-col gap-4", i),
      ...o,
      children: [
        r && r.length > 0 ? /* @__PURE__ */ e(va, { children: /* @__PURE__ */ e(wa, { children: r.map((m, f) => {
          const p = f === r.length - 1;
          return /* @__PURE__ */ n(d.Fragment, { children: [
            /* @__PURE__ */ e(ka, { children: p || !m.href ? /* @__PURE__ */ e(Sa, { children: m.label }) : /* @__PURE__ */ e(za, { href: m.href, children: m.label }) }),
            p ? null : /* @__PURE__ */ e(ja, {})
          ] }, `${m.label}-${f}`);
        }) }) }) : null,
        /* @__PURE__ */ n("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between", children: [
          /* @__PURE__ */ n("div", { className: "min-w-0 space-y-1", children: [
            s ? /* @__PURE__ */ e(
              se,
              {
                variant: "caption",
                className: "font-bold uppercase tracking-[0.14em] text-primary",
                children: s
              }
            ) : null,
            /* @__PURE__ */ e(se, { variant: "h2", className: "truncate text-foreground", children: t }),
            a ? /* @__PURE__ */ e(
              se,
              {
                variant: "muted",
                className: "max-w-2xl text-base leading-relaxed",
                children: a
              }
            ) : null
          ] }),
          l ? /* @__PURE__ */ e("div", { className: "flex shrink-0 flex-wrap items-center gap-2", children: l }) : null
        ] })
      ]
    }
  )
);
gd.displayName = "Header";
const bd = d.forwardRef(
  ({
    icon: t,
    title: a,
    required: r,
    toolbar: l,
    headerClassName: s,
    bodyClassName: i,
    className: o,
    children: u,
    ...m
  }, f) => /* @__PURE__ */ n(T, { ref: f, className: c("overflow-hidden", o), ...m, children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: c(
          "flex flex-col gap-3 border-b px-5 py-3 lg:flex-row lg:items-center lg:justify-between",
          s
        ),
        children: [
          /* @__PURE__ */ n("h3", { className: "inline-flex items-center gap-2 font-extrabold", children: [
            /* @__PURE__ */ e("span", { className: "inline-flex size-7 items-center justify-center rounded-md bg-primary-soft text-primary", children: /* @__PURE__ */ e(t, { className: "size-4" }) }),
            a,
            r ? /* @__PURE__ */ e(R, { variant: "destructive", className: "ml-1", children: "wymagane" }) : null
          ] }),
          l ? /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-2", children: l }) : null
        ]
      }
    ),
    /* @__PURE__ */ e("div", { className: c("p-5", i), children: u })
  ] })
);
bd.displayName = "InfoSection";
function xd({ className: t = "size-12" }) {
  return /* @__PURE__ */ n(
    "svg",
    {
      viewBox: "0 0 64 64",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      "aria-labelledby": "juz-logo-title",
      className: t,
      children: [
        /* @__PURE__ */ e("title", { id: "juz-logo-title", children: "juz.pl" }),
        /* @__PURE__ */ e("rect", { width: "64", height: "64", rx: "32", fill: "url(#juz-logo-gradient)" }),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M34.9 12.7 17.8 34.4c-1.3 1.6-.1 4 2 4h10l-2.2 12.4c-.4 2.4 2.6 3.8 4.1 1.9l17-21.8c1.3-1.6.1-4-2-4H37l2-12.3c.5-2.4-2.6-3.8-4.1-1.9Z",
            stroke: "white",
            strokeWidth: 5,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ n("linearGradient", { id: "juz-logo-gradient", x1: "10", y1: "7", x2: "58", y2: "60", gradientUnits: "userSpaceOnUse", children: [
          /* @__PURE__ */ e("stop", { stopColor: "#7C3BFF" }),
          /* @__PURE__ */ e("stop", { offset: 1, stopColor: "#4113B8" })
        ] }) })
      ]
    }
  );
}
function Tu() {
  return /* @__PURE__ */ n("div", { className: "flex items-center gap-3", "aria-label": "juz.pl", children: [
    /* @__PURE__ */ e(xd, { className: "size-12 shadow-juz" }),
    /* @__PURE__ */ n("span", { className: "text-4xl font-extrabold tracking-normal text-foreground", children: [
      "juz",
      /* @__PURE__ */ e("span", { className: "text-primary", children: ".pl" })
    ] })
  ] });
}
function Du({ className: t, align: a = "end" }) {
  const { theme: r, setTheme: l } = Nl();
  return /* @__PURE__ */ n(ut, { children: [
    /* @__PURE__ */ e(mt, { asChild: !0, children: /* @__PURE__ */ n(
      v,
      {
        type: "button",
        variant: "ghost",
        size: "icon",
        "aria-label": "Przełącz motyw",
        className: c(t),
        children: [
          /* @__PURE__ */ e(_a, { className: "size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
          /* @__PURE__ */ e(Ba, { className: "absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
          /* @__PURE__ */ e("span", { className: "sr-only", children: "Przełącz motyw" })
        ]
      }
    ) }),
    /* @__PURE__ */ n(Ze, { align: a, children: [
      /* @__PURE__ */ e(ft, { children: "Motyw" }),
      /* @__PURE__ */ e(Me, {}),
      /* @__PURE__ */ n(
        oe,
        {
          onSelect: () => l("light"),
          "data-active": r === "light" || void 0,
          children: [
            /* @__PURE__ */ e(_a, { className: "size-4" }),
            /* @__PURE__ */ e("span", { children: "Jasny" })
          ]
        }
      ),
      /* @__PURE__ */ n(
        oe,
        {
          onSelect: () => l("dark"),
          "data-active": r === "dark" || void 0,
          children: [
            /* @__PURE__ */ e(Ba, { className: "size-4" }),
            /* @__PURE__ */ e("span", { children: "Ciemny" })
          ]
        }
      ),
      /* @__PURE__ */ n(
        oe,
        {
          onSelect: () => l("system"),
          "data-active": r === "system" || void 0,
          children: [
            /* @__PURE__ */ e(Zn, { className: "size-4" }),
            /* @__PURE__ */ e("span", { children: "Systemowy" })
          ]
        }
      )
    ] })
  ] });
}
const yd = [
  { id: "sec-firma", label: "Dane firmy", state: "Wymagane", icon: ye },
  { id: "sec-wysylka", label: "Dane do wysyłki", state: "Opcjonalne", icon: pr },
  { id: "sec-handlowa", label: "Sekcja handlowa", state: "Opcjonalne", icon: Hn },
  { id: "sec-rejestrowe", label: "Dane rejestrowe", state: "Opcjonalne", icon: ba },
  { id: "sec-ksef", label: "KSeF", state: "Opcjonalne", icon: Ne },
  { id: "sec-typ", label: "Typ firmy", state: "Opcjonalne", icon: hr }
], Nd = () => ({
  name: "",
  street: "",
  buildingNumber: "",
  apartmentNumber: "",
  postalCode: "",
  city: "",
  country: "PL",
  email: "",
  phone: ""
}), Ja = () => ({
  label: "",
  name: "",
  street: "",
  buildingNumber: "",
  apartmentNumber: "",
  postalCode: "",
  city: "",
  country: "PL",
  email: "",
  phone: "",
  isDefault: !1
}), vd = {
  name: "Firma testowa sp. z o.o.",
  street: "Przemysłowa",
  buildingNumber: "14",
  apartmentNumber: "",
  postalCode: "15-421",
  city: "Białystok",
  country: "PL",
  email: "produkcja@firma-testowa.pl",
  phone: "+48 85 555 22 22"
}, wd = [
  {
    label: "Magazyn główny",
    name: "Firma testowa · Logistyka",
    street: "Lipowa",
    buildingNumber: "14",
    apartmentNumber: "",
    postalCode: "15-427",
    city: "Białystok",
    country: "PL",
    email: "magazyn@firma-testowa.pl",
    phone: "+48 85 555 22 23",
    isDefault: !0
  },
  {
    label: "Oddział Starosielce",
    name: "Firma testowa · Oddział",
    street: "Wysockiego",
    buildingNumber: "68",
    apartmentNumber: "",
    postalCode: "15-168",
    city: "Białystok",
    country: "PL",
    email: "oddzial@firma-testowa.pl",
    phone: "+48 85 555 22 24",
    isDefault: !1
  }
], Xt = {
  PL: "Polska",
  DE: "Niemcy",
  CZ: "Czechy",
  SK: "Słowacja"
};
function Iu({ headerStyle: t = "joined" } = {}) {
  const [a, r] = d.useState("sec-firma"), [l, s] = d.useState("5421234588"), [i, o] = d.useState("FIRMA-TEST"), [u, m] = d.useState("faktury@firma-testowa.pl"), [f, p] = d.useState(vd), [h, g] = d.useState(!1), b = d.useRef(null), [x, w] = d.useState(wd), [S, z] = d.useState(0), [y, j] = d.useState(!1), [W, K] = d.useState(null), [H, M] = d.useState(Ja()), [D, X] = d.useState("przelew"), [he, Ie] = d.useState("14"), [Vt, Jt] = d.useState("Cennik standardowy 2026"), [ee, te] = d.useState("monika"), [Qt, ge] = d.useState(""), [be, ae] = d.useState(["Kurier", "Paleta"]), [Nt, ea] = d.useState(!1), [vt, wt] = d.useState(!1), [kt, zt] = d.useState(!0), [Ge, k] = d.useState(!1), [I, ce] = d.useState(!1), [re, ne] = d.useState(["Dystrybutor"]), un = [kt && "Klient", Ge && "Dostawca", I && "Klient lab."].filter(Boolean).join(", "), mn = [Nt && "Wystawia", vt && "Pobiera"].filter(Boolean).join(" + "), fn = ee === "monika" ? "Opiekun handlowy" : ee === "kamil" ? "Opiekun 2" : "—", Se = d.useRef({
    "sec-firma": null,
    "sec-wysylka": null,
    "sec-handlowa": null,
    "sec-rejestrowe": null,
    "sec-ksef": null,
    "sec-typ": null
  });
  function pn(N) {
    const E = Se.current[N];
    E && (r(N), window.scrollTo({
      behavior: "smooth",
      top: E.getBoundingClientRect().top + window.scrollY - 96
    }));
  }
  function hn() {
    b.current = { c: { ...f }, n: l, s: i, e: u }, g(!0);
  }
  function gn() {
    b.current && (p(b.current.c), s(b.current.n), o(b.current.s), m(b.current.e)), b.current = null, g(!1);
  }
  function bn() {
    b.current = null, g(!1);
  }
  function xn() {
    p(Nd()), s(""), o(""), m("");
  }
  function yn() {
    K(null), M({ ...Ja(), isDefault: x.length === 0 }), j(!0);
  }
  function Nn(N) {
    K(N), M({ ...x[N] }), j(!0);
  }
  function vn() {
    const N = [...x];
    H.isDefault && N.forEach((E) => E.isDefault = !1), W != null ? (N[W] = { ...H }, z(W)) : (N.push({ ...H }), z(N.length - 1)), w(N), j(!1), K(null);
  }
  function wn(N) {
    const E = x.filter((ue, aa) => aa !== N);
    w(E), S === N && z(E.length > 0 ? 0 : null);
  }
  const ta = S != null ? x[S] : null;
  return /* @__PURE__ */ n("section", { className: "space-y-5", children: [
    /* @__PURE__ */ e(
      kd,
      {
        shortName: i,
        company: f,
        nip: l,
        rolesLabel: un,
        extraTypes: re,
        opiekunLabel: fn,
        paymentMethod: D,
        paymentDays: he,
        ksefLabel: mn,
        style: t
      }
    ),
    /* @__PURE__ */ n("div", { className: "grid gap-4 xl:grid-cols-[260px_minmax(0,1fr)_340px]", children: [
      /* @__PURE__ */ e("aside", { className: "xl:sticky xl:top-20 xl:self-start", children: /* @__PURE__ */ n("div", { className: "rounded-lg border bg-card p-3 shadow-juz-sm", children: [
        /* @__PURE__ */ e("p", { className: "juz-label mb-2", children: "Sekcje" }),
        /* @__PURE__ */ e("nav", { className: "space-y-1", "aria-label": "Sekcje nowej firmy", children: yd.map((N) => /* @__PURE__ */ e(
          "button",
          {
            className: c(
              "relative flex w-full items-start justify-between gap-3 rounded-md px-3 py-3 text-left text-sm hover:bg-primary-soft",
              a === N.id && "bg-primary-soft text-primary before:absolute before:-left-3 before:top-3 before:h-8 before:w-1 before:rounded-r-full before:bg-primary"
            ),
            onClick: () => pn(N.id),
            type: "button",
            children: /* @__PURE__ */ n("span", { children: [
              /* @__PURE__ */ e("span", { className: "block font-bold", children: N.label }),
              /* @__PURE__ */ e("span", { className: "block text-xs text-muted-foreground", children: N.state })
            ] })
          },
          N.id
        )) })
      ] }) }),
      /* @__PURE__ */ n("main", { className: "min-w-0 space-y-5", children: [
        /* @__PURE__ */ e("div", { ref: (N) => {
          Se.current["sec-firma"] = N;
        }, children: /* @__PURE__ */ e(
          Ae,
          {
            icon: ye,
            title: "Dane firmy",
            required: !0,
            toolbar: h ? /* @__PURE__ */ n("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ e(v, { variant: "outline", size: "sm", onClick: gn, children: "Anuluj" }),
              /* @__PURE__ */ e(v, { size: "sm", onClick: bn, children: "Zapisz" })
            ] }) : /* @__PURE__ */ n("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ n(v, { variant: "outline", size: "sm", onClick: xn, children: [
                /* @__PURE__ */ e(Gn, {}),
                "Wyczyść"
              ] }),
              /* @__PURE__ */ n(v, { variant: "outline", size: "sm", onClick: hn, children: [
                /* @__PURE__ */ e(oa, {}),
                "Edytuj"
              ] })
            ] }),
            children: h ? /* @__PURE__ */ e(
              Sd,
              {
                company: f,
                setCompany: p,
                nip: l,
                setNip: s,
                shortName: i,
                setShortName: o,
                invoiceEmail: u,
                setInvoiceEmail: m
              }
            ) : /* @__PURE__ */ e(
              zd,
              {
                company: f,
                nip: l,
                shortName: i,
                invoiceEmail: u
              }
            )
          }
        ) }),
        /* @__PURE__ */ e("div", { ref: (N) => {
          Se.current["sec-wysylka"] = N;
        }, children: /* @__PURE__ */ e(
          Ae,
          {
            icon: pr,
            title: "Dane do wysyłki",
            toolbar: y ? null : /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center gap-2", children: [
              x.length > 0 ? /* @__PURE__ */ n(
                J,
                {
                  "aria-label": "Adres wysyłki",
                  className: "min-w-[220px]",
                  value: S ?? "",
                  onChange: (N) => z(N.target.value === "" ? null : Number(N.target.value)),
                  children: [
                    /* @__PURE__ */ e("option", { value: "", children: "Adres firmy" }),
                    x.map((N, E) => /* @__PURE__ */ n("option", { value: E, children: [
                      N.label || N.name || "Adres",
                      " —",
                      " ",
                      [N.street, N.buildingNumber].filter(Boolean).join(" "),
                      N.city ? `, ${N.city}` : "",
                      N.isDefault ? " (domyślny)" : ""
                    ] }, `${N.label}-${E}`))
                  ]
                }
              ) : null,
              ta && S != null ? /* @__PURE__ */ n(
                v,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => Nn(S),
                  children: [
                    /* @__PURE__ */ e(oa, {}),
                    "Edytuj"
                  ]
                }
              ) : null,
              /* @__PURE__ */ n(v, { variant: "outline", size: "sm", onClick: yn, children: [
                /* @__PURE__ */ e(Lt, {}),
                "Dodaj adres"
              ] })
            ] }),
            children: y ? /* @__PURE__ */ e(
              Cd,
              {
                value: H,
                onChange: M,
                onCancel: () => {
                  j(!1), K(null);
                },
                onSave: vn,
                onDelete: W != null ? () => {
                  wn(W), j(!1), K(null);
                } : void 0
              }
            ) : ta ? /* @__PURE__ */ e(jd, { value: ta }) : f.street ? /* @__PURE__ */ e("p", { className: "text-sm italic text-muted-foreground", children: "Adres wysyłki = adres firmy. Dodaj osobny, jeśli wysyłka idzie pod inny adres." }) : /* @__PURE__ */ e("p", { className: "text-sm italic text-muted-foreground", children: 'Najpierw uzupełnij sekcję „Dane firmy" lub dodaj osobny adres wysyłki.' })
          }
        ) }),
        /* @__PURE__ */ e("div", { ref: (N) => {
          Se.current["sec-handlowa"] = N;
        }, children: /* @__PURE__ */ e(Ae, { icon: xa, title: "Sekcja handlowa", children: /* @__PURE__ */ n("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: [
          /* @__PURE__ */ e(P, { label: "Sposób płatności", children: /* @__PURE__ */ n(
            J,
            {
              value: D,
              onChange: (N) => X(N.target.value),
              children: [
                /* @__PURE__ */ e("option", { value: "", children: "wybierz" }),
                /* @__PURE__ */ e("option", { value: "przelew", children: "Przelew" }),
                /* @__PURE__ */ e("option", { value: "gotowka", children: "Gotówka" }),
                /* @__PURE__ */ e("option", { value: "karta", children: "Karta" }),
                /* @__PURE__ */ e("option", { value: "pobranie", children: "Pobranie" })
              ]
            }
          ) }),
          /* @__PURE__ */ e(P, { label: "Termin płatności (dni)", children: /* @__PURE__ */ e(
            C,
            {
              type: "number",
              min: 0,
              max: 999,
              placeholder: "np. 14",
              value: he,
              onChange: (N) => Ie(N.target.value)
            }
          ) }),
          /* @__PURE__ */ e(P, { label: "Cennik", children: /* @__PURE__ */ e(
            C,
            {
              placeholder: "np. STANDARD",
              value: Vt,
              onChange: (N) => Jt(N.target.value)
            }
          ) }),
          /* @__PURE__ */ e(P, { label: "Opiekun handlowy", children: /* @__PURE__ */ n(
            J,
            {
              value: ee,
              onChange: (N) => te(N.target.value),
              children: [
                /* @__PURE__ */ e("option", { value: "", children: "— brak —" }),
                /* @__PURE__ */ e("option", { value: "monika", children: "Opiekun handlowy" }),
                /* @__PURE__ */ e("option", { value: "kamil", children: "Opiekun 2" })
              ]
            }
          ) }),
          /* @__PURE__ */ e(P, { label: "Kategoria kosztowa (FZ)", children: /* @__PURE__ */ n(
            J,
            {
              value: Qt,
              onChange: (N) => ge(N.target.value),
              children: [
                /* @__PURE__ */ e("option", { value: "", children: "— brak —" }),
                /* @__PURE__ */ e("option", { value: "materialy", children: "Materiały produkcyjne" }),
                /* @__PURE__ */ e("option", { value: "uslugi", children: "Usługi obce" }),
                /* @__PURE__ */ e("option", { value: "transport", children: "Transport" })
              ]
            }
          ) }),
          /* @__PURE__ */ e(P, { label: "Sposób dostawy (można wybrać kilka)", className: "md:col-span-2 xl:col-span-3", children: /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ n(
              J,
              {
                "aria-label": "Dodaj sposób dostawy",
                className: "min-w-[220px] max-w-[280px]",
                value: "",
                onChange: (N) => {
                  const E = N.target.value;
                  E && !be.includes(E) && ae((ue) => [...ue, E]);
                },
                children: [
                  /* @__PURE__ */ e("option", { value: "", children: "Dodaj sposób dostawy…" }),
                  ["Kurier", "Paleta", "Odbiór własny", "Transport firmowy"].filter((N) => !be.includes(N)).map((N) => /* @__PURE__ */ e("option", { value: N, children: N }, N))
                ]
              }
            ),
            /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: be.map((N) => /* @__PURE__ */ n(R, { variant: "neutral", className: "gap-1.5 pr-1", children: [
              N,
              /* @__PURE__ */ e(
                "button",
                {
                  "aria-label": `Usuń ${N}`,
                  className: "inline-flex size-4 items-center justify-center rounded-full hover:bg-muted",
                  onClick: () => ae((E) => E.filter((ue) => ue !== N)),
                  type: "button",
                  children: /* @__PURE__ */ e(ve, { className: "size-3" })
                }
              )
            ] }, N)) })
          ] }) })
        ] }) }) }),
        /* @__PURE__ */ e("div", { ref: (N) => {
          Se.current["sec-rejestrowe"] = N;
        }, children: /* @__PURE__ */ e(
          Ae,
          {
            icon: ba,
            title: "Dane rejestrowe",
            toolbar: /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground", children: "Pobierane z GUS / VIES po podaniu NIP" }),
              /* @__PURE__ */ n(v, { variant: "outline", size: "sm", children: [
                /* @__PURE__ */ e(gr, {}),
                "Pobierz z GUS"
              ] })
            ] }),
            children: /* @__PURE__ */ n("div", { className: "grid gap-4 md:grid-cols-2", children: [
              /* @__PURE__ */ e(P, { label: "REGON", children: /* @__PURE__ */ e(C, { disabled: !0, placeholder: "—", value: "200401234", readOnly: !0 }) }),
              /* @__PURE__ */ e(P, { label: "KRS", children: /* @__PURE__ */ e(C, { disabled: !0, placeholder: "—", value: "0000123456", readOnly: !0 }) }),
              /* @__PURE__ */ e(P, { label: "PKD (2511Z)", className: "md:col-span-2", children: /* @__PURE__ */ e(
                C,
                {
                  disabled: !0,
                  placeholder: "—",
                  value: "Produkcja konstrukcji metalowych i ich części",
                  readOnly: !0
                }
              ) }),
              /* @__PURE__ */ e(P, { label: "Status VAT", children: /* @__PURE__ */ e(C, { disabled: !0, placeholder: "—", value: "Czynny", readOnly: !0 }) }),
              /* @__PURE__ */ e(P, { label: "Data weryfikacji VAT", children: /* @__PURE__ */ e(C, { disabled: !0, placeholder: "—", value: "20.05.2026", readOnly: !0 }) }),
              /* @__PURE__ */ e(P, { label: "Typ podmiotu", children: /* @__PURE__ */ e(C, { disabled: !0, placeholder: "—", value: "Prawna (sp. z o.o./S.A.)", readOnly: !0 }) }),
              /* @__PURE__ */ e(P, { label: "Data rozpoczęcia działalności", children: /* @__PURE__ */ e(C, { disabled: !0, placeholder: "—", value: "04.07.2014", readOnly: !0 }) }),
              /* @__PURE__ */ e(P, { label: "Rachunki bankowe (Biała Lista)", className: "md:col-span-2", children: /* @__PURE__ */ n("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ e("code", { className: "block rounded-md bg-muted px-3 py-2 font-mono text-xs", children: "PL 92 1090 1115 0000 0001 2345 6789" }),
                /* @__PURE__ */ e("code", { className: "block rounded-md bg-muted px-3 py-2 font-mono text-xs", children: "PL 14 1140 2017 0000 4602 9876 5432" })
              ] }) }),
              /* @__PURE__ */ e("div", { className: "md:col-span-2", children: /* @__PURE__ */ e(R, { variant: "success", children: "VIES: Aktywny" }) })
            ] })
          }
        ) }),
        /* @__PURE__ */ e("div", { ref: (N) => {
          Se.current["sec-ksef"] = N;
        }, children: /* @__PURE__ */ e(Ae, { icon: Ne, title: "Integracja z KSeF", children: /* @__PURE__ */ n("div", { className: "space-y-3", children: [
          /* @__PURE__ */ e(
            je,
            {
              checked: Nt,
              onCheckedChange: ea,
              label: "Wystawiaj e-faktury KSeF",
              hint: "faktury sprzedażowe trafiają do KSeF"
            }
          ),
          /* @__PURE__ */ e(
            je,
            {
              checked: vt,
              onCheckedChange: wt,
              label: "Pobieraj e-faktury kosztowe z KSeF",
              hint: "faktury kosztowe pobierane automatycznie"
            }
          )
        ] }) }) }),
        /* @__PURE__ */ e("div", { ref: (N) => {
          Se.current["sec-typ"] = N;
        }, children: /* @__PURE__ */ e(Ae, { icon: hr, title: "Typ firmy", required: !0, children: /* @__PURE__ */ n("div", { className: "grid gap-2 md:grid-cols-2 xl:grid-cols-3", children: [
          /* @__PURE__ */ e(je, { checked: kt, onCheckedChange: zt, label: "Klient" }),
          /* @__PURE__ */ e(je, { checked: Ge, onCheckedChange: k, label: "Dostawca" }),
          /* @__PURE__ */ e(je, { checked: I, onCheckedChange: ce, label: "Klient laboratorium" }),
          ["Dystrybutor", "Sieć handlowa", "Eksport", "Współpraca marketingowa"].map((N) => /* @__PURE__ */ e(
            je,
            {
              label: N,
              checked: re.includes(N),
              onCheckedChange: (E) => ne(
                (ue) => E ? ue.includes(N) ? ue : [...ue, N] : ue.filter((aa) => aa !== N)
              )
            },
            N
          ))
        ] }) }) })
      ] }),
      /* @__PURE__ */ n("aside", { className: "space-y-5 xl:sticky xl:top-20 xl:self-start", children: [
        /* @__PURE__ */ e(Pd, {}),
        /* @__PURE__ */ n(T, { className: "p-4", children: [
          /* @__PURE__ */ e("p", { className: "juz-label", children: "Podsumowanie" }),
          /* @__PURE__ */ n("dl", { className: "mt-3 space-y-2 text-sm", children: [
            /* @__PURE__ */ e(Ct, { label: "Sekcje wymagane", value: "2 z 2 wypełnione", tone: "success" }),
            /* @__PURE__ */ e(Ct, { label: "Sekcje opcjonalne", value: "4 z 4 wypełnione", tone: "muted" }),
            /* @__PURE__ */ e(Ct, { label: "Adresy wysyłki", value: `${x.length} adresów`, tone: "muted" }),
            /* @__PURE__ */ e(Ct, { label: "Status walidacji", value: "OK", tone: "success" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function kd({
  shortName: t,
  company: a,
  nip: r,
  rolesLabel: l,
  extraTypes: s,
  opiekunLabel: i,
  paymentMethod: o,
  paymentDays: u,
  ksefLabel: m,
  style: f = "joined"
}) {
  const p = [a.street, a.buildingNumber].filter(Boolean).join(" "), h = [a.postalCode, a.city].filter(Boolean).join(" "), g = /* @__PURE__ */ n(
    "div",
    {
      className: c(
        "flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between",
        f === "joined" ? "border-b p-5" : "px-1 pt-1"
      ),
      children: [
        /* @__PURE__ */ n("div", { className: "flex min-w-0 items-start gap-3", children: [
          /* @__PURE__ */ n(v, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ e(Dt, {}),
            "Wróć"
          ] }),
          /* @__PURE__ */ e("div", { className: "flex size-9 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary", children: /* @__PURE__ */ e(ye, { className: "size-5" }) }),
          /* @__PURE__ */ n("div", { className: "min-w-0", children: [
            /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ e("h2", { className: "truncate text-xl font-extrabold", children: "Nowa firma" }),
              /* @__PURE__ */ e(R, { variant: "warning", children: "Szkic" })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-0.5 text-sm text-muted-foreground", children: "Uzupełnij wymagane sekcje i zapisz, aby utworzyć rekord klienta." })
          ] })
        ] }),
        /* @__PURE__ */ n("div", { className: "flex flex-wrap items-start gap-2", children: [
          /* @__PURE__ */ e(v, { variant: "outline", children: "Anuluj" }),
          /* @__PURE__ */ n("div", { className: "inline-flex items-stretch overflow-hidden rounded-md", children: [
            /* @__PURE__ */ e(v, { className: "rounded-r-none", children: "Zapisz firmę" }),
            /* @__PURE__ */ e(
              v,
              {
                "aria-label": "Więcej opcji zapisu",
                className: "rounded-l-none border-l border-primary-foreground/20 px-2",
                children: /* @__PURE__ */ e(U, {})
              }
            )
          ] })
        ] })
      ]
    }
  ), b = /* @__PURE__ */ n("div", { className: "juz-record-meta-row", children: [
    /* @__PURE__ */ n(Oe, { label: "Nazwa", children: [
      /* @__PURE__ */ e("strong", { children: t || a.name || "—" }),
      p || h ? /* @__PURE__ */ n("span", { children: [
        p,
        p && h ? ", " : "",
        h
      ] }) : null,
      i !== "—" ? /* @__PURE__ */ n("span", { children: [
        "Opiekun: ",
        i
      ] }) : null
    ] }),
    /* @__PURE__ */ e(Oe, { label: "NIP", children: /* @__PURE__ */ e("strong", { children: r || "—" }) }),
    /* @__PURE__ */ n(Oe, { label: "Role", children: [
      /* @__PURE__ */ e("strong", { children: l || "—" }),
      s.length > 0 ? /* @__PURE__ */ e("span", { children: s.join(", ") }) : null
    ] }),
    /* @__PURE__ */ e(Oe, { label: "Opiekun", children: /* @__PURE__ */ e("strong", { children: i }) }),
    /* @__PURE__ */ n(Oe, { label: "Płatność", children: [
      /* @__PURE__ */ e("strong", { children: o || "—" }),
      u ? /* @__PURE__ */ n("span", { children: [
        "Termin: ",
        u,
        " dni"
      ] }) : null
    ] }),
    /* @__PURE__ */ e(Oe, { label: "KSeF", children: /* @__PURE__ */ e("strong", { children: m || "—" }) })
  ] });
  return f === "split" ? /* @__PURE__ */ n("div", { className: "space-y-4", children: [
    g,
    /* @__PURE__ */ e(T, { className: "overflow-hidden shadow-juz-sm", children: b })
  ] }) : /* @__PURE__ */ n(T, { className: "overflow-hidden shadow-juz-sm", children: [
    g,
    b
  ] });
}
function Oe({
  label: t,
  className: a,
  children: r
}) {
  return /* @__PURE__ */ n("div", { className: c("flex min-h-28 min-w-0 flex-col gap-1 bg-card p-5 text-sm", a), children: [
    /* @__PURE__ */ e("p", { className: "juz-label", children: t }),
    /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-col gap-1 text-foreground [&_strong]:wrap-break-word [&_span]:wrap-break-word [&_span]:text-muted-foreground", children: r })
  ] });
}
function Ae({
  icon: t,
  title: a,
  required: r,
  toolbar: l,
  children: s
}) {
  return /* @__PURE__ */ n(T, { className: "overflow-hidden", children: [
    /* @__PURE__ */ n("div", { className: "flex flex-col gap-3 border-b px-5 py-3 lg:flex-row lg:items-center lg:justify-between", children: [
      /* @__PURE__ */ n("h3", { className: "inline-flex items-center gap-2 font-extrabold", children: [
        /* @__PURE__ */ e("span", { className: "inline-flex size-7 items-center justify-center rounded-md bg-primary-soft text-primary", children: /* @__PURE__ */ e(t, { className: "size-4" }) }),
        a,
        r ? /* @__PURE__ */ e(R, { variant: "destructive", className: "ml-1", children: "wymagane" }) : null
      ] }),
      l ? /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-2", children: l }) : null
    ] }),
    /* @__PURE__ */ e("div", { className: "p-5", children: s })
  ] });
}
function zd({
  company: t,
  nip: a,
  shortName: r,
  invoiceEmail: l
}) {
  return /* @__PURE__ */ n("div", { className: "space-y-5", children: [
    /* @__PURE__ */ e(P, { label: "Pełna nazwa", children: /* @__PURE__ */ e("p", { className: "text-base font-semibold", children: t.name || "—" }) }),
    /* @__PURE__ */ n("dl", { className: "grid gap-x-10 gap-y-5 md:grid-cols-2 xl:grid-cols-4", children: [
      /* @__PURE__ */ e(Z, { label: "NIP", value: a }),
      /* @__PURE__ */ e(Z, { label: "Skrót", value: r }),
      /* @__PURE__ */ e(Z, { label: "Telefon", value: t.phone }),
      /* @__PURE__ */ e(Z, { label: "Email", value: t.email }),
      /* @__PURE__ */ e(Z, { label: "Email do faktury", value: l }),
      /* @__PURE__ */ e(
        Z,
        {
          label: "Adres",
          value: [
            [t.street, t.buildingNumber].filter(Boolean).join(" "),
            t.apartmentNumber ? `/${t.apartmentNumber}` : ""
          ].join("")
        }
      ),
      /* @__PURE__ */ e(Z, { label: "Kod pocztowy", value: t.postalCode }),
      /* @__PURE__ */ e(Z, { label: "Miasto", value: t.city }),
      /* @__PURE__ */ e(Z, { label: "Kraj", value: Xt[t.country] ?? t.country })
    ] })
  ] });
}
function Sd({
  company: t,
  setCompany: a,
  nip: r,
  setNip: l,
  shortName: s,
  setShortName: i,
  invoiceEmail: o,
  setInvoiceEmail: u
}) {
  function m(f, p) {
    a((h) => ({ ...h, [f]: p }));
  }
  return /* @__PURE__ */ n("div", { className: "space-y-5", children: [
    /* @__PURE__ */ n("div", { className: "grid gap-4 md:grid-cols-[200px_minmax(0,1fr)_auto]", children: [
      /* @__PURE__ */ e(P, { label: "Kraj NIP", children: /* @__PURE__ */ n(J, { defaultValue: "PL", children: [
        /* @__PURE__ */ e("option", { value: "PL", children: "PL — Polska" }),
        /* @__PURE__ */ e("option", { value: "DE", children: "DE — Niemcy" }),
        /* @__PURE__ */ e("option", { value: "CZ", children: "CZ — Czechy" }),
        /* @__PURE__ */ e("option", { value: "SK", children: "SK — Słowacja" })
      ] }) }),
      /* @__PURE__ */ e(P, { label: "NIP", required: !0, children: /* @__PURE__ */ e(C, { value: r, onChange: (f) => l(f.target.value), placeholder: "10 cyfr" }) }),
      /* @__PURE__ */ e("div", { className: "flex items-end", children: /* @__PURE__ */ n(v, { variant: "outline", children: [
        /* @__PURE__ */ e(gr, {}),
        "Pobierz z GUS"
      ] }) })
    ] }),
    /* @__PURE__ */ n("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ e(P, { label: "Pełna nazwa", required: !0, children: /* @__PURE__ */ e(
        C,
        {
          value: t.name,
          onChange: (f) => m("name", f.target.value),
          placeholder: "Nazwa firmy"
        }
      ) }),
      /* @__PURE__ */ e(P, { label: "Skrót", children: /* @__PURE__ */ e(
        C,
        {
          value: s,
          onChange: (f) => i(f.target.value),
          placeholder: "np. FIRMA-TEST"
        }
      ) })
    ] }),
    /* @__PURE__ */ n("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ e(P, { label: "Email", children: /* @__PURE__ */ e(
        C,
        {
          type: "email",
          value: t.email,
          onChange: (f) => m("email", f.target.value),
          placeholder: "kontakt@firma.pl"
        }
      ) }),
      /* @__PURE__ */ e(P, { label: "Email do faktury", children: /* @__PURE__ */ e(
        C,
        {
          type: "email",
          value: o,
          onChange: (f) => u(f.target.value),
          placeholder: "faktury@firma.pl"
        }
      ) }),
      /* @__PURE__ */ e(P, { label: "Telefon", required: !0, children: /* @__PURE__ */ e(
        C,
        {
          value: t.phone,
          onChange: (f) => m("phone", f.target.value),
          placeholder: "+48 ..."
        }
      ) }),
      /* @__PURE__ */ e(P, { label: "Kraj", children: /* @__PURE__ */ e(
        J,
        {
          value: t.country,
          onChange: (f) => m("country", f.target.value),
          children: Object.entries(Xt).map(([f, p]) => /* @__PURE__ */ e("option", { value: f, children: p }, f))
        }
      ) })
    ] }),
    /* @__PURE__ */ n("div", { className: "grid gap-4 md:grid-cols-4", children: [
      /* @__PURE__ */ e(P, { label: "Ulica", required: !0, className: "md:col-span-2", children: /* @__PURE__ */ e(
        C,
        {
          value: t.street,
          onChange: (f) => m("street", f.target.value),
          placeholder: "np. Przemysłowa"
        }
      ) }),
      /* @__PURE__ */ e(P, { label: "Nr budynku", required: !0, children: /* @__PURE__ */ e(
        C,
        {
          value: t.buildingNumber,
          onChange: (f) => m("buildingNumber", f.target.value),
          placeholder: "np. 14"
        }
      ) }),
      /* @__PURE__ */ e(P, { label: "Nr lokalu", children: /* @__PURE__ */ e(
        C,
        {
          value: t.apartmentNumber,
          onChange: (f) => m("apartmentNumber", f.target.value),
          placeholder: "opcjonalne"
        }
      ) }),
      /* @__PURE__ */ e(P, { label: "Kod pocztowy", required: !0, children: /* @__PURE__ */ e(
        C,
        {
          value: t.postalCode,
          onChange: (f) => m("postalCode", f.target.value),
          placeholder: "00-000"
        }
      ) }),
      /* @__PURE__ */ e(P, { label: "Miasto", required: !0, className: "md:col-span-3", children: /* @__PURE__ */ e(
        C,
        {
          value: t.city,
          onChange: (f) => m("city", f.target.value),
          placeholder: "np. Białystok"
        }
      ) })
    ] })
  ] });
}
function jd({ value: t }) {
  const a = [t.street, t.buildingNumber].filter(Boolean).join(" ") + (t.apartmentNumber ? `/${t.apartmentNumber}` : "");
  return /* @__PURE__ */ n("div", { className: "space-y-4", children: [
    /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ e("p", { className: "text-base font-semibold", children: t.label || t.name || "Adres wysyłki" }),
      t.isDefault ? /* @__PURE__ */ e(R, { variant: "success", children: "Domyślny" }) : null
    ] }),
    /* @__PURE__ */ n("dl", { className: "grid gap-x-10 gap-y-5 md:grid-cols-2 xl:grid-cols-4", children: [
      /* @__PURE__ */ e(Z, { label: "Odbiorca", value: t.name }),
      /* @__PURE__ */ e(Z, { label: "Adres", value: a }),
      /* @__PURE__ */ e(Z, { label: "Kod pocztowy", value: t.postalCode }),
      /* @__PURE__ */ e(Z, { label: "Miasto", value: t.city }),
      /* @__PURE__ */ e(Z, { label: "Kraj", value: Xt[t.country] ?? t.country }),
      /* @__PURE__ */ e(Z, { label: "Telefon", value: t.phone }),
      /* @__PURE__ */ e(Z, { label: "Email", value: t.email })
    ] })
  ] });
}
function Cd({
  value: t,
  onChange: a,
  onCancel: r,
  onSave: l,
  onDelete: s
}) {
  function i(o, u) {
    a({ ...t, [o]: u });
  }
  return /* @__PURE__ */ n("div", { className: "space-y-5", children: [
    /* @__PURE__ */ n("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ e(P, { label: "Etykieta", children: /* @__PURE__ */ e(
        C,
        {
          value: t.label,
          onChange: (o) => i("label", o.target.value),
          placeholder: "np. Magazyn główny (opcjonalne)"
        }
      ) }),
      /* @__PURE__ */ e(P, { label: "Nazwa odbiorcy", children: /* @__PURE__ */ e(
        C,
        {
          value: t.name,
          onChange: (o) => i("name", o.target.value),
          placeholder: "opcjonalne"
        }
      ) })
    ] }),
    /* @__PURE__ */ n("div", { className: "grid gap-4 md:grid-cols-4", children: [
      /* @__PURE__ */ e(P, { label: "Ulica", className: "md:col-span-2", children: /* @__PURE__ */ e(C, { value: t.street, onChange: (o) => i("street", o.target.value) }) }),
      /* @__PURE__ */ e(P, { label: "Nr budynku", children: /* @__PURE__ */ e(
        C,
        {
          value: t.buildingNumber,
          onChange: (o) => i("buildingNumber", o.target.value)
        }
      ) }),
      /* @__PURE__ */ e(P, { label: "Nr lokalu", children: /* @__PURE__ */ e(
        C,
        {
          value: t.apartmentNumber,
          onChange: (o) => i("apartmentNumber", o.target.value)
        }
      ) }),
      /* @__PURE__ */ e(P, { label: "Kod pocztowy", children: /* @__PURE__ */ e(C, { value: t.postalCode, onChange: (o) => i("postalCode", o.target.value) }) }),
      /* @__PURE__ */ e(P, { label: "Miasto", className: "md:col-span-2", children: /* @__PURE__ */ e(C, { value: t.city, onChange: (o) => i("city", o.target.value) }) }),
      /* @__PURE__ */ e(P, { label: "Kraj", children: /* @__PURE__ */ e(J, { value: t.country, onChange: (o) => i("country", o.target.value), children: Object.entries(Xt).map(([o, u]) => /* @__PURE__ */ e("option", { value: o, children: u }, o)) }) })
    ] }),
    /* @__PURE__ */ n("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ e(P, { label: "Telefon", children: /* @__PURE__ */ e(C, { value: t.phone, onChange: (o) => i("phone", o.target.value) }) }),
      /* @__PURE__ */ e(P, { label: "Email", children: /* @__PURE__ */ e(
        C,
        {
          type: "email",
          value: t.email,
          onChange: (o) => i("email", o.target.value)
        }
      ) })
    ] }),
    /* @__PURE__ */ e(
      je,
      {
        checked: t.isDefault,
        onCheckedChange: (o) => i("isDefault", o),
        label: "Ustaw jako adres domyślny"
      }
    ),
    /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center justify-end gap-2 border-t pt-4", children: [
      s ? /* @__PURE__ */ e(v, { variant: "ghost", onClick: s, className: "mr-auto text-destructive", children: "Usuń adres" }) : null,
      /* @__PURE__ */ e(v, { variant: "outline", onClick: r, children: "Anuluj" }),
      /* @__PURE__ */ e(v, { onClick: l, children: "Zapisz adres" })
    ] })
  ] });
}
function P({
  label: t,
  required: a,
  className: r,
  children: l
}) {
  return /* @__PURE__ */ n("label", { className: c("flex flex-col gap-1.5", r), children: [
    /* @__PURE__ */ n("span", { className: "text-sm font-semibold text-muted-foreground", children: [
      t,
      a ? /* @__PURE__ */ e("span", { className: "ml-1 text-destructive", children: "*" }) : null
    ] }),
    l
  ] });
}
function Z({
  label: t,
  value: a
}) {
  const r = a == null || a === "" ? "—" : String(a);
  return /* @__PURE__ */ n("div", { className: "flex min-w-0 flex-col gap-1", children: [
    /* @__PURE__ */ e("dt", { className: "text-sm text-muted-foreground", children: t }),
    /* @__PURE__ */ e(
      "dd",
      {
        className: c(
          "wrap-break-word text-sm font-semibold",
          r === "—" && "font-normal text-muted-foreground"
        ),
        children: r
      }
    )
  ] });
}
function je({
  checked: t,
  onCheckedChange: a,
  label: r,
  hint: l
}) {
  return /* @__PURE__ */ n("label", { className: "flex cursor-pointer items-start gap-3 rounded-md border bg-muted/25 p-3 text-sm", children: [
    /* @__PURE__ */ e(
      Be,
      {
        checked: t,
        onCheckedChange: (s) => a(s === !0),
        className: "mt-0.5"
      }
    ),
    /* @__PURE__ */ n("span", { className: "flex flex-col gap-0.5", children: [
      /* @__PURE__ */ e("span", { className: "font-semibold text-foreground", children: r }),
      l ? /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground", children: l }) : null
    ] })
  ] });
}
function Ct({
  label: t,
  value: a,
  tone: r
}) {
  return /* @__PURE__ */ n("div", { className: "flex items-center justify-between gap-3", children: [
    /* @__PURE__ */ e("dt", { className: "text-muted-foreground", children: t }),
    /* @__PURE__ */ e(
      "dd",
      {
        className: c(
          "font-semibold",
          r === "success" && "text-success",
          r === "muted" && "text-foreground"
        ),
        children: a
      }
    )
  ] });
}
function Pd() {
  return /* @__PURE__ */ n(T, { className: "overflow-hidden", children: [
    /* @__PURE__ */ n("div", { className: "border-b p-4", children: [
      /* @__PURE__ */ e("h3", { className: "font-extrabold", children: "Lokalizacja" }),
      /* @__PURE__ */ e("p", { className: "mt-1 font-mono text-sm text-muted-foreground", children: "53.12350, 23.16545" })
    ] }),
    /* @__PURE__ */ n("div", { className: "relative h-72 bg-primary-soft", children: [
      /* @__PURE__ */ e("div", { className: "absolute inset-0 opacity-70 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-size-[32px_32px]" }),
      /* @__PURE__ */ e("div", { className: "absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-juz", children: /* @__PURE__ */ e(ot, { className: "size-7" }) }),
      /* @__PURE__ */ n("div", { className: "absolute right-3 top-3 flex flex-col gap-2", children: [
        /* @__PURE__ */ e("button", { className: "inline-flex size-9 items-center justify-center rounded-md border bg-card font-bold shadow-juz-sm", children: "+" }),
        /* @__PURE__ */ e("button", { className: "inline-flex size-9 items-center justify-center rounded-md border bg-card font-bold shadow-juz-sm", children: "-" })
      ] })
    ] }),
    /* @__PURE__ */ n("div", { className: "flex flex-wrap gap-2 p-4", children: [
      /* @__PURE__ */ n(v, { variant: "outline", size: "sm", children: [
        /* @__PURE__ */ e(Ft, {}),
        "Kopiuj współrzędne"
      ] }),
      /* @__PURE__ */ e(v, { variant: "ghost", size: "sm", children: "Geokoduj z adresu" })
    ] })
  ] });
}
function Rd(t, a, r) {
  const l = [], s = r * 2 + 5;
  if (a <= s) {
    for (let f = 1; f <= a; f++) l.push(f);
    return l;
  }
  const i = Math.max(t - r, 1), o = Math.min(t + r, a), u = i > 2, m = o < a - 1;
  l.push(1), u && l.push("ellipsis-start");
  for (let f = Math.max(i, 2); f <= Math.min(o, a - 1); f++)
    l.push(f);
  return m && l.push("ellipsis-end"), l.push(a), l;
}
const Md = d.forwardRef(
  ({
    page: t,
    pageCount: a,
    onPageChange: r,
    siblings: l = 1,
    showFirstLast: s = !0,
    labelPrevious: i = "Poprzednia",
    labelNext: o = "Następna",
    className: u,
    ...m
  }, f) => {
    const p = Math.max(1, a), h = Math.min(Math.max(1, t), p), g = Rd(h, p, l), b = (x) => {
      const w = Math.min(Math.max(1, x), p);
      w !== h && (r == null || r(w));
    };
    return /* @__PURE__ */ n(
      "nav",
      {
        ref: f,
        role: "navigation",
        "aria-label": "Paginacja",
        className: c("flex items-center justify-center gap-1", u),
        ...m,
        children: [
          /* @__PURE__ */ n(
            v,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              disabled: h === 1,
              onClick: () => b(h - 1),
              "aria-label": i,
              children: [
                /* @__PURE__ */ e(Ke, { className: "size-4" }),
                /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: i })
              ]
            }
          ),
          s ? g.map((x, w) => {
            if (x === "ellipsis-start" || x === "ellipsis-end")
              return /* @__PURE__ */ e(
                "span",
                {
                  "aria-hidden": !0,
                  className: "flex size-9 items-center justify-center text-muted-foreground",
                  children: /* @__PURE__ */ e(dt, { className: "size-4" })
                },
                `${x}-${w}`
              );
            const S = x === h;
            return /* @__PURE__ */ e(
              v,
              {
                type: "button",
                variant: S ? "default" : "ghost",
                size: "sm",
                "aria-current": S ? "page" : void 0,
                className: "min-w-9 px-3",
                onClick: () => b(x),
                children: x
              },
              x
            );
          }) : null,
          /* @__PURE__ */ n(
            v,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              disabled: h === p,
              onClick: () => b(h + 1),
              "aria-label": o,
              children: [
                /* @__PURE__ */ e("span", { className: "hidden sm:inline", children: o }),
                /* @__PURE__ */ e(de, { className: "size-4" })
              ]
            }
          )
        ]
      }
    );
  }
);
Md.displayName = "Pagination";
const Td = d.forwardRef(
  ({ prefix: t, suffix: a, containerClassName: r, className: l, ...s }, i) => /* @__PURE__ */ e(
    Et,
    {
      leading: t,
      trailing: a,
      className: c("h-11", r),
      children: /* @__PURE__ */ e(
        C,
        {
          ref: i,
          className: c("h-full border-0 shadow-none", l),
          ...s
        }
      )
    }
  )
);
Td.displayName = "PrefixInput";
function Dd(t) {
  return t.split(" ").filter(Boolean).slice(0, 2).map((a) => a.charAt(0).toUpperCase()).join("");
}
function Fu({
  user: t,
  items: a = [],
  onLogout: r,
  className: l,
  showName: s = !0,
  align: i = "end",
  logoutLabel: o = "Wyloguj się"
}) {
  return /* @__PURE__ */ n(ut, { children: [
    /* @__PURE__ */ e(mt, { asChild: !0, children: /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: c(
          "flex items-center gap-2 rounded-full p-1 pr-2 text-left transition-colors hover:bg-muted focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          l
        ),
        "aria-label": "Menu profilu",
        children: [
          /* @__PURE__ */ n(tt, { className: "size-9", children: [
            t.avatarUrl ? /* @__PURE__ */ e($t, { src: t.avatarUrl, alt: t.name }) : null,
            /* @__PURE__ */ e(at, { children: Dd(t.name) })
          ] }),
          s ? /* @__PURE__ */ n("span", { className: "hidden min-w-0 flex-col sm:flex", children: [
            /* @__PURE__ */ e("span", { className: "truncate text-sm font-semibold text-foreground", children: t.name }),
            t.role ? /* @__PURE__ */ e("span", { className: "truncate text-xs text-muted-foreground", children: t.role }) : null
          ] }) : null,
          /* @__PURE__ */ e(
            U,
            {
              "aria-hidden": !0,
              className: "hidden size-4 shrink-0 text-muted-foreground sm:inline"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ n(Ze, { align: i, className: "w-64", children: [
      /* @__PURE__ */ n(ft, { className: "flex flex-col gap-0.5 normal-case tracking-normal", children: [
        /* @__PURE__ */ e("span", { className: "text-sm font-bold text-foreground", children: t.name }),
        t.email ? /* @__PURE__ */ e("span", { className: "truncate text-xs font-normal text-muted-foreground", children: t.email }) : null
      ] }),
      a.length > 0 ? /* @__PURE__ */ n(G, { children: [
        /* @__PURE__ */ e(Me, {}),
        a.map((u, m) => /* @__PURE__ */ n(d.Fragment, { children: [
          m > 0 ? /* @__PURE__ */ e(
            "div",
            {
              role: "separator",
              "aria-orientation": "horizontal",
              className: "mx-3 border-t border-dashed border-border"
            }
          ) : null,
          /* @__PURE__ */ n(
            oe,
            {
              disabled: u.disabled,
              onSelect: (f) => {
                var p;
                f.preventDefault(), (p = u.onClick) == null || p.call(u);
              },
              className: "rounded-tl-none rounded-tr-none rounded-bl-none rounded-br-none focus-visible:ring-offset-0",
              children: [
                u.icon,
                /* @__PURE__ */ e("span", { children: u.label })
              ]
            }
          )
        ] }, u.key))
      ] }) : null,
      r ? /* @__PURE__ */ n(G, { children: [
        /* @__PURE__ */ e(Me, {}),
        /* @__PURE__ */ n(
          oe,
          {
            onSelect: (u) => {
              u.preventDefault(), r();
            },
            className: "rounded-tl-none rounded-tr-none rounded-bl-md rounded-br-md text-destructive focus:bg-destructive-soft focus:text-destructive focus-visible:ring-destructive focus-visible:ring-offset-0",
            children: [
              /* @__PURE__ */ e(br, { className: "size-4" }),
              /* @__PURE__ */ e("span", { children: o })
            ]
          }
        )
      ] }) : null
    ] })
  ] });
}
const Id = [
  ["Produkcja długopisów", "Firma testowa", "AKTYWNE", "72%", "10:00", "success"],
  ["Seria markerów", "Klient testowy S.A.", "PLAN", "45%", "15:00", "default"],
  ["Pakiet szkolny", "KolorMix", "WYMAGA KONTROLI", "20%", "19:30", "warning"],
  ["Partia ekspresowa", "InkFactory", "BLAD", "8%", "22:00", "destructive"]
];
function Lu() {
  return /* @__PURE__ */ e("div", { className: "grid gap-4 xl:grid-cols-4", children: Id.map(([t, a, r, l, s, i]) => /* @__PURE__ */ n(T, { className: "p-5", children: [
    /* @__PURE__ */ n("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e("h3", { className: "font-bold", children: t }),
        /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: a })
      ] }),
      /* @__PURE__ */ e(R, { variant: i, children: r })
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-5 h-2 overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ e(
      "div",
      {
        className: "h-full rounded-full bg-primary data-[variant=destructive]:bg-destructive data-[variant=success]:bg-success data-[variant=warning]:bg-warning",
        "data-variant": i,
        style: { width: l }
      }
    ) }),
    /* @__PURE__ */ n("div", { className: "mt-3 flex justify-between font-mono text-sm", children: [
      /* @__PURE__ */ e("span", { children: s }),
      /* @__PURE__ */ e("strong", { children: l })
    ] })
  ] }, t)) });
}
const Fd = d.forwardRef(
  ({ nav: t, summary: a, children: r, columns: l = "3", className: s, ...i }, o) => /* @__PURE__ */ n(
    "div",
    {
      ref: o,
      className: c(
        "grid gap-4",
        l === "3" ? "xl:grid-cols-[260px_minmax(0,1fr)_340px]" : "xl:grid-cols-[260px_minmax(0,1fr)]",
        s
      ),
      ...i,
      children: [
        t,
        /* @__PURE__ */ e("main", { className: "min-w-0 space-y-5", children: r }),
        l === "3" && a ? /* @__PURE__ */ e("aside", { className: "space-y-5 xl:sticky xl:top-20 xl:self-start", children: a }) : null
      ]
    }
  )
);
Fd.displayName = "RecordPageLayout";
const Ld = d.forwardRef(
  ({ title: t = "Sekcje", items: a, activeId: r, onSelect: l, className: s, ...i }, o) => /* @__PURE__ */ e(
    "aside",
    {
      ref: o,
      className: c("xl:sticky xl:top-20 xl:self-start", s),
      ...i,
      children: /* @__PURE__ */ n("div", { className: "rounded-lg border bg-card p-3 shadow-juz-sm", children: [
        /* @__PURE__ */ e("p", { className: "juz-label mb-2", children: t }),
        /* @__PURE__ */ e("nav", { "aria-label": t, className: "space-y-1", children: a.map((u) => {
          const m = u.icon, f = r === u.id;
          return /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: () => l == null ? void 0 : l(u.id),
              className: c(
                "relative flex w-full items-start justify-between gap-3 rounded-md px-3 py-3 text-left text-sm hover:bg-primary-soft",
                f && "bg-primary-soft text-primary before:absolute before:-left-3 before:top-3 before:h-8 before:w-1 before:rounded-r-full before:bg-primary"
              ),
              children: [
                /* @__PURE__ */ n("span", { className: "inline-flex items-center gap-2", children: [
                  /* @__PURE__ */ e(m, { className: "size-4" }),
                  u.label
                ] }),
                u.state ? /* @__PURE__ */ e(
                  "span",
                  {
                    className: c(
                      "text-xs",
                      f ? "text-primary" : "text-muted-foreground"
                    ),
                    children: u.state
                  }
                ) : null
              ]
            },
            u.id
          );
        }) })
      ] })
    }
  )
);
Ld.displayName = "SectionNav";
function Ou({
  items: t,
  value: a,
  defaultValue: r,
  onValueChange: l,
  stretch: s = !1,
  className: i
}) {
  return /* @__PURE__ */ n(
    Ma,
    {
      className: i,
      defaultValue: a === void 0 ? r ?? t[0] : void 0,
      onValueChange: l,
      value: a,
      children: [
        /* @__PURE__ */ e(
          Ta,
          {
            className: c("h-auto rounded-md bg-muted p-1", s ? "grid w-full" : "inline-flex"),
            style: s ? { gridTemplateColumns: `repeat(${t.length}, minmax(0, 1fr))` } : void 0,
            children: t.map((o) => /* @__PURE__ */ e(
              Da,
              {
                className: "rounded-sm px-4 py-2 font-bold text-muted-foreground data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-juz-sm",
                value: o,
                children: o
              },
              o
            ))
          }
        ),
        t.map((o) => /* @__PURE__ */ e(
          Ia,
          {
            value: o,
            forceMount: !0,
            "aria-hidden": "true",
            className: "hidden mt-0"
          },
          o
        ))
      ]
    }
  );
}
const Qa = [
  {
    label: "Maj",
    days: [
      ["Pon 23", ["Linia A 48", "Pakowanie 42", "Kontrola 30"]],
      ["Wt 24", ["Linia B 10", "Magazyn 8"]],
      ["Śr 25", ["Linia C 12", "Kontrola 7", "Wysyłka 15"]],
      ["Czw 26", []],
      ["Pt 27", ["Linia A 30", "Pakowanie 12", "Wysyłka 10"]],
      ["Sob 28", ["Utrzymanie 6"]],
      ["Nd 29", ["Kontrola 8", "Magazyn 6"]]
    ]
  },
  {
    label: "Czerwiec",
    days: [
      ["Pon 1", ["Linia A 22", "Pakowanie 18"]],
      ["Wt 2", ["Linia C 12", "Kontrola 4"]],
      ["Śr 3", ["Wysyłka 16"]],
      ["Czw 4", ["Linia B 30", "Magazyn 11"]],
      ["Pt 5", ["Pakowanie 20"]],
      ["Sob 6", []],
      ["Nd 7", []]
    ]
  },
  {
    label: "Lipiec",
    days: [
      ["Pon 6", ["Linia D 14", "Kontrola 10"]],
      ["Wt 7", ["Linia A 24"]],
      ["Śr 8", ["Pakowanie 9", "Wysyłka 6"]],
      ["Czw 9", ["Magazyn 12"]],
      ["Pt 10", ["Linia C 18"]],
      ["Sob 11", []],
      ["Nd 12", []]
    ]
  }
];
function Au() {
  const [t, a] = d.useState(0), [r, l] = d.useState("Wszystkie"), s = ["Wszystkie", "Linia A", "Pakowanie", "Kontrola", "Magazyn", "Wysyłka"], i = Qa[t], o = i.days.map(([m, f]) => {
    const p = f, h = r === "Wszystkie" ? p : p.filter((b) => b.includes(r)), g = h.reduce((b, x) => b + Number(x.split(" ").at(-1) ?? 0), 0);
    return { day: m, items: h, total: g };
  }), u = o.reduce((m, f) => m + f.total, 0);
  return /* @__PURE__ */ n("section", { className: "space-y-4", children: [
    /* @__PURE__ */ n("div", { className: "flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between", children: [
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e("h2", { className: "text-3xl font-extrabold", children: "Kalendarz produkcji" }),
        /* @__PURE__ */ n("p", { className: "text-muted-foreground", children: [
          i.label,
          " 2026 · ",
          u,
          " operacji po filtrze."
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "flex flex-wrap gap-2", children: [
        Qa.map((m, f) => /* @__PURE__ */ e(v, { onClick: () => a(f), variant: t === f ? "default" : "outline", children: m.label }, m.label)),
        s.map((m) => /* @__PURE__ */ e(v, { onClick: () => l(m), variant: r === m ? "default" : "outline", children: m }, m))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid gap-4 lg:grid-cols-7", children: o.map(({ day: m, total: f, items: p }) => /* @__PURE__ */ n(T, { className: "min-h-52 p-4", children: [
      /* @__PURE__ */ n("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ e("strong", { children: m }),
        /* @__PURE__ */ n(R, { variant: f === 0 ? "neutral" : "default", children: [
          f,
          " operacji"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "mt-4 space-y-2", children: p.length ? p.map((h) => /* @__PURE__ */ e("div", { className: "rounded-md bg-muted px-3 py-2 text-sm", children: h }, h)) : /* @__PURE__ */ e("p", { className: "text-sm text-muted-foreground", children: "Brak operacji" }) })
    ] }, m)) })
  ] });
}
const Od = ["Media", "Opis", "Akceptacja", "Plan", "Publikacja", "Wyniki"];
function Wu({ steps: t = Od, current: a = 3 }) {
  return /* @__PURE__ */ e("ol", { className: "grid gap-3", style: { gridTemplateColumns: `repeat(${t.length}, minmax(0, 1fr))` }, children: t.map((r, l) => {
    const s = l + 1 < a, i = l + 1 === a;
    return /* @__PURE__ */ n("li", { className: "relative flex flex-col items-center text-center", children: [
      l < t.length - 1 ? /* @__PURE__ */ e("span", { className: "absolute left-1/2 top-5 hidden h-0.5 w-full bg-border md:block" }) : null,
      /* @__PURE__ */ e(
        "span",
        {
          className: c(
            "relative z-10 grid size-10 place-items-center rounded-full border bg-card text-sm font-bold",
            s && "border-primary bg-primary text-primary-foreground",
            i && "border-primary text-primary ring-4 ring-primary-soft"
          ),
          children: s ? /* @__PURE__ */ e(Y, { className: "size-4" }) : l + 1
        }
      ),
      /* @__PURE__ */ e("strong", { className: c("mt-2 text-sm", i && "text-primary"), children: r })
    ] }, r);
  }) });
}
const Ad = d.forwardRef(
  ({ title: t = "Podsumowanie", className: a, children: r, ...l }, s) => /* @__PURE__ */ n(T, { ref: s, className: c("p-4", a), ...l, children: [
    /* @__PURE__ */ e("p", { className: "juz-label", children: t }),
    /* @__PURE__ */ e("dl", { className: "mt-3 space-y-2 text-sm", children: r })
  ] })
);
Ad.displayName = "SummaryPanel";
const Wd = d.forwardRef(
  ({ label: t, value: a, className: r, children: l, ...s }, i) => /* @__PURE__ */ n(
    "div",
    {
      ref: i,
      className: c("flex items-center justify-between gap-3", r),
      ...s,
      children: [
        /* @__PURE__ */ e("dt", { className: "text-muted-foreground", children: t }),
        /* @__PURE__ */ e("dd", { className: "text-right font-medium", children: a ?? l ?? /* @__PURE__ */ e("span", { className: "text-muted-foreground", children: "—" }) })
      ]
    }
  )
);
Wd.displayName = "SummaryRow";
const $d = [
  { value: "bold", command: "bold", label: "Pogrubienie", icon: Un },
  { value: "italic", command: "italic", label: "Kursywa", icon: qn },
  {
    value: "underline",
    command: "underline",
    label: "Podkreślenie",
    icon: Yn
  },
  {
    value: "ul",
    command: "insertUnorderedList",
    label: "Lista punktowana",
    icon: Xn
  },
  {
    value: "ol",
    command: "insertOrderedList",
    label: "Lista numerowana",
    icon: Vn
  }
], _d = d.forwardRef(
  ({
    value: t = "",
    onValueChange: a,
    placeholder: r = "Zacznij pisać...",
    disabled: l,
    className: s,
    toolbarClassName: i,
    minHeight: o = 160,
    ariaLabel: u = "Edytor tekstu"
  }, m) => {
    const f = d.useRef(null), p = d.useRef(!1);
    d.useImperativeHandle(m, () => f.current), d.useEffect(() => {
      const b = f.current;
      b && b.innerHTML !== t && (b.innerHTML = t ?? "");
    }, [t]);
    const h = (b) => {
      var w, S;
      if (l) return;
      (w = f.current) == null || w.focus(), document.execCommand(b, !1);
      const x = ((S = f.current) == null ? void 0 : S.innerHTML) ?? "";
      a == null || a(x);
    }, g = () => {
      var x;
      if (p.current) return;
      const b = ((x = f.current) == null ? void 0 : x.innerHTML) ?? "";
      a == null || a(b);
    };
    return /* @__PURE__ */ n(
      "div",
      {
        className: c(
          "overflow-hidden rounded-md border border-input bg-card shadow-juz-sm focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          l && "opacity-50",
          s
        ),
        children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: c(
                "flex flex-wrap items-center gap-1 border-b bg-muted/40 px-2 py-1.5",
                i
              ),
              children: /* @__PURE__ */ e(Yr, { type: "multiple", size: "sm", "aria-label": "Formatowanie", children: $d.map((b) => {
                const x = b.icon;
                return /* @__PURE__ */ e(
                  Xr,
                  {
                    value: b.value,
                    "aria-label": b.label,
                    title: b.label,
                    disabled: l,
                    onMouseDown: (w) => {
                      w.preventDefault(), h(b.command);
                    },
                    children: /* @__PURE__ */ e(x, { className: "size-4" })
                  },
                  b.value
                );
              }) })
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              ref: f,
              role: "textbox",
              "aria-label": u,
              "aria-multiline": !0,
              "aria-disabled": l || void 0,
              contentEditable: !l,
              suppressContentEditableWarning: !0,
              "data-placeholder": r,
              onInput: g,
              onCompositionStart: () => {
                p.current = !0;
              },
              onCompositionEnd: () => {
                p.current = !1, g();
              },
              style: { minHeight: o },
              className: c(
                "w-full px-3 py-3 text-sm leading-relaxed text-foreground outline-hidden",
                "empty:before:pointer-events-none empty:before:text-muted-foreground empty:before:content-[attr(data-placeholder)]",
                "[&_ul]:ml-6 [&_ul]:list-disc [&_ol]:ml-6 [&_ol]:list-decimal"
              )
            }
          )
        ]
      }
    );
  }
);
_d.displayName = "TextEditor";
const Bd = /^([01]?\d|2[0-3]):[0-5]\d$/, Kd = d.forwardRef(
  ({
    value: t = "",
    onValueChange: a,
    placeholder: r = "HH:MM",
    step: l = 15,
    invalid: s,
    showIcon: i = !0,
    className: o,
    onBlur: u,
    ...m
  }, f) => {
    const p = s ?? (t !== "" && !Bd.test(t)), h = (g) => {
      a == null || a(g.target.value);
    };
    return /* @__PURE__ */ e(
      Et,
      {
        leading: i ? /* @__PURE__ */ e(It, { className: "size-4", "aria-hidden": !0 }) : void 0,
        className: c(
          "h-11",
          p && "border-destructive focus-within:ring-destructive"
        ),
        children: /* @__PURE__ */ e(
          C,
          {
            ref: f,
            type: "time",
            value: t,
            placeholder: r,
            step: l * 60,
            "aria-invalid": p || void 0,
            onChange: h,
            onBlur: u,
            className: c("h-full border-0 shadow-none", o),
            ...m
          }
        )
      }
    );
  }
);
Kd.displayName = "TimeInput";
function er(t) {
  return t.toString().padStart(2, "0");
}
function Ed(t) {
  if (!t) return { hour: "", minute: "" };
  const [a, r] = t.split(":");
  return { hour: a ?? "", minute: r ?? "" };
}
const Zd = d.forwardRef(
  ({
    value: t,
    onValueChange: a,
    placeholder: r = "Wybierz godzinę",
    disabled: l,
    minuteStep: s = 15,
    className: i
  }, o) => {
    const [u, m] = d.useState(!1), { hour: f, minute: p } = Ed(t), h = d.useMemo(
      () => Array.from({ length: 24 }, (x, w) => er(w)),
      []
    ), g = d.useMemo(() => {
      const x = [];
      for (let w = 0; w < 60; w += s) x.push(er(w));
      return x;
    }, [s]), b = (x) => {
      const w = x.hour ?? f ?? "00", S = x.minute ?? p ?? "00";
      a == null || a(`${w || "00"}:${S || "00"}`);
    };
    return /* @__PURE__ */ n(ke, { open: u, onOpenChange: m, children: [
      /* @__PURE__ */ e(ze, { asChild: !0, children: /* @__PURE__ */ n(
        v,
        {
          ref: o,
          type: "button",
          variant: "outline",
          disabled: l,
          className: c(
            "h-11 w-full justify-start gap-2 px-3 text-sm font-medium",
            !t && "text-muted-foreground",
            i
          ),
          children: [
            /* @__PURE__ */ e(It, { className: "size-4 shrink-0 text-muted-foreground" }),
            t || r
          ]
        }
      ) }),
      /* @__PURE__ */ n(pe, { className: "w-auto p-4", align: "start", children: [
        /* @__PURE__ */ n("div", { className: "flex items-end gap-2", children: [
          /* @__PURE__ */ n("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ e(le, { className: "text-xs", children: "Godziny" }),
            /* @__PURE__ */ n(
              J,
              {
                value: f,
                onChange: (x) => b({ hour: x.target.value }),
                className: "w-24",
                "aria-label": "Godziny",
                children: [
                  /* @__PURE__ */ e("option", { value: "", disabled: !0, children: "--" }),
                  h.map((x) => /* @__PURE__ */ e("option", { value: x, children: x }, x))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("span", { className: "pb-2 text-lg font-bold text-muted-foreground", children: ":" }),
          /* @__PURE__ */ n("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ e(le, { className: "text-xs", children: "Minuty" }),
            /* @__PURE__ */ n(
              J,
              {
                value: p,
                onChange: (x) => b({ minute: x.target.value }),
                className: "w-24",
                "aria-label": "Minuty",
                children: [
                  /* @__PURE__ */ e("option", { value: "", disabled: !0, children: "--" }),
                  g.map((x) => /* @__PURE__ */ e("option", { value: x, children: x }, x))
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ e(
          v,
          {
            type: "button",
            size: "sm",
            onClick: () => m(!1),
            disabled: !f || !p,
            children: "Zatwierdź"
          }
        ) })
      ] })
    ] });
  }
);
Zd.displayName = "TimePicker";
function Hd(t, a, r) {
  if (typeof t == "number")
    return Math.min(Math.max(t, 0), r - 1);
  for (let l = 0; l < r; l++)
    if (kr(t, zr(a, l))) return l;
  return -1;
}
const Gd = d.forwardRef(
  ({
    workstations: t,
    weekStart: a,
    events: r,
    daysCount: l = 7,
    emptyLabel: s = "Brak",
    className: i,
    ...o
  }, u) => {
    const m = hl(a, { weekStartsOn: 1 }), f = Array.from(
      { length: l },
      (h, g) => zr(m, g)
    ), p = {};
    for (const h of t)
      p[h.id] = {};
    for (const h of r) {
      const g = Hd(h.day, m, l);
      g < 0 || !p[h.workstationId] || (p[h.workstationId][g] || (p[h.workstationId][g] = []), p[h.workstationId][g].push(h));
    }
    return /* @__PURE__ */ e(
      "div",
      {
        ref: u,
        className: c("juz-card overflow-hidden", i),
        ...o,
        children: /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ n("table", { className: "w-full border-collapse text-sm", children: [
          /* @__PURE__ */ e("thead", { className: "bg-muted/40", children: /* @__PURE__ */ n("tr", { children: [
            /* @__PURE__ */ e(
              "th",
              {
                scope: "col",
                className: "sticky left-0 z-10 min-w-[180px] bg-muted/40 px-4 py-3 text-left text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground",
                children: "Stanowisko"
              }
            ),
            f.map((h, g) => /* @__PURE__ */ e(
              "th",
              {
                scope: "col",
                className: "min-w-[140px] border-l px-3 py-3 text-left text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground",
                children: /* @__PURE__ */ n("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ e("span", { children: Qe(h, "EEE", { locale: _e }) }),
                  /* @__PURE__ */ e("span", { className: "text-sm font-semibold text-foreground", children: Qe(h, "d MMM", { locale: _e }) })
                ] })
              },
              g
            ))
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: t.map((h) => /* @__PURE__ */ n("tr", { className: "border-t", children: [
            /* @__PURE__ */ e(
              "th",
              {
                scope: "row",
                className: "sticky left-0 z-10 min-w-[180px] bg-card px-4 py-3 text-left align-top",
                children: /* @__PURE__ */ n("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ e("span", { className: "text-sm font-bold text-foreground", children: h.name }),
                  h.description ? /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground", children: h.description }) : null
                ] })
              }
            ),
            f.map((g, b) => {
              var w;
              const x = ((w = p[h.id]) == null ? void 0 : w[b]) ?? [];
              return /* @__PURE__ */ e(
                "td",
                {
                  className: "min-w-[140px] border-l p-2 align-top",
                  children: x.length === 0 ? /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground/60", children: s }) : /* @__PURE__ */ e("div", { className: "flex flex-col gap-1.5", children: x.map((S, z) => {
                    const y = /* @__PURE__ */ n(G, { children: [
                      /* @__PURE__ */ e(
                        R,
                        {
                          variant: S.color ?? "default",
                          className: "w-full justify-start",
                          children: S.label
                        }
                      ),
                      S.meta ? /* @__PURE__ */ e("span", { className: "block text-xs text-muted-foreground", children: S.meta }) : null
                    ] });
                    return S.onClick ? /* @__PURE__ */ e(
                      "button",
                      {
                        type: "button",
                        onClick: S.onClick,
                        className: "block w-full rounded-md text-left transition-colors hover:bg-muted/40 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        children: y
                      },
                      S.id ?? z
                    ) : /* @__PURE__ */ e("div", { children: y }, S.id ?? z);
                  }) })
                },
                b
              );
            })
          ] }, h.id)) })
        ] }) })
      }
    );
  }
);
Gd.displayName = "WeekWorkstations";
const Ud = d.forwardRef(
  ({ className: t, sidebar: a, navbar: r, topBar: l, mainClassName: s, children: i, ...o }, u) => /* @__PURE__ */ n(
    "div",
    {
      className: c("flex min-h-screen w-full bg-muted/40", t),
      ref: u,
      ...o,
      children: [
        /* @__PURE__ */ e("aside", { className: "sticky top-0 z-30 hidden h-screen shrink-0 lg:block", children: a }),
        /* @__PURE__ */ n("div", { className: "flex min-w-0 flex-1 flex-col", children: [
          /* @__PURE__ */ n("div", { className: "sticky top-0 z-20 flex flex-col", children: [
            r,
            l
          ] }),
          /* @__PURE__ */ e(
            "main",
            {
              className: c(
                "flex-1 overflow-y-auto p-4 md:p-6",
                s
              ),
              children: i
            }
          )
        ] })
      ]
    }
  )
);
Ud.displayName = "AppLayout";
const nn = d.createContext(
  void 0
);
function tr(t, a) {
  if (typeof window > "u") return a;
  try {
    const r = window.localStorage.getItem(t);
    return r ? JSON.parse(r) : a;
  } catch {
    return a;
  }
}
const $u = ({
  children: t,
  storagePrefix: a = "juz-sidebar"
}) => {
  const r = `${a}-pinned`, l = `${a}-groups`, [s, i] = d.useState(() => tr(r, !0)), [o, u] = d.useState(!1), [m, f] = d.useState(!1), [p, h] = d.useState(() => tr(l, {})), g = s || o;
  d.useEffect(() => {
    typeof window > "u" || window.localStorage.setItem(r, JSON.stringify(s));
  }, [r, s]), d.useEffect(() => {
    typeof window > "u" || window.localStorage.setItem(l, JSON.stringify(p));
  }, [l, p]);
  const b = d.useCallback(() => i((y) => !y), []), x = d.useCallback(
    (y) => u(y),
    []
  ), w = d.useCallback(
    (y) => f(y),
    []
  ), S = d.useCallback(
    (y) => h((j) => ({ ...j, [y]: !j[y] })),
    []
  ), z = d.useMemo(
    () => ({
      isPinned: s,
      isHovered: o,
      isMobileOpen: m,
      isExpanded: g,
      collapsedGroups: p,
      togglePin: b,
      setHovered: x,
      setMobileOpen: w,
      toggleGroup: S
    }),
    [
      s,
      o,
      m,
      g,
      p,
      b,
      x,
      w,
      S
    ]
  );
  return /* @__PURE__ */ e(nn.Provider, { value: z, children: t });
}, ln = () => {
  const t = d.useContext(nn);
  if (!t)
    throw new Error("useSidebar must be used within a SidebarProvider");
  return t;
}, qd = d.forwardRef(
  ({
    logo: t,
    logoCollapsed: a,
    expandedWidthClassName: r = "w-56",
    collapsedWidthClassName: l = "w-16",
    className: s,
    children: i,
    ...o
  }, u) => {
    const {
      isExpanded: m,
      isPinned: f,
      isMobileOpen: p,
      togglePin: h,
      setHovered: g,
      setMobileOpen: b
    } = ln();
    return /* @__PURE__ */ n(G, { children: [
      p ? /* @__PURE__ */ e(
        "div",
        {
          "aria-hidden": !0,
          className: "fixed inset-0 z-29 bg-foreground/50 lg:hidden",
          onClick: () => b(!1)
        }
      ) : null,
      /* @__PURE__ */ n(
        "aside",
        {
          ref: u,
          onMouseEnter: () => g(!0),
          onMouseLeave: () => g(!1),
          className: c(
            "fixed left-0 top-0 z-30 flex h-screen flex-col border-r bg-card shadow-juz-sm",
            "transition-[width,transform] duration-200 ease-in-out",
            m ? r : l,
            p ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
            s
          ),
          ...o,
          children: [
            /* @__PURE__ */ e("div", { className: "flex items-center gap-3 border-b px-3 py-5", children: /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 items-center", children: m ? t : a }) }),
            /* @__PURE__ */ e(yt, { className: "flex-1 px-2 py-3", children: /* @__PURE__ */ e("nav", { className: "space-y-0.5", children: i }) }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                onClick: h,
                title: f ? "Zwiń sidebar" : "Rozwiń sidebar",
                className: c(
                  "flex items-center justify-center border-t py-3 text-muted-foreground transition-colors hover:text-foreground",
                  "outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                ),
                children: m ? /* @__PURE__ */ e(xr, { className: "size-5" }) : /* @__PURE__ */ e(yr, { className: "size-5" })
              }
            )
          ]
        }
      )
    ] });
  }
);
qd.displayName = "AppSidebar";
function Yd() {
  return {
    id: "__select",
    header: ({ table: t }) => /* @__PURE__ */ e(
      Be,
      {
        "aria-label": "Zaznacz wszystkie wiersze",
        checked: t.getIsAllPageRowsSelected() ? !0 : t.getIsSomePageRowsSelected() ? "indeterminate" : !1,
        onCheckedChange: (a) => t.toggleAllPageRowsSelected(!!a)
      }
    ),
    cell: ({ row: t }) => /* @__PURE__ */ e(
      Be,
      {
        "aria-label": "Zaznacz wiersz",
        checked: t.getIsSelected(),
        onCheckedChange: (a) => t.toggleSelected(!!a),
        onClick: (a) => a.stopPropagation()
      }
    ),
    enableSorting: !1,
    enableHiding: !1,
    size: 40
  };
}
function Xd(t) {
  return {
    id: "__actions",
    header: () => /* @__PURE__ */ e("span", { className: "sr-only", children: "Akcje" }),
    cell: ({ row: a }) => /* @__PURE__ */ e("div", { className: "flex justify-end", children: /* @__PURE__ */ n(ut, { children: [
      /* @__PURE__ */ e(mt, { asChild: !0, children: /* @__PURE__ */ e(
        me,
        {
          label: "Akcje wiersza",
          onClick: (r) => r.stopPropagation(),
          size: "sm",
          variant: "ghost",
          children: /* @__PURE__ */ e(dt, {})
        }
      ) }),
      /* @__PURE__ */ e(Ze, { align: "end", children: t.map((r) => /* @__PURE__ */ n(
        oe,
        {
          className: c(
            r.destructive && "text-destructive focus:bg-destructive-soft focus:text-destructive"
          ),
          onSelect: () => r.onSelect(a.original),
          children: [
            r.icon,
            r.label
          ]
        },
        r.key
      )) })
    ] }) }),
    enableSorting: !1,
    enableHiding: !1,
    size: 56
  };
}
function Vd({
  table: t,
  filters: a
}) {
  return a.length ? /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-2 border-b border-border p-3", children: a.map((r) => {
    const l = t.getColumn(r.columnId);
    if (!l) return null;
    const s = l.getFilterValue() ?? "";
    return r.type === "select" && r.options ? /* @__PURE__ */ n(
      Ca,
      {
        onValueChange: (i) => l.setFilterValue(i === "__all" ? void 0 : i),
        value: s || "__all",
        children: [
          /* @__PURE__ */ e(Zt, { className: "h-10 w-auto min-w-[180px]", children: /* @__PURE__ */ e(Pa, { placeholder: r.placeholder ?? "Filtruj" }) }),
          /* @__PURE__ */ n(Ht, { children: [
            /* @__PURE__ */ e(rt, { value: "__all", children: "Wszystkie" }),
            r.options.map((i) => /* @__PURE__ */ e(rt, { value: i.value, children: i.label }, i.value))
          ] })
        ]
      },
      r.columnId
    ) : /* @__PURE__ */ e(
      C,
      {
        className: "h-10 w-auto min-w-[200px]",
        onChange: (i) => l.setFilterValue(i.target.value || void 0),
        placeholder: r.placeholder ?? "Filtruj...",
        value: s
      },
      r.columnId
    );
  }) }) : null;
}
function Jd({
  table: t,
  pageSizeOptions: a
}) {
  const r = t.getState().pagination.pageIndex, l = t.getPageCount(), s = t.getFilteredRowModel().rows.length, i = t.getState().pagination.pageSize, o = s ? r * i + 1 : 0, u = Math.min((r + 1) * i, s);
  return /* @__PURE__ */ n("div", { className: "flex flex-col gap-3 border-t border-border px-4 py-3 md:flex-row md:items-center md:justify-between", children: [
    /* @__PURE__ */ n("p", { className: "text-sm font-semibold text-muted-foreground", children: [
      "Pokazano",
      " ",
      /* @__PURE__ */ n("span", { className: "text-foreground", children: [
        o,
        "-",
        u
      ] }),
      " ",
      "z ",
      /* @__PURE__ */ e("span", { className: "text-foreground", children: s }),
      " wyników"
    ] }),
    /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ n("label", { className: "flex items-center gap-2 text-sm font-semibold text-muted-foreground", children: [
        "Wyników na stronie",
        /* @__PURE__ */ e(
          "select",
          {
            className: "h-10 rounded-md border border-border bg-card px-3 font-bold text-foreground shadow-juz-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring",
            onChange: (m) => t.setPageSize(Number(m.target.value)),
            value: i,
            children: a.map((m) => /* @__PURE__ */ e("option", { value: m, children: m }, m))
          }
        )
      ] }),
      /* @__PURE__ */ n("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ e(
          v,
          {
            "aria-label": "Pierwsza strona",
            disabled: !t.getCanPreviousPage(),
            onClick: () => t.setPageIndex(0),
            size: "icon",
            variant: "outline",
            children: /* @__PURE__ */ e(xr, {})
          }
        ),
        /* @__PURE__ */ e(
          v,
          {
            "aria-label": "Poprzednia strona",
            disabled: !t.getCanPreviousPage(),
            onClick: () => t.previousPage(),
            size: "icon",
            variant: "outline",
            children: /* @__PURE__ */ e(Ke, {})
          }
        ),
        /* @__PURE__ */ n("span", { className: "px-2 text-sm font-semibold text-foreground", children: [
          "Strona ",
          r + 1,
          " z ",
          Math.max(1, l)
        ] }),
        /* @__PURE__ */ e(
          v,
          {
            "aria-label": "Następna strona",
            disabled: !t.getCanNextPage(),
            onClick: () => t.nextPage(),
            size: "icon",
            variant: "outline",
            children: /* @__PURE__ */ e(de, {})
          }
        ),
        /* @__PURE__ */ e(
          v,
          {
            "aria-label": "Ostatnia strona",
            disabled: !t.getCanNextPage(),
            onClick: () => t.setPageIndex(l - 1),
            size: "icon",
            variant: "outline",
            children: /* @__PURE__ */ e(yr, {})
          }
        )
      ] })
    ] })
  ] });
}
function Qd({
  columns: t,
  data: a,
  pageSize: r = 10,
  pageSizeOptions: l = [10, 20, 40, 60],
  enableSelection: s = !1,
  enableSorting: i = !0,
  filters: o,
  rowActions: u,
  onRowClick: m,
  emptyTitle: f = "Brak wyników",
  emptyDescription: p = "Spróbuj zmienić filtry lub kryteria wyszukiwania.",
  className: h,
  getRowId: g
}, b) {
  const [x, w] = d.useState([]), [S, z] = d.useState({}), [y, j] = d.useState(
    []
  ), W = d.useMemo(() => {
    const M = [];
    return s && M.push(Yd()), M.push(...t), u != null && u.length && M.push(Xd(u)), M;
  }, [t, s, u]), K = vl({
    data: a,
    columns: W,
    state: { sorting: x, rowSelection: S, columnFilters: y },
    getRowId: g,
    enableSorting: i,
    enableRowSelection: s,
    onSortingChange: w,
    onRowSelectionChange: z,
    onColumnFiltersChange: j,
    getCoreRowModel: Sl(),
    getSortedRowModel: zl(),
    getFilteredRowModel: kl(),
    getPaginationRowModel: wl(),
    initialState: { pagination: { pageSize: r } }
  }), H = K.getVisibleLeafColumns().length;
  return /* @__PURE__ */ n(
    "div",
    {
      className: c(
        "rounded-xl border border-border bg-card shadow-juz-sm",
        h
      ),
      ref: b,
      children: [
        o != null && o.length ? /* @__PURE__ */ e(Vd, { filters: o, table: K }) : null,
        /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ n(Ut, { className: "border-0 shadow-none", children: [
          /* @__PURE__ */ e(qt, { children: K.getHeaderGroups().map((M) => /* @__PURE__ */ e(xe, { children: M.headers.map((D) => {
            const X = D.column.getCanSort(), he = D.column.getIsSorted();
            return /* @__PURE__ */ e(
              V,
              {
                style: { width: D.getSize() },
                children: D.isPlaceholder ? null : X ? /* @__PURE__ */ n(
                  "button",
                  {
                    className: "inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground",
                    onClick: D.column.getToggleSortingHandler(),
                    type: "button",
                    children: [
                      ra(
                        D.column.columnDef.header,
                        D.getContext()
                      ),
                      he === "asc" ? /* @__PURE__ */ e(cr, { className: "size-3.5" }) : he === "desc" ? /* @__PURE__ */ e(ur, { className: "size-3.5" }) : /* @__PURE__ */ e(Jn, { className: "size-3.5 opacity-50" })
                    ]
                  }
                ) : ra(
                  D.column.columnDef.header,
                  D.getContext()
                )
              },
              D.id
            );
          }) }, M.id)) }),
          /* @__PURE__ */ e(Yt, { children: K.getRowModel().rows.length === 0 ? /* @__PURE__ */ e(xe, { children: /* @__PURE__ */ e(
            q,
            {
              className: "p-0",
              colSpan: H || 1,
              children: /* @__PURE__ */ e("div", { className: "p-6", children: /* @__PURE__ */ e(
                Or,
                {
                  description: p,
                  icon: /* @__PURE__ */ e(Qn, {}),
                  title: f
                }
              ) })
            }
          ) }) : K.getRowModel().rows.map((M) => /* @__PURE__ */ e(
            xe,
            {
              className: c(
                m && "cursor-pointer",
                M.getIsSelected() && "bg-primary-soft/40"
              ),
              "data-state": M.getIsSelected() ? "selected" : void 0,
              onClick: m ? () => m(M.original) : void 0,
              children: M.getVisibleCells().map((D) => /* @__PURE__ */ e(q, { children: ra(
                D.column.columnDef.cell,
                D.getContext()
              ) }, D.id))
            },
            M.id
          )) })
        ] }) }),
        /* @__PURE__ */ e(
          Jd,
          {
            pageSizeOptions: l,
            table: K
          }
        )
      ]
    }
  );
}
const _u = d.forwardRef(Qd);
function sn(t, a = 2) {
  return new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: a,
    maximumFractionDigits: a
  }).format(t);
}
function ar(t, a) {
  return `${sn(t)} ${a}`;
}
const ec = d.forwardRef(
  ({
    className: t,
    items: a,
    currency: r = "PLN",
    showOrdinal: l = !0,
    emptyLabel: s = "Brak pozycji w dokumencie.",
    ...i
  }, o) => a.length ? /* @__PURE__ */ e("div", { className: c(t), ref: o, ...i, children: /* @__PURE__ */ n(Ut, { children: [
    /* @__PURE__ */ e(qt, { children: /* @__PURE__ */ n(xe, { children: [
      l ? /* @__PURE__ */ e(V, { className: "w-12 text-center", children: "Lp." }) : null,
      /* @__PURE__ */ e(V, { children: "Nazwa" }),
      /* @__PURE__ */ e(V, { className: "text-right", children: "Ilość" }),
      /* @__PURE__ */ e(V, { children: "J.m." }),
      /* @__PURE__ */ e(V, { className: "text-right", children: "Cena netto" }),
      /* @__PURE__ */ e(V, { className: "text-right", children: "VAT" }),
      /* @__PURE__ */ e(V, { className: "text-right", children: "Wartość brutto" })
    ] }) }),
    /* @__PURE__ */ e(Yt, { children: a.map((u, m) => /* @__PURE__ */ n(xe, { children: [
      l ? /* @__PURE__ */ e(q, { className: "text-center font-mono text-sm text-muted-foreground", children: m + 1 }) : null,
      /* @__PURE__ */ e(q, { children: /* @__PURE__ */ n("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ e("span", { className: "font-semibold text-foreground", children: u.name }),
        u.code ? /* @__PURE__ */ e("span", { className: "font-mono text-xs text-muted-foreground", children: u.code }) : null,
        u.description ? /* @__PURE__ */ e("span", { className: "mt-1 text-xs text-muted-foreground", children: u.description }) : null
      ] }) }),
      /* @__PURE__ */ e(q, { className: "text-right font-mono", children: sn(u.qty, u.qty % 1 === 0 ? 0 : 3) }),
      /* @__PURE__ */ e(q, { className: "font-mono text-sm text-muted-foreground", children: u.unit }),
      /* @__PURE__ */ e(q, { className: "text-right font-mono", children: ar(u.price, r) }),
      /* @__PURE__ */ n(q, { className: "text-right font-mono text-sm text-muted-foreground", children: [
        u.vatRate,
        "%"
      ] }),
      /* @__PURE__ */ e(q, { className: "text-right font-mono font-bold", children: ar(u.total, r) })
    ] }, `${u.code ?? u.name}-${m}`)) })
  ] }) }) : /* @__PURE__ */ e(
    "div",
    {
      className: c(
        "rounded-lg border border-dashed border-border bg-muted/30 p-6 text-center text-sm text-muted-foreground",
        t
      ),
      ref: o,
      ...i,
      children: s
    }
  )
);
ec.displayName = "DocumentLineItems";
function rr({
  party: t,
  label: a,
  tone: r
}) {
  var l;
  return /* @__PURE__ */ n("article", { className: "rounded-lg border border-border bg-background p-4", children: [
    /* @__PURE__ */ n("header", { className: "flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground", children: a }),
      /* @__PURE__ */ n(R, { variant: r === "primary" ? "default" : "neutral", children: [
        /* @__PURE__ */ e(ye, { className: "mr-1 size-3" }),
        "Strona"
      ] })
    ] }),
    /* @__PURE__ */ e("h3", { className: "mt-2 text-lg font-extrabold leading-tight text-foreground", children: t.name }),
    t.taxId ? /* @__PURE__ */ n("p", { className: "mt-1 font-mono text-sm font-semibold text-muted-foreground", children: [
      "NIP: ",
      t.taxId
    ] }) : null,
    (l = t.addressLines) != null && l.length ? /* @__PURE__ */ n("div", { className: "mt-3 flex items-start gap-2 text-sm text-foreground", children: [
      /* @__PURE__ */ e(ot, { className: "mt-0.5 size-4 shrink-0 text-muted-foreground" }),
      /* @__PURE__ */ e("div", { children: t.addressLines.map((s, i) => /* @__PURE__ */ e("p", { children: s }, i)) })
    ] }) : null,
    t.email || t.phone ? /* @__PURE__ */ n("div", { className: "mt-3 flex flex-col gap-1 text-sm text-muted-foreground", children: [
      t.email ? /* @__PURE__ */ n("p", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(ha, { className: "size-4" }),
        t.email
      ] }) : null,
      t.phone ? /* @__PURE__ */ n("p", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e(Tt, { className: "size-4" }),
        t.phone
      ] }) : null
    ] }) : null,
    t.notes ? /* @__PURE__ */ e("p", { className: "mt-3 rounded-md bg-muted/50 p-2 text-xs text-muted-foreground", children: t.notes }) : null
  ] });
}
const tc = d.forwardRef(
  ({
    className: t,
    seller: a,
    buyer: r,
    sellerLabel: l = "Sprzedawca",
    buyerLabel: s = "Nabywca",
    ...i
  }, o) => /* @__PURE__ */ n(
    "div",
    {
      className: c("grid gap-4 md:grid-cols-2", t),
      ref: o,
      ...i,
      children: [
        /* @__PURE__ */ e(rr, { label: l, party: a, tone: "primary" }),
        /* @__PURE__ */ e(rr, { label: s, party: r, tone: "neutral" })
      ]
    }
  )
);
tc.displayName = "DocumentParties";
const ac = {
  draft: "Szkic",
  issued: "Wystawiony",
  sent: "Wysłany",
  paid: "Opłacony",
  overdue: "Po terminie",
  cancelled: "Anulowany",
  neutral: "Status"
}, rc = {
  draft: "neutral",
  issued: "default",
  sent: "default",
  paid: "success",
  overdue: "destructive",
  cancelled: "neutral",
  neutral: "neutral"
}, nc = d.forwardRef(
  ({ className: t, document: a, actions: r, notes: l, children: s, ...i }, o) => /* @__PURE__ */ n(
    "article",
    {
      className: c(
        "overflow-hidden rounded-xl border border-border bg-card shadow-juz",
        t
      ),
      ref: o,
      ...i,
      children: [
        /* @__PURE__ */ e("header", { className: "border-b border-border bg-primary-soft/30 px-6 py-5", children: /* @__PURE__ */ n("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between", children: [
          /* @__PURE__ */ n("div", { className: "min-w-0", children: [
            /* @__PURE__ */ n("div", { className: "flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground", children: [
              /* @__PURE__ */ e(Ne, { className: "size-3.5" }),
              a.type
            ] }),
            /* @__PURE__ */ e("h1", { className: "mt-1 font-mono text-3xl font-extrabold leading-tight text-foreground", children: a.number }),
            /* @__PURE__ */ n("div", { className: "mt-3 flex flex-wrap items-center gap-3 text-sm", children: [
              /* @__PURE__ */ n("span", { className: "inline-flex items-center gap-1.5 text-muted-foreground", children: [
                /* @__PURE__ */ e(Re, { className: "size-4" }),
                "Data wystawienia:",
                " ",
                /* @__PURE__ */ e("span", { className: "font-semibold text-foreground", children: a.date })
              ] }),
              a.dueDate ? /* @__PURE__ */ n(G, { children: [
                /* @__PURE__ */ e(
                  Gt,
                  {
                    className: "h-4",
                    orientation: "vertical"
                  }
                ),
                /* @__PURE__ */ n("span", { className: "inline-flex items-center gap-1.5 text-muted-foreground", children: [
                  /* @__PURE__ */ e(Re, { className: "size-4" }),
                  "Termin płatności:",
                  " ",
                  /* @__PURE__ */ e("span", { className: "font-semibold text-foreground", children: a.dueDate })
                ] })
              ] }) : null
            ] })
          ] }),
          /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ e(R, { variant: rc[a.status], children: a.statusLabel ?? ac[a.status] }),
            r
          ] })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "space-y-6 p-6", children: s }),
        l ? /* @__PURE__ */ e("footer", { className: "border-t border-border bg-muted/30 px-6 py-4 text-sm text-muted-foreground", children: l }) : null
      ]
    }
  )
);
nc.displayName = "DocumentPreview";
const lc = d.forwardRef(
  ({ className: t, title: a, description: r, actions: l, bodyClassName: s, children: i, ...o }, u) => /* @__PURE__ */ n(
    "section",
    {
      className: c(
        "rounded-xl border border-border bg-card shadow-juz-sm",
        t
      ),
      ref: u,
      ...o,
      children: [
        /* @__PURE__ */ n("header", { className: "flex flex-col gap-2 border-b border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ n("div", { className: "min-w-0", children: [
            /* @__PURE__ */ e("h2", { className: "text-base font-extrabold leading-tight text-foreground", children: a }),
            r ? /* @__PURE__ */ e("p", { className: "mt-0.5 text-sm text-muted-foreground", children: r }) : null
          ] }),
          l ? /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-2", children: l }) : null
        ] }),
        /* @__PURE__ */ e("div", { className: c("p-5", s), children: i })
      ]
    }
  )
);
lc.displayName = "DocumentSection";
function Ye(t, a) {
  return `${new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(t)} ${a}`;
}
const sc = d.forwardRef(
  ({
    className: t,
    net: a,
    vat: r,
    gross: l,
    currency: s = "PLN",
    breakdown: i,
    netLabel: o = "Razem netto",
    vatLabel: u = "Razem VAT",
    grossLabel: m = "Razem brutto",
    ...f
  }, p) => /* @__PURE__ */ n(
    "aside",
    {
      className: c(
        "ml-auto w-full max-w-md rounded-xl border border-border bg-card shadow-juz-sm",
        t
      ),
      ref: p,
      ...f,
      children: [
        i != null && i.length ? /* @__PURE__ */ n("div", { className: "border-b border-border p-4", children: [
          /* @__PURE__ */ e("p", { className: "mb-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground", children: "Rozbicie stawek VAT" }),
          /* @__PURE__ */ e("div", { className: "space-y-1.5", children: i.map((h) => /* @__PURE__ */ n(
            "div",
            {
              className: "grid grid-cols-3 items-center gap-2 text-sm",
              children: [
                /* @__PURE__ */ n("span", { className: "font-mono font-semibold text-muted-foreground", children: [
                  "VAT ",
                  h.vatRate,
                  "%"
                ] }),
                /* @__PURE__ */ e("span", { className: "text-right font-mono text-foreground", children: Ye(h.net, s) }),
                /* @__PURE__ */ e("span", { className: "text-right font-mono text-foreground", children: Ye(h.vat, s) })
              ]
            },
            h.vatRate
          )) })
        ] }) : null,
        /* @__PURE__ */ n("dl", { className: "divide-y divide-border", children: [
          /* @__PURE__ */ n("div", { className: "flex items-center justify-between px-4 py-3 text-sm", children: [
            /* @__PURE__ */ e("dt", { className: "font-semibold text-muted-foreground", children: o }),
            /* @__PURE__ */ e("dd", { className: "font-mono font-bold text-foreground", children: Ye(a, s) })
          ] }),
          /* @__PURE__ */ n("div", { className: "flex items-center justify-between px-4 py-3 text-sm", children: [
            /* @__PURE__ */ e("dt", { className: "font-semibold text-muted-foreground", children: u }),
            /* @__PURE__ */ e("dd", { className: "font-mono font-bold text-foreground", children: Ye(r, s) })
          ] }),
          /* @__PURE__ */ n("div", { className: "flex items-center justify-between bg-primary-soft px-4 py-4", children: [
            /* @__PURE__ */ e("dt", { className: "text-sm font-extrabold uppercase tracking-[0.12em] text-primary", children: m }),
            /* @__PURE__ */ e("dd", { className: "font-mono text-xl font-extrabold text-primary", children: Ye(l, s) })
          ] })
        ] })
      ]
    }
  )
);
sc.displayName = "DocumentTotals";
function ic(t) {
  return t.split(/\s+/).filter(Boolean).slice(0, 2).map((a) => {
    var r;
    return ((r = a[0]) == null ? void 0 : r.toUpperCase()) ?? "";
  }).join("");
}
const oc = d.forwardRef(
  ({
    className: t,
    logo: a,
    title: r,
    breadcrumbs: l,
    nav: s,
    user: i,
    notifications: o,
    searchPlaceholder: u = "Szukaj w aplikacji...",
    onSearch: m,
    onOpenNotifications: f,
    onLogout: p,
    onProfile: h,
    onSettings: g,
    endSlot: b,
    ...x
  }, w) => /* @__PURE__ */ n(
    "header",
    {
      className: c(
        "flex h-16 items-center gap-4 border-b border-border bg-card px-4 shadow-juz-sm",
        t
      ),
      ref: w,
      ...x,
      children: [
        /* @__PURE__ */ n("div", { className: "flex min-w-0 items-center gap-3", children: [
          a,
          r || l != null && l.length ? /* @__PURE__ */ n("div", { className: "min-w-0", children: [
            l != null && l.length ? /* @__PURE__ */ e(va, { children: /* @__PURE__ */ e(wa, { children: l.map((S, z) => {
              const y = z === l.length - 1;
              return /* @__PURE__ */ n(d.Fragment, { children: [
                /* @__PURE__ */ e(ka, { children: y ? /* @__PURE__ */ e(Sa, { children: S.label }) : /* @__PURE__ */ e(za, { href: S.href ?? "#", children: S.label }) }),
                y ? null : /* @__PURE__ */ e(ja, {})
              ] }, `${S.label}-${z}`);
            }) }) }) : null,
            r ? /* @__PURE__ */ e("p", { className: "truncate text-base font-extrabold leading-tight", children: r }) : null
          ] }) : null
        ] }),
        s ? /* @__PURE__ */ e("nav", { "aria-label": "Główna nawigacja", className: "hidden items-center md:flex", children: s }) : null,
        /* @__PURE__ */ e("div", { className: "hidden flex-1 justify-center md:flex", children: /* @__PURE__ */ n(
          "button",
          {
            "aria-label": "Otwórz wyszukiwarkę globalną",
            className: "group flex h-10 w-full max-w-md items-center gap-3 rounded-md border border-border bg-background px-3 text-sm text-muted-foreground shadow-juz-sm transition-colors hover:border-primary/50 hover:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring",
            onClick: m,
            type: "button",
            children: [
              /* @__PURE__ */ e(Je, { className: "size-4" }),
              /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: u }),
              /* @__PURE__ */ n("span", { className: "hidden items-center gap-1 lg:flex", children: [
                /* @__PURE__ */ e(ma, { children: "Ctrl" }),
                /* @__PURE__ */ e(ma, { children: "K" })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ n("div", { className: "ml-auto flex items-center gap-2", children: [
          b,
          /* @__PURE__ */ e(
            me,
            {
              className: "md:hidden",
              label: "Szukaj",
              onClick: m,
              variant: "ghost",
              children: /* @__PURE__ */ e(Je, {})
            }
          ),
          /* @__PURE__ */ n("div", { className: "relative", children: [
            /* @__PURE__ */ e(
              me,
              {
                label: "Powiadomienia",
                onClick: f,
                variant: "ghost",
                children: /* @__PURE__ */ e(el, {})
              }
            ),
            o && o > 0 ? /* @__PURE__ */ e(
              R,
              {
                className: "pointer-events-none absolute -right-1 -top-1 min-w-5 justify-center px-1.5 py-0 text-[10px] leading-5",
                variant: "destructive",
                children: o > 99 ? "99+" : o
              }
            ) : null
          ] }),
          /* @__PURE__ */ n(ut, { children: [
            /* @__PURE__ */ e(mt, { asChild: !0, children: /* @__PURE__ */ n(
              "button",
              {
                "aria-label": "Menu profilu",
                className: "flex items-center gap-2 rounded-md p-1 transition-colors hover:bg-muted focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring",
                type: "button",
                children: [
                  /* @__PURE__ */ n(tt, { className: "size-9", children: [
                    i.avatarUrl ? /* @__PURE__ */ e($t, { alt: i.name, src: i.avatarUrl }) : null,
                    /* @__PURE__ */ e(at, { children: ic(i.name) })
                  ] }),
                  /* @__PURE__ */ n("div", { className: "hidden flex-col text-left lg:flex", children: [
                    /* @__PURE__ */ e("span", { className: "text-sm font-semibold leading-tight", children: i.name }),
                    i.role ? /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground", children: i.role }) : null
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ n(Ze, { align: "end", className: "min-w-56", children: [
              /* @__PURE__ */ e(ft, { children: /* @__PURE__ */ n("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ e("span", { className: "font-bold", children: i.name }),
                i.email ? /* @__PURE__ */ e("span", { className: "text-xs font-normal text-muted-foreground", children: i.email }) : null
              ] }) }),
              /* @__PURE__ */ e(Me, {}),
              h ? /* @__PURE__ */ n(oe, { onSelect: h, children: [
                /* @__PURE__ */ e(tl, {}),
                "Mój profil"
              ] }) : null,
              g ? /* @__PURE__ */ n(oe, { onSelect: g, children: [
                /* @__PURE__ */ e(al, {}),
                "Ustawienia"
              ] }) : null,
              /* @__PURE__ */ e(Me, {}),
              /* @__PURE__ */ n(
                oe,
                {
                  className: "text-destructive focus:bg-destructive-soft focus:text-destructive",
                  onSelect: p,
                  children: [
                    /* @__PURE__ */ e(br, {}),
                    "Wyloguj się"
                  ]
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  )
);
oc.displayName = "Navbar";
const dc = {
  planned: "default",
  progress: "warning",
  done: "success",
  warning: "warning",
  blocked: "destructive"
}, on = {
  planned: "border-l-primary bg-primary-soft/65",
  progress: "border-l-warning bg-warning-soft/65",
  done: "border-l-success bg-success-soft/65",
  warning: "border-l-warning bg-warning-soft/75",
  blocked: "border-l-destructive bg-destructive-soft/70"
}, Oa = [
  "poniedziałek",
  "wtorek",
  "środa",
  "czwartek",
  "piątek",
  "sobota",
  "niedziela"
], Pt = [
  "styczeń",
  "luty",
  "marzec",
  "kwiecień",
  "maj",
  "czerwiec",
  "lipiec",
  "sierpień",
  "wrzesień",
  "październik",
  "listopad",
  "grudzień"
];
function cc(t) {
  const a = new Date(t);
  return a.setHours(0, 0, 0, 0), a;
}
function Aa(t) {
  const a = cc(t), l = (a.getDay() + 6) % 7;
  return a.setDate(a.getDate() - l), a;
}
function Wa(t, a) {
  const r = new Date(t);
  return r.setDate(r.getDate() + a), r;
}
function it(t, a) {
  return t.getFullYear() === a.getFullYear() && t.getMonth() === a.getMonth() && t.getDate() === a.getDate();
}
function pa(t) {
  return `${String(t.getHours()).padStart(2, "0")}:${String(
    t.getMinutes()
  ).padStart(2, "0")}`;
}
function uc(t, a) {
  if (a === "day")
    return `${Oa[(t.getDay() + 6) % 7]}, ${t.getDate()} ${Pt[t.getMonth()]} ${t.getFullYear()}`;
  if (a === "week") {
    const r = Aa(t), l = Wa(r, 6);
    return `${r.getDate()} ${Pt[r.getMonth()]} - ${l.getDate()} ${Pt[l.getMonth()]} ${l.getFullYear()}`;
  }
  return `${Pt[t.getMonth()]} ${t.getFullYear()}`;
}
function nr(t, a, r) {
  const l = new Date(t);
  return a === "day" ? l.setDate(l.getDate() + r) : a === "week" ? l.setDate(l.getDate() + 7 * r) : l.setMonth(l.getMonth() + r), l;
}
const mc = d.forwardRef(
  ({
    className: t,
    view: a,
    currentDate: r,
    events: l,
    resources: s,
    onEventClick: i,
    onDateChange: o,
    onViewChange: u,
    startHour: m = 7,
    endHour: f = 19,
    ...p
  }, h) => /* @__PURE__ */ n(
    "div",
    {
      className: c(
        "rounded-xl border border-border bg-card shadow-juz-sm",
        t
      ),
      ref: h,
      ...p,
      children: [
        /* @__PURE__ */ n("header", { className: "flex flex-col gap-3 border-b border-border p-4 md:flex-row md:items-center md:justify-between", children: [
          /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e(
              me,
              {
                label: "Poprzedni okres",
                onClick: () => o == null ? void 0 : o(nr(r, a, -1)),
                variant: "ghost",
                children: /* @__PURE__ */ e(Ke, {})
              }
            ),
            /* @__PURE__ */ e(
              v,
              {
                onClick: () => o == null ? void 0 : o(/* @__PURE__ */ new Date()),
                size: "sm",
                variant: "outline",
                children: "Dzisiaj"
              }
            ),
            /* @__PURE__ */ e(
              me,
              {
                label: "Następny okres",
                onClick: () => o == null ? void 0 : o(nr(r, a, 1)),
                variant: "ghost",
                children: /* @__PURE__ */ e(de, {})
              }
            ),
            /* @__PURE__ */ e("h2", { className: "ml-2 text-lg font-extrabold capitalize text-foreground", children: uc(r, a) })
          ] }),
          u ? /* @__PURE__ */ e("div", { className: "inline-flex rounded-md border border-border bg-background p-1 shadow-juz-sm", children: ["day", "week", "month"].map((g) => /* @__PURE__ */ e(
            "button",
            {
              className: c(
                "rounded-sm px-3 py-1.5 text-sm font-semibold transition-colors",
                a === g ? "bg-primary text-primary-foreground shadow-juz-sm" : "text-muted-foreground hover:text-foreground"
              ),
              onClick: () => u(g),
              type: "button",
              children: g === "day" ? "Dzień" : g === "week" ? "Tydzień" : "Miesiąc"
            },
            g
          )) }) : null
        ] }),
        /* @__PURE__ */ e("div", { className: "p-4", children: a === "day" ? /* @__PURE__ */ e(
          fc,
          {
            currentDate: r,
            endHour: f,
            events: l,
            onEventClick: i,
            resources: s,
            startHour: m
          }
        ) : a === "week" ? /* @__PURE__ */ e(
          pc,
          {
            currentDate: r,
            endHour: f,
            events: l,
            onEventClick: i,
            startHour: m
          }
        ) : /* @__PURE__ */ e(
          hc,
          {
            currentDate: r,
            events: l,
            onEventClick: i
          }
        ) })
      ]
    }
  )
);
mc.displayName = "Schedule";
function dn({
  event: t,
  onClick: a,
  className: r
}) {
  const l = t.status ? on[t.status] : "border-l-primary bg-primary-soft/55", s = /* @__PURE__ */ n(G, { children: [
    /* @__PURE__ */ n("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ e("p", { className: "truncate text-sm font-extrabold text-foreground", children: t.title }),
      t.status ? /* @__PURE__ */ e(
        R,
        {
          className: "shrink-0 px-1.5 py-0 text-[10px] leading-5",
          variant: dc[t.status],
          children: t.status
        }
      ) : null
    ] }),
    /* @__PURE__ */ n("p", { className: "mt-0.5 font-mono text-xs text-muted-foreground", children: [
      pa(t.start),
      " - ",
      pa(t.end)
    ] }),
    t.resource ? /* @__PURE__ */ e("p", { className: "truncate text-xs font-semibold text-muted-foreground", children: t.resource }) : null
  ] }), i = c(
    "rounded-md border border-l-4 p-2 text-left shadow-juz-sm transition-colors",
    l,
    a && "cursor-pointer hover:border-primary/60",
    r
  );
  return a ? /* @__PURE__ */ e(
    "button",
    {
      className: i,
      onClick: () => a(t),
      style: t.color ? { borderLeftColor: t.color } : void 0,
      type: "button",
      children: s
    }
  ) : /* @__PURE__ */ e(
    "div",
    {
      className: i,
      style: t.color ? { borderLeftColor: t.color } : void 0,
      children: s
    }
  );
}
function fc({
  currentDate: t,
  events: a,
  resources: r,
  startHour: l,
  endHour: s,
  onEventClick: i
}) {
  const o = d.useMemo(() => {
    const f = [];
    for (let p = l; p <= s; p += 1) f.push(p);
    return f;
  }, [l, s]), u = a.filter((f) => it(f.start, t)), m = r && r.length ? r : null;
  return /* @__PURE__ */ e(yt, { className: "max-h-[600px]", children: /* @__PURE__ */ n(
    "div",
    {
      className: "grid",
      style: {
        gridTemplateColumns: `64px repeat(${m ? m.length : 1}, minmax(160px, 1fr))`
      },
      children: [
        /* @__PURE__ */ e("div", {}),
        m ? m.map((f) => /* @__PURE__ */ e(
          "div",
          {
            className: "border-b border-l border-border p-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground",
            children: f.name
          },
          f.id
        )) : /* @__PURE__ */ e("div", { className: "border-b border-l border-border p-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground", children: "Plan dnia" }),
        o.map((f) => /* @__PURE__ */ n(d.Fragment, { children: [
          /* @__PURE__ */ n("div", { className: "border-t border-border px-2 py-3 text-right font-mono text-xs text-muted-foreground", children: [
            String(f).padStart(2, "0"),
            ":00"
          ] }),
          (m ?? [{ id: "__single", name: "" }]).map((p) => {
            const h = u.filter((g) => g.start.getHours() !== f ? !1 : m ? g.resource === p.name : !0);
            return /* @__PURE__ */ e(
              "div",
              {
                className: "min-h-[64px] border-l border-t border-border p-1",
                children: /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: h.map((g) => /* @__PURE__ */ e(
                  dn,
                  {
                    event: g,
                    onClick: i
                  },
                  g.id
                )) })
              },
              `${f}-${p.id}`
            );
          })
        ] }, f))
      ]
    }
  ) });
}
function pc({
  currentDate: t,
  events: a,
  startHour: r,
  endHour: l,
  onEventClick: s
}) {
  const i = Aa(t), o = d.useMemo(
    () => Array.from({ length: 7 }, (m, f) => Wa(i, f)),
    [i]
  ), u = d.useMemo(() => {
    const m = [];
    for (let f = r; f <= l; f += 1) m.push(f);
    return m;
  }, [r, l]);
  return /* @__PURE__ */ e(yt, { className: "max-h-[640px]", children: /* @__PURE__ */ n(
    "div",
    {
      className: "grid min-w-[760px]",
      style: {
        gridTemplateColumns: "72px repeat(7, minmax(120px, 1fr))"
      },
      children: [
        /* @__PURE__ */ e("div", {}),
        o.map((m) => {
          const f = it(m, /* @__PURE__ */ new Date());
          return /* @__PURE__ */ n(
            "div",
            {
              className: c(
                "border-b border-l border-border px-2 py-2 text-center",
                f && "bg-primary-soft/40"
              ),
              children: [
                /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground", children: Oa[(m.getDay() + 6) % 7].slice(0, 3) }),
                /* @__PURE__ */ e(
                  "p",
                  {
                    className: c(
                      "mt-1 text-lg font-extrabold",
                      f ? "text-primary" : "text-foreground"
                    ),
                    children: m.getDate()
                  }
                )
              ]
            },
            m.toISOString()
          );
        }),
        u.map((m) => /* @__PURE__ */ n(d.Fragment, { children: [
          /* @__PURE__ */ n("div", { className: "border-t border-border px-2 py-3 text-right font-mono text-xs text-muted-foreground", children: [
            String(m).padStart(2, "0"),
            ":00"
          ] }),
          o.map((f) => {
            const p = a.filter(
              (h) => it(h.start, f) && h.start.getHours() === m
            );
            return /* @__PURE__ */ e(
              "div",
              {
                className: "min-h-[64px] border-l border-t border-border p-1",
                children: /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: p.map((h) => /* @__PURE__ */ e(
                  dn,
                  {
                    event: h,
                    onClick: s
                  },
                  h.id
                )) })
              },
              `${f.toISOString()}-${m}`
            );
          })
        ] }, m))
      ]
    }
  ) });
}
function hc({
  currentDate: t,
  events: a,
  onEventClick: r
}) {
  const l = new Date(
    t.getFullYear(),
    t.getMonth(),
    1
  ), s = Aa(l), i = d.useMemo(
    () => Array.from({ length: 42 }, (o, u) => Wa(s, u)),
    [s]
  );
  return /* @__PURE__ */ n("div", { children: [
    /* @__PURE__ */ e("div", { className: "grid grid-cols-7 border-b border-border", children: Oa.map((o) => /* @__PURE__ */ e(
      "div",
      {
        className: "p-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground",
        children: o.slice(0, 3)
      },
      o
    )) }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-7", children: i.map((o) => {
      const u = a.filter(
        (p) => it(p.start, o)
      ), m = o.getMonth() === t.getMonth(), f = it(o, /* @__PURE__ */ new Date());
      return /* @__PURE__ */ n(
        T,
        {
          className: c(
            "min-h-[110px] rounded-none border-0 border-b border-l border-border p-2 shadow-none",
            !m && "bg-muted/30 text-muted-foreground",
            f && "bg-primary-soft/30"
          ),
          children: [
            /* @__PURE__ */ e(
              "p",
              {
                className: c(
                  "text-sm font-bold",
                  f ? "text-primary" : "text-foreground"
                ),
                children: o.getDate()
              }
            ),
            /* @__PURE__ */ n("div", { className: "mt-1 space-y-1", children: [
              u.slice(0, 3).map((p) => /* @__PURE__ */ n(
                "button",
                {
                  className: c(
                    "block w-full truncate rounded-sm border-l-2 px-1.5 py-0.5 text-left text-xs font-semibold transition-colors hover:bg-muted",
                    p.status ? on[p.status] : "border-l-primary bg-primary-soft/55"
                  ),
                  onClick: () => r == null ? void 0 : r(p),
                  style: p.color ? { borderLeftColor: p.color } : void 0,
                  type: "button",
                  children: [
                    /* @__PURE__ */ e("span", { className: "font-mono text-[10px] leading-5 text-muted-foreground", children: pa(p.start) }),
                    " ",
                    p.title
                  ]
                },
                p.id
              )),
              u.length > 3 ? /* @__PURE__ */ n("p", { className: "text-xs font-semibold text-muted-foreground", children: [
                "+",
                u.length - 3,
                " więcej"
              ] }) : null
            ] })
          ]
        },
        o.toISOString()
      );
    }) })
  ] });
}
const gc = d.forwardRef(
  ({ id: t, label: a, icon: r, isActive: l, className: s, children: i, ...o }, u) => {
    const { isExpanded: m, collapsedGroups: f, toggleGroup: p, setHovered: h } = ln(), g = f[t] ?? !0;
    return m ? /* @__PURE__ */ n("div", { ref: u, className: s, ...o, children: [
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          onClick: () => p(t),
          "aria-expanded": g,
          className: c(
            "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-semibold uppercase tracking-wide transition-colors",
            "[&>svg:first-child]:size-5 [&>svg:first-child]:shrink-0",
            "outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            l ? "text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
          ),
          children: [
            r,
            /* @__PURE__ */ e("span", { className: "flex-1 truncate text-left", children: a }),
            /* @__PURE__ */ e(
              U,
              {
                className: c(
                  "size-4 shrink-0 transition-transform duration-200",
                  !g && "-rotate-90"
                )
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ e(
        "div",
        {
          className: c(
            "grid transition-[grid-template-rows] duration-200",
            g ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          ),
          children: /* @__PURE__ */ e("div", { className: "overflow-hidden", children: /* @__PURE__ */ e("div", { className: "space-y-0.5 py-1", children: i }) })
        }
      )
    ] }) : /* @__PURE__ */ e(Vr, { delayDuration: 150, children: /* @__PURE__ */ n(Jr, { children: [
      /* @__PURE__ */ e(Qr, { asChild: !0, children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: () => h(!0),
          className: c(
            "flex w-full items-center justify-center rounded-lg px-3 py-2.5 transition-colors",
            "[&>svg]:size-5 [&>svg]:shrink-0",
            "outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            l ? "text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
            s
          ),
          children: r
        }
      ) }),
      /* @__PURE__ */ e(Fa, { side: "right", sideOffset: 8, children: a })
    ] }) });
  }
);
gc.displayName = "AppSidebarGroup";
const bc = d.forwardRef(({ className: t, asChild: a = !1, isActive: r, isStandalone: l, ...s }, i) => /* @__PURE__ */ e(
  a ? Te : "button",
  {
    ref: i,
    "data-active": r ? "" : void 0,
    className: c(
      "group flex w-full items-center gap-3 rounded-lg py-2 text-[13px] transition-colors",
      "[&>svg]:size-5 [&>svg]:shrink-0",
      "outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      l ? "px-3 font-medium" : "px-3 pl-9 font-normal",
      r ? "bg-primary-soft font-medium text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground",
      t
    ),
    ...s
  }
));
bc.displayName = "AppSidebarItem";
const xc = d.forwardRef(
  ({
    className: t,
    logo: a,
    groups: r,
    footer: l,
    collapsed: s = !1,
    onToggleCollapse: i,
    ...o
  }, u) => /* @__PURE__ */ e(Vr, { delayDuration: 200, children: /* @__PURE__ */ n(
    "aside",
    {
      "aria-label": "Nawigacja główna",
      className: c(
        "flex h-full flex-col border-r border-border bg-card shadow-juz-sm transition-[width] duration-200",
        s ? "w-[72px]" : "w-64",
        t
      ),
      "data-collapsed": s || void 0,
      ref: u,
      ...o,
      children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: c(
              "flex h-16 items-center gap-2 border-b border-border px-3",
              s && "justify-center px-2"
            ),
            children: [
              a ? /* @__PURE__ */ e("div", { className: c("flex min-w-0 flex-1 items-center", s && "justify-center"), children: a }) : null,
              i ? /* @__PURE__ */ e(
                me,
                {
                  label: s ? "Rozwiń panel" : "Zwiń panel",
                  onClick: i,
                  size: "sm",
                  variant: "ghost",
                  children: s ? /* @__PURE__ */ e(de, {}) : /* @__PURE__ */ e(Ke, {})
                }
              ) : null
            ]
          }
        ),
        /* @__PURE__ */ e(yt, { className: "flex-1", children: /* @__PURE__ */ e("nav", { className: "space-y-4 p-3", children: r.map((m, f) => /* @__PURE__ */ e(
          yc,
          {
            collapsed: s,
            group: m
          },
          m.label ?? `group-${f}`
        )) }) }),
        l ? /* @__PURE__ */ n(G, { children: [
          /* @__PURE__ */ e(Gt, {}),
          /* @__PURE__ */ e("div", { className: c("p-3", s && "flex justify-center"), children: l })
        ] }) : null
      ]
    }
  ) })
);
xc.displayName = "Sidebar";
function yc({
  group: t,
  collapsed: a
}) {
  const [r, l] = d.useState(t.defaultOpen ?? !0), s = t.collapsible ?? !!t.label;
  return /* @__PURE__ */ n("div", { className: "space-y-1", children: [
    t.label && !a ? s ? /* @__PURE__ */ n(
      "button",
      {
        "aria-expanded": r,
        className: "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground",
        onClick: () => l((i) => !i),
        type: "button",
        children: [
          /* @__PURE__ */ e("span", { children: t.label }),
          /* @__PURE__ */ e(
            U,
            {
              className: c(
                "size-3.5 transition-transform",
                !r && "-rotate-90"
              )
            }
          )
        ]
      }
    ) : /* @__PURE__ */ e("p", { className: "px-2 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground", children: t.label }) : null,
    !s || r || a ? /* @__PURE__ */ e("ul", { className: "space-y-1", children: t.items.map((i) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(cn, { collapsed: a, item: i }) }, i.key)) }) : null
  ] });
}
function cn({
  item: t,
  collapsed: a,
  depth: r = 0
}) {
  var u;
  const l = !!((u = t.items) != null && u.length), [s, i] = d.useState(t.active ?? !1), o = typeof t.count == "number" ? /* @__PURE__ */ e(R, { variant: "neutral", children: t.count }) : null;
  return a && r === 0 ? /* @__PURE__ */ n(Jr, { children: [
    /* @__PURE__ */ e(Qr, { asChild: !0, children: /* @__PURE__ */ e(
      "a",
      {
        "aria-label": t.label,
        className: c(
          "flex size-12 items-center justify-center rounded-md transition-colors [&_svg]:size-5",
          t.active ? "bg-primary-soft text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
        ),
        href: t.href ?? "#",
        onClick: (m) => {
          t.onSelect && (m.preventDefault(), t.onSelect());
        },
        children: t.icon ?? /* @__PURE__ */ e("span", { className: "text-sm font-bold", children: t.label.slice(0, 2) })
      }
    ) }),
    /* @__PURE__ */ e(Fa, { side: "right", children: t.label })
  ] }) : l ? /* @__PURE__ */ n("div", { className: "space-y-1", children: [
    /* @__PURE__ */ n(
      "button",
      {
        "aria-expanded": s,
        className: c(
          "group flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors",
          t.active ? "bg-primary-soft text-primary font-semibold" : "text-foreground hover:bg-muted"
        ),
        onClick: () => i((m) => !m),
        type: "button",
        children: [
          t.icon ? /* @__PURE__ */ e(
            "span",
            {
              className: c(
                "flex size-8 shrink-0 items-center justify-center rounded-md [&_svg]:size-4",
                t.active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              ),
              children: t.icon
            }
          ) : null,
          /* @__PURE__ */ e("span", { className: "flex-1 text-left font-semibold leading-tight", children: t.label }),
          o,
          /* @__PURE__ */ e(
            U,
            {
              className: c(
                "size-4 text-muted-foreground transition-transform",
                !s && "-rotate-90"
              )
            }
          )
        ]
      }
    ),
    s ? /* @__PURE__ */ e("ul", { className: "ml-3 space-y-1 border-l border-border pl-3", children: t.items.map((m) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
      cn,
      {
        collapsed: a,
        depth: r + 1,
        item: m
      }
    ) }, m.key)) }) : null
  ] }) : r > 0 ? /* @__PURE__ */ n(
    "a",
    {
      "aria-current": t.active ? "page" : void 0,
      className: c(
        "flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm transition-colors",
        t.active ? "bg-primary-soft text-primary font-semibold" : "text-muted-foreground hover:bg-muted hover:text-foreground"
      ),
      href: t.href ?? "#",
      onClick: (m) => {
        t.onSelect && (m.preventDefault(), t.onSelect());
      },
      children: [
        /* @__PURE__ */ e("span", { className: "truncate", children: t.label }),
        o
      ]
    }
  ) : /* @__PURE__ */ e(
    _r,
    {
      active: t.active,
      asChild: !0,
      badge: o ?? void 0,
      icon: t.icon,
      label: t.label,
      children: /* @__PURE__ */ e(
        "a",
        {
          href: t.href ?? "#",
          onClick: (m) => {
            t.onSelect && (m.preventDefault(), t.onSelect());
          }
        }
      )
    }
  );
}
const Nc = d.forwardRef(
  ({
    className: t,
    title: a,
    description: r,
    filters: l,
    primaryAction: s,
    secondaryActions: i,
    meta: o,
    ...u
  }, m) => /* @__PURE__ */ n(
    "div",
    {
      className: c(
        "flex flex-col gap-3 border-b border-border bg-card px-4 py-4 shadow-juz-sm md:px-6",
        t
      ),
      ref: m,
      ...u,
      children: [
        /* @__PURE__ */ n("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between", children: [
          /* @__PURE__ */ n("div", { className: "min-w-0", children: [
            /* @__PURE__ */ e("h1", { className: "truncate text-2xl font-extrabold leading-tight text-foreground", children: a }),
            r ? /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-muted-foreground", children: r }) : null,
            o ? /* @__PURE__ */ e("div", { className: "mt-2 flex flex-wrap items-center gap-2", children: o }) : null
          ] }),
          i || s ? /* @__PURE__ */ n("div", { className: "flex flex-wrap items-center gap-2", children: [
            i,
            s
          ] }) : null
        ] }),
        l ? /* @__PURE__ */ e("div", { className: "flex flex-wrap items-center gap-2 border-t border-border pt-3", children: l }) : null
      ]
    }
  )
);
Nc.displayName = "TopBar";
export {
  Wc as Accordion,
  Pl as AccordionContent,
  jl as AccordionItem,
  Cl as AccordionTrigger,
  No as ActionButtons,
  Ol as AddressCard,
  vu as AdvancedFiltersPanel,
  Wl as Alert,
  _l as AlertDescription,
  Bl as AlertDialog,
  _c as AlertDialogCancel,
  Rr as AlertDialogContent,
  Zl as AlertDialogDescription,
  Kc as AlertDialogFooter,
  Bc as AlertDialogHeader,
  Pr as AlertDialogOverlay,
  Kl as AlertDialogPortal,
  El as AlertDialogTitle,
  $c as AlertDialogTrigger,
  $l as AlertTitle,
  Ud as AppLayout,
  qd as AppSidebar,
  gc as AppSidebarGroup,
  bc as AppSidebarItem,
  Ec as AspectRatio,
  vo as Autocomplete,
  tt as Avatar,
  at as AvatarFallback,
  $t as AvatarImage,
  R as Badge,
  Hc as BarChart,
  en as BasicMenuItem,
  va as Breadcrumb,
  ql as BreadcrumbEllipsis,
  ka as BreadcrumbItem,
  za as BreadcrumbLink,
  wa as BreadcrumbList,
  Sa as BreadcrumbPage,
  ja as BreadcrumbSeparator,
  v as Button,
  Xl as ButtonGroup,
  ct as Calendar,
  wu as CalendarEvent,
  jo as CalendarEventSection,
  T as Card,
  Il as CardContent,
  Dl as CardDescription,
  Fl as CardFooter,
  Ml as CardHeader,
  Tl as CardTitle,
  Bs as Carousel,
  Ks as CarouselContent,
  Es as CarouselItem,
  Hs as CarouselNext,
  Zs as CarouselPrevious,
  _t as ChartContainer,
  Zc as ChartLegend,
  Ul as ChartStyle,
  Na as ChartTooltip,
  Bt as ChartTooltipContent,
  Be as Checkbox,
  Pu as ClientDetailPattern,
  Gc as Collapsible,
  nd as CollapsibleMenuItem,
  Do as ColumnFilterPanel,
  Io as ColumnManagerPanel,
  Xs as ColumnVisibilitySwitch,
  ld as Combobox,
  He as Command,
  Vc as CommandDialog,
  gt as CommandEmpty,
  bt as CommandGroup,
  pt as CommandInput,
  xt as CommandItem,
  ht as CommandList,
  Vs as CommandSeparator,
  Js as CommandShortcut,
  Jc as ContextMenu,
  ri as ContextMenuCheckboxItem,
  ti as ContextMenuContent,
  eu as ContextMenuGroup,
  ai as ContextMenuItem,
  li as ContextMenuLabel,
  tu as ContextMenuPortal,
  ru as ContextMenuRadioGroup,
  ni as ContextMenuRadioItem,
  si as ContextMenuSeparator,
  ii as ContextMenuShortcut,
  au as ContextMenuSub,
  ei as ContextMenuSubContent,
  Qs as ContextMenuSubTrigger,
  Qc as ContextMenuTrigger,
  Ru as DataList,
  _u as DataTable,
  Mo as DataTableAdvancedFilters,
  Ve as DataTableField,
  an as DataTablePattern,
  Ro as DataTableToolbar,
  oi as DateFilter,
  sd as DatePicker,
  di as DateRangeInput,
  ui as DecimalInput,
  Mu as DetailHeader,
  Bl as Dialog,
  _c as DialogClose,
  Rr as DialogContent,
  Zl as DialogDescription,
  Kc as DialogFooter,
  Bc as DialogHeader,
  Pr as DialogOverlay,
  Kl as DialogPortal,
  El as DialogTitle,
  $c as DialogTrigger,
  ec as DocumentLineItems,
  tc as DocumentParties,
  nc as DocumentPreview,
  lc as DocumentSection,
  sc as DocumentTotals,
  lu as DonutChart,
  mi as Drawer,
  iu as DrawerClose,
  pi as DrawerContent,
  xi as DrawerDescription,
  gi as DrawerFooter,
  hi as DrawerHeader,
  Lr as DrawerOverlay,
  fi as DrawerPortal,
  bi as DrawerTitle,
  su as DrawerTrigger,
  ut as DropdownMenu,
  Fr as DropdownMenuCheckboxItem,
  Ze as DropdownMenuContent,
  Uc as DropdownMenuGroup,
  oe as DropdownMenuItem,
  ft as DropdownMenuLabel,
  qc as DropdownMenuPortal,
  Xc as DropdownMenuRadioGroup,
  Gs as DropdownMenuRadioItem,
  Me as DropdownMenuSeparator,
  Us as DropdownMenuShortcut,
  Yc as DropdownMenuSub,
  Ys as DropdownMenuSubContent,
  qs as DropdownMenuSubTrigger,
  mt as DropdownMenuTrigger,
  Or as Empty,
  yi as EmptyState,
  ud as Field,
  Ni as FieldDisplay,
  cd as FieldGrid,
  pd as FileActions,
  ki as FilterSelect,
  hd as FormField,
  gd as Header,
  ju as HorizontalTimeline,
  du as HoverCard,
  zi as HoverCardContent,
  cu as HoverCardTrigger,
  me as IconActionButton,
  Wt as IconTile,
  bd as InfoSection,
  C as Input,
  Et as InputGroup,
  ji as InputOTP,
  Ci as InputOTPGroup,
  Ri as InputOTPSeparator,
  Pi as InputOTPSlot,
  Tu as JuzLogo,
  xd as JuzLogoMark,
  ma as Kbd,
  le as Label,
  uu as LineChart,
  Mi as Menubar,
  Oi as MenubarCheckboxItem,
  Fi as MenubarContent,
  fu as MenubarGroup,
  Li as MenubarItem,
  Wi as MenubarLabel,
  mu as MenubarMenu,
  pu as MenubarPortal,
  hu as MenubarRadioGroup,
  Ai as MenubarRadioItem,
  $i as MenubarSeparator,
  _i as MenubarShortcut,
  gu as MenubarSub,
  Ii as MenubarSubContent,
  Di as MenubarSubTrigger,
  Ti as MenubarTrigger,
  Bi as MetaTile,
  Hi as MetricCard,
  Gi as MiniMonth,
  Du as ModeToggle,
  Ui as MultiSelect,
  J as NativeSelect,
  oc as Navbar,
  Iu as NewClientPattern,
  Yi as PageSizeControl,
  Md as Pagination,
  Vi as PhoneFrame,
  Cu as PlainTimeline,
  ke as Popover,
  nu as PopoverAnchor,
  pe as PopoverContent,
  ze as PopoverTrigger,
  Td as PrefixInput,
  Fu as ProfileMenu,
  Ji as Progress,
  Lu as ProgressLineCards,
  Qi as RadioGroup,
  eo as RadioGroupItem,
  Fd as RecordPageLayout,
  Oo as RecordTabs,
  mc as Schedule,
  yt as ScrollArea,
  $r as ScrollBar,
  to as SearchableSelect,
  Ld as SectionNav,
  _r as SectionNavItem,
  Ou as SegmentedTabs,
  Ca as Select,
  Ht as SelectContent,
  ou as SelectGroup,
  rt as SelectItem,
  vi as SelectLabel,
  Wr as SelectScrollDownButton,
  Ar as SelectScrollUpButton,
  wi as SelectSeparator,
  Zt as SelectTrigger,
  Pa as SelectValue,
  Gt as Separator,
  ao as Sheet,
  xu as SheetClose,
  Kr as SheetContent,
  Gr as SheetDescription,
  Zr as SheetFooter,
  Er as SheetHeader,
  Br as SheetOverlay,
  ro as SheetPortal,
  Hr as SheetTitle,
  bu as SheetTrigger,
  xc as Sidebar,
  $u as SidebarProvider,
  yu as Skeleton,
  lo as Slider,
  Au as SocialCalendar,
  To as SortableColumnHeader,
  Tr as Spinner,
  Wu as Stepper,
  Ad as SummaryPanel,
  Wd as SummaryRow,
  so as SummaryTile,
  io as Switch,
  Ut as Table,
  Yt as TableBody,
  q as TableCell,
  V as TableHead,
  qt as TableHeader,
  oo as TablePrimitive,
  uo as TablePrimitiveBody,
  ho as TablePrimitiveCaption,
  po as TablePrimitiveCell,
  fo as TablePrimitiveHead,
  co as TablePrimitiveHeader,
  mo as TablePrimitiveRow,
  xe as TableRow,
  Ma as Tabs,
  Ia as TabsContent,
  Ta as TabsList,
  Da as TabsTrigger,
  _d as TextEditor,
  go as Textarea,
  Kd as TimeInput,
  Zd as TimePicker,
  Nu as Toaster,
  bo as Toggle,
  Yr as ToggleGroup,
  Xr as ToggleGroupItem,
  ku as TokenBarChart,
  Su as TokenDonutChart,
  zu as TokenLineChart,
  Jr as Tooltip,
  Fa as TooltipContent,
  Vr as TooltipProvider,
  Qr as TooltipTrigger,
  Nc as TopBar,
  se as Typography,
  xo as Upload,
  Ao as VerticalTimeline,
  Gd as WeekWorkstations,
  Al as alertVariants,
  Rl as badgeVariants,
  Rt as buttonVariants,
  c as cn,
  Si as iconActionButtonVariants,
  Ll as iconTileVariants,
  Lo as normalizeRecordTabs,
  Yl as spinnerVariants,
  Eu as toast,
  Ur as toggleVariants,
  Ki as typographyVariants,
  ln as useSidebar
};
//# sourceMappingURL=index.js.map
