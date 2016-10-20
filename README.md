# emailPermutator
Give me a firstname, lastname and domain (optional).

Signature de la fonction : generateEmail(firstname,lastname,domain,[mode=optional])

Firstname : prénom 
Lastname : nom
domain : nom de domaine avec extension (ex : "doyoubiz.com" :-))
mode (paramètre en option): 1 pour mode normal, 2 pour mode avancé (le mode avancé fait plus de combinaisons :-))

Attention, la fonction génère une liste d'emails qu'il faudra tester ensuite. J'utilise http://verify-email.org pour tester les emails.
Je ferais une mise à jour prochainement avec une page (html + angular) pour importer un fichier CSV avec vos noms, prenoms et utiliser l'API verify-email.org et tester rapidement toutes les adresses générées :-)

