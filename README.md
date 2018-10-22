# restaurangbokning
Skapa en applikation där det går att söka fram information för ett givet datum eller vecka. Användaren skall kunna välja en tid för den valda dagen. Samla in personuppgifter, upplys om gdpr och se till att bokningen genomförs.

Att söka bord bör göras via ett formulär där användaren får ange antal personer (1-6) och önskat datum. En sökning görs via ett API-anrop och ett resultat presenteras för användaren. Om det fanns bord kvar så visas vilken/vilka tider som är tillgängliga. Om det inte finns bord kvar kommer en varningstext upp och användaren får söka igen.

När användaren har valt tid kommer ytterligare ett formulär upp där användaren får skriva namn, e-post och telefonnummer. Spara eller Avbryt där Spara skriver ner bokningen i db via ett API-anrop(med hjälp av PHP)
