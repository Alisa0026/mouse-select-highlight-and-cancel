var dtd = ((function () {
      function _(s) {
        for (var k in s) {
          s[k.toUpperCase()] = s[k];
        }
        return s;
      }
      var X = function (t) {
        var a = arguments;
        for (var i = 1; i < a.length; i++) {
          var x = a[i];
          for (var k in x) {
            if (!t.hasOwnProperty(k)) {
              t[k] = x[k];
            }
          }
        }
        return t;
      };
      var A = _({ isindex: 1, fieldset: 1 }),
        B = _({ input: 1, button: 1, select: 1, textarea: 1, label: 1 }),
        C = X(_({ a: 1 }), B),
        D = X({ iframe: 1 }, C),
        E = _({
          hr: 1,
          ul: 1,
          menu: 1,
          div: 1,
          blockquote: 1,
          noscript: 1,
          table: 1,
          center: 1,
          address: 1,
          dir: 1,
          pre: 1,
          h5: 1,
          dl: 1,
          h4: 1,
          noframes: 1,
          h6: 1,
          ol: 1,
          h1: 1,
          h3: 1,
          h2: 1
        }),
        F = _({ ins: 1, del: 1, script: 1, style: 1 }),
        G = X(
          _({
            mark: 1,
            b: 1,
            acronym: 1,
            bdo: 1,
            var: 1,
            "#": 1,
            abbr: 1,
            code: 1,
            br: 1,
            i: 1,
            cite: 1,
            kbd: 1,
            u: 1,
            strike: 1,
            s: 1,
            tt: 1,
            strong: 1,
            q: 1,
            samp: 1,
            em: 1,
            dfn: 1,
            span: 1
          }),
          F
        ),
        H = X(
          _({
            sub: 1,
            img: 1,
            embed: 1,
            object: 1,
            sup: 1,
            basefont: 1,
            map: 1,
            applet: 1,
            font: 1,
            big: 1,
            small: 1
          }),
          G
        ),
        I = X(_({ p: 1 }), H),
        J = X(_({ iframe: 1 }), H, B),
        K = _({
          img: 1,
          embed: 1,
          noscript: 1,
          br: 1,
          kbd: 1,
          center: 1,
          button: 1,
          basefont: 1,
          h5: 1,
          h4: 1,
          samp: 1,
          h6: 1,
          ol: 1,
          h1: 1,
          h3: 1,
          h2: 1,
          form: 1,
          font: 1,
          "#": 1,
          select: 1,
          menu: 1,
          ins: 1,
          abbr: 1,
          label: 1,
          code: 1,
          table: 1,
          script: 1,
          cite: 1,
          input: 1,
          iframe: 1,
          strong: 1,
          textarea: 1,
          noframes: 1,
          big: 1,
          small: 1,
          span: 1,
          hr: 1,
          sub: 1,
          bdo: 1,
          var: 1,
          div: 1,
          object: 1,
          sup: 1,
          strike: 1,
          dir: 1,
          map: 1,
          dl: 1,
          applet: 1,
          del: 1,
          isindex: 1,
          fieldset: 1,
          ul: 1,
          b: 1,
          acronym: 1,
          a: 1,
          blockquote: 1,
          i: 1,
          u: 1,
          s: 1,
          tt: 1,
          address: 1,
          q: 1,
          pre: 1,
          p: 1,
          em: 1,
          dfn: 1
        }),
        L = X(_({ a: 0 }), J), //aä¸è½è¢«åå¼ï¼æä»¥æä»
        M = _({ tr: 1 }),
        N = _({ "#": 1 }),
        O = X(_({ param: 1 }), K),
        P = X(_({ form: 1 }), A, D, E, I),
        Q = _({ li: 1, ol: 1, ul: 1 }),
        R = _({ style: 1, script: 1 }),
        S = _({ base: 1, link: 1, meta: 1, title: 1 }),
        T = X(S, R),
        U = _({ head: 1, body: 1 }),
        V = _({ html: 1 });

      var block = _({
        address: 1,
        blockquote: 1,
        center: 1,
        dir: 1,
        div: 1,
        dl: 1,
        fieldset: 1,
        form: 1,
        h1: 1,
        h2: 1,
        h3: 1,
        h4: 1,
        h5: 1,
        h6: 1,
        hr: 1,
        isindex: 1,
        menu: 1,
        noframes: 1,
        ol: 1,
        p: 1,
        pre: 1,
        table: 1,
        ul: 1
      }),
        empty = _({
          area: 1,
          base: 1,
          basefont: 1,
          br: 1,
          col: 1,
          command: 1,
          dialog: 1,
          embed: 1,
          hr: 1,
          img: 1,
          input: 1,
          isindex: 1,
          keygen: 1,
          link: 1,
          meta: 1,
          param: 1,
          source: 1,
          track: 1,
          wbr: 1
        });

      return _({
        // $ è¡¨ç¤ºèªå®çå±æ§

        // bodyå¤çåç´ åè¡¨.
        $nonBodyContent: X(V, U, S),

        //åç»æåç´ åè¡¨
        $block: block,

        //åèåç´ åè¡¨
        $inline: L,

        $inlineWithA: X(_({ a: 1 }), L),

        $body: X(_({ script: 1, style: 1 }), block),

        $cdata: _({ script: 1, style: 1 }),

        //èªé­ååç´ 
        $empty: empty,

        //ä¸æ¯èªé­åï¼ä½ä¸è½è®©rangeéä¸­éè¾¹
        $nonChild: _({ iframe: 1, textarea: 1 }),
        //åè¡¨åç´ åè¡¨
        $listItem: _({ dd: 1, dt: 1, li: 1 }),

        //åè¡¨æ ¹åç´ åè¡¨
        $list: _({ ul: 1, ol: 1, dl: 1 }),

        //ä¸è½è®¤ä¸ºæ¯ç©ºçåç´ 
        $isNotEmpty: _({
          table: 1,
          ul: 1,
          ol: 1,
          dl: 1,
          iframe: 1,
          area: 1,
          base: 1,
          col: 1,
          hr: 1,
          img: 1,
          embed: 1,
          input: 1,
          textarea: 1,
          link: 1,
          meta: 1,
          param: 1,
          h1: 1,
          h2: 1,
          h3: 1,
          h4: 1,
          h5: 1,
          h6: 1
        }),

        //å¦ææ²¡æå­èç¹å°±å¯ä»¥å é¤çåç´ åè¡¨ï¼åspan,a
        $removeEmpty: _({
          a: 1,
          abbr: 1,
          acronym: 1,
          address: 1,
          b: 1,
          bdo: 1,
          big: 1,
          cite: 1,
          code: 1,
          del: 1,
          dfn: 1,
          em: 1,
          font: 1,
          i: 1,
          ins: 1,
          label: 1,
          kbd: 1,
          q: 1,
          s: 1,
          samp: 1,
          small: 1,
          span: 1,
          strike: 1,
          strong: 1,
          sub: 1,
          sup: 1,
          tt: 1,
          u: 1,
          var: 1
        }),

        $removeEmptyBlock: _({ p: 1, div: 1 }),

        //å¨tableåç´ éçåç´ åè¡¨
        $tableContent: _({
          caption: 1,
          col: 1,
          colgroup: 1,
          tbody: 1,
          td: 1,
          tfoot: 1,
          th: 1,
          thead: 1,
          tr: 1,
          table: 1
        }),
        //ä¸è½¬æ¢çæ ç­¾
        $notTransContent: _({ pre: 1, script: 1, style: 1, textarea: 1 }),
        html: U,
        head: T,
        style: N,
        script: N,
        body: P,
        base: {},
        link: {},
        meta: {},
        title: N,
        col: {},
        tr: _({ td: 1, th: 1 }),
        img: {},
        embed: {},
        colgroup: _({ thead: 1, col: 1, tbody: 1, tr: 1, tfoot: 1 }),
        noscript: P,
        td: P,
        br: {},
        th: P,
        center: P,
        kbd: L,
        button: X(I, E),
        basefont: {},
        h5: L,
        h4: L,
        samp: L,
        h6: L,
        ol: Q,
        h1: L,
        h3: L,
        option: N,
        h2: L,
        form: X(A, D, E, I),
        select: _({ optgroup: 1, option: 1 }),
        font: L,
        ins: L,
        menu: Q,
        abbr: L,
        label: L,
        table: _({
          thead: 1,
          col: 1,
          tbody: 1,
          tr: 1,
          colgroup: 1,
          caption: 1,
          tfoot: 1
        }),
        code: L,
        tfoot: M,
        cite: L,
        li: P,
        input: {},
        iframe: P,
        strong: L,
        textarea: N,
        noframes: P,
        big: L,
        small: L,
        //trace:
        span: _({
          "#": 1,
          br: 1,
          b: 1,
          strong: 1,
          u: 1,
          i: 1,
          em: 1,
          sub: 1,
          sup: 1,
          strike: 1,
          span: 1
        }),
        hr: L,
        dt: L,
        sub: L,
        optgroup: _({ option: 1 }),
        param: {},
        bdo: L,
        var: L,
        div: P,
        object: O,
        sup: L,
        dd: P,
        strike: L,
        area: {},
        dir: Q,
        map: X(_({ area: 1, form: 1, p: 1 }), A, F, E),
        applet: O,
        dl: _({ dt: 1, dd: 1 }),
        del: L,
        isindex: {},
        fieldset: X(_({ legend: 1 }), K),
        thead: M,
        ul: Q,
        acronym: L,
        b: L,
        a: X(_({ a: 1 }), J),
        blockquote: X(_({ td: 1, tr: 1, tbody: 1, li: 1 }), P),
        caption: L,
        i: L,
        u: L,
        tbody: M,
        s: L,
        address: X(D, I),
        tt: L,
        legend: L,
        q: L,
        pre: X(G, C),
        p: X(_({ a: 1 }), L),
        em: L,
        dfn: L,
        mark: L
      });
    })());

    export default dtd;
