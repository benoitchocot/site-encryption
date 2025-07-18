<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('uz', array (
  'validators' => 
  array (
    'This value should be false.' => 'Qiymat noto\'g\'ri bo\'lishi kerak.',
    'This value should be true.' => 'Qiymat to\'g\'ri bo\'lishi kerak.',
    'This value should be of type {{ type }}.' => 'Qiymat turi {{ type }} bo\'lishi kerak.',
    'This value should be blank.' => 'Qiymat bo\'sh bo\'lishi kerak.',
    'The value you selected is not a valid choice.' => 'Tanlangan qiymat to\'g\'ri emas.',
    'You must select at least {{ limit }} choice.|You must select at least {{ limit }} choices.' => 'Siz hech bo\'lmaganda {{ limit }} ta qiymat tanlashingiz kerak.|Siz kamida {{ limit }} ta qiymat tanlashingiz kerak.',
    'You must select at most {{ limit }} choice.|You must select at most {{ limit }} choices.' => 'Siz {{ limit }} ta qiymatni tanlashingiz kerak.|Siz {{ limit }} dan ortiq qiymat tanlashingiz kerak.',
    'One or more of the given values is invalid.' => 'Belgilangan qiymatlarning bir yoki bir nechtasi noto\'g\'ri.',
    'This field was not expected.' => 'Ushbu maydon kutilmagan edi.',
    'This field is missing.' => 'Bu maydon majvud emas.',
    'This value is not a valid date.' => 'Ushbu sana noto\'g\'ri.',
    'This value is not a valid datetime.' => 'Sana va vaqt qiymati noto\'g\'ri.',
    'This value is not a valid email address.' => 'Elektron pochta manzili noto\'g\'ri.',
    'The file could not be found.' => 'Fayl topilmadi.',
    'The file is not readable.' => 'Faylni o\'qib bo\'lmadi.',
    'The file is too large ({{ size }} {{ suffix }}). Allowed maximum size is {{ limit }} {{ suffix }}.' => 'Fayl hajmi katta ({{ size }} {{ suffix }}). Maksimal ruxsat etilgan hajim {{ limit }} {{ suffix }}.',
    'The mime type of the file is invalid ({{ type }}). Allowed mime types are {{ types }}.' => 'Faylning MIME turi noto\'g\'ri ({{ type }}). Ruxsat etilgan MIME turlar {{ types }}.',
    'This value should be {{ limit }} or less.' => 'Qiymat {{ limit }} ga teng yoki kam bo\'lishi kerak.',
    'This value is too long. It should have {{ limit }} character or less.|This value is too long. It should have {{ limit }} characters or less.' => 'Qiymat juda uzun. {{ limit }} ga teng yoki kam bo\'lishi kerak.|Qiymat juda uzun. {{ limit }} yoki undan kam belgidan iborat bo\'lishi kerak.',
    'This value should be {{ limit }} or more.' => 'Qiymat {{ limit }} yoki undan ortiq bo\'lishi kerak.',
    'This value is too short. It should have {{ limit }} character or more.|This value is too short. It should have {{ limit }} characters or more.' => 'Qiymat juda qisqa. {{ limit }} ta yoki undan ortiq belgidan iborat bo\'lishi kerak.|Qiymat juda qisqa. {{ limit }} yoki undan ko\'p belgidan iborat bo\'lishi kerak',
    'This value should not be blank.' => 'Qiymatni bo\'sh kirtish mumkin emas.',
    'This value should not be null.' => 'Qiymat null bo\'lmasligi kerak.',
    'This value should be null.' => 'Qiymat null bo\'lishi kerak.',
    'This value is not valid.' => 'Qiymat noto\'g\'ri.',
    'This value is not a valid time.' => 'Vaqt noto\'g\'ri.',
    'This value is not a valid URL.' => 'URL noto\'g\'ri',
    'The two values should be equal.' => 'Ikkala qiymat ham bir xil bo\'lishi kerak.',
    'The file is too large. Allowed maximum size is {{ limit }} {{ suffix }}.' => 'Fayl hajmi katta. Maksimal ruxsat berilgan hajim {{ limit }} {{ suffix }}.',
    'The file is too large.' => 'Fayl hajmi katta.',
    'The file could not be uploaded.' => 'Faylni yuklab bo\'lmadi.',
    'This value should be a valid number.' => 'Qiymat raqam bo\'lishi kerak.',
    'This file is not a valid image.' => 'Fayl yaroqli rasm formati emas.',
    'This is not a valid IP address.' => 'Ip manzil noto\'g\'ri.',
    'This value is not a valid language.' => 'Noto\'g\'ri til.',
    'This value is not a valid locale.' => 'Ushbu qiymat mahalliy qiymat emas.',
    'This value is not a valid country.' => 'Mamlakat qiymati noto\'g\'ri.',
    'This value is already used.' => 'Ushbu qiymat allaqachon ishlatilgan.',
    'The size of the image could not be detected.' => 'Rasm o\'lchamini aniqlab bo\'lmadi.',
    'The image width is too big ({{ width }}px). Allowed maximum width is {{ max_width }}px.' => 'Rasm kengligi juda katta ({{ width }}px). Maksimal ruxsat etilgan kenglik {{ max_width }}px.',
    'The image width is too small ({{ width }}px). Minimum width expected is {{ min_width }}px.' => 'Rasm kengligi juda kichkina ({{ width }}px). Minimal ruxsat etilgan kenglik {{ min_width }}px.',
    'The image height is too big ({{ height }}px). Allowed maximum height is {{ max_height }}px.' => 'Rasm bo\'yi juda katta ({{ height }}px). Maksimal ruxsat etilgan balandlik {{ max_height }}px.',
    'The image height is too small ({{ height }}px). Minimum height expected is {{ min_height }}px.' => 'Rasm bo\'yi juda kichkina ({{ height }}px). Minimal ruxsat etilgan balandlik {{ min_height }}px.',
    'This value should be the user\'s current password.' => 'Qiymat joriy foydalanuvchi paroli bo\'lishi kerak.',
    'This value should have exactly {{ limit }} character.|This value should have exactly {{ limit }} characters.' => 'Qiymat {{ limit }} ta belgidan iborat bo\'lishi kerak.|Qiymat {{ limit }} belgidan iborat bo\'lishi kerak.',
    'The file was only partially uploaded.' => 'Fayl faqat qisman yuklangan.',
    'No file was uploaded.' => 'Fayl yuklanmagan.',
    'No temporary folder was configured in php.ini.' => 'php.ini da vaqtinchalik katalog sozlanmagan.',
    'Cannot write temporary file to disk.' => 'Diskka vaqtinchalik faylni yozib bo\'lmadi.',
    'A PHP extension caused the upload to fail.' => 'PHP kengaytmasi yuklash paytida xatolik yuz berdi.',
    'This collection should contain {{ limit }} element or more.|This collection should contain {{ limit }} elements or more.' => 'Ushbu to\'plam {{ limit }} ta yoki undan ko\'p narsalarni o\'z ichiga olishi kerak.|Ushbu to\'plam {{ limit }} yoki undan ortiq narsalarni o\'z ichiga olishi kerak.',
    'This collection should contain {{ limit }} element or less.|This collection should contain {{ limit }} elements or less.' => 'Ushbu to\'plam {{ limit }} ta yoki undan kam narsalarni o\'z ichiga olishi kerak.|Ushbu to\'plamda {{ limit }} yoki undan kam element bo\'lishi kerak.',
    'This collection should contain exactly {{ limit }} element.|This collection should contain exactly {{ limit }} elements.' => 'Ushbu to\'plam to\'liq {{ limit }} narsani o\'z ichiga olishi kerak.|Ushbu to\'plamda to\'liq {{ limit }} ta ma\'lumotlar bo\'lishi kerak.',
    'Invalid card number.' => 'Kata raqami noto\'g\'ri.',
    'Unsupported card type or invalid card number.' => 'Qo\'llab-quvvatlanmaydigan karta turi yoki yaroqsiz karta raqami.',
    'This is not a valid International Bank Account Number (IBAN).' => 'Qiymat haqiqiy xalqaro hisob raqamining raqami (IBAN) emas.',
    'This value is not a valid ISBN-10.' => 'Qiymat to\'g\'ri ISBN-10 formatida emas.',
    'This value is not a valid ISBN-13.' => 'Qiymat to\'g\'ri ISBN-13 formatida emas.',
    'This value is neither a valid ISBN-10 nor a valid ISBN-13.' => 'Qiymat ISBN-10 va ISBN-13 formatlariga mos kelmaydi.',
    'This value is not a valid ISSN.' => 'Qiymat ISSN formatiga mos kelmaydi.',
    'This value is not a valid currency.' => 'Noto\'g\'ri valyuta formati.',
    'This value should be equal to {{ compared_value }}.' => 'Qiymat {{ compared_value }} ga teng bo\'lishi shart.',
    'This value should be greater than {{ compared_value }}.' => 'Qiymat {{ compared_value }} dan katta bo\'lishi shart.',
    'This value should be greater than or equal to {{ compared_value }}.' => 'Qiymat {{ compared_value }} dan katta yoki teng bo\'lishi shart.',
    'This value should be identical to {{ compared_value_type }} {{ compared_value }}.' => 'Значение должно быть идентичным {{ compared_value_type }} {{ compared_value }}.',
    'This value should be less than {{ compared_value }}.' => 'Qiymat bir xil bo\'lishi kerak {{ compared_value }}.',
    'This value should be less than or equal to {{ compared_value }}.' => 'Qiymat {{ compared_value }} dan kichik yoki teng bo\'lishi shart.',
    'This value should not be equal to {{ compared_value }}.' => 'Qiymat {{ compared_value }} ga teng bo\'lmasligi kerak.',
    'This value should not be identical to {{ compared_value_type }} {{ compared_value }}.' => 'Qiymat bir xil bo\'lishi kerak emas {{ compared_value_type }} {{ compared_value }}.',
    'The image ratio is too big ({{ ratio }}). Allowed maximum ratio is {{ max_ratio }}.' => 'Rasmning tomonlari nisbati juda katta ({{ ratio }}). Maksimal tomonlar nisbati {{ max_ratio }}.',
    'The image ratio is too small ({{ ratio }}). Minimum ratio expected is {{ min_ratio }}.' => 'Rasmning format nisbati juda kichik ({{ ratio }}). Minimal tomonlar nisbati {{ min_ratio }}.',
    'The image is square ({{ width }}x{{ height }}px). Square images are not allowed.' => 'Rasm kvadrat shaklida ({{ width }}x{{ height }}px). Kvadrat shaklida tasvirlarga ruxsat berilmaydi.',
    'The image is landscape oriented ({{ width }}x{{ height }}px). Landscape oriented images are not allowed.' => 'Landshaft tasvir ({{ width }}x{{ height }}px). Landshaft rasmlarga ruxsat berilmaydi.',
    'The image is portrait oriented ({{ width }}x{{ height }}px). Portrait oriented images are not allowed.' => 'Portret rasm ({{ width }}x{{ height }}px). Portretlarga ruxsat berilmaydi.',
    'An empty file is not allowed.' => 'Bo\'sh fayllarga ruxsat berilmagan.',
    'The host could not be resolved.' => 'Xost nomini nomiga ruxsat berilmagan.',
    'This value does not match the expected {{ charset }} charset.' => 'Qiymat kutilgan {{ charset }} kodlashiga mos kelmaydi.',
    'This is not a valid Business Identifier Code (BIC).' => 'Qiymat BIC formatida emas.',
    'Error' => 'Xatolik',
    'This is not a valid UUID.' => 'Qiymat UUID formatida emas.',
    'This value should be a multiple of {{ compared_value }}.' => 'Qiymat {{ compared_value }} ning ko\'paytmasi bo\'lishi kerak.',
    'This Business Identifier Code (BIC) is not associated with IBAN {{ iban }}.' => 'Ushbu BIC IBAN {{ iban }} bilan bog\'liq emas..',
    'This value should be valid JSON.' => 'Qiymat to\'g\'ri JSON bo\'lishi kerak.',
    'This collection should contain only unique elements.' => 'Ushbu kolleksiyada takroriy elementlar bo\'lmasligi kerak.',
    'This value should be positive.' => 'Qiymat musbat bo\'lishi kerak.',
    'This value should be either positive or zero.' => 'Qiymat musbat yoki 0 ga teng bo\'lishi kerak.',
    'This value should be negative.' => 'Qiymat manfiy bo\'lishi kerak.',
    'This value should be either negative or zero.' => 'Qiymat manfiy yoki 0 ga teng bo\'lishi kerak.',
    'This value is not a valid timezone.' => 'Qiymat to\'g\'ri vaqt zonasi emas.',
    'This password has been leaked in a data breach, it must not be used. Please use another password.' => 'Ushbu parol ma\'lumotlarning tarqalishi tufayli buzilgan va uni ishlatmaslik kerak. Boshqa paroldan foydalaning.',
    'This value should be between {{ min }} and {{ max }}.' => 'Qiymat {{ min }} va {{ max }} oralig\'ida bo\'lishi shart.',
    'This value is not a valid hostname.' => 'Qiymat to\'g\'ri xost nomi emas.',
    'The number of elements in this collection should be a multiple of {{ compared_value }}.' => 'Ushbu to\'plamdagi narsalar soni {{ compared_value }} dan ko\'p bo\'lishi kerak.',
    'This value should satisfy at least one of the following constraints:' => 'Qiymat quyidagi cheklovlardan kamida bittasiga javob berishi kerak:',
    'Each element of this collection should satisfy its own set of constraints.' => 'Ushbu to\'plamdagi har bir narsa o\'ziga xos cheklovlarni qondirishi kerak.',
    'This value is not a valid International Securities Identification Number (ISIN).' => 'Qiymat Qimmatli qog\'ozlarning xalqaro identifikatsiya raqami (ISIN) ga mos emas.',
    'This value should be a valid expression.' => 'Ushbu qiymat to\'g\'ri ifoda bo\'lishi kerak.',
    'This value is not a valid CSS color.' => 'Bu qiymat haqiqiy CSS rangi emas.',
    'This value is not a valid CIDR notation.' => 'Qiymat CIDR belgisiga mos kelmaydi.',
    'The value of the netmask should be between {{ min }} and {{ max }}.' => 'Tarmoq niqobining qiymati {{ min }} va {{ max }} oralig\'ida bo\'lishi kerak.',
    'This form should not contain extra fields.' => 'Ushbu fo\'rmada qo\'shimcha maydonlar bo\'lmasligi kerak.',
    'The uploaded file was too large. Please try to upload a smaller file.' => 'Yuklab olingan fayl juda katta. Iltimos, kichikroq faylni yuklashga harakat qiling.',
    'The CSRF token is invalid. Please try to resubmit the form.' => 'CSRF qiymati yaroqsiz. Fo\'rmani qayta yuborishga harakat qiling.',
    'This value is not a valid HTML5 color.' => 'Qiymat noto\'g\'ri, HTML5 rangi emas.',
    'Please enter a valid birthdate.' => 'Iltimos, tug\'ilgan kuningizni to\'g\'ri kiriting.',
    'The selected choice is invalid.' => 'Tanlangan parametr noto\'g\'ri.',
    'The collection is invalid.' => 'Kolleksiya noto\'g\'ri',
    'Please select a valid color.' => 'Iltimos, to\'g\'ri rang tanlang.',
    'Please select a valid country.' => 'Iltimos, to\'g\'ri mamlakatni tanlang.',
    'Please select a valid currency.' => 'Iltimos, to\'g\'ri valyutani tanlang.',
    'Please choose a valid date interval.' => 'Iltimos, to\'g\'ri sana oralig\'ini tanlang.',
    'Please enter a valid date and time.' => 'Iltimos, to\'g\'ri sana va vaqtni kiriting.',
    'Please enter a valid date.' => 'Iltimos, to\'g\'ri sanani kiriting.',
    'Please select a valid file.' => 'Iltimos, to\'g\'ri faylni tanlang.',
    'The hidden field is invalid.' => 'Yashirin maydon qiymati yaroqsiz.',
    'Please enter an integer.' => 'Iltimos, butun son kiriting.',
    'Please select a valid language.' => 'Iltimos, to\'g\'ri tilni tanlang.',
    'Please select a valid locale.' => 'Iltimos, to\'g\'ri localni tanlang.',
    'Please enter a valid money amount.' => 'Iltimos, tegishli miqdordagi pulni kiriting.',
    'Please enter a number.' => 'Iltimos, raqam kiriting.',
    'The password is invalid.' => 'Parol noto\'g\'ri.',
    'Please enter a percentage value.' => 'Iltimos, foyizli qiymat kiriting.',
    'The values do not match.' => 'Qiymatlar mos kelmaydi.',
    'Please enter a valid time.' => 'Iltimos, to\'g\'ri vaqtni tanlang.',
    'Please select a valid timezone.' => 'Iltimos, to\'g\'ri vaqt zonasini tanlang.',
    'Please enter a valid URL.' => 'Iltimos, to\'g\'ri URL kiriting.',
    'Please enter a valid search term.' => 'Iltimos, to\'g\'ri qidiruv so\'zini kiriting.',
    'Please provide a valid phone number.' => 'Iltimos, to\'g\'ri telefon raqamini kiriting.',
    'The checkbox has an invalid value.' => 'Belgilash katagida yaroqsiz qiymat mavjud.',
    'Please enter a valid email address.' => 'Iltimos, to\'g\'ri email kiriting.',
    'Please select a valid option.' => 'Iltimos, yaroqli variantni tanlang.',
    'Please select a valid range.' => 'Iltimos, yaroqli oraliqni tanlang.',
    'Please enter a valid week.' => 'Iltimos, haqiqiy haftani kiriting.',
  ),
  'security' => 
  array (
    'An authentication exception occurred.' => 'Autentifikatsiyada xatolik.',
    'Authentication credentials could not be found.' => 'Autentifikatsiya ma\'lumotlari topilmadi.',
    'Authentication request could not be processed due to a system problem.' => 'Tizimdagi muammo tufayli autentifikatsiya so\'rovi bajarilmadi.',
    'Invalid credentials.' => 'Noto\'g\'ri ma\'lumot.',
    'Cookie has already been used by someone else.' => 'Cookie faylini allaqachon kimdir ishlatgan.',
    'Not privileged to request the resource.' => 'Sizda ushbu manbani talab qilishga ruxsat yo\'q..',
    'Invalid CSRF token.' => 'Noto\'g\'ri CSRF belgisi.',
    'No authentication provider found to support the authentication token.' => 'Haqiqiylikni tasdiqlovchi belgini qo\'llab-quvvatlovchi biron bir autentifikatsiya provayderi topilmadi.',
    'No session available, it either timed out or cookies are not enabled.' => 'Sessiya topilmadi, muddati tugamadi yoki cookie-fayllar yoqilmagan.',
    'No token could be found.' => 'To\'ken topilmadi.',
    'Username could not be found.' => 'Foydalanuvchi nomi topilmadi.',
    'Account has expired.' => 'Akkunt muddati tugagan.',
    'Credentials have expired.' => 'Autentifikatsiya ma\'lumotlari muddati tugagan.',
    'Account is disabled.' => 'Akkunt o\'chirilgan.',
    'Account is locked.' => 'Akkunt bloklangan.',
    'Too many failed login attempts, please try again later.' => 'Kirish urinishlari muvaffaqiyatsiz tugadi, keyinroq qayta urinib ko\'ring.',
    'Invalid or expired login link.' => 'Kirish havolasi yaroqsiz yoki muddati tugagan.',
    'Too many failed login attempts, please try again in %minutes% minute.' => 'Kirish uchun muvaffaqiyatsiz urinishlar, %minutes% daqiqadan so\'ng qayta urinib ko\'ring.',
    'Too many failed login attempts, please try again in %minutes% minutes.' => 'Kirish uchun muvaffaqiyatsiz urinishlar, %minutes% daqiqadan so\'ng qayta urinib ko\'ring.',
  ),
));

$catalogueFr = new MessageCatalogue('fr', array (
  'validators' => 
  array (
    'This value should be false.' => 'Cette valeur doit être fausse.',
    'This value should be true.' => 'Cette valeur doit être vraie.',
    'This value should be of type {{ type }}.' => 'Cette valeur doit être de type {{ type }}.',
    'This value should be blank.' => 'Cette valeur doit être vide.',
    'The value you selected is not a valid choice.' => 'Cette valeur doit être l\'un des choix proposés.',
    'You must select at least {{ limit }} choice.|You must select at least {{ limit }} choices.' => 'Vous devez sélectionner au moins {{ limit }} choix.|Vous devez sélectionner au moins {{ limit }} choix.',
    'You must select at most {{ limit }} choice.|You must select at most {{ limit }} choices.' => 'Vous devez sélectionner au maximum {{ limit }} choix.|Vous devez sélectionner au maximum {{ limit }} choix.',
    'One or more of the given values is invalid.' => 'Une ou plusieurs des valeurs soumises sont invalides.',
    'This field was not expected.' => 'Ce champ n\'a pas été prévu.',
    'This field is missing.' => 'Ce champ est manquant.',
    'This value is not a valid date.' => 'Cette valeur n\'est pas une date valide.',
    'This value is not a valid datetime.' => 'Cette valeur n\'est pas une date valide.',
    'This value is not a valid email address.' => 'Cette valeur n\'est pas une adresse email valide.',
    'The file could not be found.' => 'Le fichier n\'a pas été trouvé.',
    'The file is not readable.' => 'Le fichier n\'est pas lisible.',
    'The file is too large ({{ size }} {{ suffix }}). Allowed maximum size is {{ limit }} {{ suffix }}.' => 'Le fichier est trop volumineux ({{ size }} {{ suffix }}). Sa taille ne doit pas dépasser {{ limit }} {{ suffix }}.',
    'The mime type of the file is invalid ({{ type }}). Allowed mime types are {{ types }}.' => 'Le type du fichier est invalide ({{ type }}). Les types autorisés sont {{ types }}.',
    'This value should be {{ limit }} or less.' => 'Cette valeur doit être inférieure ou égale à {{ limit }}.',
    'This value is too long. It should have {{ limit }} character or less.|This value is too long. It should have {{ limit }} characters or less.' => 'Cette chaîne est trop longue. Elle doit avoir au maximum {{ limit }} caractère.|Cette chaîne est trop longue. Elle doit avoir au maximum {{ limit }} caractères.',
    'This value should be {{ limit }} or more.' => 'Cette valeur doit être supérieure ou égale à {{ limit }}.',
    'This value is too short. It should have {{ limit }} character or more.|This value is too short. It should have {{ limit }} characters or more.' => 'Cette chaîne est trop courte. Elle doit avoir au minimum {{ limit }} caractère.|Cette chaîne est trop courte. Elle doit avoir au minimum {{ limit }} caractères.',
    'This value should not be blank.' => 'Cette valeur ne doit pas être vide.',
    'This value should not be null.' => 'Cette valeur ne doit pas être nulle.',
    'This value should be null.' => 'Cette valeur doit être nulle.',
    'This value is not valid.' => 'Cette valeur n\'est pas valide.',
    'This value is not a valid time.' => 'Cette valeur n\'est pas une heure valide.',
    'This value is not a valid URL.' => 'Cette valeur n\'est pas une URL valide.',
    'The two values should be equal.' => 'Les deux valeurs doivent être identiques.',
    'The file is too large. Allowed maximum size is {{ limit }} {{ suffix }}.' => 'Le fichier est trop volumineux. Sa taille ne doit pas dépasser {{ limit }} {{ suffix }}.',
    'The file is too large.' => 'Le fichier est trop volumineux.',
    'The file could not be uploaded.' => 'Le téléchargement de ce fichier est impossible.',
    'This value should be a valid number.' => 'Cette valeur doit être un nombre.',
    'This file is not a valid image.' => 'Ce fichier n\'est pas une image valide.',
    'This is not a valid IP address.' => 'Cette adresse IP n\'est pas valide.',
    'This value is not a valid language.' => 'Cette langue n\'est pas valide.',
    'This value is not a valid locale.' => 'Ce paramètre régional n\'est pas valide.',
    'This value is not a valid country.' => 'Ce pays n\'est pas valide.',
    'This value is already used.' => 'Cette valeur est déjà utilisée.',
    'The size of the image could not be detected.' => 'La taille de l\'image n\'a pas pu être détectée.',
    'The image width is too big ({{ width }}px). Allowed maximum width is {{ max_width }}px.' => 'La largeur de l\'image est trop grande ({{ width }}px). La largeur maximale autorisée est de {{ max_width }}px.',
    'The image width is too small ({{ width }}px). Minimum width expected is {{ min_width }}px.' => 'La largeur de l\'image est trop petite ({{ width }}px). La largeur minimale attendue est de {{ min_width }}px.',
    'The image height is too big ({{ height }}px). Allowed maximum height is {{ max_height }}px.' => 'La hauteur de l\'image est trop grande ({{ height }}px). La hauteur maximale autorisée est de {{ max_height }}px.',
    'The image height is too small ({{ height }}px). Minimum height expected is {{ min_height }}px.' => 'La hauteur de l\'image est trop petite ({{ height }}px). La hauteur minimale attendue est de {{ min_height }}px.',
    'This value should be the user\'s current password.' => 'Cette valeur doit être le mot de passe actuel de l\'utilisateur.',
    'This value should have exactly {{ limit }} character.|This value should have exactly {{ limit }} characters.' => 'Cette chaîne doit avoir exactement {{ limit }} caractère.|Cette chaîne doit avoir exactement {{ limit }} caractères.',
    'The file was only partially uploaded.' => 'Le fichier a été partiellement transféré.',
    'No file was uploaded.' => 'Aucun fichier n\'a été transféré.',
    'No temporary folder was configured in php.ini.' => 'Aucun répertoire temporaire n\'a été configuré dans le php.ini, ou le répertoire configuré n\'existe pas.',
    'Cannot write temporary file to disk.' => 'Impossible d\'écrire le fichier temporaire sur le disque.',
    'A PHP extension caused the upload to fail.' => 'Une extension PHP a empêché le transfert du fichier.',
    'This collection should contain {{ limit }} element or more.|This collection should contain {{ limit }} elements or more.' => 'Cette collection doit contenir {{ limit }} élément ou plus.|Cette collection doit contenir {{ limit }} éléments ou plus.',
    'This collection should contain {{ limit }} element or less.|This collection should contain {{ limit }} elements or less.' => 'Cette collection doit contenir {{ limit }} élément ou moins.|Cette collection doit contenir {{ limit }} éléments ou moins.',
    'This collection should contain exactly {{ limit }} element.|This collection should contain exactly {{ limit }} elements.' => 'Cette collection doit contenir exactement {{ limit }} élément.|Cette collection doit contenir exactement {{ limit }} éléments.',
    'Invalid card number.' => 'Numéro de carte invalide.',
    'Unsupported card type or invalid card number.' => 'Type de carte non supporté ou numéro invalide.',
    'This is not a valid International Bank Account Number (IBAN).' => 'Le numéro IBAN (International Bank Account Number) saisi n\'est pas valide.',
    'This value is not a valid ISBN-10.' => 'Cette valeur n\'est pas un code ISBN-10 valide.',
    'This value is not a valid ISBN-13.' => 'Cette valeur n\'est pas un code ISBN-13 valide.',
    'This value is neither a valid ISBN-10 nor a valid ISBN-13.' => 'Cette valeur n\'est ni un code ISBN-10, ni un code ISBN-13 valide.',
    'This value is not a valid ISSN.' => 'Cette valeur n\'est pas un code ISSN valide.',
    'This value is not a valid currency.' => 'Cette valeur n\'est pas une devise valide.',
    'This value should be equal to {{ compared_value }}.' => 'Cette valeur doit être égale à {{ compared_value }}.',
    'This value should be greater than {{ compared_value }}.' => 'Cette valeur doit être supérieure à {{ compared_value }}.',
    'This value should be greater than or equal to {{ compared_value }}.' => 'Cette valeur doit être supérieure ou égale à {{ compared_value }}.',
    'This value should be identical to {{ compared_value_type }} {{ compared_value }}.' => 'Cette valeur doit être identique à {{ compared_value_type }} {{ compared_value }}.',
    'This value should be less than {{ compared_value }}.' => 'Cette valeur doit être inférieure à {{ compared_value }}.',
    'This value should be less than or equal to {{ compared_value }}.' => 'Cette valeur doit être inférieure ou égale à {{ compared_value }}.',
    'This value should not be equal to {{ compared_value }}.' => 'Cette valeur ne doit pas être égale à {{ compared_value }}.',
    'This value should not be identical to {{ compared_value_type }} {{ compared_value }}.' => 'Cette valeur ne doit pas être identique à {{ compared_value_type }} {{ compared_value }}.',
    'The image ratio is too big ({{ ratio }}). Allowed maximum ratio is {{ max_ratio }}.' => 'Le rapport largeur/hauteur de l\'image est trop grand ({{ ratio }}). Le rapport maximal autorisé est {{ max_ratio }}.',
    'The image ratio is too small ({{ ratio }}). Minimum ratio expected is {{ min_ratio }}.' => 'Le rapport largeur/hauteur de l\'image est trop petit ({{ ratio }}). Le rapport minimal attendu est {{ min_ratio }}.',
    'The image is square ({{ width }}x{{ height }}px). Square images are not allowed.' => 'L\'image est carrée ({{ width }}x{{ height }}px). Les images carrées ne sont pas autorisées.',
    'The image is landscape oriented ({{ width }}x{{ height }}px). Landscape oriented images are not allowed.' => 'L\'image est au format paysage ({{ width }}x{{ height }}px). Les images au format paysage ne sont pas autorisées.',
    'The image is portrait oriented ({{ width }}x{{ height }}px). Portrait oriented images are not allowed.' => 'L\'image est au format portrait ({{ width }}x{{ height }}px). Les images au format portrait ne sont pas autorisées.',
    'An empty file is not allowed.' => 'Un fichier vide n\'est pas autorisé.',
    'The host could not be resolved.' => 'Le nom de domaine n\'a pas pu être résolu.',
    'This value does not match the expected {{ charset }} charset.' => 'Cette valeur ne correspond pas au jeu de caractères {{ charset }} attendu.',
    'This is not a valid Business Identifier Code (BIC).' => 'Ce n\'est pas un code universel d\'identification des banques (BIC) valide.',
    'Error' => 'Erreur',
    'This is not a valid UUID.' => 'Ceci n\'est pas un UUID valide.',
    'This value should be a multiple of {{ compared_value }}.' => 'Cette valeur doit être un multiple de {{ compared_value }}.',
    'This Business Identifier Code (BIC) is not associated with IBAN {{ iban }}.' => 'Ce code d\'identification d\'entreprise (BIC) n\'est pas associé à l\'IBAN {{ iban }}.',
    'This value should be valid JSON.' => 'Cette valeur doit être un JSON valide.',
    'This collection should contain only unique elements.' => 'Cette collection ne doit pas comporter de doublons.',
    'This value should be positive.' => 'Cette valeur doit être strictement positive.',
    'This value should be either positive or zero.' => 'Cette valeur doit être supérieure ou égale à zéro.',
    'This value should be negative.' => 'Cette valeur doit être strictement négative.',
    'This value should be either negative or zero.' => 'Cette valeur doit être inférieure ou égale à zéro.',
    'This value is not a valid timezone.' => 'Cette valeur n\'est pas un fuseau horaire valide.',
    'This password has been leaked in a data breach, it must not be used. Please use another password.' => 'Ce mot de passe a été divulgué lors d\'une fuite de données, il ne doit plus être utilisé. Veuillez utiliser un autre mot de passe.',
    'This value should be between {{ min }} and {{ max }}.' => 'Cette valeur doit être comprise entre {{ min }} et {{ max }}.',
    'This value is not a valid hostname.' => 'Cette valeur n\'est pas un nom d\'hôte valide.',
    'The number of elements in this collection should be a multiple of {{ compared_value }}.' => 'Le nombre d\'éléments de cette collection doit être un multiple de {{ compared_value }}.',
    'This value should satisfy at least one of the following constraints:' => 'Cette valeur doit satisfaire à au moins une des contraintes suivantes :',
    'Each element of this collection should satisfy its own set of constraints.' => 'Chaque élément de cette collection doit satisfaire à son propre jeu de contraintes.',
    'This value is not a valid International Securities Identification Number (ISIN).' => 'Cette valeur n\'est pas un code international de sécurité valide (ISIN).',
    'This value should be a valid expression.' => 'Cette valeur doit être une expression valide.',
    'This value is not a valid CSS color.' => 'Cette valeur n\'est pas une couleur CSS valide.',
    'This value is not a valid CIDR notation.' => 'Cette valeur n\'est pas une notation CIDR valide.',
    'The value of the netmask should be between {{ min }} and {{ max }}.' => 'La valeur du masque de réseau doit être comprise entre {{ min }} et {{ max }}.',
    'This form should not contain extra fields.' => 'Ce formulaire ne doit pas contenir de champs supplémentaires.',
    'The uploaded file was too large. Please try to upload a smaller file.' => 'Le fichier téléchargé est trop volumineux. Merci d\'essayer d\'envoyer un fichier plus petit.',
    'The CSRF token is invalid. Please try to resubmit the form.' => 'Le jeton CSRF est invalide. Veuillez renvoyer le formulaire.',
    'This value is not a valid HTML5 color.' => 'Cette valeur n\'est pas une couleur HTML5 valide.',
    'Please enter a valid birthdate.' => 'Veuillez entrer une date de naissance valide.',
    'The selected choice is invalid.' => 'Le choix sélectionné est invalide.',
    'The collection is invalid.' => 'La collection est invalide.',
    'Please select a valid color.' => 'Veuillez sélectionner une couleur valide.',
    'Please select a valid country.' => 'Veuillez sélectionner un pays valide.',
    'Please select a valid currency.' => 'Veuillez sélectionner une devise valide.',
    'Please choose a valid date interval.' => 'Veuillez choisir un intervalle de dates valide.',
    'Please enter a valid date and time.' => 'Veuillez saisir une date et une heure valides.',
    'Please enter a valid date.' => 'Veuillez entrer une date valide.',
    'Please select a valid file.' => 'Veuillez sélectionner un fichier valide.',
    'The hidden field is invalid.' => 'Le champ masqué n\'est pas valide.',
    'Please enter an integer.' => 'Veuillez saisir un entier.',
    'Please select a valid language.' => 'Veuillez sélectionner une langue valide.',
    'Please select a valid locale.' => 'Veuillez sélectionner une langue valide.',
    'Please enter a valid money amount.' => 'Veuillez saisir un montant valide.',
    'Please enter a number.' => 'Veuillez saisir un nombre.',
    'The password is invalid.' => 'Le mot de passe est invalide.',
    'Please enter a percentage value.' => 'Veuillez saisir un pourcentage valide.',
    'The values do not match.' => 'Les valeurs ne correspondent pas.',
    'Please enter a valid time.' => 'Veuillez saisir une heure valide.',
    'Please select a valid timezone.' => 'Veuillez sélectionner un fuseau horaire valide.',
    'Please enter a valid URL.' => 'Veuillez saisir une URL valide.',
    'Please enter a valid search term.' => 'Veuillez saisir un terme de recherche valide.',
    'Please provide a valid phone number.' => 'Veuillez fournir un numéro de téléphone valide.',
    'The checkbox has an invalid value.' => 'La case à cocher a une valeur non valide.',
    'Please enter a valid email address.' => 'Veuillez saisir une adresse email valide.',
    'Please select a valid option.' => 'Veuillez sélectionner une option valide.',
    'Please select a valid range.' => 'Veuillez sélectionner une plage valide.',
    'Please enter a valid week.' => 'Veuillez entrer une semaine valide.',
  ),
  'security' => 
  array (
    'An authentication exception occurred.' => 'Une exception d\'authentification s\'est produite.',
    'Authentication credentials could not be found.' => 'Les identifiants d\'authentification n\'ont pas pu être trouvés.',
    'Authentication request could not be processed due to a system problem.' => 'La requête d\'authentification n\'a pas pu être executée à cause d\'un problème système.',
    'Invalid credentials.' => 'Identifiants invalides.',
    'Cookie has already been used by someone else.' => 'Le cookie a déjà été utilisé par quelqu\'un d\'autre.',
    'Not privileged to request the resource.' => 'Privilèges insuffisants pour accéder à la ressource.',
    'Invalid CSRF token.' => 'Jeton CSRF invalide.',
    'No authentication provider found to support the authentication token.' => 'Aucun fournisseur d\'authentification n\'a été trouvé pour supporter le jeton d\'authentification.',
    'No session available, it either timed out or cookies are not enabled.' => 'Aucune session disponible, celle-ci a expiré ou les cookies ne sont pas activés.',
    'No token could be found.' => 'Aucun jeton n\'a pu être trouvé.',
    'Username could not be found.' => 'Le nom d\'utilisateur n\'a pas pu être trouvé.',
    'Account has expired.' => 'Le compte a expiré.',
    'Credentials have expired.' => 'Les identifiants ont expiré.',
    'Account is disabled.' => 'Le compte est désactivé.',
    'Account is locked.' => 'Le compte est bloqué.',
    'Too many failed login attempts, please try again later.' => 'Plusieurs tentatives de connexion ont échoué, veuillez réessayer plus tard.',
    'Invalid or expired login link.' => 'Lien de connexion invalide ou expiré.',
    'Too many failed login attempts, please try again in %minutes% minute.' => 'Plusieurs tentatives de connexion ont échoué, veuillez réessayer dans %minutes% minute.',
    'Too many failed login attempts, please try again in %minutes% minutes.' => 'Plusieurs tentatives de connexion ont échoué, veuillez réessayer dans %minutes% minutes.',
  ),
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => '',
    'label_next' => '',
    'filter_searchword' => 'Recherche...',
  ),
  'VichUploaderBundle' => 
  array (
    'download' => 'Télécharger',
    'form.label.delete' => 'Supprimer ?',
  ),
));
$catalogue->addFallbackCatalogue($catalogueFr);

return $catalogue;
