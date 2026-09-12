/**
 * Sigmund Freud: Das Unbehagen in der Kultur (1930)
 * Interaktive Texterschließung, Glossar & Stufenhilfen
 * Philosophie Q1 • Herr Dayi
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. SYSTEMATISCHE BEGRIFFSDATENBANK (4 KATEGORIEN)
    // =========================================================================
    const vocabDatabase = {
        // --- 1. Anthropologisch-biologische Grundlagen & Triebtheorie ---
        'Triebbegabung / Aggressionsneigung': {
            type: '1. Psychoanalytische Triebtheorie',
            def: 'Die angeborene, biologisch verankerte Neigung zur Zerstörung, Beherrschung und Feindseligkeit (bei Freud auch als Destruktionstrieb oder Thanatos bezeichnet).',
            context: 'Freud bricht radikal mit dem aufklärerischen Menschenbild (wie z. B. bei Rousseau): Der Mensch ist von Natur aus nicht gut oder sanftmütig, sondern trägt einen unbändigen Trieb zur Aggression in sich, den er an seinen Mitmenschen befriedigen will.'
        },
        'Homo homini lupus': {
            type: '1. Philosophiegeschichtlicher Begriff (Hobbes / Plautus)',
            def: 'Lateinisch für: „Der Mensch ist dem Menschen ein Wolf“. Berühmt geworden durch den englischen Staatstheoretiker Thomas Hobbes (1588–1679).',
            context: 'Freud zitiert diesen Satz zustimmend: Ohne gesellschaftliche Zwänge würde der Mensch den Nächsten nicht lieben, sondern ausbeuten, erniedrigen, berauben oder vernichten. Der Naturzustand ist eine ständige Bedrohung.'
        },

        // --- 2. Kulturelle Abwehrmechanismen & Zwänge ---
        'Reaktionsbildungen': {
            type: '2. Psychoanalytischer Abwehrmechanismus',
            def: 'Ein unbewusster psychischer Vorgang, bei dem ein sozial inakzeptabler Triebimpuls (z. B. Hass oder Zerstörungswut) dadurch abgewehrt wird, dass das genaue Gegenteil übertrieben zur Schau gestellt wird.',
            context: 'Die Kultur zwingt den Menschen, seine Feindseligkeit durch übertriebene Friedfertigkeit, Nächstenliebe und Harmoniestreben zu maskieren. Die Zivilisation ist ein gigantischer Apparat zur Erzeugung solcher Reaktionsbildungen.'
        },
        'Idealgebot (Nächstenliebe)': {
            type: '2. Kulturelle Norm & Überforderung',
            def: 'Die religiös-ethische Forderung „Liebe deinen Nächsten wie dich selbst“ (Biblisches Gebot).',
            context: 'Freud hält dieses Gebot für psychologisch widersinnig und unmöglich zu erfüllen. Gerade weil es der menschlichen Natur so fundamental widerspricht, muss die Kultur es als absolutes Ideal aufstellen, um das gegenseitige Zerfleischen zu verhindern.'
        },
        'Eintausch (Glück gegen Sicherheit)': {
            type: '2. Kulturphilosophische Kernthese',
            def: 'Die Grundgleichung der Kultur: Das Individuum verzichtet auf uneingeschränkte Triebbefriedigung (Glück) und erhält dafür Schutz vor der Willkür und Gewalt der anderen (Sicherheit).',
            context: 'Hier liegt Freuds tiefer Pessimismus: Ein völlig glücklicher Mensch kann nicht in Kultur leben; ein Kulturmensch kann niemals restlos glücklich sein. Zivilisation bedeutet institutionalisierten Glücksverlust.'
        },

        // --- 3. Psychische Wendung & Instanzenmodell ---
        'Introjektion (Verinnerlichung)': {
            type: '3. Psychoanalytischer Prozess',
            def: 'Die Wendung eines äußeren Konflikts oder Triebimpulses nach innen: Die Aggression, die nicht an anderen ausgelebt werden darf, wird in das eigene seelische Gefüge zurückgelenkt.',
            context: 'Weil die Kultur die äußere Aggression mit Verboten belegt, richtet der Mensch die Zerstörungswut gegen sich selbst. Das ist der psychologische Wendepunkt des gesamten Textes.'
        },
        'Über-Ich (das „Gewissen“)': {
            type: '3. Instanzenmodell der Psychoanalyse',
            def: 'Die seelische Kontrollinstanz, die aus der Introjektion elterlicher und gesellschaftlicher Gebote und Strafandrohungen entsteht.',
            context: 'Das Über-Ich spaltet sich vom Ich ab und übernimmt die Rolle des strengen Beobachters, Zensors und Richters. Es übt nun gegen das eigene Ich dieselbe Grausamkeit aus, die das Ich gerne an der Außenwelt ausgelassen hätte.'
        },

        // --- 4. Die seelische Kostenstelle ---
        'Schuldbewusstsein & Strafbedürfnis': {
            type: '4. Seelische Pathologie der Kultur',
            def: 'Die innere Qual und das dauerhafte Unbehagen, das durch die permanente moralische Verurteilung des Ichs durch das Über-Ich entsteht.',
            context: 'Vor dem Über-Ich gibt es keine Geheimnisse: Schon der unbewusste Wunsch nach Aggression wird wie eine vollendete Tat bestraft. Das erzeugt ein ständiges, oft diffuses Schuldgefühl und den unbewussten Drang, sich selbst zu bestrafen oder zu quälen.'
        },
        '„Besatzung in der eroberten Stadt“': {
            type: '4. Zentrale Metapher Freuds',
            def: 'Ein militärischer Vergleich: Die Kultur bezwingt das Individuum nicht durch permanente Polizisten auf der Straße, sondern pflanzt dem Menschen einen inneren Kontrolleur ins Gehirn.',
            context: 'Wie eine fremde Garnison, die eine besiegte Stadt überwacht und jeden Aufstand der Bürger im Keim erstickt, wacht das Über-Ich im Inneren des Menschen und hält die Triebe in eiserner Schach.'
        }
    };

    // =========================================================================
    // 2. DOM-ELEMENTE
    // =========================================================================
    const vocabCard = document.getElementById('vocab-card');
    const vocabPlaceholder = document.getElementById('vocab-placeholder');
    const vocabContent = document.getElementById('vocab-content');
    const vocabTitle = document.getElementById('vocab-title');
    const vocabType = document.getElementById('vocab-type');
    const vocabDef = document.getElementById('vocab-definition');
    const vocabContext = document.getElementById('vocab-context');

    const chapTabBtns = document.querySelectorAll('.chap-tab-btn');
    const chapPanels = document.querySelectorAll('.chap-panel');

    const btnTextDec = document.getElementById('btn-text-decrease');
    const btnTextInc = document.getElementById('btn-text-increase');
    const btnThemeToggle = document.getElementById('btn-theme-toggle');
    const themeText = document.getElementById('theme-text');

    let currentScale = 1.0;

    // =========================================================================
    // 3. TAB NAVIGATION
    // =========================================================================
    chapTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-chap-tab');

            chapTabBtns.forEach(b => b.classList.remove('active'));
            chapPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetPanel = document.getElementById(`chap-panel-${targetTab}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // =========================================================================
    // 4. INTERAKTIVES GLOSSAR (BEGRIFFE ANKLICKEN)
    // =========================================================================
    function showVocab(termKey, clickedEl) {
        const data = vocabDatabase[termKey];
        if (!data) return;

        // Markierung der Begriffe
        document.querySelectorAll('.vocab-term').forEach(el => el.classList.remove('active'));
        if (clickedEl) {
            clickedEl.classList.add('active');
        }

        // Inhalt aktualisieren
        vocabTitle.textContent = termKey;
        vocabType.textContent = data.type;
        vocabDef.textContent = data.def;
        vocabContext.textContent = data.context;

        vocabPlaceholder.classList.add('hidden');
        vocabContent.classList.remove('hidden');

        // Sanftes Hervorheben
        vocabCard.style.borderColor = 'var(--primary-accent)';
        setTimeout(() => {
            vocabCard.style.borderColor = 'var(--primary-blue)';
        }, 600);
    }

    document.querySelectorAll('.vocab-term').forEach(termEl => {
        termEl.addEventListener('click', (e) => {
            const termKey = termEl.getAttribute('data-term') || termEl.textContent.trim();
            showVocab(termKey, termEl);
        });
    });

    // Klick auf Tag-Cloud in Tab 2
    document.querySelectorAll('.term-tag').forEach(tagEl => {
        tagEl.addEventListener('click', () => {
            const termKey = tagEl.getAttribute('data-term') || tagEl.textContent.trim();
            // Wechsle zu Tab 1 und zeige Glossar
            const textTabBtn = document.querySelector('[data-chap-tab="text"]');
            if (textTabBtn) textTabBtn.click();
            showVocab(termKey);
        });
    });

    // =========================================================================
    // 5. SCHRIFTGRÖSSEN-ZOOM
    // =========================================================================
    if (btnTextDec && btnTextInc) {
        btnTextDec.addEventListener('click', () => {
            if (currentScale > 0.85) {
                currentScale -= 0.08;
                document.documentElement.style.setProperty('--text-scale', `${currentScale}rem`);
            }
        });
        btnTextInc.addEventListener('click', () => {
            if (currentScale < 1.4) {
                currentScale += 0.08;
                document.documentElement.style.setProperty('--text-scale', `${currentScale}rem`);
            }
        });
    }

    // =========================================================================
    // 6. DARK MODE TOGGLE
    // =========================================================================
    if (btnThemeToggle) {
        btnThemeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            themeText.textContent = isDark ? 'Hellmodus' : 'Dunkelmodus';
        });
    }

    // =========================================================================
    // 7. INTERAKTIVER SCHALTER: SINNABSCHNITTE & ZWISCHENÜBERSCHRIFTEN
    // =========================================================================
    const toggleSections = document.getElementById('toggle-sections');
    const sectionsOverview = document.getElementById('sections-overview');
    const sectionHeadings = document.querySelectorAll('.section-heading-wrapper');

    if (toggleSections) {
        toggleSections.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            if (sectionsOverview) {
                if (isChecked) {
                    sectionsOverview.classList.remove('hidden');
                } else {
                    sectionsOverview.classList.add('hidden');
                }
            }
            sectionHeadings.forEach(wrapper => {
                if (isChecked) {
                    wrapper.classList.remove('hidden');
                } else {
                    wrapper.classList.add('hidden');
                }
            });
        });
    }

});

