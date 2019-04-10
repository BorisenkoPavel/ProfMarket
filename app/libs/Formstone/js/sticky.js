/*! formstone v1.4.10 [sticky.js] 2018-08-03 | GPL-3.0 License | formstone.it */ ! function (e) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./mediaquery"], e) : e(jQuery, Formstone)
}(function (e, t) {
	"use strict";

	function n() {
		$.iterate.call(k, c)
	}

	function s() {
		k = e(m.base), n()
	}

	function a(e) {
		e.enabled = !0, e.$el.addClass(u.enabled), c(e)
	}

	function i(e) {
		e.enabled = !1, e.$el.css({
			height: "",
			width: "",
			top: "",
			bottom: "",
			marginBottom: ""
		}).removeClass(u.enabled), e.$stickys.removeClass([u.passed, u.stuck].join(" "))
	}

	function o() {
		$.iterate.call(k, r)
	}

	function c(e) {
		if (e.enabled) {
			if (d(e), e.$container.length) {
				var t = e.$container.offset();
				e.min = t.top - e.margin, e.max = e.min + e.$container.outerHeight(!1) - e.height
			} else {
				var n, s = (n = e.stuck ? e.$clone : e.$el).offset();
				e.min = s.top - e.margin, e.max = !1
			}
			r(e)
		}
	}

	function d(e) {
		var t;
		t = e.stuck ? e.$clone : e.$el, e.margin = parseInt(t.css("margin-top"), 10), e.$container.length ? e.containerMargin = parseInt(e.$container.css("margin-top"), 10) : e.containerMargin = 0, e.height = t.outerHeight(), e.width = t.outerWidth()
	}

	function r(e) {
		if (e.enabled) {
			var t = g + e.offset;
			if (t >= e.min) {
				e.stuck = !0, e.$stickys.addClass(u.stuck), e.stuck || (e.$el.trigger(f.stuck), d(e));
				var n = e.offset,
					s = "";
				e.max && t > e.max ? (e.passed || e.$el.trigger(f.passed), e.passed = !0, e.$stickys.addClass(u.passed), n = "", s = 0) : (e.passed = !1, e.$stickys.removeClass(u.passed)), e.$el.css({
					height: e.height,
					width: e.width,
					top: n,
					bottom: s,
					marginBottom: 0
				})
			} else e.stuck = !1, e.$stickys.removeClass(u.stuck).removeClass(u.passed), e.stuck && e.$el.trigger(f.unstuck), e.$el.css({
				height: "",
				width: "",
				top: "",
				bottom: "",
				marginBottom: ""
			})
		}
	}
	var l = t.Plugin("sticky", {
			widget: !0,
			defaults: {
				maxWidth: 1 / 0,
				minWidth: "0px",
				offset: 0
			},
			classes: ["enabled", "sticky", "stuck", "clone", "container", "passed"],
			events: {
				passed: "passed",
				stuck: "stuck",
				unstuck: "unstuck"
			},
			methods: {
				_construct: function (t) {
					t.enabled = !1, t.stuck = !1, t.passed = !0, t.$clone = t.$el.clone(), t.container = t.$el.data("sticky-container"), t.$container = e(t.container), t.$el.addClass(u.base), t.$clone.removeClass(u.element).addClass(u.clone), t.$container.addClass(u.container), t.$stickys = e().add(t.$el).add(t.$clone), t.$el.after(t.$clone);
					var n = e().add(t.$el.find("img")).add(t.$container.find("img"));
					n.length && n.on(f.load, t, c), t.maxWidth = t.maxWidth === 1 / 0 ? "100000px" : t.maxWidth, t.mq = "(min-width:" + t.minWidth + ") and (max-width:" + t.maxWidth + ")", e.fsMediaquery("bind", t.rawGuid, t.mq, {
						enter: function () {
							a.call(t.$el, t)
						},
						leave: function () {
							i.call(t.$el, t)
						}
					})
				},
				_postConstruct: function (e) {
					s(), n()
				},
				_destruct: function (e) {
					e.$clone.remove(), e.$container.removeClass(u.container), e.$el.css({
						height: "",
						width: "",
						top: "",
						bottom: "",
						marginBottom: ""
					}).removeClass(u.base), s()
				},
				_resize: n,
				_raf: function () {
					(g = h.scrollTop()) < 0 && (g = 0), g !== p && (o(), p = g)
				},
				disable: i,
				enable: a,
				reset: c,
				resize: c
			}
		}),
		m = (l.namespace, l.classes),
		u = m.raw,
		f = l.events,
		$ = l.functions,
		h = (t.window, t.$window),
		g = 0,
		p = 0,
		k = []
});