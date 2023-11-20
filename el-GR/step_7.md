## Δημιουργία νέας κλάσης

Ας δημιουργήσουμε ένα στυλ που μοιάζει να έχει κοπεί από ένα κόμικ. Ο ιστοτόπος <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> παρέχει πλήθος γραμματοσειρών που είναι ελεύθερες προς χρήση.

+ Πρόσθεσε μια κλάση `comic` στο αρχείο **style.css**. Καλό είναι να προστεθεί μετά την `magazine2`. Μην ξεχνάς την τελεία μπροστά από το όνομα της κλάσης. 

![screenshot](images/letter-comic1.png)

Μην ανησυχείς αν δεις μια προειδοποίηση ότι «Ο κανόνας είναι άδειος». θα το διορθώσεις αμέσως μετά.

+ Τώρα πρόσθεσε κώδικα CSS στην κλάση comic. Μπορείς να χρησιμοποιήσεις διαφορετικά χρώματα, αν θέλεις. Υπάρχει ένας κατάλογος πλήθους χρωμάτων στο <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a>.

![screenshot](images/letter-comic2.png)

+ Χρησιμοποίησε το στυλ comic σε μερικές από τις ετικέτες `<span>` στο έγγραφο HTML και δες πως μοιάζει η ιστοσελίδα σου:

![screenshot](images/letter-comic-output.png)

+ Τώρα μπορείς να προσθέσεις μια αστεία γραμματοσειρά. Άνοιξε μια νέα καρτέλα ή παράθυρο στο πρόγραμμα περιήγησης. Πήγαινε στο <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> και αναζήτησε τη γραμματοσειρά **'bangers'**:

![screenshot](images/letter-gfonts-1-annotated.png)

+ Click on the font preview box then click on '+ Select this style':

![screenshot](images/letter-gfonts-2-annotated.png)

View your selected fonts by clicking on the 'View your selected families' icon in the top right menu bar:

![screenshot](images/letter-gfonts-3.png)

+ Go to the 'Use on the web' section, copy the text from the <link />
    box:

![screenshot](images/letter-gfonts-4.png)

+ Επικόλλησε τον κώδικα `<link>` που μόλις αντέγραψες από τις γραμματοσειρές Google στην ετικέτα `<head>` της ιστοσελίδας σου:

![screenshot](images/letter-fonts-head.png)

This allows you to use the Bangers font in your webpage.

+ Return to Google fonts and scroll further down to copy the CSS font-family code:

![screenshot](images/letter-fonts-bangers.png)

+ Τώρα πήγαινε στο trinket και στην καρτέλα **'style.css'** και επικόλλησε τον κώδικα στην κλάση comic.

![screenshot](images/letter-fonts-comic.png)

+ Δοκίμασε την ιστοσελίδα σου. Το αποτέλεσμα θα πρέπει να φαίνεται ως εξής: 

![screenshot](images/letter-fonts-output.png)