(() => {
  "use strict";

  const STORAGE = {
    products: "lightguide_products_v1",
    favorites: "lightguide_favorites_v1",
    history: "lightguide_history_v1",
    settings: "lightguide_settings_v1"
  };

  const translations = {
    en: {
      assistantLabel: "Store assistant", guidedConsultation: "Guided consultation", findRightLamp: "Find the right lamp without guessing",
      heroDescription: "Ask the customer a few focused questions, then compare the strongest matches from your catalogue.",
      startConsultation: "Start consultation", specificModel: "Specific model", specificModelHint: "Search by name, code or feature",
      chooseByRoom: "Choose by room", chooseByRoomHint: "Bedroom, kitchen, bathroom and more", solveProblem: "Solve a problem",
      solveProblemHint: "Too dark, sensor, reading, low ceiling", browseCatalog: "Browse catalogue", browseCatalogHint: "Use filters without the questionnaire",
      recentActivity: "Recent activity", latestConsultations: "Latest consultations", clear: "Clear", noConsultations: "No consultations yet.",
      back: "Back", restart: "Restart", adjustAnswers: "Adjust answers", newConsultation: "New consultation", recommendations: "Recommendations",
      bestMatches: "Best matches", copySummary: "Copy summary", customerMode: "Customer mode", noExactMatches: "No exact matches",
      noExactMatchesHint: "Try increasing the budget, allowing ordered items, or removing one required feature.", showClosest: "Show closest alternatives",
      productDatabase: "Product database", catalog: "Catalogue", addProduct: "Add product", search: "Search", filters: "Filters",
      savedProducts: "Saved products", favorites: "Favourites", consultationLog: "Consultation log", history: "History", export: "Export",
      appControls: "App controls", settings: "Settings", language: "Language", catalogueManagement: "Catalogue management",
      catalogueManagementHint: "Changes are stored on this device. Export a backup before clearing browser data.", importCsv: "Import CSV",
      importJson: "Import JSON backup", exportCatalog: "Export catalogue backup", downloadTemplate: "Download CSV template",
      resetSample: "Reset to starter catalogue", displayOptions: "Display options", showPrices: "Show prices",
      showPricesHint: "Hide prices when showing the phone to a customer.", compactCards: "Compact product cards",
      compactCardsHint: "Fit more products on screen.", about: "About",
      aboutText: "LightGuide is a decision-support tool. Always verify packaging, electrical compatibility, dimensions and current stock before the sale.",
      consult: "Consult", catalogueEditor: "Catalogue editor", productName: "Product name", productCode: "Product code", price: "Price (€)",
      lumens: "Lumens", watts: "Power (W)", colorTemperature: "Colour temperature", diameter: "Diameter / width (cm)", stockStatus: "Stock status",
      storeLocation: "Store / location", category: "Category", ipRating: "IP rating", roomsComma: "Suitable rooms (comma-separated)",
      stylesComma: "Styles (comma-separated)", featuresComma: "Features (comma-separated)", imageUrl: "Image URL", notes: "Notes",
      delete: "Delete", cancel: "Cancel", saveProduct: "Save product", catalogueFilters: "Catalogue filters", narrowResults: "Narrow the results",
      clearFilters: "Clear filters", applyFilters: "Apply filters", productComparison: "Product comparison", compareSelected: "Compare selected lamps",
      compare: "Compare", room: "Room", purpose: "Purpose", lampType: "Lamp type", roomSize: "Room size", ceilingHeight: "Ceiling height",
      style: "Style", lightColour: "Light colour", budget: "Budget", requiredFeatures: "Required features", availability: "Availability",
      next: "Next", finish: "See recommendations", skip: "Skip", any: "Any", required: "Required", optional: "Optional", copied: "Copied",
      productSaved: "Product saved", productDeleted: "Product deleted", imported: "Catalogue imported", backupDownloaded: "Backup downloaded",
      addedFavorite: "Added to favourites", removedFavorite: "Removed from favourites", selectTwo: "Select at least two products to compare",
      installed: "App ready to install", installUnavailable: "Use your browser menu and choose Add to Home Screen.", confirmReset: "Replace your catalogue with the starter catalogue?",
      confirmDelete: "Delete this product?", confirmClearHistory: "Clear all consultation history?", noProducts: "No products match these filters.",
      noFavorites: "No favourite products yet.", unknownPrice: "Price not entered", unknown: "Unknown", inStock: "In stock", displayOnly: "Display only",
      orderItem: "Order", resultCount: "matches", match: "match", details: "Details", edit: "Edit", resume: "Open results", remove: "Remove",
      closestMatch: "Closest match", verifyData: "Verify missing specifications before the sale.", targetLight: "Suggested target", estimated: "estimated",
      currentFilters: "Current filters", clearAll: "Clear all", consultationSummary: "Consultation summary", selectedProducts: "Selected products",
      noHistory: "No saved consultations yet.", installApp: "Install app"
    },
    lv: {
      assistantLabel: "Veikala asistents", guidedConsultation: "Vadīta konsultācija", findRightLamp: "Atrodi piemērotu lampu bez minēšanas",
      heroDescription: "Uzdod klientam dažus precīzus jautājumus un salīdzini labākās atbilstības katalogā.", startConsultation: "Sākt konsultāciju",
      specificModel: "Konkrēts modelis", specificModelHint: "Meklē pēc nosaukuma, koda vai funkcijas", chooseByRoom: "Izvēlēties pēc telpas",
      chooseByRoomHint: "Guļamistaba, virtuve, vannas istaba un citas", solveProblem: "Atrisināt vajadzību", solveProblemHint: "Par tumšu, sensors, lasīšana, zemi griesti",
      browseCatalog: "Pārlūkot katalogu", browseCatalogHint: "Filtri bez jautājumu plūsmas", recentActivity: "Nesenā darbība",
      latestConsultations: "Jaunākās konsultācijas", clear: "Notīrīt", noConsultations: "Konsultāciju vēl nav.", back: "Atpakaļ", restart: "Sākt no jauna",
      adjustAnswers: "Mainīt atbildes", newConsultation: "Jauna konsultācija", recommendations: "Ieteikumi", bestMatches: "Labākās atbilstības",
      copySummary: "Kopēt kopsavilkumu", customerMode: "Klienta režīms", noExactMatches: "Nav precīzu atbilstību",
      noExactMatchesHint: "Palielini budžetu, atļauj pasūtījuma preces vai noņem kādu obligātu funkciju.", showClosest: "Rādīt tuvākās alternatīvas",
      productDatabase: "Preču datubāze", catalog: "Katalogs", addProduct: "Pievienot preci", search: "Meklēt", filters: "Filtri",
      savedProducts: "Saglabātās preces", favorites: "Izlase", consultationLog: "Konsultāciju žurnāls", history: "Vēsture", export: "Eksportēt",
      appControls: "Lietotnes iestatījumi", settings: "Iestatījumi", language: "Valoda", catalogueManagement: "Kataloga pārvaldība",
      catalogueManagementHint: "Izmaiņas glabājas šajā ierīcē. Pirms pārlūka datu dzēšanas izveido rezerves kopiju.", importCsv: "Importēt CSV",
      importJson: "Importēt JSON kopiju", exportCatalog: "Eksportēt kataloga kopiju", downloadTemplate: "Lejupielādēt CSV paraugu",
      resetSample: "Atjaunot sākuma katalogu", displayOptions: "Attēlojums", showPrices: "Rādīt cenas", showPricesHint: "Paslēp cenas, rādot telefonu klientam.",
      compactCards: "Kompaktas preču kartītes", compactCardsHint: "Ekrānā redzamas vairāk preces.", about: "Par lietotni",
      aboutText: "LightGuide palīdz pieņemt lēmumu. Pirms pārdošanas pārbaudi iepakojumu, elektrisko saderību, izmērus un aktuālo atlikumu.",
      consult: "Konsultēt", catalogueEditor: "Kataloga redaktors", productName: "Preces nosaukums", productCode: "Preces kods", price: "Cena (€)",
      lumens: "Lūmeni", watts: "Jauda (W)", colorTemperature: "Krāsu temperatūra", diameter: "Diametrs / platums (cm)", stockStatus: "Pieejamība",
      storeLocation: "Veikals / atrašanās vieta", category: "Kategorija", ipRating: "IP aizsardzība", roomsComma: "Piemērotās telpas (ar komatiem)",
      stylesComma: "Stili (ar komatiem)", featuresComma: "Funkcijas (ar komatiem)", imageUrl: "Attēla saite", notes: "Piezīmes", delete: "Dzēst",
      cancel: "Atcelt", saveProduct: "Saglabāt preci", catalogueFilters: "Kataloga filtri", narrowResults: "Sašaurināt rezultātus",
      clearFilters: "Notīrīt filtrus", applyFilters: "Lietot filtrus", productComparison: "Preču salīdzinājums", compareSelected: "Salīdzināt izvēlētās lampas",
      compare: "Salīdzināt", room: "Telpa", purpose: "Mērķis", lampType: "Lampas veids", roomSize: "Telpas izmērs", ceilingHeight: "Griestu augstums",
      style: "Stils", lightColour: "Gaismas tonis", budget: "Budžets", requiredFeatures: "Nepieciešamās funkcijas", availability: "Pieejamība",
      next: "Tālāk", finish: "Rādīt ieteikumus", skip: "Izlaist", any: "Nav svarīgi", required: "Obligāti", optional: "Vēlams", copied: "Nokopēts",
      productSaved: "Prece saglabāta", productDeleted: "Prece dzēsta", imported: "Katalogs importēts", backupDownloaded: "Rezerves kopija lejupielādēta",
      addedFavorite: "Pievienots izlasei", removedFavorite: "Noņemts no izlases", selectTwo: "Salīdzināšanai izvēlies vismaz divas preces",
      installed: "Lietotni var instalēt", installUnavailable: "Pārlūka izvēlnē izvēlies “Pievienot sākuma ekrānam”.", confirmReset: "Aizvietot katalogu ar sākuma katalogu?",
      confirmDelete: "Dzēst šo preci?", confirmClearHistory: "Dzēst visu konsultāciju vēsturi?", noProducts: "Neviena prece neatbilst filtriem.",
      noFavorites: "Izlasē vēl nav preču.", unknownPrice: "Cena nav ievadīta", unknown: "Nav zināms", inStock: "Ir noliktavā", displayOnly: "Tikai ekspozīcijā",
      orderItem: "Pasūtāma", resultCount: "atbilstības", match: "atbilstība", details: "Detaļas", edit: "Rediģēt", resume: "Atvērt rezultātus",
      remove: "Noņemt", closestMatch: "Tuvākā atbilstība", verifyData: "Pirms pārdošanas pārbaudi trūkstošos parametrus.", targetLight: "Ieteicamais mērķis",
      estimated: "aptuveni", currentFilters: "Aktīvie filtri", clearAll: "Notīrīt visu", consultationSummary: "Konsultācijas kopsavilkums",
      selectedProducts: "Izvēlētās preces", noHistory: "Saglabātu konsultāciju vēl nav.", installApp: "Instalēt lietotni"
    },
    ru: {
      assistantLabel: "Ассистент магазина", guidedConsultation: "Пошаговая консультация", findRightLamp: "Подберите светильник без догадок",
      heroDescription: "Задайте клиенту несколько точных вопросов и сравните лучшие варианты из каталога.", startConsultation: "Начать консультацию",
      specificModel: "Конкретная модель", specificModelHint: "Поиск по названию, коду или функции", chooseByRoom: "Выбрать по комнате",
      chooseByRoomHint: "Спальня, кухня, ванная и другие", solveProblem: "Решить задачу", solveProblemHint: "Темно, датчик, чтение, низкий потолок",
      browseCatalog: "Открыть каталог", browseCatalogHint: "Фильтры без опроса", recentActivity: "Недавняя активность", latestConsultations: "Последние консультации",
      clear: "Очистить", noConsultations: "Консультаций пока нет.", back: "Назад", restart: "Начать заново", adjustAnswers: "Изменить ответы",
      newConsultation: "Новая консультация", recommendations: "Рекомендации", bestMatches: "Лучшие варианты", copySummary: "Копировать итог",
      customerMode: "Режим клиента", noExactMatches: "Точных совпадений нет", noExactMatchesHint: "Увеличьте бюджет, разрешите заказные товары или уберите обязательную функцию.",
      showClosest: "Показать ближайшие варианты", productDatabase: "База товаров", catalog: "Каталог", addProduct: "Добавить товар", search: "Поиск",
      filters: "Фильтры", savedProducts: "Сохранённые товары", favorites: "Избранное", consultationLog: "Журнал консультаций", history: "История",
      export: "Экспорт", appControls: "Настройки приложения", settings: "Настройки", language: "Язык", catalogueManagement: "Управление каталогом",
      catalogueManagementHint: "Изменения хранятся на этом устройстве. Перед очисткой данных браузера сохраните резервную копию.", importCsv: "Импорт CSV",
      importJson: "Импорт JSON", exportCatalog: "Экспорт каталога", downloadTemplate: "Скачать CSV-шаблон", resetSample: "Вернуть стартовый каталог",
      displayOptions: "Отображение", showPrices: "Показывать цены", showPricesHint: "Скройте цены, когда показываете экран клиенту.", compactCards: "Компактные карточки",
      compactCardsHint: "Больше товаров на экране.", about: "О приложении", aboutText: "LightGuide помогает с выбором. Перед продажей проверьте упаковку, совместимость, размеры и актуальное наличие.",
      consult: "Подбор", catalogueEditor: "Редактор каталога", productName: "Название товара", productCode: "Код товара", price: "Цена (€)", lumens: "Люмены",
      watts: "Мощность (Вт)", colorTemperature: "Цветовая температура", diameter: "Диаметр / ширина (см)", stockStatus: "Наличие",
      storeLocation: "Магазин / место", category: "Категория", ipRating: "Степень IP", roomsComma: "Подходящие комнаты (через запятую)",
      stylesComma: "Стили (через запятую)", featuresComma: "Функции (через запятую)", imageUrl: "Ссылка на изображение", notes: "Заметки",
      delete: "Удалить", cancel: "Отмена", saveProduct: "Сохранить товар", catalogueFilters: "Фильтры каталога", narrowResults: "Сузить результаты",
      clearFilters: "Очистить фильтры", applyFilters: "Применить", productComparison: "Сравнение товаров", compareSelected: "Сравнить выбранные светильники",
      compare: "Сравнить", room: "Комната", purpose: "Назначение", lampType: "Тип светильника", roomSize: "Размер комнаты", ceilingHeight: "Высота потолка",
      style: "Стиль", lightColour: "Оттенок света", budget: "Бюджет", requiredFeatures: "Нужные функции", availability: "Доступность",
      next: "Далее", finish: "Показать рекомендации", skip: "Пропустить", any: "Неважно", required: "Обязательно", optional: "Желательно", copied: "Скопировано",
      productSaved: "Товар сохранён", productDeleted: "Товар удалён", imported: "Каталог импортирован", backupDownloaded: "Резервная копия скачана",
      addedFavorite: "Добавлено в избранное", removedFavorite: "Удалено из избранного", selectTwo: "Выберите минимум два товара для сравнения",
      installed: "Приложение можно установить", installUnavailable: "Откройте меню браузера и выберите «Добавить на главный экран».", confirmReset: "Заменить каталог стартовым?",
      confirmDelete: "Удалить этот товар?", confirmClearHistory: "Очистить всю историю консультаций?", noProducts: "Нет товаров по этим фильтрам.",
      noFavorites: "В избранном пока ничего нет.", unknownPrice: "Цена не указана", unknown: "Неизвестно", inStock: "В наличии", displayOnly: "Только образец",
      orderItem: "Под заказ", resultCount: "вариантов", match: "совпадение", details: "Подробнее", edit: "Изменить", resume: "Открыть результаты",
      remove: "Убрать", closestMatch: "Ближайший вариант", verifyData: "Перед продажей проверьте отсутствующие характеристики.", targetLight: "Рекомендуемая яркость",
      estimated: "примерно", currentFilters: "Активные фильтры", clearAll: "Очистить всё", consultationSummary: "Итог консультации",
      selectedProducts: "Выбранные товары", noHistory: "Сохранённых консультаций пока нет.", installApp: "Установить приложение"
    }
  };

  const labels = {
    rooms: {
      bedroom: { en: "Bedroom", lv: "Guļamistaba", ru: "Спальня" }, living_room: { en: "Living room", lv: "Viesistaba", ru: "Гостиная" },
      kitchen: { en: "Kitchen", lv: "Virtuve", ru: "Кухня" }, dining_room: { en: "Dining area", lv: "Ēdamzona", ru: "Столовая" },
      bathroom: { en: "Bathroom", lv: "Vannas istaba", ru: "Ванная" }, hallway: { en: "Hallway", lv: "Gaitenis", ru: "Коридор" },
      office: { en: "Office", lv: "Darba telpa", ru: "Кабинет" }, kids_room: { en: "Children's room", lv: "Bērnistaba", ru: "Детская" },
      wardrobe: { en: "Wardrobe / closet", lv: "Skapis / garderobe", ru: "Шкаф / гардероб" }, outdoor: { en: "Outdoor", lv: "Ārtelpa", ru: "Улица" },
      other: { en: "Other", lv: "Cita", ru: "Другое" }
    },
    purposes: {
      main_light: { en: "Main room lighting", lv: "Galvenais apgaismojums", ru: "Основной свет" }, reading: { en: "Reading", lv: "Lasīšanai", ru: "Для чтения" },
      task_light: { en: "Work / task lighting", lv: "Darba apgaismojums", ru: "Рабочий свет" }, accent_light: { en: "Decorative / accent", lv: "Dekoratīvs / akcents", ru: "Декоративный" },
      mirror: { en: "Mirror lighting", lv: "Spoguļa apgaismojums", ru: "Подсветка зеркала" }, cabinet: { en: "Cabinet lighting", lv: "Skapja apgaismojums", ru: "Подсветка шкафа" }
    },
    categories: {
      ceiling: { en: "Ceiling / flush", lv: "Griestu / plafons", ru: "Потолочный" }, pendant: { en: "Pendant", lv: "Piekaramā", ru: "Подвесной" },
      wall: { en: "Wall lamp", lv: "Sienas lampa", ru: "Настенный" }, table: { en: "Table lamp", lv: "Galda lampa", ru: "Настольный" },
      floor: { en: "Floor lamp", lv: "Stāvlampa", ru: "Торшер" }, cabinet: { en: "Cabinet / strip", lv: "Skapja / lente", ru: "Для шкафа / лента" },
      track: { en: "Track lighting", lv: "Sliežu sistēma", ru: "Трековый" }, outdoor: { en: "Outdoor lamp", lv: "Āra lampa", ru: "Уличный" }
    },
    styles: {
      modern: { en: "Modern", lv: "Moderns", ru: "Современный" }, minimal: { en: "Minimal", lv: "Minimāls", ru: "Минимализм" },
      classic: { en: "Classic", lv: "Klasisks", ru: "Классика" }, boho: { en: "Boho / natural", lv: "Boho / dabīgs", ru: "Бохо / натуральный" },
      industrial: { en: "Industrial", lv: "Industriāls", ru: "Индустриальный" }, decorative: { en: "Decorative", lv: "Dekoratīvs", ru: "Декоративный" },
      statement: { en: "Statement piece", lv: "Akcenta lampa", ru: "Акцентный дизайн" }
    },
    temperatures: {
      warm: { en: "Warm (2700–3000 K)", lv: "Silta (2700–3000 K)", ru: "Тёплый (2700–3000 K)" },
      neutral: { en: "Neutral (3500–4500 K)", lv: "Neitrāla (3500–4500 K)", ru: "Нейтральный (3500–4500 K)" },
      cool: { en: "Cool (5000 K+)", lv: "Auksta (5000 K+)", ru: "Холодный (5000 K+)" },
      tunable: { en: "Adjustable colour", lv: "Regulējams tonis", ru: "Регулируемый оттенок" }, any: { en: "No preference", lv: "Nav svarīgi", ru: "Неважно" }
    },
    features: {
      dimmable: { en: "Dimmable", lv: "Dimmējama", ru: "Диммирование" }, sensor: { en: "Motion sensor", lv: "Kustību sensors", ru: "Датчик движения" },
      smart: { en: "Smart control", lv: "Viedā vadība", ru: "Умное управление" }, low_ceiling: { en: "Suitable for low ceiling", lv: "Zemiem griestiem", ru: "Для низкого потолка" },
      adjustable: { en: "Adjustable direction", lv: "Regulējams virziens", ru: "Регулируемое направление" }, rgb: { en: "RGB colour", lv: "RGB krāsas", ru: "RGB-подсветка" },
      height_adjustable: { en: "Adjustable height", lv: "Regulējams augstums", ru: "Регулируемая высота" }, replaceable_bulb: { en: "Replaceable bulb", lv: "Maināma spuldze", ru: "Сменная лампа" },
      music_sync: { en: "Music sync", lv: "Sinhronizācija ar mūziku", ru: "Синхронизация с музыкой" }
    },
    stocks: {
      in_stock: { en: "In stock", lv: "Ir noliktavā", ru: "В наличии" }, display: { en: "Display only", lv: "Tikai ekspozīcijā", ru: "Только образец" },
      order: { en: "Order item", lv: "Pasūtāma", ru: "Под заказ" }, unknown: { en: "Unknown", lv: "Nav zināms", ru: "Неизвестно" }
    }
  };

  const state = {
    products: loadProducts(),
    favorites: new Set(readJSON(STORAGE.favorites, [])),
    history: readJSON(STORAGE.history, []),
    settings: { language: "en", theme: "system", showPrices: true, compactCards: false, ...readJSON(STORAGE.settings, {}) },
    consultation: emptyConsultation(),
    wizardIndex: 0,
    wizardRoute: "full",
    results: [],
    relaxed: false,
    compare: new Set(),
    catalogFilters: {},
    deferredInstall: null,
    customerMode: false
  };

  const els = {};
  document.addEventListener("DOMContentLoaded", init);

  function init() {
    cacheElements();
    bindEvents();
    applyTheme();
    applySettingsUI();
    applyLanguage();
    renderAll();
    registerServiceWorker();
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      state.deferredInstall = event;
      els.installBtn.classList.remove("hidden");
      toast(t("installed"));
    });
    window.addEventListener("appinstalled", () => {
      state.deferredInstall = null;
      els.installBtn.classList.add("hidden");
    });
  }

  function cacheElements() {
    [
      "mainContent", "consultView", "wizardView", "resultsView", "catalogView", "favoritesView", "historyView", "settingsView",
      "startConsultBtn", "clearHistoryBtn", "homeHistory", "wizardBackBtn", "wizardRestartBtn", "progressBar", "wizardProgressText",
      "wizardEyebrow", "wizardTitle", "wizardDescription", "wizardContent", "wizardActions", "resultsBackBtn", "newConsultBtn",
      "resultSummaryText", "resultsList", "noResults", "relaxFiltersBtn", "copySummaryBtn", "customerModeBtn", "catalogSearch",
      "catalogFilterBtn", "activeFilterChips", "catalogList", "favoritesList", "historyList", "exportHistoryBtn", "addProductBtn",
      "productDialog", "productDialogContent", "editProductDialog", "productForm", "productFormTitle", "productId", "productName",
      "productCode", "productPrice", "productLumens", "productWatts", "productKelvin", "productSize", "productStock", "productLocation",
      "productCategory", "productIp", "productRooms", "productStyles", "productFeatures", "productImage", "productNotes", "deleteProductBtn",
      "filterDialog", "catalogFiltersContent", "clearCatalogFiltersBtn", "compareDialog", "compareContent", "toast", "compareFab", "compareCount",
      "themeBtn", "installBtn", "importCsvBtn", "importJsonBtn", "exportCatalogBtn", "downloadTemplateBtn", "resetCatalogBtn", "csvFileInput",
      "jsonFileInput", "showPricesToggle", "compactCardsToggle"
    ].forEach(id => els[id] = document.getElementById(id));
  }

  function bindEvents() {
    document.querySelectorAll(".nav-item").forEach(button => button.addEventListener("click", () => showView(button.dataset.view)));
    els.startConsultBtn.addEventListener("click", () => startWizard("full"));
    document.querySelectorAll(".quick-card").forEach(button => button.addEventListener("click", () => handleQuick(button.dataset.quick)));
    els.wizardBackBtn.addEventListener("click", wizardBack);
    els.wizardRestartBtn.addEventListener("click", () => startWizard(state.wizardRoute));
    els.resultsBackBtn.addEventListener("click", () => { showView("wizardView", false); renderWizard(); });
    els.newConsultBtn.addEventListener("click", () => startWizard("full"));
    els.relaxFiltersBtn.addEventListener("click", () => { state.relaxed = true; calculateResults(); });
    els.copySummaryBtn.addEventListener("click", copyConsultationSummary);
    els.customerModeBtn.addEventListener("click", toggleCustomerMode);
    els.catalogSearch.addEventListener("input", renderCatalog);
    els.catalogFilterBtn.addEventListener("click", openCatalogFilters);
    els.filterDialog.addEventListener("close", renderCatalog);
    els.clearCatalogFiltersBtn.addEventListener("click", () => { state.catalogFilters = {}; renderFilterFields(); renderCatalog(); els.filterDialog.close(); });
    els.addProductBtn.addEventListener("click", () => openProductEditor());
    els.productForm.addEventListener("submit", saveProductFromForm);
    els.deleteProductBtn.addEventListener("click", deleteCurrentProduct);
    document.querySelectorAll("[data-close-dialog]").forEach(button => button.addEventListener("click", () => document.getElementById(button.dataset.closeDialog).close()));
    els.clearHistoryBtn.addEventListener("click", clearHistory);
    els.exportHistoryBtn.addEventListener("click", exportHistory);
    els.compareFab.addEventListener("click", openCompare);
    els.themeBtn.addEventListener("click", cycleTheme);
    els.installBtn.addEventListener("click", installApp);
    document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.language)));
    els.importCsvBtn.addEventListener("click", () => els.csvFileInput.click());
    els.importJsonBtn.addEventListener("click", () => els.jsonFileInput.click());
    els.csvFileInput.addEventListener("change", importCsv);
    els.jsonFileInput.addEventListener("change", importJson);
    els.exportCatalogBtn.addEventListener("click", exportCatalog);
    els.downloadTemplateBtn.addEventListener("click", downloadCsvTemplate);
    els.resetCatalogBtn.addEventListener("click", resetCatalog);
    els.showPricesToggle.addEventListener("change", () => updateSetting("showPrices", els.showPricesToggle.checked));
    els.compactCardsToggle.addEventListener("change", () => updateSetting("compactCards", els.compactCardsToggle.checked));
    document.addEventListener("click", delegateActions);
  }

  function delegateActions(event) {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    const { action, id } = target.dataset;
    if (action === "details") showProductDetails(id);
    if (action === "favorite") toggleFavorite(id);
    if (action === "compare") toggleCompare(id);
    if (action === "edit") openProductEditor(id);
    if (action === "resume") resumeHistory(Number(id));
    if (action === "remove-history") removeHistory(Number(id));
    if (action === "remove-filter") { delete state.catalogFilters[target.dataset.key]; renderCatalog(); }
  }

  function t(key) {
    return translations[state.settings.language]?.[key] ?? translations.en[key] ?? key;
  }

  function label(group, key) {
    return labels[group]?.[key]?.[state.settings.language] ?? labels[group]?.[key]?.en ?? prettify(key);
  }

  function applyLanguage() {
    document.documentElement.lang = state.settings.language;
    document.querySelectorAll("[data-i18n]").forEach(node => {
      const value = t(node.dataset.i18n);
      if (node.tagName === "INPUT" && node.placeholder) node.placeholder = value;
      else node.textContent = value;
    });
    els.catalogSearch.placeholder = state.settings.language === "lv" ? "Meklē pēc nosaukuma, koda vai funkcijas" : state.settings.language === "ru" ? "Поиск по названию, коду или функции" : "Search name, code or feature";
    document.querySelectorAll("[data-language]").forEach(button => button.classList.toggle("active", button.dataset.language === state.settings.language));
    renderAll();
  }

  function setLanguage(language) {
    state.settings.language = language;
    saveSettings();
    applyLanguage();
  }

  function showView(viewId, updateNav = true) {
    document.querySelectorAll(".view").forEach(view => view.classList.toggle("active", view.id === viewId));
    if (updateNav) {
      document.querySelectorAll(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.view === viewId));
    }
    if (viewId === "catalogView") renderCatalog();
    if (viewId === "favoritesView") renderFavorites();
    if (viewId === "historyView") renderHistory();
    window.scrollTo({ top: 0, behavior: "smooth" });
    els.mainContent.focus({ preventScroll: true });
  }

  function handleQuick(type) {
    if (type === "specific") {
      showView("catalogView");
      setTimeout(() => els.catalogSearch.focus(), 50);
    } else if (type === "catalog") {
      showView("catalogView");
    } else if (type === "room") {
      startWizard("room");
    } else if (type === "problem") {
      startWizard("problem");
    }
  }

  function emptyConsultation() {
    return {
      room: "", purpose: "", category: "", roomSize: 0, ceilingHeight: "", style: "", temperature: "any", budget: 0,
      featuresRequired: [], featuresOptional: [], availability: "order_ok", notes: "", targetLumens: 0, createdAt: new Date().toISOString()
    };
  }

  const wizardSteps = {
    full: ["room", "purpose", "category", "roomSize", "ceilingHeight", "style", "temperature", "budget", "features", "availability"],
    room: ["room", "purpose", "category", "roomSize", "ceilingHeight", "style", "temperature", "budget", "features", "availability"],
    problem: ["problem", "room", "category", "roomSize", "ceilingHeight", "style", "temperature", "budget", "availability"]
  };

  function startWizard(route = "full") {
    state.consultation = emptyConsultation();
    state.wizardRoute = route;
    state.wizardIndex = 0;
    state.relaxed = false;
    showView("wizardView", false);
    renderWizard();
  }

  function currentSteps() { return wizardSteps[state.wizardRoute] || wizardSteps.full; }

  function renderWizard() {
    const steps = currentSteps();
    const stepKey = steps[state.wizardIndex];
    const progress = ((state.wizardIndex + 1) / steps.length) * 100;
    els.progressBar.style.width = `${progress}%`;
    els.wizardProgressText.textContent = `${state.wizardIndex + 1} / ${steps.length}`;
    els.wizardBackBtn.disabled = state.wizardIndex === 0;
    els.wizardContent.innerHTML = "";
    els.wizardActions.innerHTML = "";

    const configs = getStepConfigs();
    const config = configs[stepKey];
    els.wizardEyebrow.textContent = config.eyebrow;
    els.wizardTitle.textContent = config.title;
    els.wizardDescription.textContent = config.description || "";
    config.render();
  }

  function getStepConfigs() {
    const lang = state.settings.language;
    const text = {
      en: {
        roomT: "Which room is the customer lighting?", roomD: "Choose the closest match.", purposeT: "What should the light do?", purposeD: "The same room may need different lamps for general light, reading or decoration.",
        categoryT: "What type of lamp do they want?", categoryD: "Choose a preferred form, or leave it open.", sizeT: "How large is the room?", sizeD: "This lets the app estimate a useful lumen range.",
        heightT: "What is the ceiling situation?", heightD: "Low ceilings usually favour flush or compact fittings.", styleT: "Which style fits the room?", styleD: "Choose one, or keep all styles available.",
        tempT: "What light colour do they prefer?", tempD: "Warm light feels cosy; neutral light is clearer for work and grooming.", budgetT: "What is the maximum budget?", budgetD: "Leave at €0 when the customer has no fixed limit.",
        featuresT: "Which features matter?", featuresD: "Tap once for preferred, twice for required, and again to clear.", availabilityT: "Can the customer wait for an order?", availabilityD: "Stock information is only as current as your catalogue.",
        problemT: "What problem are they trying to solve?", problemD: "Select the strongest need."
      },
      lv: {
        roomT: "Kurai telpai klients meklē apgaismojumu?", roomD: "Izvēlies tuvāko variantu.", purposeT: "Kam gaisma būs paredzēta?", purposeD: "Vienā telpā var būt vajadzīga atšķirīga lampa pamatgaismai, lasīšanai vai dekoram.",
        categoryT: "Kādu lampas veidu klients vēlas?", categoryD: "Izvēlies vēlamo veidu vai atstāj brīvu.", sizeT: "Cik liela ir telpa?", sizeD: "Tas palīdz aprēķināt aptuvenu nepieciešamo lūmenu diapazonu.",
        heightT: "Kāda ir griestu situācija?", heightD: "Zemiem griestiem parasti piemērotākas ir kompaktas griestu lampas.", styleT: "Kāds stils iederas telpā?", styleD: "Izvēlies vienu vai atstāj visus stilus.",
        tempT: "Kādu gaismas toni klients vēlas?", tempD: "Silta gaisma rada mājīgumu; neitrāla ir skaidrāka darbam un spogulim.", budgetT: "Kāds ir maksimālais budžets?", budgetD: "Atstāj €0, ja stingra ierobežojuma nav.",
        featuresT: "Kuras funkcijas ir svarīgas?", featuresD: "Pirmais spiediens — vēlama, otrais — obligāta, trešais — noņemt.", availabilityT: "Vai klients var gaidīt pasūtījumu?", availabilityD: "Atlikumi ir tik aktuāli, cik ievadītā kataloga informācija.",
        problemT: "Kādu problēmu klients vēlas atrisināt?", problemD: "Izvēlies galveno vajadzību."
      },
      ru: {
        roomT: "Для какой комнаты нужен свет?", roomD: "Выберите ближайший вариант.", purposeT: "Какую задачу должен выполнять свет?", purposeD: "Для одной комнаты могут понадобиться разные светильники: основной свет, чтение или декор.",
        categoryT: "Какой тип светильника нужен?", categoryD: "Выберите предпочтительный тип или оставьте открытым.", sizeT: "Какова площадь комнаты?", sizeD: "Так приложение оценит полезный диапазон яркости.",
        heightT: "Какая высота потолка?", heightD: "Для низких потолков обычно лучше компактные потолочные модели.", styleT: "Какой стиль подходит комнате?", styleD: "Выберите один или оставьте все варианты.",
        tempT: "Какой оттенок света нужен?", tempD: "Тёплый свет уютнее; нейтральный яснее для работы и зеркала.", budgetT: "Какой максимальный бюджет?", budgetD: "Оставьте €0, если жёсткого лимита нет.",
        featuresT: "Какие функции важны?", featuresD: "Одно нажатие — желательно, второе — обязательно, третье — убрать.", availabilityT: "Клиент готов ждать заказ?", availabilityD: "Наличие актуально лишь настолько, насколько актуален каталог.",
        problemT: "Какую проблему нужно решить?", problemD: "Выберите главную потребность."
      }
    }[lang];

    return {
      room: { eyebrow: t("room"), title: text.roomT, description: text.roomD, render: renderRoomStep },
      purpose: { eyebrow: t("purpose"), title: text.purposeT, description: text.purposeD, render: renderPurposeStep },
      category: { eyebrow: t("lampType"), title: text.categoryT, description: text.categoryD, render: renderCategoryStep },
      roomSize: { eyebrow: t("roomSize"), title: text.sizeT, description: text.sizeD, render: renderRoomSizeStep },
      ceilingHeight: { eyebrow: t("ceilingHeight"), title: text.heightT, description: text.heightD, render: renderHeightStep },
      style: { eyebrow: t("style"), title: text.styleT, description: text.styleD, render: renderStyleStep },
      temperature: { eyebrow: t("lightColour"), title: text.tempT, description: text.tempD, render: renderTemperatureStep },
      budget: { eyebrow: t("budget"), title: text.budgetT, description: text.budgetD, render: renderBudgetStep },
      features: { eyebrow: t("requiredFeatures"), title: text.featuresT, description: text.featuresD, render: renderFeaturesStep },
      availability: { eyebrow: t("availability"), title: text.availabilityT, description: text.availabilityD, render: renderAvailabilityStep },
      problem: { eyebrow: t("purpose"), title: text.problemT, description: text.problemD, render: renderProblemStep }
    };
  }

  function choiceGrid(options, current, onSelect, includeAny = false) {
    const wrap = document.createElement("div");
    wrap.className = "choice-grid";
    const list = includeAny ? [{ value: "", label: t("any"), hint: "" }, ...options] : options;
    list.forEach(option => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `choice-button ${current === option.value ? "selected" : ""}`;
      button.innerHTML = `<strong>${escapeHtml(option.label)}</strong>${option.hint ? `<small>${escapeHtml(option.hint)}</small>` : ""}`;
      button.addEventListener("click", () => onSelect(option.value));
      wrap.appendChild(button);
    });
    els.wizardContent.appendChild(wrap);
  }

  function renderRoomStep() {
    const keys = ["bedroom", "living_room", "kitchen", "dining_room", "bathroom", "hallway", "office", "kids_room", "wardrobe", "outdoor", "other"];
    choiceGrid(keys.map(key => ({ value: key, label: label("rooms", key) })), state.consultation.room, value => {
      state.consultation.room = value;
      if (value === "wardrobe") { state.consultation.purpose = "cabinet"; state.consultation.category = "cabinet"; }
      if (value === "outdoor") state.consultation.category = "outdoor";
      wizardNext();
    });
  }

  function renderPurposeStep() {
    const keys = ["main_light", "reading", "task_light", "accent_light", "mirror", "cabinet"];
    choiceGrid(keys.map(key => ({ value: key, label: label("purposes", key) })), state.consultation.purpose, value => {
      state.consultation.purpose = value;
      if (value === "reading" && !state.consultation.featuresOptional.includes("adjustable")) state.consultation.featuresOptional.push("adjustable");
      if (value === "cabinet") state.consultation.category = "cabinet";
      wizardNext();
    });
  }

  function renderCategoryStep() {
    const keys = ["ceiling", "pendant", "wall", "table", "floor", "cabinet", "track", "outdoor"];
    choiceGrid(keys.map(key => ({ value: key, label: label("categories", key) })), state.consultation.category, value => {
      state.consultation.category = value;
      wizardNext();
    }, true);
  }

  function renderRoomSizeStep() {
    const value = state.consultation.roomSize || 0;
    els.wizardContent.innerHTML = `
      <div class="input-card">
        <div class="range-row">
          <input id="roomSizeRange" type="range" min="0" max="60" step="1" value="${value}">
          <input id="roomSizeNumber" type="number" min="0" max="500" step="0.5" value="${value}" inputmode="decimal" aria-label="Square metres">
        </div>
        <p id="lumenEstimate" class="muted"></p>
      </div>`;
    const range = document.getElementById("roomSizeRange");
    const number = document.getElementById("roomSizeNumber");
    const update = val => {
      const numeric = Math.max(0, Number(val) || 0);
      state.consultation.roomSize = numeric;
      range.value = Math.min(60, numeric);
      number.value = numeric || "";
      state.consultation.targetLumens = calculateTargetLumens(state.consultation);
      document.getElementById("lumenEstimate").textContent = numeric ? `${t("targetLight")}: ${formatNumber(state.consultation.targetLumens * 0.8)}–${formatNumber(state.consultation.targetLumens * 1.2)} lm (${t("estimated")})` : "";
    };
    range.addEventListener("input", e => update(e.target.value));
    number.addEventListener("input", e => update(e.target.value));
    update(value);
    wizardButtons(true);
  }

  function renderHeightStep() {
    const options = [
      { value: "low", label: localized("Low — below 2.5 m", "Zemi — zem 2,5 m", "Низкий — ниже 2,5 м") },
      { value: "normal", label: localized("Normal — 2.5 to 3 m", "Standarta — 2,5 līdz 3 m", "Обычный — 2,5–3 м") },
      { value: "high", label: localized("High — above 3 m", "Augsti — virs 3 m", "Высокий — выше 3 м") },
      { value: "sloped", label: localized("Sloped / unusual", "Slīpi / nestandarta", "Наклонный / нестандартный") }
    ];
    choiceGrid(options, state.consultation.ceilingHeight, value => {
      state.consultation.ceilingHeight = value;
      if (value === "low") addUnique(state.consultation.featuresRequired, "low_ceiling");
      else removeValue(state.consultation.featuresRequired, "low_ceiling");
      wizardNext();
    });
  }

  function renderStyleStep() {
    const keys = ["modern", "minimal", "classic", "boho", "industrial", "decorative", "statement"];
    choiceGrid(keys.map(key => ({ value: key, label: label("styles", key) })), state.consultation.style, value => {
      state.consultation.style = value;
      wizardNext();
    }, true);
  }

  function renderTemperatureStep() {
    const keys = ["warm", "neutral", "cool", "tunable", "any"];
    choiceGrid(keys.map(key => ({ value: key, label: label("temperatures", key) })), state.consultation.temperature, value => {
      state.consultation.temperature = value;
      wizardNext();
    });
  }

  function renderBudgetStep() {
    const value = state.consultation.budget || 0;
    els.wizardContent.innerHTML = `
      <div class="input-card">
        <div class="range-row">
          <input id="budgetRange" type="range" min="0" max="1000" step="10" value="${Math.min(value, 1000)}">
          <input id="budgetNumber" type="number" min="0" max="100000" step="1" value="${value || ""}" inputmode="decimal" aria-label="Euro">
        </div>
        <p id="budgetText" class="muted"></p>
      </div>`;
    const range = document.getElementById("budgetRange");
    const number = document.getElementById("budgetNumber");
    const update = val => {
      const numeric = Math.max(0, Number(val) || 0);
      state.consultation.budget = numeric;
      range.value = Math.min(1000, numeric);
      number.value = numeric || "";
      document.getElementById("budgetText").textContent = numeric ? `€${formatNumber(numeric)}` : t("any");
    };
    range.addEventListener("input", e => update(e.target.value));
    number.addEventListener("input", e => update(e.target.value));
    update(value);
    wizardButtons(true);
  }

  function renderFeaturesStep() {
    const keys = ["dimmable", "sensor", "smart", "adjustable", "rgb", "height_adjustable", "replaceable_bulb", "music_sync"];
    const wrap = document.createElement("div");
    wrap.className = "choice-grid";
    keys.forEach(key => {
      const button = document.createElement("button");
      button.type = "button";
      const status = state.consultation.featuresRequired.includes(key) ? "required" : state.consultation.featuresOptional.includes(key) ? "optional" : "";
      button.className = `choice-button ${status ? "selected" : ""}`;
      button.innerHTML = `<strong>${escapeHtml(label("features", key))}</strong><small>${status ? t(status) : t("any")}</small>`;
      button.addEventListener("click", () => {
        cycleFeature(key);
        renderWizard();
      });
      wrap.appendChild(button);
    });
    els.wizardContent.appendChild(wrap);
    wizardButtons(true);
  }

  function renderAvailabilityStep() {
    const options = [
      { value: "in_stock", label: localized("Must be available now", "Jābūt pieejamai tagad", "Только в наличии"), hint: localized("In-stock items only", "Tikai noliktavas preces", "Только складские товары") },
      { value: "display_ok", label: localized("Display item is acceptable", "Der arī ekspozīcijas prece", "Подойдёт образец"), hint: localized("Include in-stock and display items", "Iekļaut noliktavu un ekspozīciju", "Включить наличие и образцы") },
      { value: "order_ok", label: localized("Ordering is acceptable", "Var pasūtīt", "Можно заказать"), hint: localized("Show the full catalogue", "Rādīt visu katalogu", "Показать весь каталог") }
    ];
    choiceGrid(options, state.consultation.availability, value => {
      state.consultation.availability = value;
      finishWizard();
    });
  }

  function renderProblemStep() {
    const options = [
      { value: "too_dark", label: localized("The room is too dark", "Telpā ir par tumšu", "В комнате слишком темно"), hint: localized("Prioritise lumen output", "Prioritāte — lūmeni", "Приоритет — яркость") },
      { value: "reading", label: label("purposes", "reading"), hint: localized("Focused, comfortable light", "Fokusēta, ērta gaisma", "Направленный комфортный свет") },
      { value: "sensor", label: label("features", "sensor"), hint: localized("Automatic light", "Automātiska ieslēgšanās", "Автоматическое включение") },
      { value: "low_ceiling", label: label("features", "low_ceiling"), hint: localized("Compact fixture", "Kompakta lampa", "Компактный светильник") },
      { value: "decorative", label: label("purposes", "accent_light"), hint: localized("Looks matter most", "Svarīgākais ir dizains", "Главное — дизайн") },
      { value: "smart", label: label("features", "smart"), hint: localized("App or remote control", "Vadība ar lietotni vai pulti", "Управление приложением или пультом") }
    ];
    choiceGrid(options, "", value => {
      if (value === "too_dark") state.consultation.purpose = "main_light";
      if (value === "reading") { state.consultation.purpose = "reading"; addUnique(state.consultation.featuresRequired, "adjustable"); }
      if (["sensor", "low_ceiling", "smart"].includes(value)) addUnique(state.consultation.featuresRequired, value);
      if (value === "decorative") state.consultation.purpose = "accent_light";
      wizardNext();
    });
  }

  function wizardButtons(canContinue) {
    const skip = document.createElement("button");
    skip.type = "button";
    skip.className = "secondary-button";
    skip.textContent = t("skip");
    skip.addEventListener("click", wizardNext);
    const next = document.createElement("button");
    next.type = "button";
    next.className = "primary-button";
    next.textContent = state.wizardIndex === currentSteps().length - 1 ? t("finish") : t("next");
    next.disabled = !canContinue;
    next.addEventListener("click", () => state.wizardIndex === currentSteps().length - 1 ? finishWizard() : wizardNext());
    els.wizardActions.append(skip, next);
  }

  function wizardNext() {
    if (state.wizardIndex < currentSteps().length - 1) {
      state.wizardIndex += 1;
      renderWizard();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else finishWizard();
  }

  function wizardBack() {
    if (state.wizardIndex > 0) {
      state.wizardIndex -= 1;
      renderWizard();
    }
  }

  function finishWizard() {
    state.consultation.targetLumens = calculateTargetLumens(state.consultation);
    state.consultation.createdAt = new Date().toISOString();
    state.relaxed = false;
    calculateResults(true);
    showView("resultsView", false);
  }

  function cycleFeature(key) {
    if (!state.consultation.featuresOptional.includes(key) && !state.consultation.featuresRequired.includes(key)) {
      state.consultation.featuresOptional.push(key);
    } else if (state.consultation.featuresOptional.includes(key)) {
      removeValue(state.consultation.featuresOptional, key);
      state.consultation.featuresRequired.push(key);
    } else {
      removeValue(state.consultation.featuresRequired, key);
    }
  }

  function calculateTargetLumens(c) {
    if (!c.roomSize) return 0;
    const baseLux = {
      bedroom: 150, living_room: 180, kitchen: 300, dining_room: 180, bathroom: 250, hallway: 120,
      office: 350, kids_room: 250, wardrobe: 200, outdoor: 120, other: 180
    }[c.room] || 180;
    const purposeMultiplier = { main_light: 1, reading: 0.35, task_light: 0.65, accent_light: 0.3, mirror: 0.45, cabinet: 0.25 }[c.purpose] || 1;
    let result = c.roomSize * baseLux * purposeMultiplier;
    if (c.ceilingHeight === "high") result *= 1.25;
    if (c.ceilingHeight === "sloped") result *= 1.1;
    return Math.round(result / 50) * 50;
  }

  function calculateResults(saveToHistory = false) {
    const scored = state.products.map(product => scoreProduct(product, state.consultation, state.relaxed)).filter(Boolean).sort((a, b) => b.score - a.score);
    state.results = scored.slice(0, 20);
    if (saveToHistory) saveConsultationHistory();
    renderResults();
  }

  function scoreProduct(product, c, relaxed) {
    let score = 5;
    const reasons = [];
    const warnings = [];
    const hard = !relaxed;

    if (c.availability === "in_stock" && product.stock !== "in_stock") {
      if (hard) return null;
      score -= 24;
      warnings.push(label("stocks", product.stock));
    } else if (c.availability === "display_ok" && !["in_stock", "display"].includes(product.stock)) {
      if (hard) return null;
      score -= 16;
    } else if (product.stock === "in_stock") {
      score += 8;
      reasons.push(t("inStock"));
    }

    if (c.budget && product.price != null) {
      if (product.price <= c.budget) {
        score += 12;
        reasons.push(localized("within budget", "iekļaujas budžetā", "в рамках бюджета"));
      } else {
        const over = (product.price - c.budget) / c.budget;
        if (hard && over > 0.15) return null;
        score -= Math.min(25, Math.round(over * 35));
        warnings.push(localized("over budget", "virs budžeta", "выше бюджета"));
      }
    } else if (c.budget && product.price == null) {
      warnings.push(t("unknownPrice"));
      score -= 3;
    }

    if (c.room) {
      if (product.rooms.includes(c.room)) {
        score += 24;
        reasons.push(label("rooms", c.room));
      } else if (hard && ["bathroom", "outdoor", "wardrobe"].includes(c.room)) {
        return null;
      } else score -= 7;
    }

    if (c.category) {
      if (product.category === c.category) {
        score += 22;
        reasons.push(label("categories", c.category));
      } else if (hard) return null;
      else score -= 12;
    }

    if (c.purpose) {
      const purposeFeatures = {
        main_light: ["main_light"], reading: ["reading", "task_light", "adjustable"], task_light: ["task_light"],
        accent_light: ["accent_light", "statement"], mirror: ["mirror", "task_light"], cabinet: ["cabinet", "task_light", "sensor"]
      }[c.purpose] || [];
      const hit = purposeFeatures.some(feature => product.features.includes(feature));
      if (hit) { score += 16; reasons.push(label("purposes", c.purpose)); }
      else score -= 5;
    }

    if (c.style) {
      if (product.styles.includes(c.style)) { score += 10; reasons.push(label("styles", c.style)); }
      else score -= 3;
    }

    if (c.temperature && c.temperature !== "any") {
      const bucket = temperatureBucket(product.kelvin, product.features);
      if (bucket === c.temperature || (c.temperature === "tunable" && product.features.includes("smart"))) {
        score += 9;
        reasons.push(label("temperatures", c.temperature));
      } else if (product.kelvin) score -= 5;
      else warnings.push(localized("colour temperature missing", "nav krāsu temperatūras", "не указана температура"));
    }

    c.featuresRequired.forEach(feature => {
      if (product.features.includes(feature)) { score += 13; reasons.push(label("features", feature)); }
      else { score -= 20; warnings.push(`${label("features", feature)} — ${localized("missing", "nav", "нет")}`); }
    });
    if (hard && c.featuresRequired.some(feature => !product.features.includes(feature))) return null;

    c.featuresOptional.forEach(feature => {
      if (product.features.includes(feature)) { score += 6; reasons.push(label("features", feature)); }
    });

    if (c.room === "bathroom") {
      const ip = parseInt(String(product.ip || "").replace(/\D/g, ""), 10) || 0;
      if (ip >= 44) { score += 20; reasons.push(product.ip); }
      else if (hard) return null;
      else { score -= 30; warnings.push(localized("verify bathroom zone/IP rating", "pārbaudi vannas istabas zonu/IP", "проверьте зону ванной/IP")); }
    }
    if (c.room === "outdoor") {
      const ip = parseInt(String(product.ip || "").replace(/\D/g, ""), 10) || 0;
      if (ip >= 44) score += 18;
      else if (hard) return null;
      else score -= 25;
    }

    if (c.ceilingHeight === "low") {
      if (product.features.includes("low_ceiling") || product.category === "ceiling") score += 9;
      if (product.category === "pendant" && !product.features.includes("height_adjustable")) score -= 12;
    }

    if (c.targetLumens) {
      if (product.lumens) {
        const ratio = product.lumens / c.targetLumens;
        if (ratio >= 0.8 && ratio <= 1.25) { score += 20; reasons.push(localized("suitable brightness", "piemērots spilgtums", "подходящая яркость")); }
        else if (ratio >= 0.6 && ratio <= 1.6) score += 9;
        else if (ratio < 0.45) { score -= 18; warnings.push(localized("may be too dim", "var būt par tumšu", "может быть слишком темно")); }
        else if (ratio > 2.2 && !product.features.includes("dimmable")) { score -= 8; warnings.push(localized("may be too bright", "var būt par spilgtu", "может быть слишком ярко")); }
      } else warnings.push(localized("lumen output missing", "nav lūmenu", "не указаны люмены"));
    }

    if (!product.price || !product.lumens || !product.kelvin) warnings.push(t("verifyData"));
    const percentage = Math.max(1, Math.min(99, Math.round(50 + score / 2)));
    return { product, score, percentage, reasons: unique(reasons).slice(0, 5), warnings: unique(warnings).slice(0, 4) };
  }

  function renderResults() {
    const c = state.consultation;
    const parts = [c.room && label("rooms", c.room), c.purpose && label("purposes", c.purpose), c.roomSize ? `${c.roomSize} m²` : "", c.budget ? `≤ €${formatNumber(c.budget)}` : ""].filter(Boolean);
    if (c.targetLumens) parts.push(`${t("targetLight")}: ${formatNumber(c.targetLumens * 0.8)}–${formatNumber(c.targetLumens * 1.2)} lm`);
    els.resultSummaryText.textContent = `${parts.join(" · ")} · ${state.results.length} ${t("resultCount")}`;
    els.resultsList.innerHTML = state.results.map((entry, index) => productCard(entry.product, { score: entry.percentage, reason: entry.reasons.join(" · "), warnings: entry.warnings, rank: index + 1 })).join("");
    els.noResults.classList.toggle("hidden", state.results.length > 0);
    els.resultsList.classList.toggle("hidden", state.results.length === 0);
    document.body.classList.toggle("customer-mode", state.customerMode);
    updateCompareFab();
  }

  function productCard(product, options = {}) {
    const isFavorite = state.favorites.has(product.id);
    const isCompare = state.compare.has(product.id);
    const compact = state.settings.compactCards ? "compact" : "";
    const stockClass = product.stock === "in_stock" ? "stock" : product.stock === "order" ? "order" : "unknown";
    const image = product.image ? `<img src="${escapeAttr(product.image)}" alt="" loading="lazy" onerror="this.parentElement.innerHTML='<span class=\'product-placeholder\'>✦</span>'">` : `<span class="product-placeholder">✦</span>`;
    const price = product.price != null ? `€${Number(product.price).toFixed(2)}` : t("unknownPrice");
    const meta = [product.lumens ? `${formatNumber(product.lumens)} lm` : "", product.kelvin ? `${escapeHtml(product.kelvin)} K` : "", product.sizeCm ? `${product.sizeCm} cm` : "", product.ip || ""].filter(Boolean);
    return `
      <article class="product-card ${compact}" data-product-id="${escapeAttr(product.id)}">
        <div class="product-image">${image}</div>
        <div class="product-body">
          <div class="product-topline">
            <div>
              ${options.rank ? `<span class="badge score-badge">#${options.rank} · ${options.score}%</span>` : ""}
              <h3 class="product-title">${escapeHtml(product.name)}</h3>
              <div class="product-code">${escapeHtml(product.code || "")}</div>
            </div>
            <button class="favorite-button" type="button" data-action="favorite" data-id="${escapeAttr(product.id)}" aria-label="Favourite">${isFavorite ? "♥" : "♡"}</button>
          </div>
          <div class="product-meta">
            <span class="badge ${stockClass}">${escapeHtml(label("stocks", product.stock))}</span>
            ${meta.map(value => `<span>${value}</span>`).join("")}
            <span class="price internal-only">${escapeHtml(price)}</span>
          </div>
          ${options.reason ? `<p class="product-reason">${escapeHtml(options.reason)}</p>` : ""}
          ${options.warnings?.length ? `<p class="product-reason muted internal-only">⚠ ${escapeHtml(options.warnings.join(" · "))}</p>` : ""}
          <div class="product-actions">
            <button class="secondary-button" type="button" data-action="details" data-id="${escapeAttr(product.id)}">${t("details")}</button>
            <button class="secondary-button internal-only" type="button" data-action="compare" data-id="${escapeAttr(product.id)}">${isCompare ? t("remove") : t("compare")}</button>
            <button class="text-button internal-only" type="button" data-action="edit" data-id="${escapeAttr(product.id)}">${t("edit")}</button>
          </div>
        </div>
      </article>`;
  }

  function showProductDetails(id) {
    const product = state.products.find(item => item.id === id);
    if (!product) return;
    const rows = [
      [t("productCode"), product.code || t("unknown")], [t("price"), product.price != null ? `€${Number(product.price).toFixed(2)}` : t("unknownPrice")],
      [t("lumens"), product.lumens ? `${formatNumber(product.lumens)} lm` : t("unknown")], [t("watts"), product.watts ? `${product.watts} W` : t("unknown")],
      [t("colorTemperature"), product.kelvin ? `${product.kelvin} K` : t("unknown")], [t("diameter"), product.sizeCm ? `${product.sizeCm} cm` : t("unknown")],
      [t("category"), label("categories", product.category)], [t("ipRating"), product.ip || t("unknown")],
      [t("stockStatus"), label("stocks", product.stock)], [t("storeLocation"), product.location || t("unknown")],
      [t("room"), product.rooms.map(x => label("rooms", x)).join(", ") || t("unknown")], [t("style"), product.styles.map(x => label("styles", x)).join(", ") || t("unknown")],
      [t("requiredFeatures"), product.features.map(x => label("features", x)).join(", ") || t("unknown")]
    ];
    els.productDialogContent.innerHTML = `
      <p class="eyebrow">${escapeHtml(product.code || t("details"))}</p>
      <h2>${escapeHtml(product.name)}</h2>
      ${product.image ? `<img src="${escapeAttr(product.image)}" alt="" style="width:100%;max-height:300px;object-fit:contain;border-radius:16px;background:var(--surface-strong);margin-bottom:16px">` : ""}
      <table class="compare-table">${rows.map(([key, value]) => `<tr><th>${escapeHtml(key)}</th><td>${escapeHtml(value)}</td></tr>`).join("")}</table>
      ${product.notes ? `<p class="muted" style="margin-top:16px">${escapeHtml(product.notes)}</p>` : ""}
      <div class="dialog-actions internal-only">
        <button class="secondary-button" type="button" data-action="favorite" data-id="${escapeAttr(product.id)}">${state.favorites.has(product.id) ? t("remove") : t("favorites")}</button>
        <button class="primary-button" type="button" data-action="edit" data-id="${escapeAttr(product.id)}">${t("edit")}</button>
      </div>`;
    els.productDialog.showModal();
  }

  function toggleFavorite(id) {
    if (state.favorites.has(id)) { state.favorites.delete(id); toast(t("removedFavorite")); }
    else { state.favorites.add(id); toast(t("addedFavorite")); }
    localStorage.setItem(STORAGE.favorites, JSON.stringify([...state.favorites]));
    renderCatalog(); renderFavorites(); renderResults();
  }

  function toggleCompare(id) {
    if (state.compare.has(id)) state.compare.delete(id);
    else if (state.compare.size < 3) state.compare.add(id);
    else toast(localized("You can compare up to three products", "Var salīdzināt līdz trim precēm", "Можно сравнить до трёх товаров"));
    updateCompareFab();
    renderCatalog(); renderFavorites(); renderResults();
  }

  function updateCompareFab() {
    els.compareCount.textContent = state.compare.size;
    els.compareFab.classList.toggle("hidden", state.compare.size < 2);
  }

  function openCompare() {
    const products = [...state.compare].map(id => state.products.find(product => product.id === id)).filter(Boolean);
    if (products.length < 2) { toast(t("selectTwo")); return; }
    const rows = [
      [t("price"), p => p.price != null ? `€${Number(p.price).toFixed(2)}` : t("unknown")],
      [t("lumens"), p => p.lumens ? `${formatNumber(p.lumens)} lm` : t("unknown")],
      [t("watts"), p => p.watts ? `${p.watts} W` : t("unknown")],
      [t("colorTemperature"), p => p.kelvin ? `${p.kelvin} K` : t("unknown")],
      [t("diameter"), p => p.sizeCm ? `${p.sizeCm} cm` : t("unknown")],
      [t("stockStatus"), p => label("stocks", p.stock)],
      [t("storeLocation"), p => p.location || t("unknown")],
      [t("ipRating"), p => p.ip || t("unknown")],
      [t("requiredFeatures"), p => p.features.map(x => label("features", x)).join(", ") || t("unknown")]
    ];
    els.compareContent.innerHTML = `<table class="compare-table"><thead><tr><th></th>${products.map(p => `<th>${escapeHtml(p.name)}</th>`).join("")}</tr></thead><tbody>${rows.map(([name, get]) => `<tr><th>${escapeHtml(name)}</th>${products.map(p => `<td>${escapeHtml(get(p))}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
    els.compareDialog.showModal();
  }

  function renderCatalog() {
    if (!els.catalogList) return;
    const query = (els.catalogSearch?.value || "").trim().toLowerCase();
    let products = state.products.filter(product => {
      const haystack = [product.name, product.code, product.location, product.notes, ...product.rooms, ...product.styles, ...product.features].join(" ").toLowerCase();
      if (query && !haystack.includes(query)) return false;
      const f = state.catalogFilters;
      if (f.category && product.category !== f.category) return false;
      if (f.room && !product.rooms.includes(f.room)) return false;
      if (f.stock && product.stock !== f.stock) return false;
      if (f.feature && !product.features.includes(f.feature)) return false;
      if (f.maxPrice && (product.price == null || product.price > f.maxPrice)) return false;
      return true;
    });
    products.sort((a, b) => (a.stock === "in_stock" ? -1 : 0) - (b.stock === "in_stock" ? -1 : 0) || a.name.localeCompare(b.name));
    els.catalogList.innerHTML = products.length ? products.map(product => productCard(product)).join("") : `<div class="panel empty-state">${t("noProducts")}</div>`;
    renderFilterChips();
    updateCompareFab();
  }

  function renderFilterChips() {
    const entries = Object.entries(state.catalogFilters).filter(([, value]) => value !== "" && value != null && value !== 0);
    els.activeFilterChips.innerHTML = entries.map(([key, value]) => {
      let display = value;
      if (key === "category") display = label("categories", value);
      if (key === "room") display = label("rooms", value);
      if (key === "stock") display = label("stocks", value);
      if (key === "feature") display = label("features", value);
      if (key === "maxPrice") display = `≤ €${value}`;
      return `<button class="chip" type="button" data-action="remove-filter" data-key="${escapeAttr(key)}">${escapeHtml(display)} ×</button>`;
    }).join("");
  }

  function openCatalogFilters() {
    renderFilterFields();
    els.filterDialog.showModal();
  }

  function renderFilterFields() {
    const f = state.catalogFilters;
    els.catalogFiltersContent.innerHTML = `
      <label><span>${t("category")}</span><select id="filterCategory"><option value="">${t("any")}</option>${Object.keys(labels.categories).map(key => `<option value="${key}" ${f.category === key ? "selected" : ""}>${escapeHtml(label("categories", key))}</option>`).join("")}</select></label>
      <label><span>${t("room")}</span><select id="filterRoom"><option value="">${t("any")}</option>${Object.keys(labels.rooms).map(key => `<option value="${key}" ${f.room === key ? "selected" : ""}>${escapeHtml(label("rooms", key))}</option>`).join("")}</select></label>
      <label><span>${t("stockStatus")}</span><select id="filterStock"><option value="">${t("any")}</option>${Object.keys(labels.stocks).map(key => `<option value="${key}" ${f.stock === key ? "selected" : ""}>${escapeHtml(label("stocks", key))}</option>`).join("")}</select></label>
      <label><span>${t("requiredFeatures")}</span><select id="filterFeature"><option value="">${t("any")}</option>${Object.keys(labels.features).map(key => `<option value="${key}" ${f.feature === key ? "selected" : ""}>${escapeHtml(label("features", key))}</option>`).join("")}</select></label>
      <label><span>${t("budget")}</span><input id="filterMaxPrice" type="number" min="0" value="${f.maxPrice || ""}" placeholder="€"></label>`;
    ["Category", "Room", "Stock", "Feature", "MaxPrice"].forEach(suffix => {
      document.getElementById(`filter${suffix}`).addEventListener("change", event => {
        const key = suffix.charAt(0).toLowerCase() + suffix.slice(1);
        state.catalogFilters[key] = suffix === "MaxPrice" ? Number(event.target.value) || 0 : event.target.value;
      });
    });
  }

  function renderFavorites() {
    const products = state.products.filter(product => state.favorites.has(product.id));
    els.favoritesList.innerHTML = products.length ? products.map(product => productCard(product)).join("") : `<div class="panel empty-state">${t("noFavorites")}</div>`;
    updateCompareFab();
  }

  function renderHistory() {
    const html = state.history.length ? state.history.map((item, index) => historyCard(item, index)).join("") : `<div class="panel empty-state">${t("noHistory")}</div>`;
    els.historyList.innerHTML = html;
    els.homeHistory.innerHTML = state.history.length ? state.history.slice(0, 3).map((item, index) => historyCard(item, index, true)).join("") : t("noConsultations");
    els.homeHistory.classList.toggle("empty-state", !state.history.length);
  }

  function historyCard(item, index, compact = false) {
    const c = item.consultation;
    const tags = [c.room && label("rooms", c.room), c.purpose && label("purposes", c.purpose), c.roomSize ? `${c.roomSize} m²` : "", c.budget ? `€${c.budget}` : ""].filter(Boolean);
    const names = item.productIds.map(id => state.products.find(p => p.id === id)?.name).filter(Boolean).slice(0, compact ? 2 : 4).join(" · ");
    return `<article class="history-card"><header><div><strong>${escapeHtml(tags.slice(0, 2).join(" — ") || t("consultationSummary"))}</strong><div class="product-code">${escapeHtml(names)}</div></div><time>${formatDate(item.createdAt)}</time></header><div class="history-tags">${tags.map(tag => `<span class="chip">${escapeHtml(tag)}</span>`).join("")}</div><div class="actions"><button class="secondary-button compact" type="button" data-action="resume" data-id="${index}">${t("resume")}</button>${compact ? "" : `<button class="text-button" type="button" data-action="remove-history" data-id="${index}">${t("remove")}</button>`}</div></article>`;
  }

  function saveConsultationHistory() {
    const item = { createdAt: new Date().toISOString(), consultation: structuredCloneSafe(state.consultation), productIds: state.results.slice(0, 5).map(entry => entry.product.id) };
    state.history.unshift(item);
    state.history = state.history.slice(0, 50);
    localStorage.setItem(STORAGE.history, JSON.stringify(state.history));
    renderHistory();
  }

  function resumeHistory(index) {
    const item = state.history[index];
    if (!item) return;
    state.consultation = structuredCloneSafe(item.consultation);
    state.relaxed = true;
    calculateResults(false);
    showView("resultsView", false);
  }

  function removeHistory(index) {
    state.history.splice(index, 1);
    localStorage.setItem(STORAGE.history, JSON.stringify(state.history));
    renderHistory();
  }

  function clearHistory() {
    if (!state.history.length || !confirm(t("confirmClearHistory"))) return;
    state.history = [];
    localStorage.setItem(STORAGE.history, "[]");
    renderHistory();
  }

  function exportHistory() {
    downloadFile(`lightguide-history-${dateStamp()}.json`, JSON.stringify(state.history, null, 2), "application/json");
  }

  function openProductEditor(id = "") {
    const product = id ? state.products.find(item => item.id === id) : null;
    els.productForm.reset();
    els.productId.value = product?.id || "";
    els.productName.value = product?.name || "";
    els.productCode.value = product?.code || "";
    els.productPrice.value = product?.price ?? "";
    els.productLumens.value = product?.lumens ?? "";
    els.productWatts.value = product?.watts ?? "";
    els.productKelvin.value = product?.kelvin || "";
    els.productSize.value = product?.sizeCm ?? "";
    els.productStock.value = product?.stock || "in_stock";
    els.productLocation.value = product?.location || "";
    els.productCategory.value = product?.category || "ceiling";
    els.productIp.value = product?.ip || "IP20";
    els.productRooms.value = (product?.rooms || []).join(",");
    els.productStyles.value = (product?.styles || []).join(",");
    els.productFeatures.value = (product?.features || []).join(",");
    els.productImage.value = product?.image || "";
    els.productNotes.value = product?.notes || "";
    els.productFormTitle.textContent = product ? t("edit") : t("addProduct");
    els.deleteProductBtn.classList.toggle("hidden", !product);
    els.editProductDialog.showModal();
  }

  function saveProductFromForm(event) {
    event.preventDefault();
    const existingId = els.productId.value;
    const product = normalizeProduct({
      id: existingId || slugify(`${els.productName.value}-${Date.now()}`),
      name: els.productName.value.trim(), code: els.productCode.value.trim(), price: numberOrNull(els.productPrice.value), lumens: numberOrNull(els.productLumens.value),
      watts: numberOrNull(els.productWatts.value), kelvin: els.productKelvin.value.trim(), sizeCm: numberOrNull(els.productSize.value), stock: els.productStock.value,
      location: els.productLocation.value.trim(), category: els.productCategory.value, ip: els.productIp.value.trim(), rooms: splitValues(els.productRooms.value),
      styles: splitValues(els.productStyles.value), features: splitValues(els.productFeatures.value), image: els.productImage.value.trim(), notes: els.productNotes.value.trim()
    });
    if (existingId) state.products = state.products.map(item => item.id === existingId ? product : item);
    else state.products.push(product);
    saveProducts();
    els.editProductDialog.close();
    renderAll();
    toast(t("productSaved"));
  }

  function deleteCurrentProduct() {
    const id = els.productId.value;
    if (!id || !confirm(t("confirmDelete"))) return;
    state.products = state.products.filter(product => product.id !== id);
    state.favorites.delete(id); state.compare.delete(id);
    saveProducts();
    localStorage.setItem(STORAGE.favorites, JSON.stringify([...state.favorites]));
    els.editProductDialog.close();
    renderAll();
    toast(t("productDeleted"));
  }

  async function importCsv(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const rows = parseCsv(text);
      if (!rows.length) throw new Error("No rows");
      const imported = rows.map(row => normalizeProduct({
        ...row,
        price: numberOrNull(row.price), lumens: numberOrNull(row.lumens), watts: numberOrNull(row.watts), sizeCm: numberOrNull(row.sizeCm),
        rooms: splitValues(row.rooms), styles: splitValues(row.styles), features: splitValues(row.features)
      })).filter(product => product.name);
      state.products = mergeProducts(state.products, imported);
      saveProducts(); renderAll(); toast(`${t("imported")}: ${imported.length}`);
    } catch (error) { alert(`CSV import failed: ${error.message}`); }
    event.target.value = "";
  }

  async function importJson(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      const list = Array.isArray(data) ? data : data.products;
      if (!Array.isArray(list)) throw new Error("Expected a product array");
      state.products = list.map(normalizeProduct).filter(product => product.name);
      saveProducts(); renderAll(); toast(`${t("imported")}: ${state.products.length}`);
    } catch (error) { alert(`JSON import failed: ${error.message}`); }
    event.target.value = "";
  }

  function exportCatalog() {
    downloadFile(`lightguide-catalogue-${dateStamp()}.json`, JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), products: state.products }, null, 2), "application/json");
    toast(t("backupDownloaded"));
  }

  function downloadCsvTemplate() {
    const header = "id,name,code,price,lumens,watts,kelvin,sizeCm,category,rooms,styles,features,ip,stock,location,image,notes";
    const example = "example-1,Example bedroom ceiling lamp,EX-001,129,2800,32,3000,48,ceiling,bedroom,modern|minimal,main_light|dimmable|low_ceiling,IP20,in_stock,Spice Home,,Replace with real data";
    downloadFile("lightguide-product-template.csv", `${header}\n${example}\n`, "text/csv;charset=utf-8");
  }

  function resetCatalog() {
    if (!confirm(t("confirmReset"))) return;
    state.products = window.STARTER_PRODUCTS.map(normalizeProduct);
    saveProducts(); renderAll();
  }

  function copyConsultationSummary() {
    const c = state.consultation;
    const lines = [
      t("consultationSummary"),
      `${t("room")}: ${c.room ? label("rooms", c.room) : t("any")}`,
      `${t("purpose")}: ${c.purpose ? label("purposes", c.purpose) : t("any")}`,
      `${t("lampType")}: ${c.category ? label("categories", c.category) : t("any")}`,
      `${t("roomSize")}: ${c.roomSize ? `${c.roomSize} m²` : t("unknown")}`,
      `${t("budget")}: ${c.budget ? `€${c.budget}` : t("any")}`,
      c.targetLumens ? `${t("targetLight")}: ${Math.round(c.targetLumens * .8)}–${Math.round(c.targetLumens * 1.2)} lm` : "",
      "",
      t("selectedProducts"),
      ...state.results.slice(0, 3).map((entry, index) => `${index + 1}. ${entry.product.name}${entry.product.price != null ? ` — €${Number(entry.product.price).toFixed(2)}` : ""}${entry.product.location ? ` — ${entry.product.location}` : ""}`),
      "",
      t("aboutText")
    ].filter(line => line !== "").join("\n");
    navigator.clipboard?.writeText(lines).then(() => toast(t("copied"))).catch(() => fallbackCopy(lines));
  }

  function toggleCustomerMode() {
    state.customerMode = !state.customerMode;
    document.body.classList.toggle("customer-mode", state.customerMode);
    els.customerModeBtn.textContent = state.customerMode ? localized("Exit customer mode", "Iziet no klienta režīma", "Выйти из режима клиента") : t("customerMode");
  }

  function renderAll() {
    renderCatalog(); renderFavorites(); renderHistory();
    if (document.getElementById("resultsView")?.classList.contains("active")) renderResults();
  }

  function applySettingsUI() {
    els.showPricesToggle.checked = state.settings.showPrices;
    els.compactCardsToggle.checked = state.settings.compactCards;
    document.body.classList.toggle("hide-prices", !state.settings.showPrices);
    document.querySelectorAll("[data-language]").forEach(button => button.classList.toggle("active", button.dataset.language === state.settings.language));
  }

  function updateSetting(key, value) {
    state.settings[key] = value;
    saveSettings();
    if (key === "showPrices") document.body.classList.toggle("hide-prices", !value);
    renderAll();
  }

  function cycleTheme() {
    const order = ["system", "light", "dark"];
    state.settings.theme = order[(order.indexOf(state.settings.theme) + 1) % order.length];
    saveSettings(); applyTheme();
    toast(`${t("settings")}: ${state.settings.theme}`);
  }

  function applyTheme() {
    const resolved = state.settings.theme === "system" ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : state.settings.theme;
    document.documentElement.dataset.theme = resolved;
  }

  async function installApp() {
    if (state.deferredInstall) {
      state.deferredInstall.prompt();
      await state.deferredInstall.userChoice;
      state.deferredInstall = null;
      els.installBtn.classList.add("hidden");
    } else toast(t("installUnavailable"));
  }

  function registerServiceWorker() {
    if ("serviceWorker" in navigator && location.protocol !== "file:") {
      navigator.serviceWorker.register("./sw.js").catch(console.warn);
    }
  }

  function loadProducts() {
    const stored = readJSON(STORAGE.products, null);
    const source = Array.isArray(stored) && stored.length ? stored : (window.STARTER_PRODUCTS || []);
    return source.map(normalizeProduct);
  }

  function saveProducts() {
    localStorage.setItem(STORAGE.products, JSON.stringify(state.products));
  }

  function saveSettings() {
    localStorage.setItem(STORAGE.settings, JSON.stringify(state.settings));
  }

  function normalizeProduct(product) {
    return {
      id: String(product.id || slugify(`${product.name || "product"}-${Math.random().toString(36).slice(2, 7)}`)),
      name: String(product.name || "").trim(), code: String(product.code || "").trim(), price: numberOrNull(product.price), lumens: numberOrNull(product.lumens),
      watts: numberOrNull(product.watts), kelvin: String(product.kelvin || "").trim(), sizeCm: numberOrNull(product.sizeCm),
      category: String(product.category || "ceiling").trim(), rooms: arrayValues(product.rooms), styles: arrayValues(product.styles), features: arrayValues(product.features),
      ip: String(product.ip || "").trim(), stock: ["in_stock", "display", "order", "unknown"].includes(product.stock) ? product.stock : "unknown",
      location: String(product.location || "").trim(), image: String(product.image || "").trim(), notes: String(product.notes || "").trim()
    };
  }

  function temperatureBucket(kelvin, features = []) {
    if (features.includes("tunable") || /-|–|to/i.test(String(kelvin))) return "tunable";
    const value = parseInt(String(kelvin).replace(/\D/g, ""), 10);
    if (!value) return "";
    if (value <= 3200) return "warm";
    if (value <= 4700) return "neutral";
    return "cool";
  }

  function parseCsv(text) {
    const rows = [];
    let row = [], field = "", quoted = false;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === '"') {
        if (quoted && text[i + 1] === '"') { field += '"'; i++; }
        else quoted = !quoted;
      } else if (char === "," && !quoted) { row.push(field); field = ""; }
      else if ((char === "\n" || char === "\r") && !quoted) {
        if (char === "\r" && text[i + 1] === "\n") i++;
        row.push(field); field = "";
        if (row.some(cell => cell.trim() !== "")) rows.push(row);
        row = [];
      } else field += char;
    }
    if (field || row.length) { row.push(field); rows.push(row); }
    const headers = rows.shift().map(value => value.trim());
    return rows.map(values => Object.fromEntries(headers.map((header, index) => [header, values[index]?.trim() || ""])));
  }

  function mergeProducts(existing, imported) {
    const map = new Map(existing.map(product => [product.id, product]));
    imported.forEach(product => map.set(product.id, product));
    return [...map.values()];
  }

  function splitValues(value) { return String(value || "").split(/[|,;]/).map(item => item.trim()).filter(Boolean); }
  function arrayValues(value) { return Array.isArray(value) ? value.map(String).map(x => x.trim()).filter(Boolean) : splitValues(value); }
  function numberOrNull(value) { return value === "" || value == null || Number.isNaN(Number(value)) ? null : Number(value); }
  function readJSON(key, fallback) { try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; } catch { return fallback; } }
  function addUnique(array, value) { if (!array.includes(value)) array.push(value); }
  function removeValue(array, value) { const index = array.indexOf(value); if (index >= 0) array.splice(index, 1); }
  function unique(array) { return [...new Set(array.filter(Boolean))]; }
  function prettify(value) { return String(value || "").replace(/_/g, " ").replace(/\b\w/g, char => char.toUpperCase()); }
  function slugify(value) { return String(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
  function localized(en, lv, ru) { return ({ en, lv, ru })[state.settings.language] || en; }
  function formatNumber(value) { return Math.round(Number(value) || 0).toLocaleString(state.settings.language === "lv" ? "lv-LV" : state.settings.language === "ru" ? "ru-RU" : "en-GB"); }
  function formatDate(value) { try { return new Intl.DateTimeFormat(state.settings.language === "lv" ? "lv-LV" : state.settings.language === "ru" ? "ru-RU" : "en-GB", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value)); } catch { return value; } }
  function dateStamp() { return new Date().toISOString().slice(0, 10); }
  function structuredCloneSafe(value) { return typeof structuredClone === "function" ? structuredClone(value) : JSON.parse(JSON.stringify(value)); }
  function escapeHtml(value) { return String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]); }
  function escapeAttr(value) { return escapeHtml(value); }

  function toast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => els.toast.classList.remove("show"), 2200);
  }

  function fallbackCopy(text) {
    const area = document.createElement("textarea"); area.value = text; document.body.append(area); area.select(); document.execCommand("copy"); area.remove(); toast(t("copied"));
  }

  function downloadFile(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = filename; anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
})();
