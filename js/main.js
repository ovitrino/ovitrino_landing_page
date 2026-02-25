var e, t = {
    132: (e, t, n) => {
        n(128);
        var s = n(96),
            i = n.n(s),
            o = n(146);
        const a = {
            init: () => {
                const e = (new Date).getFullYear();
                document.querySelector("[data-actual-year]") && document.querySelectorAll("[data-actual-year]").forEach((t => {
                    t.textContent = e
                }))
            }
        };
        n(61), n(129), n(130);
        var r = n(59),
            l = n.n(r);
        const c = ["fedora", "debian", "gentoo", "linpus", "mageia", "mandriva", "meego", "mint", "pclinuxos", "redhat", "sailfish", "slackware", "suse", "tizen", "ubuntu", "vectorlinux"];
        let d = null,
            u = [];
        const h = (e, t) => {
            t = t.toString().toLowerCase().replace(/[\s.]/g, "-"), u.push("is-" + e + "-" + t)
        },
            p = () => {
                d = (new (l())).getResult(), u.length && (document.documentElement.classList.remove(...u), u = []), d.browser.name && h("browser", d.browser.name), d.os.name && c.indexOf(d.os.name.toLowerCase()) >= 0 && h("os", "linux"), d.os.name && h("os", d.os.name), document.documentElement.classList.add(...u)
            },
            m = {
                init: p,
                resize: p
            },
            b = () => !(window.MSInputMethodContext && document.documentMode),
            v = () => {
                document.documentElement.style.setProperty("--vh", innerHeight + "px")
            },
            g = () => {
                b() && (v(), setTimeout(v, 1e3), window.addEventListener("load", v))
            },
            x = () => {
                b() && v()
            };
        var f = n(137);
        n(131);
        const y = "/",
            k = () => innerWidth <= 1024,
            w = document.querySelector("html");
        const q = {
            init: () => {
                document.querySelectorAll(".js-to-anchor").forEach((e => {
                    e.addEventListener("click", (e => {
                        e.preventDefault(), e.stopPropagation();
                        ! function (e) {
                            const t = document.querySelector(e);
                            if (t) {
                                const n = t.getBoundingClientRect().top + scrollY;
                                history.pushState({}, "", e), window.scrollTo({
                                    top: n,
                                    behavior: "smooth"
                                })
                            }
                        }(e.currentTarget.getAttribute("href"))
                    }))
                }))
            }
        };
        n(142);
        const L = 98750824,
            S = ["psbank.ru", "upravlyaem.ru"];
        let _ = null;

        function C(e) {
            let t = !1;
            return S.forEach((n => {
                e.indexOf(n) >= 0 && (t = !0)
            })), t
        }

        function E(e) {
            ym(L, "reachGoal", "cards show", {
                "main cards show": e.dataset.number
            })
        }
        const T = new class {
            constructor(e, t) {
                this.scrollReached = [], this.scrollValues = e, this.onScrollReached = t, this.handleScroll = this.handleScroll.bind(this)
            }
            getScrollPercentage() {
                const e = window.pageYOffset || document.documentElement.scrollTop,
                    t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - document.documentElement.clientHeight;
                if (0 === t) return 0;
                const n = e / t * 100;
                return Math.round(n)
            }
            handleScroll() {
                const e = this.getScrollPercentage(),
                    t = Math.round(e);
                for (let e = 0; e < this.scrollValues.length; e++) {
                    const n = this.scrollValues[e];
                    t >= n && !this.scrollReached.includes(n) && (this.scrollReached.push(n), this.onScrollReached(n))
                }
            }
            init() {
                window.addEventListener("scroll", this.handleScroll)
            }
            destroy() {
                window.removeEventListener("scroll", this.handleScroll), this.scrollReached = []
            }
        }([25, 50, 75, 100], (e => {
            ym(L, "reachGoal", "scroll depth", {
                "scroll depth": {
                    [location.href]: e
                }
            })
        }));
        const B = {
            init: function (e) {
                T.init(),
                    function () {
                        let e;
                        clearTimeout(e), e = setTimeout((() => {
                            ym(L, "reachGoal", "spent_on_page_15_sec", {
                                spent_on_page_15_sec: "true"
                            })
                        }), 15e3)
                    }(), e.querySelector("#client-logo").onclick = () => {
                        ym(L, "reachGoal", "client link", {
                            "client link": {
                                "logo header": location.href
                            }
                        })
                    }, e.querySelector("#rbc-logo").onclick = () => {
                        ym(L, "reachGoal", "rbc_logo_header_click", {
                            rbc_logo_header_click: location.href
                        })
                    }, e.querySelectorAll(".article__container a, .experts__container a").forEach((e => {
                        e.onclick = e => {
                            C(e.currentTarget.href) ? ym(L, "reachGoal", "client link", {
                                "client link": {
                                    "article text link": {
                                        [e.currentTarget.textContent]: location.href
                                    }
                                }
                            }) : ym(L, "reachGoal", "text link click", {
                                "text link click": {
                                    article: {
                                        [e.currentTarget.textContent]: location.href
                                    }
                                }
                            })
                        }
                    })), e.querySelectorAll(".block-read__item").forEach((e => {
                        e.onclick = e => {
                            ym(L, "reachGoal", "main material click", {
                                "main material click": e.currentTarget.dataset.name
                            })
                        }
                    })), e.querySelectorAll(".block-video__item").forEach((e => {
                        e.onclick = e => {
                            ym(L, "reachGoal", "main material click", {
                                "main material click": e.currentTarget.dataset.name
                            })
                        }
                    })), e.querySelectorAll(".test-result .sharing").forEach((e => {
                        e.onclick = e => {
                            ym(L, "reachGoal", "share", {
                                share: {
                                    test: {
                                        [e.currentTarget.dataset.share]: location.href
                                    }
                                }
                            })
                        }
                    })), e.querySelectorAll(".test .question a, .test .answer-btn a").forEach((e => {
                        e.onclick = e => {
                            C(e.currentTarget.href) && ym(L, "reachGoal", "client link", {
                                "client link": {
                                    "test text link": {
                                        [e.currentTarget.textContent]: location.href
                                    }
                                }
                            })
                        }
                    })), _ = new IntersectionObserver(((e, t) => {
                        e.forEach((e => {
                            e.isIntersecting && (e.target.classList.contains("experts__slide") ? E(e.target) : e.target.classList.contains("js-banner-show") && function (e) {
                                ym(L, "reachGoal", "banner show", {
                                    "banner show": {
                                        [e.dataset.type + " banner - " + e.dataset.name]: location.href
                                    }
                                })
                            }(e.target), t.unobserve(e.target))
                        }))
                    }), {
                        root: null,
                        rootMargin: "0px 0px 0px 0px"
                    }), e.querySelectorAll(".action__btn").forEach((t => {
                        t.onclick = () => {
                            ym(L, "reachGoal", "client link", {
                                "client link": "home" === e.dataset.barbaNamespace ? "main bottom link" : "article bottom link"
                            })
                        }
                    })), e.querySelectorAll(".js-banner-show").forEach((e => {
                        _.observe(e)
                    })), e.querySelectorAll(".experts__slide.is-slide-active").forEach((e => {
                        _.observe(e)
                    }))
            },
            destroy: function () {
                _ && _.disconnect(), T.destroy()
            },
            virtualHit: function () {
                ym(L, "hit", location.pathname)
            },
            experstAnalytic: E
        };
        var I = n(64),
            j = n.n(I);
        let A = !0;
        const R = {
            init: function (e, t) {
                j().hooks.beforeLeave((e => {
                    let {
                        current: n
                    } = e;
                    t.forEach((e => e(n.container)))
                })), j().hooks.beforeEnter((t => {
                    let {
                        next: n
                    } = t;
                    window.scrollTo(0, 0), e.forEach((e => e(n.container))), A || B.virtualHit(), A = !1
                })), j().init({
                    debug: !0,
                    requestError: (e, t, n, s) => ("click" === t && s.status && 404 === s.status && j().go("/404"), !1)
                })
            }
        };
        const G = {
            init: function (e) {
                if ("home" === e.dataset.barbaNamespace) {
                    const t = e.querySelector(".menu").querySelector(".menu__btn--fixed"),
                        n = e => {
                            const n = e.getBoundingClientRect().left + e.clientWidth - window.innerWidth / 2 + t.clientWidth + 10;
                            t.style.transform = "translateX(" + n + "px) translateY(-29%)"
                        },
                        s = () => {
                            t.style.transform = "translateX(0px) translateY(0%)"
                        };
                    setTimeout((() => {
                        const t = e.querySelectorAll(".home-block__sticky");
                        t.forEach(((e, i) => {
                            const o = e.parentNode;
                            (() => {
                                gsap.to(e, {
                                    scrollTrigger: {
                                        trigger: e,
                                        start: "top top-=1px",
                                        end: "+=" + (o.clientHeight + e.clientHeight),
                                        pin: !0,
                                        onEnter: () => {
                                            e.classList.add("home-block__sticky--active"), n(e)
                                        },
                                        onEnterBack: () => {
                                            n(e)
                                        },
                                        onLeave: () => {
                                            t.length - 1 === i && s()
                                        },
                                        onLeaveBack: () => {
                                            0 === i && s(), e.classList.remove("home-block__sticky--active")
                                        }
                                    }
                                });
                                document.addEventListener("home-page-season-switсh", (() => {
                                    console.log("switch season"), ScrollTrigger.refresh()
                                }))
                            })()
                        }))
                    }), 500)
                }
            },
            resize: function () { },
            destroy: function () { }
        };
        n(143), n(144);
        const H = [{
            question: "Вы тратите больше или меньше, чем зарабатываете?",
            answers: [{
                text: "Трачу намного меньше, чем зарабатываю. Много накапливаю",
                score: 3
            }, {
                text: "Трачу чуть меньше, чем зарабатываю. Получается сберегать",
                score: 2
            }, {
                text: "Трачу столько же, сколько получаю. Накоплений почти нет",
                score: 1
            }, {
                text: "Трачу больше, чем получаю",
                score: 0
            }]
        }, {
            question: "На какой срок хватит ваших накоплений?",
            answers: [{
                text: "На месяц или два",
                score: 1
            }, {
                text: "Примерно на полгода",
                score: 2
            }, {
                text: "На год или больше",
                score: 3
            }, {
                text: "У меня нет накоплений",
                score: 0
            }]
        }, {
            question: "Вовремя ли вы платите по кредитам и счетам?",
            answers: [{
                text: "Да, у меня нет ни одной просрочки",
                score: 2
            }, {
                text: "Не всегда, иногда пропускаю платежи, но потом компенсирую",
                score: 1
            }, {
                text: "Все время приходится занимать",
                score: 0
            }, {
                text: "Не пользуюсь кредитами. По счетам обычно плачу заранее",
                score: 3
            }]
        }, {
            question: "Планируете ли крупные расходы заранее?",
            answers: [{
                text: "Это не для меня, нет привычки планировать траты",
                score: 0
            }, {
                text: "Обязательно, все ожидаемые траты расписаны наперед",
                score: 3
            }, {
                text: "Ключевую часть, только самые крупные статьи расходов",
                score: 2
            }, {
                text: "Стараюсь планировать, но не придерживаюсь намеченного графика трат",
                score: 1
            }]
        }, {
            question: "Ведете ли вы семейный бюджет?",
            answers: [{
                text: "Да, у меня все подсчитано и зафиксировано",
                score: 2
            }, {
                text: "Стараюсь, но иногда забываю что-то вносить",
                score: 1
            }, {
                text: "Не вижу в этом смысла",
                score: 0
            }, {
                text: "Ведением бюджета занимается мой финансовый советник",
                score: 3
            }]
        }, {
            question: "Что вы почувствуете, если возникли непредвиденные расходы?",
            answers: [{
                text: "Не буду сильно расстраиваться, оплачу то, что требуется, задействуя свой финансовый резерв",
                score: 3
            }, {
                text: "Тревожность: проверю резервы, чтобы убедиться, что их хватит",
                score: 1
            }, {
                text: "Стресс: свободных денег обычно не хватает",
                score: 0
            }, {
                text: "Раздражение: придется меньше средств отправить в накопления",
                score: 2
            }]
        }, {
            question: "Родственники попросили дать им в долг сумму вашего двухмесячного дохода. Согласитесь?",
            answers: [{
                text: "Нет, это станет избыточной нагрузкой на мой бюджет",
                score: 0
            }, {
                text: "Только если сумму в два раза меньше",
                score: 1
            }, {
                text: "Возьму из накоплений и смогу помочь",
                score: 2
            }, {
                text: "Да, без проблем",
                score: 3
            }]
        }, {
            question: "Сколько у вас источников дохода?",
            answers: [{
                text: "Один и не всегда стабильный",
                score: 0
            }, {
                text: "Иногда два, но бывает, что один",
                score: 1
            }, {
                text: "Три",
                score: 2
            }, {
                text: "Четыре и более",
                score: 3
            }]
        }, {
            question: "Какую часть дохода вы откладываете в накопления?",
            answers: [{
                text: "Половину или больше",
                score: 3
            }, {
                text: "От 21 до 49%",
                score: 2
            }, {
                text: "Не больше 20%",
                score: 1
            }, {
                text: "Я не откладываю",
                score: 0
            }]
        }, {
            question: "Вы занимаетесь инвестициями на фондовом рынке?",
            answers: [{
                text: "Нет",
                score: 0
            }, {
                text: "Пробовал, но разочаровался и перестал",
                score: 1
            }, {
                text: "Да, предпочитаю консервативные инструменты",
                score: 2
            }, {
                text: "Да, владею активным брокерским счетом или договором ДУ, а также держу портфель фондов",
                score: 3
            }]
        }],
            M = [{
                id: 1,
                min: 23,
                max: 30,
                title: "Финансовая свобода",
                description: "Похоже, вы в хорошей финансовой форме и можете поделиться своими знаниями с другими. Однако рекомендации умного <a href='https://www.psbank.ru/Personal/Wealth/Robot-adviser?utm_source=rbc&utm_medium=robot&utm_campaign=wealth_academy_021224' target='_blank'>робота-советника от «ПСБ Благосостояние»<sup>*</sup></a> могут пригодиться для точной настройки инвестиционных инструментов."
            }, {
                id: 2,
                min: 16,
                max: 22,
                title: "Финансовая стабильность",
                description: "Похоже, вы многое предусмотрели и готовы к разным жизненным ситуациям. Сделать финансовое положение еще более уверенным помогут <a href='https://www.psbank.ru/Personal/Wealth/MutualFonds?utm_source=rbc&utm_medium=MutualFonds&utm_campaign=wealth_academy_181124' target='_blank'>ОПИФы от «ПСБ Благосостояние»<sup>*</sup></a>: это открытые паевые инвестфонды, которые диверсифицируют портфель и снижают риски."
            }, {
                id: 3,
                min: 9,
                max: 15,
                title: "Финансовая нестабильность",
                description: "При таком отношении к накоплениям финансовое положение можно назвать шатким, необходимо уделять больше внимания формированию сбережений. Вам может помочь <a href='https://www.psbank.ru/Personal/Wealth/Investor_school/Module-10-1?utm_source=rbc_psb&utm_medium=invest-school&utm_campaign=wealth_academy_081124' target='_blank'>«Школа инвестора»<sup>*</sup></a> от «ПСБ Благосостояние»: банковские эксперты расскажут, как сформировать финансовую подушку безопасности."
            }, {
                id: 4,
                min: 0,
                max: 8,
                title: "Финансовый риск",
                description: "При таком подходе к собственным деньгам они могут закончиться очень быстро. Вам может помочь <a href='https://www.psbank.ru/Personal/Wealth/Investor_school/Module-10-1?utm_source=rbc_psb&utm_medium=invest-school&utm_campaign=wealth_academy_081124' target='_blank'>«Школа инвестора» <sup>*</sup></a> от «ПСБ Благосостояние»: банковские эксперты с профильным образованием расскажут, как сформировать финансовую подушку безопасности."
            }];
        var O = n(65),
            z = n.n(O);
        const P = [{
            img: "/assets/images/quiz/shares/0.jpg",
            title: "Финансовая \u2028свобода"
        }, {
            img: "/assets/images/quiz/shares/1.jpg",
            title: "Финансовая \u2028стабильность"
        }, {
            img: "/assets/images/quiz/shares/2.jpg",
            title: "Финансовая \u2028нестабильность"
        }, {
            img: "/assets/images/quiz/shares/3.jpg",
            title: "Финансовый\u2028 риск"
        }];
        let U = null;
        const W = {
            init: function (e) { },
            generateData: function (e, t) {
                ((e, t) => {
                    U = z().openWindow("");
                    let n = P[t].title,
                        s = "" + (location.origin + P[t].img);
                    console.log(s);
                    let i = {
                        url: location.origin + y,
                        title: n,
                        image: s,
                        text: ""
                    },
                        o = "http://vkontakte.ru/share.php?url=" + encodeURIComponent(i.url) + "\n\t\t\t\t\t\t&title=" + encodeURIComponent(i.title) + "\n\t\t\t\t\t\t&description=" + encodeURIComponent(i.text) + "\n\t\t\t\t\t\t&image=" + encodeURIComponent(i.image) + "\n\t\t\t\t\t\t&noparse=true",
                        a = "https://connect.ok.ru/offer?url=" + encodeURIComponent(i.url) + "\n\t\t\t\t\t\t&title=" + encodeURIComponent(i.title) + "\n\t\t\t\t\t\t&description=" + encodeURIComponent(i.text) + "\n\t\t\t\t\t\t&imageUrl=" + encodeURIComponent(i.image) + "\n\t\t\t\t\t\t&noparse=true",
                        r = "https://t.me/share/url?url=" + encodeURIComponent(i.url) + "\n\t\t\t\t\t\t&title=" + encodeURIComponent(i.title) + "\n\t\t\t\t\t\t&description=" + encodeURIComponent(i.text) + "\n\t\t\t\t\t\t&imageUrl=" + encodeURIComponent(i.image) + "\n\t\t\t\t\t\t&noparse=true";
                    U.location = {
                        vk: o,
                        tg: r,
                        ok: a
                    }[e]
                })(e, t)
            }
        };
        let D = null,
            N = 0,
            Y = 0,
            V = null,
            F = null,
            K = null,
            X = null,
            J = null,
            Q = null,
            Z = null,
            $ = null,
            ee = null,
            te = null,
            ne = null,
            se = null,
            ie = null;
        let oe = null;
        const ae = {
            init: function (e) {
                function t() {
                    const e = H[N];
                    X.innerHTML = '\n            <div class="question">' + e.question + '</div>\n            <div class="answer-wrapper">\n            ' + e.answers.map(((e, t) => '\n                        <button class="answer-btn" data-score="' + e.score + '">\n                            ' + e.text + "\n                        </button>\n                    ")).join("") + "\n\n            </div>\n        ", V = null, J.classList.add("hidden"), K.classList.remove("hidden"), setTimeout((() => {
                        K.classList.add("isOpen")
                    }), 50);
                    const t = e.question.slice(0, 100);
                    ym(L, "reachGoal", "question show", {
                        "question show": {
                            [N + 1]: t
                        }
                    })
                }

                function n() {
                    ym(L, "reachGoal", "test start", {
                        "test start": !0
                    }), F.classList.add("hidden"), setTimeout((() => {
                        K.classList.remove("hidden"), t()
                    }), 600)
                }

                function s(t) {
                    if (!t.target.classList.contains("answer-btn")) return;
                    e.querySelectorAll(".answer-btn").forEach((e => e.classList.remove("selected"))), t.target.classList.add("selected"), V = parseInt(t.target.dataset.score, 10), J.classList.remove("hidden")
                }

                function i() {
                    if (null === V) return;
                    Y += V, K.classList.remove("isOpen");
                    const n = e.querySelector(".answer-btn.selected").textContent.trim();
                    ym(L, "reachGoal", "question answer", {
                        "question answer": {
                            [N + 1]: n
                        }
                    }), setTimeout((() => {
                        K.classList.add("hidden"), setTimeout((() => {
                            N < H.length - 1 ? (N++, t()) : (K.classList.remove("isOpen"), J.classList.add("hidden"), setTimeout((() => {
                                K.classList.add("hidden"), Q.classList.remove("hidden"), ie = M.find((e => Y >= e.min && Y <= e.max)), ie && (ee.innerHTML = ie.title, te.innerHTML = ie.description, se.classList.add("is-active-" + ie.id), ym(L, "reachGoal", "test finish", {
                                    "test finish": {
                                        result: ie.title
                                    }
                                }), e.querySelectorAll(".test-result a").forEach((e => {
                                    e.onclick = e => {
                                        ym(L, "reachGoal", "client link", {
                                            "client link": {
                                                "test final link": {
                                                    [e.currentTarget.textContent]: location.href
                                                }
                                            }
                                        }), console.log({
                                            [e.currentTarget.textContent]: location.href
                                        })
                                    }
                                })))
                            }), 200))
                        }), 600)
                    }), 50)
                }

                function o() {
                    ie = null, N = 0, Y = 0, V = null, Q.classList.add("hidden"), J.classList.add("hidden"), se.classList.remove("is-active-1", "is-active-2", "is-active-3", "is-active-4"), ym(L, "reachGoal", "test resume", {
                        "test resume": !0
                    }), setTimeout((() => {
                        F.classList.remove("hidden")
                    }), 600)
                }

                function a(e) {
                    const t = e.currentTarget.dataset.share;
                    W.generateData(t, ie.id - 1)
                } (e => {
                    D = e, ie = null, N = 0, Y = 0, V = null, F = e.querySelector(".test-intro"), K = e.querySelector(".quiz-container"), X = e.querySelector("#question-container"), J = e.querySelector("#next-btn"), Q = e.querySelector("#result-container"), Z = k() ? e.querySelector(".restart-btn.for-devices") : e.querySelector(".restart-btn.for-desktop"), $ = e.querySelector(".test__btn"), ee = e.querySelector(".test-result__title"), te = e.querySelector(".test-result__text"), ne = e.querySelectorAll("[data-share]"), se = e.querySelector(".disclaimer")
                })(e), F && ($.addEventListener("click", n), e.addEventListener("click", s), J.addEventListener("click", i), Z.addEventListener("click", o), ne.forEach((e => {
                    e.addEventListener("click", (e => a(e)))
                })), oe = () => {
                    $.removeEventListener("click", n), D.removeEventListener("click", s), J.removeEventListener("click", i), Z.removeEventListener("click", o), ne.forEach((e => {
                        e.removeEventListener("click", (e => a(e)))
                    }))
                })
            },
            resize: function () { },
            destroy: function () {
                oe && oe()
            }
        };
        const re = {
            init: function (e) {
                const t = e || document;
                if (t.querySelector("[data-social]")) {
                    const e = t.querySelectorAll("[data-social]");
                    Array.prototype.forEach.call(e, (e => {
                        e.addEventListener("click", (e => {
                            const t = e.currentTarget.dataset.social,
                                n = location.origin + location.pathname;
                            z()[t](n)
                        }))
                    }))
                }
            }
        },
            le = "/",
            ce = {
                domain: "/",
                baseDir: le,
                title: "",
                description: "",
                keywords: "",
                image: "",
                link: {
                    appleTouchIcon180x180: "/favicon/apple-touch-icon.png",
                    icon32x32: "/favicon/favicon-32x32.png",
                    icon192x192: "/favicon/android-chrome-192x192.png",
                    icon16x16: "/favicon/favicon-16x16.png",
                    manifest: "/site.webmanifest",
                    maskIcon: {
                        href: "/favicon/safari-pinned-tab.svg",
                        color: "#284045"
                    },
                    icon: "/favicon/favicon.ico"
                },
                meta: {
                    msapplicationTileColor: "#2d89ef",
                    msapplicationTileImage: "/favicon/mstile-144x144.png",
                    msapplicationConfig: "/browserconfig.xml",
                    themeColor: "#ffffff",
                    ogImageType: "image/jpeg"
                }
            },
            {
                baseDir: de
            } = ce,
            ue = [{
                number: 1,
                id: 1,
                picture: {
                    path: de + "assets/images/experts/1",
                    ext: "png"
                },
                name: "Владимир<br>Сердюков",
                position: "генеральный директор УК ПСБ",
                title: "Если человек только начинает интересоваться темой инвестиций, нужно ли ему искать единомышленников для обсуждения? Где это можно сделать?",
                text: ['Получить базовые финансовые знания сейчас просто, в открытом доступе можно найти множество бесплатных ресурсов. Предпочтение стоит отдавать тем, что разработали госорганы и профессиональные участники рынка. Группа ПСБ организовала <a href="https://www.psbank.ru/Personal/Wealth/Investor_school/Module-10-1?utm_source=rbc_psb&utm_medium=invest-school&utm_campaign=wealth_academy_081124" target="_blank">«Школу инвестора»</a>. В проекте бесплатно в онлайн-формате можно получить необходимые знания по эффективному управлению собственным капиталом. Новичкам на рынке инвестиций лучше положиться на профессиональных управляющих. Они сформируют оптимальный портфель, подходящий под цели клиента. И при необходимости проведут ребалансировку портфеля с учетом меняющейся конъюнктуры.']
            }, {
                number: 2,
                id: 1,
                picture: {
                    path: de + "assets/images/experts/1",
                    ext: "png"
                },
                name: "Владимир<br>Сердюков",
                position: "генеральный директор УК ПСБ",
                title: "Благосостояние — что это в вашем понимании, как бы вы охарактеризовали этот термин?",
                text: ["Для меня благосостояние — это про свободу и время. Когда есть сформированный финансовый ресурс, который закрывает базовые финансовые потребности семьи и близких, появляется возможность использовать время для получения новых впечатлений и развития. Кроме того, благосостояние позволяет сфокусироваться на достижении долгосрочных целей."]
            }, {
                number: 3,
                id: 2,
                picture: {
                    path: de + "assets/images/experts/2",
                    ext: "png"
                },
                name: "Александр<br>Сокологорский",
                position: "директор по брокерскому обслуживанию департамента управления благосостоянием ПСБ",
                title: "Как вы относитесь к тезису, что инвестиции — это опция для богатых, а человеку среднего достатка тут делать нечего?",
                text: ["Думаю, такой тезис сильно устарел. Инвестиционный инструментарий существенно расширился, порог входа в мир инвестиций снизился. Сейчас на фондовом рынке можно инвестировать в биржевые фонды, для покупки которых достаточно нескольких рублей на брокерском счете, а стоимость минимального лота некоторых акций на бирже исчисляется сотнями рублей. Таким образом, можно стать акционером компании по цене пары чашек кофе."]
            }, {
                number: 4,
                id: 2,
                picture: {
                    path: de + "assets/images/experts/2",
                    ext: "png"
                },
                name: "Александр<br>Сокологорский",
                position: "директор по брокерскому обслуживанию департамента управления благосостоянием ПСБ",
                title: "Ваш топ-5 книг для начинающего инвестора.",
                text: ["Я назову книги про инвестиции в широком смысле этого слова, они мне запомнились: «Как играть и выигрывать на бирже» Александра Элдера, «Правила инвестирования Уоррена Баффетта» Джереми Миллера, «Технический анализ фьючерсных рынков» Джона Мэрфи, «Когда гений терпит поражение. Взлет и падение компании Long-Term Capital Management, или Как один небольшой банк создал дыру в триллион долларов» Роджера Ловенстайна, «Ошибки топ-менеджеров ведущих корпораций. Анализ и практические выводы» Сидни Финкельштейна."]
            }, {
                number: 5,
                id: 3,
                picture: {
                    path: de + "assets/images/experts/3",
                    ext: "png"
                },
                name: "Елена<br>Часовских",
                position: "управляющий директор по ЗПИФ УК ПСБ",
                title: "Подходящее ли сейчас время, чтобы начать инвестировать на фондовом рынке?",
                text: ["Для долгосрочного инвестирования сейчас хорошее время «входа на рынок» — с прекрасной возможностью купить активы по привлекательным ценам. При этом следует внимательно подойти к анализу и выбору объектов инвестирования. Высокие ставки и дорогая стоимость заимствования приводят к увеличению долговой нагрузки и процентных расходов компаний, что сокращает как возможности развития бизнеса, так и выплаты дивидендов."]
            }, {
                number: 6,
                id: 3,
                picture: {
                    path: de + "assets/images/experts/3",
                    ext: "png"
                },
                name: "Елена<br>Часовских",
                position: "управляющий директор по ЗПИФ УК ПСБ",
                title: "Как инвесторам сохранять спокойствие в период волатильности рынка?",
                text: ["Важно оценить, как принимаемое в данный момент решение соответствует вашей инвестиционной стратегии, не является ли оно результатом сиюминутного волнения, негативного информационного фона или иных внешних факторов. Следует принимать во внимание цикличность рынка: за текущим падением будет последующая коррекция, восстановление и рост. Это лишь вопрос времени."]
            }, {
                number: 7,
                id: 4,
                picture: {
                    path: de + "assets/images/experts/4",
                    ext: "png"
                },
                name: "Николай<br>Рясков",
                position: "управляющий директор по инвестициям УК ПСБ",
                title: "Почему следует ответственно относиться к деньгам и вырабатывать полезные финансовые привычки?",
                text: ["Важно ответственно подходить не только к своим доходам, но и к расходам, откладывать деньги на достойный уровень жизни после ухода на пенсию и планомерно увеличивать инвестиции, контролируя траты. Преимущество инвестиций состоит в том, что деньги не спят и не нуждаются в отдыхе в отличие от человека. Более того, ответственное отношение к собственным финансовым активам позволит человеку чувствовать себя устойчиво в кризисных ситуациях, сохранять спокойствие в условиях нестабильности на рынках и в экономике в целом."]
            }, {
                number: 8,
                id: 4,
                picture: {
                    path: de + "assets/images/experts/4",
                    ext: "png"
                },
                name: "Николай<br>Рясков",
                position: "управляющий директор по инвестициям УК ПСБ",
                title: "Самостоятельное инвестирование или доверительное управление — что выбрать?",
                text: ["На мой взгляд, доверять свои инвестиции лучше профессионалам. В случае получения медицинской помощи или при управлении сложными механизмами вы сделаете выбор в пользу специалистов. Управление активами — не менее сложная работа, требующая вовлеченности, самоотдачи и контроля риска."]
            }];
        class he {
            constructor(e) {
                if (this.slider = e.querySelector(".js-experts-slider"), !this.slider) return !1;
                this.template = e.querySelector("#template-expert"), this.container = this.slider.querySelector(".js-slider-container"), this.images = this.slider.querySelectorAll(".js-expert-image"), this.activeImage = this.images[0], this.slidesLength = this.images.length - 1, this.pagination = this.slider.querySelector(".js-current-index"), this.summaries = this.slider.querySelectorAll(".js-experts-summary"), this.activeSummary = this.summaries[0], this.clickHandlerShadow = this.clickHandler.bind(this), this.currentIndex = 0, this.duration = 1e3, this.isAnimating = !1, this.currentId = null, this.sliderContainerScroll = this.slider.closest(".js-slider-container-scroll"), this.direction = "next", this.addEvents(), this.init()
            }
            init() {
                this.activeContentBlock = this.createContentBlock(0), this.nextContentBlock = this.createContentBlock(1), this.activeContentBlock.classList.add("is-slide-active"), k() ? this.nextContentBlock.classList.add("is-slide-next") : (this.prevContentBlock = this.createContentBlock(), this.nextContentBlock.classList.add("is-slide-next", "is-absolute"), this.prevContentBlock.classList.add("is-slide-prev", "is-absolute")), this.updateImage(), this.fullContentBlock(this.activeContentBlock, 0), this.container.appendChild(this.activeContentBlock), this.container.appendChild(this.nextContentBlock), k() || this.container.appendChild(this.prevContentBlock), this.keyUp = this.keyHandler.bind(this), document.addEventListener("keyup", this.keyUp)
            }
            createContentBlock() {
                const e = this.template.content.cloneNode(!0).querySelector(".experts__slide");
                return e.style.transition = this.duration / 1e3 + "s", k() || e.classList.add("is-absolute"), e
            }
            nextSlide() {
                this.direction = "next", ++this.currentIndex, this.update()
            }
            prevSlide() {
                this.direction = "prev", --this.currentIndex, this.update()
            }
            keyHandler(e) {
                this.slider.classList.contains("pointer-none") || (37 === e.keyCode ? this.prevSlide() : 39 === e.keyCode && this.nextSlide())
            }
            clickHandler(e) {
                e.target.closest(".js-slider-prev") && this.prevSlide(), e.target.closest(".js-slider-next") && this.nextSlide()
            }
            addEvents() {
                this.slider.addEventListener("click", this.clickHandlerShadow)
            }
            update() {
                this.slider.classList.add("pointer-none"), this.currentIndex > this.slidesLength && (this.currentIndex = 0), this.currentIndex < 0 && (this.currentIndex = this.slidesLength), this.updatePagination(), this.updateSummary(), this.updateImage(), this.updateContent(), k && setTimeout((() => {
                    window.scrollTo({
                        top: this.sliderContainerScroll.getBoundingClientRect().top + scrollY,
                        behavior: "smooth"
                    })
                }), 1e3)
            }
            updatePagination() {
                gsap.to(this.pagination, {
                    autoAlpha: 0,
                    yoyo: !0,
                    repeat: 1,
                    onRepeat: () => {
                        this.pagination.textContent = (this.currentIndex + 1).toString().padStart(2, "0")
                    }
                })
            }
            updateSummary() {
                this.currentId !== ue[this.currentIndex].id && gsap.timeline().to(this.activeSummary, {
                    autoAlpha: 0,
                    onComplete: () => {
                        this.activeSummary.classList.add("is-hidden"), this.summaries[this.currentIndex].classList.remove("is-hidden")
                    }
                }).to(this.summaries[this.currentIndex], {
                    autoAlpha: 1,
                    onComplete: () => {
                        this.activeSummary = this.summaries[this.currentIndex]
                    }
                })
            }
            updateImage() {
                this.currentId !== ue[this.currentIndex].id && gsap.timeline({
                    defaults: {
                        duration: this.duration / 1e3
                    }
                }).to(this.activeImage, {
                    autoAlpha: 0
                }, 0).to(this.images[this.currentIndex], {
                    autoAlpha: 1,
                    onComplete: () => {
                        this.activeImage = this.images[this.currentIndex]
                    }
                }, 0)
            }
            fullContentBlock(e, t) {
                t > this.slidesLength && (t = 0), t < 0 && (t = this.slidesLength);
                const n = e.querySelector(".experts__content");
                n.innerHTML = "", e.dataset.number = ue[t].number, this.currentId = ue[t].id;
                const s = document.createElement("h3");
                s.innerHTML = ue[t].title, n.appendChild(s), ue[t].text.forEach((e => {
                    const t = document.createElement("p");
                    t.innerHTML = e, n.appendChild(t)
                }))
            }
            updateContent() {
                "next" === this.direction ? (this.activeContentBlock.classList.remove("is-slide-active"), k() || this.activeContentBlock.classList.add("is-slide-prev", "is-absolute")) : (this.activeContentBlock.classList.remove("is-slide-active"), this.activeContentBlock.classList.add("is-slide-next"), this.prevContentBlock.classList.add("is-slide-active"), this.nextContentBlock.classList.add("is-slide-new")), this.newBlock = this.createContentBlock(), this.fullContentBlock("next" === this.direction ? this.nextContentBlock : this.prevContentBlock, this.currentIndex), "next" === this.direction ? this.newBlock.classList.add("is-slide-next", "is-slide-new", "is-absolute") : this.newBlock.classList.add("is-slide-prev"), this.container.appendChild(this.newBlock), setTimeout((() => {
                    "next" === this.direction && (this.nextContentBlock.classList.remove("is-slide-next"), this.nextContentBlock.classList.add("is-slide-active"))
                }), k() ? 500 : 250), setTimeout((() => {
                    "next" === this.direction && this.newBlock.classList.remove("is-slide-new")
                }), 400), setTimeout((() => {
                    "next" === this.direction ? (this.prevContentBlock ? (this.prevContentBlock.remove(), this.prevContentBlock = this.activeContentBlock) : this.activeContentBlock.remove(), this.nextContentBlock.classList.remove("is-absolute"), this.activeContentBlock = this.nextContentBlock, this.nextContentBlock = this.newBlock) : (this.nextContentBlock.remove(), this.prevContentBlock.classList.remove("is-absolute"), this.nextContentBlock = this.activeContentBlock, this.activeContentBlock = this.prevContentBlock, this.prevContentBlock = this.newBlock), B.experstAnalytic(this.activeContentBlock), this.slider.classList.remove("pointer-none")
                }), this.duration)
            }
            destroy() {
                this.slider.removeEventListener("click", this.clickHandlerShadow), document.removeEventListener("keyup", this.keyUp)
            }
        }
        let pe = null;
        const me = {
            init: function (e) {
                pe = new he(e)
            },
            resize: function () { },
            destroy: function () {
                pe.destroy()
            }
        };
        let be = null,
            ve = null;

        function ge() {
            w.classList.remove("is-show-team")
        }

        function xe() {
            w.classList.add("is-show-team")
        }

        function fe(e) {
            k() && (e.target.closest(".about__wrapper") || e.target.closest(".about__advertising") || ge())
        }
        const ye = {
            init: function (e) {
                be = e.querySelector(".about__advertising.for-devices"), ve = e.querySelector(".about__close"), be.onclick = xe, ve.onclick = ge, document.addEventListener("click", fe)
            },
            destroy: function () {
                document.removeEventListener("click", fe)
            }
        },
            ke = {
                init: () => {
                    const e = document.querySelector(".menu");
                    e && (e.addEventListener("click", (t => {
                        t.target.closest(".menu__btn") && (e.dataset.open = 1 - +e.dataset.open, "0" !== e.dataset.open ? (document.body.classList.add("menu-open"), e.querySelector(".menu__list").classList.remove("overflow-hidden")) : (document.body.classList.remove("menu-open"), setTimeout((() => {
                            "0" === e.dataset.open && e.querySelector(".menu__list").classList.add("overflow-hidden")
                        }), 1e3)))
                    })), window.addEventListener("scroll", (() => {
                        e.dataset.open = 0, document.body.classList.remove("menu-open"), setTimeout((() => {
                            "0" === e.dataset.open && e.querySelector(".menu__list").classList.add("overflow-hidden")
                        }), 1e3)
                    })))
                }
            };
        var we = n(147),
            qe = n(148),
            Le = n(66),
            Se = n.n(Le),
            _e = n(145);
        const Ce = {
            init: function (e) {
                e.querySelectorAll(".js-split-text").forEach((e => {
                    new _e.a(e, {
                        linesClass: "text-overflow",
                        tag: "span",
                        type: "lines, words"
                    }).lines.forEach(((e, t) => {
                        e.style.setProperty("--line-delay", .1 * t + "s")
                    }))
                }))
            }
        };
        let Ee = [],
            Te = [],
            Be = null,
            Ie = 98750824;
        const je = () => {
            Be && (clearInterval(Be), Be = null)
        };
        let Ae = 0;
        const Re = {
            init: e => "home" !== e.dataset.barbaNamespace && (Ee = e.querySelectorAll(".video-js"), !!Ee.length && void Ee.forEach((e => {
                Ae++;
                const t = videojs(e, {
                    controls: !0,
                    playsinline: !0,
                    muted: !0,
                    html5: {
                        nativeAudioTracks: !1,
                        nativeVideoTracks: !1,
                        nativeTextTracks: !1
                    },
                    hls: {
                        overrideNative: !0
                    }
                });
                t.av_id = Ae, t.src({
                    src: e.dataset.src,
                    type: "application/x-mpegURL",
                    withCredentials: !1
                }), t.on("play", (() => {
                    var n;
                    ym(Ie, "reachGoal", "video play", {
                        "video play": e.dataset.name
                    }), Te.forEach((e => {
                        e.av_id !== t.av_id && e.pause()
                    })), n = e.dataset.name, Be && clearInterval(Be), Be = setInterval((() => {
                        ym(Ie, "reachGoal", "video 30s", {
                            "video 30s": n
                        })
                    }), 3e4)
                })), t.on("pause", (() => {
                    je()
                })), t.on("ended", (() => {
                    ym(Ie, "reachGoal", "video finish", {
                        "video finish": e.dataset.name
                    }), je()
                })), t.on("error", (() => {
                    je()
                })), Te.push(t)
            }))),
            destroy: () => {
                if (!Ee.length || !Te.length) return !1;
                Te.forEach((e => {
                    e.dispose()
                })), Ee = [], Te = []
            }
        };
        window.seasonEvents = {
            switchSeason: new CustomEvent("home-page-season-switсh", {
                detail: {
                    type: "",
                    value: ""
                }
            })
        };
        const Ge = {
            init: e => {
                if (!e.querySelector(".js-video-block")) return;
                const t = e.querySelector(".js-video-block"),
                    n = t.querySelectorAll(".js-pagination-selector"),
                    s = t.querySelector(".js-pagination-button"),
                    i = t.querySelector(".js-pagination-square");
                n.forEach((e => {
                    e.addEventListener("click", (() => {
                        if (e.classList.contains("is-active")) return;
                        const n = e.dataset.pagination,
                            o = t.querySelector(".js-authors:not(.is-hidden)"),
                            a = t.querySelector('.js-authors[data-authors="' + n + '"]'),
                            r = t.querySelector(".js-pagination-item.is-active"),
                            l = t.querySelector('.js-pagination-item[data-pagination="' + n + '"]'),
                            c = t.querySelector(".js-video-items:not(.is-hidden)"),
                            d = t.querySelector('.js-video-items[data-video-items="' + n + '"]'),
                            u = (o.dataset.authors, t.querySelector(".js-pagination-selector-text:not(.is-hidden)")),
                            h = t.querySelector('.js-pagination-selector-text[data-text="' + n + '"]'),
                            p = gsap.timeline(),
                            m = .4;
                        p.to([o, c], {
                            duration: m,
                            autoAlpha: 0,
                            onStart() {
                                i.dataset.pagination = n
                            },
                            onComplete() {
                                o.classList.add("is-hidden"), c.classList.add("is-hidden"), u.classList.add("is-hidden"), r.classList.remove("is-active"), l.classList.add("is-active"), console.log(o.dataset.authors, a.dataset.authors), 2 === +a.dataset.authors ? s.dataset.pagination = 1 : s.dataset.pagination = 2, gsap.killTweensOf([o, c]), gsap.set([o, c], {
                                    clearProps: "all"
                                }), gsap.to(window, {
                                    duration: m,
                                    scrollTo: t,
                                    autoKill: !0
                                })
                            }
                        }).from([a, d], {
                            duration: m,
                            autoAlpha: 0,
                            onStart() {
                                a.classList.remove("is-hidden"), d.classList.remove("is-hidden"), h.classList.remove("is-hidden")
                            },
                            onComplete() {
                                window.seasonEvents.switchSeason.detail.type = "season", window.seasonEvents.switchSeason.detail.value = n, document.dispatchEvent(window.seasonEvents.switchSeason)
                            }
                        }, m)
                    }))
                }))
            },
            resize: () => { },
            destroy: () => { }
        };
        const He = {
            init: function (e) {
                console.log("action init"), e.querySelector(".js-action-button-to-top").addEventListener("click", (() => {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: 0,
                        autoKill: !0
                    })
                }))
            },
            resize: function () { },
            destroy: function () { }
        };
        let Me = null;
        window.gsap = o.a, window.ScrollTrigger = we.a, window.ScrollToPlugin = qe.a, o.a.registerPlugin(we.a), o.a.registerPlugin(qe.a), window.videojs = f.a;
        const Oe = [m.resize, G.resize],
            ze = i()((() => {
                k() && Me && Me === innerWidth ? x() : (document.body.classList.add("is-resizing"), Oe.forEach((e => e())), document.body.classList.remove("is-resizing"), Me = innerWidth)
            }), 500),
            Pe = [ye.init, q.init, re.init, W.init, a.init, G.init, ae.init, me.init, ke.init, () => {
                Me = innerWidth, window.addEventListener("resize", ze)
            }, B.init, Ce.init, () => {
                setTimeout((() => {
                    Se().init({
                        once: !0
                    })
                }), 500)
            }, Re.init, Ge.init, He.init],
            Ue = [B.destroy, ye.destroy, () => {
                Me = null, window.removeEventListener("resize", ze)
            }, G.destroy, Re.destroy, Ge.destroy];
        document.addEventListener("DOMContentLoaded", (() => {
            setTimeout((() => {
                m.init(), g(), R.init(Pe, Ue), setTimeout((function () {
                    const e = window.location.hash;
                    if (e) {
                        const [t, n] = e.split("?"), s = document.querySelector(t);
                        s && s.scrollIntoView({
                            behavior: "auto"
                        })
                    }
                }), 400), setTimeout((function () {
                    document.body.style.opacity = 1
                }), 800)
            }), 1e3)
        }))
    },
    138: () => { }
},
    n = {};

function s(e) {
    var i = n[e];
    if (void 0 !== i) return i.exports;
    var o = n[e] = {
        exports: {}
    };
    return t[e].call(o.exports, o, o.exports, s), o.exports
}
s.m = t, s.amdO = {}, e = [], s.O = (t, n, i, o) => {
    if (!n) {
        var a = 1 / 0;
        for (d = 0; d < e.length; d++) {
            for (var [n, i, o] = e[d], r = !0, l = 0; l < n.length; l++)(!1 & o || a >= o) && Object.keys(s.O).every((e => s.O[e](n[l]))) ? n.splice(l--, 1) : (r = !1, o < a && (a = o));
            if (r) {
                e.splice(d--, 1);
                var c = i();
                void 0 !== c && (t = c)
            }
        }
        return t
    }
    o = o || 0;
    for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
    e[d] = [n, i, o]
}, s.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return s.d(t, {
        a: t
    }), t
}, s.d = (e, t) => {
    for (var n in t) s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, {
        enumerable: !0,
        get: t[n]
    })
}, s.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
        return this || new Function("return this")()
    } catch (e) {
        if ("object" == typeof window) return window
    }
}(), s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
    var e = {
        0: 0
    };
    s.O.j = t => 0 === e[t];
    var t = (t, n) => {
        var i, o, [a, r, l] = n,
            c = 0;
        if (a.some((t => 0 !== e[t]))) {
            for (i in r) s.o(r, i) && (s.m[i] = r[i]);
            if (l) var d = l(s)
        }
        for (t && t(n); c < a.length; c++) o = a[c], s.o(e, o) && e[o] && e[o][0](), e[o] = 0;
        return s.O(d)
    },
        n = self.webpackChunk = self.webpackChunk || [];
    n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
})();
var i = s.O(void 0, [1], (() => s(132)));
i = s.O(i);