!(function (e) {
  var t = {}
  function c(r) {
    if (t[r]) return t[r].exports
    var n = (t[r] = { i: r, l: !1, exports: {} })
    return e[r].call(n.exports, n, n.exports, c), (n.l = !0), n.exports
  }
  ;(c.m = e),
    (c.c = t),
    (c.d = function (e, t, r) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
    }),
    (c.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (c.t = function (e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if (
        (c.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          c.d(
            r,
            n,
            function (t) {
              return e[t]
            }.bind(null, n)
          )
      return r
    }),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return c.d(t, 'a', t), t
    }),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (c.p = ''),
    c((c.s = 6))
})([
  function (e, t) {
    e.exports = window.wp.element
  },
  function (e, t) {
    e.exports = window.wp.i18n
  },
  function (e, t) {
    e.exports = window.wp.blocks
  },
  function (e, t) {
    e.exports = window.wp.apiFetch
  },
  function (e, t) {
    e.exports = window.wp.compose
  },
  function (e, t) {
    e.exports = window.wp.components
  },
  function (e, t, c) {
    'use strict'
    c.r(t)
    var r = c(0),
      n = c(1),
      o = c(2),
      a = Object(r.createElement)(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 242.5 239.46' },
        Object(r.createElement)(
          'defs',
          null,
          Object(r.createElement)(
            'clipPath',
            { id: 'clip-path', transform: 'translate(1.72)' },
            Object(r.createElement)('circle', {
              className: 'cls-1',
              cx: '119.73',
              cy: '119.73',
              r: '116.15',
              fill: 'none',
            })
          )
        ),
        Object(r.createElement)(
          'g',
          { id: 'Layer_2', 'data-name': 'Layer 2' },
          Object(r.createElement)(
            'g',
            { id: 'Layer_1', 'data-name': 'Layer 1' },
            Object(r.createElement)(
              'g',
              { className: 'cls-2', clipPath: 'url(#clip-path)' },
              Object(r.createElement)('circle', {
                className: 'cls-3',
                cx: '121.45',
                cy: '119.73',
                r: '116.15',
                fill: '#33c6f4',
              }),
              Object(r.createElement)('path', {
                className: 'cls-4',
                d: 'M239.32,167.79c-53.41-24-108.37-91.46-113-94.55s-10.84.77-10.84.77c-3.87-6.19-10.06.77-10.06.77C76.77,123.55.14,170.11.14,170.11S36.94,237.79,122,237.79C208.48,237.79,239.32,167.79,239.32,167.79Z',
                transform: 'translate(1.72)',
                fill: '#1b447e',
              }),
              Object(r.createElement)('path', {
                className: 'cls-5',
                d: 'M67.48,116.58s15.48-7,12.38,4.65-15.48,28.64-11.61,29.41S83,140.58,86.06,142.12s5.42.78,3.87,6.2-3.1,9.29,0,9.29,5.42-7,9.29-13.94,10.06-3.87,12.38-1.55,9.29,15.49,14.71,13.94,8.51-8.52,6.19-24,1.55-20.12,1.55-20.12,4.64-2.32,13.16,8.51,24,27.09,26.31,26.32-10.83-17.8-7.74-19.35,15.48,2.32,21.68,7.74c0,0,2.12,8.87,2.12.36L126.31,73.24,115.47,74l-10.06.77S80.64,111.94,67.48,116.58Z',
                transform: 'translate(1.72)',
                fill: '#fff',
              }),
              Object(r.createElement)('path', {
                className: 'cls-6',
                d: 'M239.32,170.11c-53.41-24-108.37-93.78-113-96.87s-10.84.77-10.84.77c-3.87-6.19-10.06.77-10.06.77C76.77,123.55.14,170.11.14,170.11',
                transform: 'translate(1.72)',
                fill: 'none',
                stroke: '#221e1f',
                strokeMiterlimit: '10',
                strokeWidth: '8px',
              })
            ),
            Object(r.createElement)('circle', {
              className: 'cls-6',
              cx: '121.45',
              cy: '119.73',
              r: '116.15',
              fill: 'none',
              stroke: '#1b447e',
              strokeMiterlimit: '10',
              strokeWidth: '8px',
            })
          )
        )
      ),
      l = c(3),
      i = c.n(l),
      s = c(4),
      f = c(5)
    const m = new Map()
    i()({ path: 'contact-form-7/v1/contact-forms?per_page=20' }).then((e) => {
      Object.entries(e).forEach(([e, t]) => {
        m.set(t.id, t)
      })
    })
    var u = {
      from: [
        {
          type: 'shortcode',
          tag: 'contact-form-7',
          attributes: {
            id: {
              type: 'integer',
              shortcode: function (e) {
                var t = e.named.id
                return parseInt(t)
              },
            },
            title: {
              type: 'string',
              shortcode: function (e) {
                return e.named.title
              },
            },
          },
        },
      ],
      to: [
        {
          type: 'block',
          blocks: ['core/shortcode'],
          transform: function (e) {
            return Object(o.createBlock)('core/shortcode', {
              text: '[contact-form-7 id="'.concat(e.id, '" title="').concat(e.title, '"]'),
            })
          },
        },
      ],
    }
    Object(o.registerBlockType)('contact-form-7/contact-form-selector', {
      title: Object(n.__)('Contact Form 7', 'contact-form-7'),
      description: Object(n.__)(
        'Insert a contact form you have created with Contact Form 7.',
        'contact-form-7'
      ),
      category: 'widgets',
      attributes: { id: { type: 'integer' }, title: { type: 'string' } },
      icon: a,
      transforms: u,
      edit: function e({ attributes: t, setAttributes: c }) {
        if (!m.size && !t.id)
          return Object(r.createElement)(
            'div',
            { className: 'components-placeholder' },
            Object(r.createElement)(
              'p',
              null,
              Object(n.__)(
                'No contact forms were found. Create a contact form first.',
                'contact-form-7'
              )
            )
          )
        const o = Array.from(m.values(), (e) => ({ value: e.id, label: e.title }))
        if (t.id) o.length || o.push({ value: t.id, label: t.title })
        else {
          const e = o[0]
          t = { id: parseInt(e.value), title: e.label }
        }
        const a = 'contact-form-7-contact-form-selector-' + Object(s.useInstanceId)(e)
        return Object(r.createElement)(
          'div',
          { className: 'components-placeholder' },
          Object(r.createElement)(
            'label',
            { htmlFor: a, className: 'components-placeholder__label' },
            Object(n.__)('Select a contact form:', 'contact-form-7')
          ),
          Object(r.createElement)(f.SelectControl, {
            id: a,
            options: o,
            value: t.id,
            onChange: (e) => c({ id: parseInt(e), title: m.get(parseInt(e)).title }),
          })
        )
      },
      save: function (e) {
        var t = e.attributes
        return Object(r.createElement)(
          'div',
          null,
          '[contact-form-7 id="',
          t.id,
          '" title="',
          t.title,
          '"]'
        )
      },
    })
  },
])
