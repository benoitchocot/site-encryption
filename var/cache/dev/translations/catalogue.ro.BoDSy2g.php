<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('ro', array (
  'validators' => 
  array (
    'This value should be false.' => 'Această valoare ar trebui să fie falsă (false).',
    'This value should be true.' => 'Această valoare ar trebui să fie adevărată (true).',
    'This value should be of type {{ type }}.' => 'Această valoare ar trebui să fie de tipul {{ type }}.',
    'This value should be blank.' => 'Această valoare ar trebui sa fie goală.',
    'The value you selected is not a valid choice.' => 'Valoarea selectată nu este o opțiune validă.',
    'You must select at least {{ limit }} choice.|You must select at least {{ limit }} choices.' => 'Trebuie să selectați cel puțin {{ limit }} opțiune.|Trebuie să selectați cel puțin {{ limit }} opțiuni.|Trebuie să selectați cel puțin {{ limit }} de opțiuni',
    'You must select at most {{ limit }} choice.|You must select at most {{ limit }} choices.' => 'Trebuie să selectați cel mult {{ limit }} opțiune.|Trebuie să selectați cel mult {{ limit }} opțiuni.|Trebuie să selectați cel mult {{ limit }} de opțiuni.',
    'One or more of the given values is invalid.' => 'Una sau mai multe dintre valorile furnizate sunt invalide.',
    'This field was not expected.' => 'Acest câmp nu era de aşteptat.',
    'This field is missing.' => 'Acest câmp este lipsă.',
    'This value is not a valid date.' => 'Această valoare nu reprezintă o dată validă.',
    'This value is not a valid datetime.' => 'Această valoare nu reprezintă o dată și oră validă.',
    'This value is not a valid email address.' => 'Această valoare nu reprezintă o adresă de e-mail validă.',
    'The file could not be found.' => 'Fișierul nu a putut fi găsit.',
    'The file is not readable.' => 'Fișierul nu poate fi citit.',
    'The file is too large ({{ size }} {{ suffix }}). Allowed maximum size is {{ limit }} {{ suffix }}.' => 'Fișierul este prea mare ({{ size }} {{ suffix }}). Dimensiunea maximă permisă este {{ limit }} {{ suffix }}.',
    'The mime type of the file is invalid ({{ type }}). Allowed mime types are {{ types }}.' => 'Tipul fișierului este invalid ({{ type }}). Tipurile permise de fișiere sunt ({{ types }}).',
    'This value should be {{ limit }} or less.' => 'Această valoare ar trebui să fie cel mult {{ limit }}.',
    'This value is too long. It should have {{ limit }} character or less.|This value is too long. It should have {{ limit }} characters or less.' => 'Această valoare este prea lungă. Ar trebui să aibă maxim {{ limit }} caracter.|Această valoare este prea lungă. Ar trebui să aibă maxim {{ limit }} caractere.|Această valoare este prea lungă. Ar trebui să aibă maxim {{ limit }} de caractere.',
    'This value should be {{ limit }} or more.' => 'Această valoare ar trebui să fie cel puțin {{ limit }}.',
    'This value is too short. It should have {{ limit }} character or more.|This value is too short. It should have {{ limit }} characters or more.' => 'Această valoare este prea scurtă. Ar trebui să aibă minim {{ limit }} caracter.|Această valoare este prea scurtă. Ar trebui să aibă minim {{ limit }} caractere.|Această valoare este prea scurtă. Ar trebui să aibă minim {{ limit }} de caractere.',
    'This value should not be blank.' => 'Această valoare nu ar trebui să fie goală.',
    'This value should not be null.' => 'Această valoare nu ar trebui să fie nulă (null).',
    'This value should be null.' => 'Această valoare ar trebui să fie nulă (null).',
    'This value is not valid.' => 'Această valoare nu este validă.',
    'This value is not a valid time.' => 'Această valoare nu reprezintă o oră validă.',
    'This value is not a valid URL.' => 'Această valoare nu reprezintă un URL (link) valid.',
    'The two values should be equal.' => 'Cele două valori ar trebui să fie egale.',
    'The file is too large. Allowed maximum size is {{ limit }} {{ suffix }}.' => 'Fișierul este prea mare. Mărimea maximă permisă este {{ limit }} {{ suffix }}.',
    'The file is too large.' => 'Fișierul este prea mare.',
    'The file could not be uploaded.' => 'Fișierul nu a putut fi încărcat.',
    'This value should be a valid number.' => 'Această valoare nu reprezintă un număr valid.',
    'This file is not a valid image.' => 'Acest fișier nu este o imagine validă.',
    'This is not a valid IP address.' => 'Această valoare nu este o adresă IP validă.',
    'This value is not a valid language.' => 'Această valoare nu reprezintă o limbă corectă.',
    'This value is not a valid locale.' => 'Această valoare nu reprezintă un dialect (o limbă) corect.',
    'This value is not a valid country.' => 'Această valoare nu este o țară validă.',
    'This value is already used.' => 'Această valoare este folosită deja.',
    'The size of the image could not be detected.' => 'Mărimea imaginii nu a putut fi detectată.',
    'The image width is too big ({{ width }}px). Allowed maximum width is {{ max_width }}px.' => 'Lățimea imaginii este prea mare ({{ width }}px). Lățimea maximă permisă este de {{ max_width }}px.',
    'The image width is too small ({{ width }}px). Minimum width expected is {{ min_width }}px.' => 'Lățimea imaginii este prea mică ({{ width }}px). Lățimea minimă permisă este de {{ min_width }}px.',
    'The image height is too big ({{ height }}px). Allowed maximum height is {{ max_height }}px.' => 'Înălțimea imaginii este prea mare ({{ height }}px). Înălțimea maximă permisă este de {{ max_height }}px.',
    'The image height is too small ({{ height }}px). Minimum height expected is {{ min_height }}px.' => 'Înălțimea imaginii este prea mică ({{ height }}px). Înălțimea minimă permisă este de {{ min_height }}px.',
    'This value should be the user\'s current password.' => 'Această valoare trebuie să fie parola curentă a utilizatorului.',
    'This value should have exactly {{ limit }} character.|This value should have exactly {{ limit }} characters.' => 'Această valoare trebuie să conțină exact {{ limit }} caracter.|Această valoare trebuie să conțină exact {{ limit }} caractere.|Această valoare trebuie să conțină exact {{ limit }} de caractere.',
    'The file was only partially uploaded.' => 'Fișierul a fost încărcat parțial.',
    'No file was uploaded.' => 'Nu a fost încărcat nici un fișier.',
    'No temporary folder was configured in php.ini.' => 'Nu este configurat nici un director temporar in php.ini.',
    'Cannot write temporary file to disk.' => 'Nu a fost posibilă scrierea fișierului temporar pe disk.',
    'A PHP extension caused the upload to fail.' => 'O extensie PHP a prevenit încărcarea cu succes a fișierului.',
    'This collection should contain {{ limit }} element or more.|This collection should contain {{ limit }} elements or more.' => 'Această colecție trebuie să conțină cel puțin {{ limit }} element.|Această colecție trebuie să conțină cel puțin {{ limit }} elemente.|Această colecție trebuie să conțină cel puțin {{ limit }} de elemente.',
    'This collection should contain {{ limit }} element or less.|This collection should contain {{ limit }} elements or less.' => 'Această colecție trebuie să conțină cel mult {{ limit }} element.|Această colecție trebuie să conțină cel mult {{ limit }} elemente.|Această colecție trebuie să conțină cel mult {{ limit }} de elemente.',
    'This collection should contain exactly {{ limit }} element.|This collection should contain exactly {{ limit }} elements.' => 'Această colecție trebuie să conțină {{ limit }} element.|Această colecție trebuie să conțină {{ limit }} elemente.|Această colecție trebuie să conțină {{ limit }} de elemente.',
    'Invalid card number.' => 'Numărul card invalid.',
    'Unsupported card type or invalid card number.' => 'Tipul sau numărul cardului nu sunt valide.',
    'This is not a valid International Bank Account Number (IBAN).' => 'Acesta nu este un cod IBAN (International Bank Account Number) valid.',
    'This value is not a valid ISBN-10.' => 'Această valoare nu este un cod ISBN-10 valid.',
    'This value is not a valid ISBN-13.' => 'Această valoare nu este un cod ISBN-13 valid.',
    'This value is neither a valid ISBN-10 nor a valid ISBN-13.' => 'Această valoare nu este un cod ISBN-10 sau ISBN-13 valid.',
    'This value is not a valid ISSN.' => 'Această valoare nu este un cod ISSN valid.',
    'This value is not a valid currency.' => 'Această valoare nu este o monedă validă.',
    'This value should be equal to {{ compared_value }}.' => 'Această valoare trebuie să fie egală cu {{ compared_value }}.',
    'This value should be greater than {{ compared_value }}.' => 'Această valoare trebuie să fie mai mare de {{ compared_value }}.',
    'This value should be greater than or equal to {{ compared_value }}.' => 'Această valoare trebuie să fie mai mare sau egală cu {{ compared_value }}.',
    'This value should be identical to {{ compared_value_type }} {{ compared_value }}.' => 'Această valoare trebuie identică cu {{ compared_value_type }} {{ compared_value }}.',
    'This value should be less than {{ compared_value }}.' => 'Această valoare trebuie să fie mai mică de {{ compared_value }}.',
    'This value should be less than or equal to {{ compared_value }}.' => 'Această valoare trebuie să fie mai mică sau egală cu {{ compared_value }}.',
    'This value should not be equal to {{ compared_value }}.' => 'Această valoare nu trebuie să fie egală cu {{ compared_value }}.',
    'This value should not be identical to {{ compared_value_type }} {{ compared_value }}.' => 'Această valoare nu trebuie să fie identică cu {{ compared_value_type }} {{ compared_value }}.',
    'The image ratio is too big ({{ ratio }}). Allowed maximum ratio is {{ max_ratio }}.' => 'Raportul imaginii este prea mare ({{ ratio }}). Raportul maxim permis este {{ max_ratio }}.',
    'The image ratio is too small ({{ ratio }}). Minimum ratio expected is {{ min_ratio }}.' => 'Raportul imaginii este prea mic ({{ ratio }}). Raportul minim permis este {{ min_ratio }}.',
    'The image is square ({{ width }}x{{ height }}px). Square images are not allowed.' => 'Imaginea este un pătrat ({{ width }}x{{ height }}px). Imaginile pătrat nu sunt permise.',
    'The image is landscape oriented ({{ width }}x{{ height }}px). Landscape oriented images are not allowed.' => 'Imaginea are orientarea peisaj ({{ width }}x{{ height }}px). Imaginile cu orientare peisaj nu sunt permise.',
    'The image is portrait oriented ({{ width }}x{{ height }}px). Portrait oriented images are not allowed.' => 'Imaginea are orientarea portret ({{ width }}x{{ height }}px). Imaginile cu orientare portret nu sunt permise.',
    'An empty file is not allowed.' => 'Nu se permite un fișier gol.',
    'The host could not be resolved.' => 'Numele host nu a putut fi rezolvat către o adresă IP.',
    'This value does not match the expected {{ charset }} charset.' => 'Această valoare nu corespunde setului de caractere {{ charset }} așteptat.',
    'This is not a valid Business Identifier Code (BIC).' => 'Codul BIC (Business Identifier Code) nu este valid.',
    'Error' => 'Eroare',
    'This is not a valid UUID.' => 'Identificatorul universal unic (UUID) nu este valid.',
    'This value should be a multiple of {{ compared_value }}.' => 'Această valoare trebuie să fie un multiplu de {{ compared_value }}.',
    'This Business Identifier Code (BIC) is not associated with IBAN {{ iban }}.' => 'Codul BIC (Business Identifier Code) nu este asociat cu codul IBAN {{ iban }}.',
    'This value should be valid JSON.' => 'Această valoare trebuie să fie un JSON valid.',
    'This collection should contain only unique elements.' => 'Acest set ar trebui să conțină numai elemente unice.',
    'This value should be positive.' => 'Această valoare ar trebui să fie pozitivă.',
    'This value should be either positive or zero.' => 'Această valoare trebuie să fie pozitivă sau zero.',
    'This value should be negative.' => 'Această valoare ar trebui să fie negativă.',
    'This value should be either negative or zero.' => 'Această valoare trebuie să fie negativă sau zero.',
    'This value is not a valid timezone.' => 'Această valoare nu este un fus orar valid.',
    'This password has been leaked in a data breach, it must not be used. Please use another password.' => 'Această parolă a fost compromisă și nu poate fi utilizată. Vă rugăm să utilizați o altă parolă.',
    'This value should be between {{ min }} and {{ max }}.' => 'Această valoare trebuie să fie între {{ min }} și {{ max }}.',
    'This value is not a valid hostname.' => 'Această valoare nu este un numele gazdei valid.',
    'The number of elements in this collection should be a multiple of {{ compared_value }}.' => 'Numărul de elemente din această colecție ar trebui să fie un multiplu al {{ compared_value }}.',
    'This value should satisfy at least one of the following constraints:' => 'Această valoare trebuie să îndeplinească cel puțin una dintre următoarele reguli:',
    'Each element of this collection should satisfy its own set of constraints.' => 'Fiecare element din acest set ar trebui să îndeplinească propriul set de reguli.',
    'This value is not a valid International Securities Identification Number (ISIN).' => 'Această valoare nu este un număr internațional de identificare (ISIN) valabil.',
    'This value should be a valid expression.' => 'Această valoare ar trebui să fie o expresie validă.',
    'This value is not a valid CIDR notation.' => 'Această valoare nu este o notație CIDR validă.',
    'The value of the netmask should be between {{ min }} and {{ max }}.' => 'Valoarea netmask-ului trebuie sa fie intre {{ min }} si {{ max }}.',
    'This form should not contain extra fields.' => 'Acest formular nu ar trebui să conțină câmpuri suplimentare.',
    'The uploaded file was too large. Please try to upload a smaller file.' => 'Fișierul încărcat a fost prea mare. Vă rugăm sa încărcați un fișier mai mic.',
    'The CSRF token is invalid. Please try to resubmit the form.' => 'Token-ul CSRF este invalid. Vă rugăm să retrimiteți formularul.',
    'This value is not a valid HTML5 color.' => 'Această valoare nu este un cod de culoare HTML5 valid.',
    'Please enter a valid birthdate.' => 'Vă rugăm să introduceți o dată de naștere validă.',
    'The selected choice is invalid.' => 'Valoarea selectată este invalidă.',
    'The collection is invalid.' => 'Colecția nu este validă.',
    'Please select a valid color.' => 'Vă rugăm să selectați o culoare validă.',
    'Please select a valid country.' => 'Vă rugăm să selectați o țară validă.',
    'Please select a valid currency.' => 'Vă rugăm să selectați o monedă validă.',
    'Please choose a valid date interval.' => 'Vă rugăm să selectați un interval de zile valid.',
    'Please enter a valid date and time.' => 'Vă rugăm să introduceți o dată și o oră validă.',
    'Please enter a valid date.' => 'Vă rugăm să introduceți o dată validă.',
    'Please select a valid file.' => 'Vă rugăm să selectați un fișier valid.',
    'The hidden field is invalid.' => 'Câmpul ascuns este invalid.',
    'Please enter an integer.' => 'Vă rugăm să introduceți un număr întreg.',
    'Please select a valid language.' => 'Vă rugăm să selectați o limbă validă.',
    'Please select a valid locale.' => 'Vă rugăm să selectați o setare locală validă.',
    'Please enter a valid money amount.' => 'Vă rugăm să introduceți o valoare monetară corectă.',
    'Please enter a number.' => 'Vă rugăm să introduceți un număr.',
    'The password is invalid.' => 'Parola nu este validă.',
    'Please enter a percentage value.' => 'Vă rugăm să introduceți o valoare procentuală.',
    'The values do not match.' => 'Valorile nu coincid.',
    'Please enter a valid time.' => 'Vă rugăm să introduceți o oră validă.',
    'Please select a valid timezone.' => 'Vă rugăm să selectați un fus orar valid.',
    'Please enter a valid URL.' => 'Vă rugăm să introduceți un URL valid.',
    'Please enter a valid search term.' => 'Vă rugăm să introduceți un termen de căutare valid.',
    'Please provide a valid phone number.' => 'Vă rugăm să introduceți un număr de telefon valid.',
    'The checkbox has an invalid value.' => 'Bifa nu are o valoare validă.',
    'Please enter a valid email address.' => 'Vă rugăm să introduceți o adresă de email validă.',
    'Please select a valid option.' => 'Vă rugăm să selectați o opțiune validă.',
    'Please select a valid range.' => 'Vă rugăm să selectați un interval valid.',
    'Please enter a valid week.' => 'Vă rugăm să introduceți o săptămână validă.',
  ),
  'security' => 
  array (
    'An authentication exception occurred.' => 'A apărut o eroare de autentificare.',
    'Authentication credentials could not be found.' => 'Informațiile de autentificare nu au fost găsite.',
    'Authentication request could not be processed due to a system problem.' => 'Sistemul nu a putut procesa cererea de autentificare din cauza unei erori.',
    'Invalid credentials.' => 'Date de autentificare invalide.',
    'Cookie has already been used by someone else.' => 'Cookie este folosit deja de altcineva.',
    'Not privileged to request the resource.' => 'Permisiuni insuficiente pentru resursa cerută.',
    'Invalid CSRF token.' => 'Token CSRF este invalid.',
    'No authentication provider found to support the authentication token.' => 'Nu a fost găsit nici un agent de autentificare pentru tokenul specificat.',
    'No session available, it either timed out or cookies are not enabled.' => 'Sesiunea nu mai este disponibilă, a expirat sau suportul pentru cookies nu este activat.',
    'No token could be found.' => 'Tokenul nu a putut fi găsit.',
    'Username could not be found.' => 'Numele de utilizator nu a fost găsit.',
    'Account has expired.' => 'Contul a expirat.',
    'Credentials have expired.' => 'Datele de autentificare au expirat.',
    'Account is disabled.' => 'Contul este dezactivat.',
    'Account is locked.' => 'Contul este blocat.',
    'Too many failed login attempts, please try again later.' => 'Prea multe încercări de autentificare eșuate, vă rugăm să încercați mai târziu.',
    'Invalid or expired login link.' => 'Link de autentificare invalid sau expirat.',
    'Too many failed login attempts, please try again in %minutes% minute.' => 'Prea multe încercări nereușite, încearcă din nou în %minutes% minut.',
    'Too many failed login attempts, please try again in %minutes% minutes.' => 'Prea multe încercări nereușite, încearcă din nou în %minutes% minute.',
  ),
  'KnpPaginatorBundle' => 
  array (
    'Previous' => 'Pagina anterioara',
    'Next' => 'Pagina urmatoare',
    'filter_searchword' => 'Căutare...',
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
