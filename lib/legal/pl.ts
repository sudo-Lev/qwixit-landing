import type { LegalLocale } from "./types";

export const pl: LegalLocale = {
  back: "Wróć do hotkeygo",
  language: "Język",
  contents: "Na tej stronie",
  draft:
    "Projekt do weryfikacji. Nie obowiązuje przed oficjalną premierą. Przed publikacją należy potwierdzić dane kontaktowe, ustawienia produktu, płatności i wymogi prawne.",
  effective: "Data wejścia w życie: oficjalna premiera (data do potwierdzenia)",
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
            "Operatorem hotkeygo jest Lev Misiliuk, przedsiębiorca prowadzący działalność gospodarczą w Polsce. Polityka opisuje przetwarzanie danych podczas korzystania ze strony hotkeygo.app, aplikacji macOS, subskrypcji i kontaktu z nami.",
            "W sprawach prywatności i realizacji praw napisz na support@hotkeygo.app. Adres pocztowy przedsiębiorcy i data wejścia w życie zostaną potwierdzone przed premierą.",
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
            "Anthropic i OpenAI działają na podstawie własnych umów i ustawień przetwarzania danych. W żądaniach do OpenAI hotkeygo ustawia store: false. To ustawienie wyłącza przechowywanie odpowiedzi do późniejszego pobrania przez API, ale samo w sobie nie gwarantuje braku przechowywania danych przez dostawcę na potrzeby bezpieczeństwa i wykrywania nadużyć.",
            "Okresy przechowywania, przetwarzanie bezpieczeństwa i ewentualne dodatkowe zabezpieczenia zależą od dostawcy, używanego punktu API oraz konfiguracji naszego konta. Przed premierą zweryfikujemy te warunki i zaktualizujemy politykę, gdy ulegną zmianie.",
          ],
        },
        {
          id: "installation",
          title: "Instalacja, użytkowanie i diagnostyka",
          paragraphs: [
            "Bezpłatna instalacja nie wymaga konta hotkeygo ani adresu email. Aplikacja tworzy losowy identyfikator instalacji w Pęku kluczy macOS. Nasza usługa korzysta z danych instalacji i subskrypcji, aby zapewnić dostęp, rozliczać bezpłatny limit, przeciwdziałać nadużyciom i utrzymywać uprawnienia.",
            "Nasza diagnostyka obejmuje informacje operacyjne, takie jak użyta funkcja i dostawca, status planu, liczba żądań, wyniki, ustalone kategorie błędów i czasy. Analiza poszczególnych instalacji używa skrótu identyfikatora instalacji. Nie jest przeznaczona do zbierania zaznaczonego tekstu, promptów, wyników modelu ani adresów IP. Dzienne podsumowania i profile instalacji są przechowywane do 365 dni. Planujemy dodać język interfejsu do analityki; konfigurację na premierę należy potwierdzić.",
          ],
        },
        {
          id: "website",
          title: "Analityka strony i cookies",
          paragraphs: [
            "Strona korzysta z Vercel Web Analytics, aby rozumieć odwiedziny i ją ulepszać. Według Vercel narzędzie nie używa cookies do analityki odwiedzających, lecz krótkotrwałego skrótu żądania. Może raportować m.in. odwiedzoną stronę, źródło wejścia, przybliżoną lokalizację, przeglądarkę i rodzaj urządzenia.",
            "Strona może używać pliku NEXT_LOCALE do zapamiętania preferowanego języka. Dostawcy hostingu i bezpieczeństwa mogą przetwarzać dane sieciowe, w tym adres IP, na potrzeby dostarczania i ochrony usługi. Przed premierą sprawdzimy konfigurację produkcyjną i dodatkowe technologie.",
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
            "W przypadku płatnej subskrypcji Paddle lub Apple mogą zbierać dane potrzebne do transakcji, takie jak email, dane rozliczeniowe, szczegóły płatności i transakcji. Dostawca płatności przetwarza je zgodnie z własnymi warunkami i polityką prywatności. Możemy otrzymywać dane zakupu, subskrypcji i uprawnień potrzebne do zapewnienia dostępu i wsparcia; nie potrzebujemy pełnego numeru karty.",
            "Możemy wysyłać niezbędne wiadomości o zakupie, subskrypcji i istotnych zmianach usługi. Jeśli zaoferujemy osobną, dobrowolną subskrypcję nowości, wiadomości marketingowe będą wysyłane zgodnie z zapisanym wyborem i obowiązującym prawem, z możliwością rezygnacji. Funkcja jest planowana i wymaga wdrożenia przed użyciem.",
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
            "Nasi dostawcy mogą obejmować Cloudflare — infrastruktura i dostarczanie emaili, Anthropic i OpenAI — przetwarzanie AI, Vercel — hosting i analityka strony, oraz Paddle lub Apple — płatności. Dostawca Twojej poczty i macOS mogą również przetwarzać dane na własnych zasadach.",
            "Dostawcy mogą przetwarzać informacje poza Europejskim Obszarem Gospodarczym. Przed premierą ustalimy właściwe mechanizmy i zabezpieczenia transferu wymagane przez europejskie prawo, np. odpowiednią decyzję stwierdzającą odpowiedni stopień ochrony lub zabezpieczenia umowne.",
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
            "hotkeygo jest przeznaczony dla osób od 16 lat, z uwzględnieniem prawa lokalnego oraz wymaganej zgody rodzica lub opiekuna. Zabezpieczenia i wymagania dostawców dla osób poniżej 18 lat muszą zostać zweryfikowane przed premierą.",
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
            "hotkeygo to narzędzie do pracy z tekstem na macOS, prowadzone przez Leva Misiliuka, przedsiębiorcę w Polsce. Regulamin dotyczy aplikacji i strony internetowej. Polityka prywatności wyjaśnia przetwarzanie danych osobowych.",
            "To projekt przedpremierowy, który wejdzie w życie dopiero w dniu oficjalnej premiery; data zostanie potwierdzona przed publikacją. Jeśli korzystasz z usługi w imieniu organizacji, musisz mieć uprawnienie do zaakceptowania warunków w jej imieniu.",
          ],
        },
        {
          id: "eligibility",
          title: "Wiek i odpowiedzialne używanie",
          paragraphs: [
            "Musisz mieć co najmniej 16 lat i spełniać wymogi prawa w miejscu zamieszkania. Jeśli masz mniej niż 18 lat, może być wymagana zgoda rodzica lub opiekuna. Wymagania dostawców i zabezpieczenia dla osób poniżej 18 lat zostaną sprawdzone przed premierą.",
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
            "Plan bezpłatny ma obejmować 30 działań AI w miesiącu kalendarzowym. Plan Unlimited jest planowany w cenie 10 USD miesięcznie, z uwzględnieniem należnych podatków w cenie wyświetlanej przy płatności. Ostateczne zasady płatności, dostępne waluty i podatki dla poszczególnych kanałów sprzedaży muszą zostać potwierdzone przed premierą.",
            "Płatna subskrypcja odnawia się automatycznie co miesiąc do czasu anulowania. Obowiązują cena i funkcje pokazane przy zakupie. Możemy stosować rozsądne środki przeciwdziałania nadużyciom, oszustwom, problemom technicznym lub nadmiernej automatyzacji; o obowiązujących limitach poinformujemy.",
          ],
        },
        {
          id: "billing",
          title: "Płatności i anulowanie",
          paragraphs: [
            "Zakupy bezpośrednie są planowane przez Paddle; zakupy w App Store, jeśli będą oferowane, obsługuje Apple. Do transakcji mają zastosowanie proces zakupu, zasady płatności i zarządzania subskrypcją danego dostawcy. Zakup może wymagać emaila lub danych rozliczeniowych, choć bezpłatna aplikacja nie wymaga konta.",
            "Możesz anulować automatyczne odnowienie u właściwego dostawcy płatności. O ile zwrot lub inne obowiązujące zasady nie zakończą dostępu wcześniej, płatny dostęp trwa do końca opłaconego okresu, a następnie wraca plan bezpłatny.",
          ],
        },
        {
          id: "refunds",
          title: "Zwroty",
          paragraphs: [
            "Przy pierwszym zakupie bezpośrednim planujemy przyjmować prośby o pełny zwrot w ciągu 14 dni kalendarzowych od płatności, jeśli usługa Ci nie odpowiada, także po jej wypróbowaniu. Napisz na support@hotkeygo.app. Prośby dotyczące kolejnych odnowień mogą być rozpatrywane indywidualnie.",
            "Zwroty za transakcje Paddle przetwarza Paddle. Zakupy w App Store podlegają właściwej procedurze Apple, którą trzeba potwierdzić przed premierą. Po zatwierdzonym zwrocie zamierzamy zakończyć płatny dostęp i przywrócić 30 bezpłatnych działań; przed złożeniem tej obietnicy funkcja musi zostać wdrożona i sprawdzona. Regulamin nie ogranicza bezwzględnie obowiązujących praw konsumenta.",
          ],
        },
        {
          id: "devices",
          title: "Urządzenia i dostęp",
          paragraphs: [
            "Planujemy, aby płatna subskrypcja obejmowała do trzech osobistych komputerów Mac, z możliwością usunięcia starego urządzenia i kontaktu ze wsparciem, gdy nie jest ono dostępne. Przenoszenie między wersjami, kody odzyskiwania i zarządzanie urządzeniami są planowane i nie są jeszcze gwarantowane.",
            "Zasady urządzeń dla wersji App Store będą podlegać wymaganiom Apple i muszą zostać sprawdzone przed premierą. Dostępność może zależeć od urządzenia, regionu i kanału dystrybucji.",
          ],
        },
        {
          id: "changes",
          title: "Zmiany ceny i usługi",
          paragraphs: [
            "Jeżeli zmienimy cenę subskrypcji, zamierzamy poinformować obecnych płacących użytkowników co najmniej 30 dni wcześniej. Zmiana nie podwyższy ceny już opłaconego okresu; nowa cena dotyczy późniejszego odnowienia, z uwzględnieniem zasad dostawcy płatności i prawa.",
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
