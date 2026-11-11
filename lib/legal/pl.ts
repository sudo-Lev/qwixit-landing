import { OPERATOR_ADDRESS } from "./operator";
import type { LegalLocale } from "./types";

export const pl: LegalLocale = {
  back: "Wróć do hotkeygo",
  language: "Język",
  contents: "Na tej stronie",
  effective: "Data wejścia w życie",
  contact: "Pytania? Napisz na support@hotkeygo.app",
  other: { privacy: "Przeczytaj regulamin", terms: "Przeczytaj politykę prywatności" },
  documents: {
    privacy: {
      title: "Polityka prywatności",
      intro: "Wyjaśniamy, jakie dane przetwarza hotkeygo, dokąd trafia tekst i jakie masz prawa.",
      sections: [
        {
          id: "who",
          title: "Kim jesteśmy",
          paragraphs: [
            "Operatorem hotkeygo jest Lev Misiliuk, przedsiębiorca prowadzący jednoosobową działalność gospodarczą zarejestrowaną w Polsce. Niniejsza polityka opisuje, jak przetwarzamy dane osobowe, gdy odwiedzasz hotkeygo.app, korzystasz z aplikacji na macOS, kupujesz subskrypcję lub kontaktujesz się z nami.",
            `W sprawach prywatności i wniosków napisz na support@hotkeygo.app. Adres przedsiębiorcy: ${OPERATOR_ADDRESS}.`,
          ],
        },
        {
          id: "text",
          title: "Zaznaczony tekst i przetwarzanie AI",
          paragraphs: [
            "Gdy świadomie uruchamiasz Fix, Actions lub Peek, aplikacja odczytuje zaznaczony tekst i przesyła go szyfrowanym połączeniem przez naszą usługę Cloudflare do dostawcy AI wybranego w aplikacji: Anthropic albo OpenAI. Dostawca przetwarza tekst i zwraca wynik potrzebny do wykonania działania.",
            "Aplikacja i nasza usługa są zaprojektowane tak, aby nie zapisywać zaznaczonego tekstu, powstałych na jego podstawie promptów ani wyników modelu w kontrolowanym przez hotkeygo magazynie lub logach. Dane te są jednak tymczasowo przetwarzane w celu świadczenia usługi. Uprawnienie Dostępność służy do pobrania zaznaczenia i, zależnie od funkcji, wstawienia wyniku.",
            "Funkcja Fix może pozostawić wygenerowany wynik w systemowym schowku macOS jako kopię do ręcznego wklejenia. Schowek, jego historia oraz synchronizacja systemowa lub zewnętrzna nie podlegają naszej kontroli. Przesyłaj tylko informacje, do których przetwarzania masz prawo.",
          ],
        },
        {
          id: "providers",
          title: "Dostawcy AI i przechowywanie",
          paragraphs: [
            "Anthropic i OpenAI przetwarzają żądania API na podstawie własnych warunków handlowych i ustawień danych. Zgodnie z tymi warunkami dane przesyłane przez ich API domyślnie nie są wykorzystywane do trenowania modeli. W żądaniach do OpenAI hotkeygo ustawia store: false, więc odpowiedzi nie są przechowywane do późniejszego pobrania przez API.",
            "Dostawcy mogą przez ograniczony czas przechowywać dane wejściowe i odpowiedzi API na potrzeby bezpieczeństwa i wykrywania nadużyć, zgodnie z własnymi zasadami. Jeśli nasze ustalenia z dostawcami się zmienią, zaktualizujemy tę politykę.",
          ],
        },
        {
          id: "installation",
          title: "Instalacja, użytkowanie i diagnostyka",
          paragraphs: [
            "Bezpłatna instalacja nie wymaga konta hotkeygo ani adresu e-mail. Aplikacja używa pseudonimowego identyfikatora instalacji, który nie jest powiązany z Twoim imieniem i nazwiskiem ani adresem e-mail. Nasza usługa używa go wraz z informacjami o subskrypcji, aby zapewnić dostęp, liczyć bezpłatny limit, zapobiegać nadużyciom i obsługiwać Twoją subskrypcję.",
            "Nasza diagnostyka rejestruje dane operacyjne, takie jak użyta funkcja i dostawca, status planu, język interfejsu aplikacji, liczba i wyniki żądań, ustalone kategorie błędów oraz czas przetwarzania. Analityka poszczególnych instalacji używa skrótu (hash) identyfikatora. Nie obejmuje zaznaczonego tekstu, promptów, odpowiedzi modelu ani adresów IP. Dzienne podsumowania i profile instalacji przechowujemy do 365 dni.",
          ],
        },
        {
          id: "website",
          title: "Analityka strony i cookies",
          paragraphs: [
            "Strona korzysta z Vercel Web Analytics, aby rozumieć odwiedziny i ją ulepszać. Według Vercel narzędzie nie używa cookies do analityki odwiedzających, lecz krótkotrwałego skrótu żądania. Może raportować m.in. odwiedzoną stronę, źródło wejścia, przybliżoną lokalizację, przeglądarkę i rodzaj urządzenia.",
            "Strona używa pliku cookie NEXT_LOCALE, aby zapamiętać wybrany język. Jest on potrzebny tylko do tej funkcji i nie służy do analityki ani reklamy. Dostawcy hostingu i zabezpieczeń mogą przetwarzać dane sieciowe, w tym adres IP, aby dostarczać i chronić stronę.",
          ],
        },
        {
          id: "feedback",
          title: "Wsparcie i opinie",
          paragraphs: [
            "Kiedy kontaktujesz się z nami lub wysyłasz opinię, otrzymujemy wybraną przez Ciebie wiadomość i ewentualny adres email do odpowiedzi. Możesz również dołączyć diagnostykę, np. wersję aplikacji i macOS, wybrany model, plan, ustawienia językowe i stan Preview & Approve.",
            "Opinia trafia do naszej skrzynki wsparcia. Korespondencję przechowujemy, dopóki jest potrzebna do odpowiedzi, dalszej obsługi sprawy lub rozwiązania sporu. Przeglądamy i usuwamy niepotrzebne wiadomości, chyba że dłuższego przechowywania wymaga prawo albo uzasadnia je aktywne roszczenie.",
          ],
        },
        {
          id: "payments",
          title: "Płatności i wiadomości",
          paragraphs: [
            "Zakupy bezpośrednie obsługuje Paddle, nasz odsprzedawca i Merchant of Record. Paddle zbiera dane potrzebne do transakcji, takie jak e-mail, adres rozliczeniowy, dane płatnicze i historia transakcji, i przetwarza je na podstawie własnych warunków i polityki prywatności. Otrzymujemy informacje o zakupie i subskrypcji potrzebne do zapewnienia dostępu i wsparcia; nigdy nie otrzymujemy pełnego numeru karty.",
            "Potwierdzenia i wiadomości o subskrypcji wysyła Paddle. Kontaktujemy się z Tobą tylko w sprawie zakupu, zgłoszenia do wsparcia lub istotnej zmiany usługi. Nie wysyłamy wiadomości marketingowych.",
          ],
        },
        {
          id: "basis",
          title: "Dlaczego przetwarzamy dane",
          paragraphs: [
            "Zależnie od sytuacji przetwarzamy dane w celu wykonania umowy lub działań na Twoje żądanie przed jej zawarciem, wypełnienia obowiązków prawnych albo realizacji uzasadnionych interesów, takich jak prowadzenie, zabezpieczenie i ulepszanie usługi oraz odpowiadanie na zgłoszenia. Gdy prawo wymaga zgody, poprosimy o nią dla odpowiedniego celu i zapewnimy możliwość jej wycofania.",
            "Nie sprzedajemy danych osobowych i nie przekazujemy ich reklamodawcom. Dostawcy otrzymują informacje niezbędne do wykonania swoich zadań; dostawca AI otrzymuje zaznaczony tekst po uruchomieniu funkcji.",
          ],
        },
        {
          id: "sharing",
          title: "Dostawcy i przekazywanie danych",
          paragraphs: [
            "Naszymi dostawcami usług są Cloudflare (infrastruktura i dostarczanie e-maili), Anthropic i OpenAI (przetwarzanie AI), Vercel (hosting i analityka strony) oraz Paddle (płatności). Twój dostawca poczty i macOS mogą również przetwarzać informacje na własnych warunkach.",
            "Niektórzy dostawcy przetwarzają dane poza Europejskim Obszarem Gospodarczym, w tym w Stanach Zjednoczonych. Gdy mają zastosowanie europejskie przepisy o ochronie danych, takie przekazania opierają się na decyzji stwierdzającej odpowiedni stopień ochrony, np. EU–US Data Privacy Framework dla certyfikowanych dostawców, lub na standardowych klauzulach umownych w warunkach przetwarzania danych dostawców.",
          ],
        },
        {
          id: "rights",
          title: "Twoje prawa",
          paragraphs: [
            "Zależnie od miejsca zamieszkania możesz mieć prawo do dostępu, sprostowania, usunięcia, ograniczenia lub przeniesienia danych, wniesienia sprzeciwu wobec określonego przetwarzania i wycofania zgody. Możesz też złożyć skargę do organu ochrony danych; w Polsce jest nim Prezes Urzędu Ochrony Danych Osobowych.",
            "Aby skorzystać z praw, napisz na support@hotkeygo.app. Możemy potrzebować informacji pozwalających rozsądnie zweryfikować tożsamość lub znaleźć instalację. Ponieważ nie ma kont hotkeygo, bez dodatkowych danych możemy nie być w stanie powiązać pseudonimowych danych instalacji z Tobą. Niektóre dane mogą wymagać zachowania z mocy prawa lub na potrzeby aktywnego roszczenia.",
          ],
        },
        {
          id: "minors",
          title: "Wiek, bezpieczeństwo i zmiany",
          paragraphs: [
            "hotkeygo jest przeznaczone dla osób, które ukończyły 16 lat. Jeśli wymaga tego prawo lokalne, osoby poniżej 18 lat potrzebują zgody rodzica lub opiekuna.",
            "Stosujemy rozsądne środki techniczne i organizacyjne, ale żadna usługa internetowa nie zapewnia absolutnego bezpieczeństwa. Możemy aktualizować tę politykę w związku ze zmianami usługi lub prawa i poinformujemy o istotnych zmianach, gdy będzie to właściwe lub wymagane.",
          ],
        },
      ],
    },
    terms: {
      title: "Regulamin",
      intro: "Zasady korzystania z hotkeygo — od pierwszego skrótu po zarządzanie subskrypcją.",
      sections: [
        {
          id: "about",
          title: "Usługa i regulamin",
          paragraphs: [
            "hotkeygo to narzędzie do pracy z tekstem na macOS, którego operatorem jest Lev Misiliuk, przedsiębiorca prowadzący jednoosobową działalność gospodarczą zarejestrowaną w Polsce. Niniejszy regulamin określa zasady korzystania z aplikacji i strony. Przetwarzanie danych osobowych opisuje Polityka prywatności.",
            "Regulamin obowiązuje od daty wejścia w życie podanej powyżej. Jeśli korzystasz z usługi w imieniu organizacji, musisz być upoważniony do akceptacji regulaminu w jej imieniu.",
          ],
        },
        {
          id: "eligibility",
          title: "Wiek i odpowiedzialne używanie",
          paragraphs: [
            "Musisz mieć ukończone 16 lat. Jeśli masz mniej niż 18 lat i wymaga tego prawo lokalne, potrzebujesz zgody rodzica lub opiekuna.",
            "Korzystaj z hotkeygo zgodnie z prawem, szanuj prawa innych osób i przesyłaj tylko teksty, do których przetwarzania masz prawo. Nie zakłócaj działania usługi, nie obchodź limitów ani zabezpieczeń płatności i nie używaj jej w sposób zabroniony przez prawo lub zasady wybranego dostawcy.",
          ],
        },
        {
          id: "how",
          title: "Jak działa aplikacja",
          paragraphs: [
            "Fix, Actions i Peek przesyłają zaznaczony tekst przez naszą usługę do dostawcy AI wybranego w aplikacji. Fix i Actions mogą zastąpić tekst, a Peek pokazuje wynik bez zmiany oryginału. Preview & Approve pozwala sprawdzić i zatwierdzić wynik przed zastąpieniem tekstu.",
            "Wynik AI może zawierać błędy lub zmienić znaczenie. Użytkownik odpowiada za jego sprawdzenie, szczególnie gdy istotna jest dokładność. Fix może pozostawić wynik w schowku macOS jako kopię do ręcznego wklejenia.",
          ],
        },
        {
          id: "rights",
          title: "Twój tekst i wynik",
          paragraphs: [
            "Zachowujesz przysługujące Ci prawa do przesłanego tekstu. hotkeygo nie rości sobie praw własności do Twojego tekstu ani wyniku. Udzielasz nam i wybranym dostawcom uprawnienia potrzebnego do przetworzenia tekstu i dostarczenia wyniku.",
            "Prawa do wyniku i możliwość jego użycia zależą od obowiązującego prawa i praw innych osób. Odpowiadasz za to, aby przesyłany tekst i sposób użycia wyniku ich nie naruszały.",
          ],
        },
        {
          id: "plans",
          title: "Plan bezpłatny i płatny",
          paragraphs: [
            "Plan bezpłatny obejmuje 30 działań AI w miesiącu kalendarzowym. hotkeygo Advanced kosztuje 10 USD miesięcznie, a należne podatki są wliczone w cenę wyświetlaną przy płatności. Paddle może pokazać cenę w Twojej lokalnej walucie.",
            "Płatna subskrypcja odnawia się automatycznie co miesiąc do czasu anulowania. Do zakupu stosuje się cenę i funkcje pokazane przy płatności. Możemy podejmować rozsądne działania przeciwko nadużyciom, oszustwom lub nadmiernej zautomatyzowanej aktywności.",
          ],
        },
        {
          id: "billing",
          title: "Płatności i anulowanie",
          paragraphs: [
            "Zakupy bezpośrednie sprzedaje Paddle.com, nasz odsprzedawca i Merchant of Record. Paddle odpowiada za płatności, podatki, faktury i pytania dotyczące płatności, a do transakcji stosuje się jego warunki dla kupujących. Zakup wymaga adresu e-mail i danych płatniczych, choć bezpłatna aplikacja nie wymaga konta.",
            "Automatyczne odnawianie możesz anulować w dowolnym momencie, korzystając z linku do subskrypcji w wiadomościach od Paddle lub pisząc na support@hotkeygo.app. Po anulowaniu Advanced działa do końca opłaconego okresu, a następnie wracasz do planu bezpłatnego.",
          ],
        },
        {
          id: "refunds",
          title: "Zwroty",
          paragraphs: [
            "Jeśli pierwszy zakup bezpośredni Ci nie odpowiada, możesz poprosić o pełny zwrot w ciągu 14 dni kalendarzowych od płatności, nawet po skorzystaniu z Advanced. Napisz na support@hotkeygo.app lub skontaktuj się z Paddle przez paddle.net. Wnioski dotyczące kolejnych odnowień rozpatrujemy indywidualnie.",
            "Zwroty obsługuje Paddle. Po zatwierdzeniu pełnego zwrotu Advanced się kończy, a bezpłatny limit 30 działań zostaje przywrócony. Nic w tym regulaminie nie ogranicza Twoich bezwzględnie obowiązujących praw konsumenta.",
          ],
        },
        {
          id: "devices",
          title: "Urządzenia i dostęp",
          paragraphs: [
            "Subskrypcja należy do instalacji hotkeygo na Macu, na którym ją kupiono. Ponowna instalacja lub aktualizacja aplikacji na tym Macu ją zachowuje.",
            "Jeśli przenosisz się na inny Mac, reinstalujesz macOS lub straciłeś dostęp do swojego Maca, napisz na support@hotkeygo.app, a pomożemy przenieść subskrypcję.",
          ],
        },
        {
          id: "changes",
          title: "Zmiany ceny i usługi",
          paragraphs: [
            "Jeśli zmienimy cenę subskrypcji, powiadomimy obecnych subskrybentów e-mailem co najmniej 30 dni wcześniej. Nowa cena obowiązuje dopiero od późniejszego odnowienia, nigdy nie dotyczy już opłaconego okresu, a przed jej wejściem w życie możesz anulować subskrypcję.",
            "Możemy aktualizować, zawieszać lub wycofywać funkcje ze względu na konserwację, bezpieczeństwo, prawo lub przyczyny operacyjne. Powiadomimy o tym, gdy będzie to właściwe lub wymagane, i uszanujemy przysługujące środki ochrony konsumenta.",
          ],
        },
        {
          id: "liability",
          title: "Dostępność i odpowiedzialność",
          paragraphs: [
            "Staramy się zapewnić niezawodną usługę, ale dostawcy AI, sieci i urządzenia mogą zawieść. Usługa lub wynik AI mogą być niedostępne, opóźnione lub niedokładne. Żadne postanowienie nie wyłącza gwarancji ani uprawnień, których nie można wyłączyć zgodnie z prawem.",
            "W zakresie dozwolonym przez prawo nie odpowiadamy za straty pośrednie lub następcze wynikające z korzystania z usługi. Nic nie wyłącza odpowiedzialności, której nie można prawnie wyłączyć, w tym obowiązkowej ochrony konsumentów.",
          ],
        },
        {
          id: "law",
          title: "Prawo, język i kontakt",
          paragraphs: [
            "Regulamin podlega prawu polskiemu, bez pozbawiania konsumentów ochrony wynikającej z bezwzględnie obowiązujących przepisów właściwego prawa. Spory mogą być kierowane do sądów wymaganych lub dopuszczonych przez obowiązujące prawo.",
            "W razie rozbieżności między tłumaczeniami wersją referencyjną jest wersja angielska, z zastrzeżeniem obowiązkowych lokalnych przepisów językowych i konsumenckich. Pytania o usługę, zakup lub regulamin kieruj na support@hotkeygo.app.",
          ],
        },
      ],
    },
  },
};
