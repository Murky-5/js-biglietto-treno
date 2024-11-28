/* il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */


/* 
1 - chiedo all'utente di inserire la distanza che deve percorrere in kilometri.
2 - chiedo all'utente di inserire la propria età.
3 - SE l'età OPPURE i kilometri non contengono solo numeri o contengono lettere allora chiedo all'utente di non inserire spazi ne caratteri al di fuori dei numeri, e di riaggiornare la pagina.
  - ALTRIMENTI verifico SE l'età del suddetto arriva hai i 65 anni, se si applico lo sconto che gli spetta con il calcolo ( datoUtente - datoUtente * 40 / 100 ) per ottenere il 40% in meno.
  - ALTRIMENTI verifico SE l'età del suddetto non supera i 17 anni, se si applico lo sconto che gli spetta attraverso la formula di calcolo della percentuale ( datoUtente - datoUtente * 20 / 100 ) ottenendo il 20% in meno.
4 - in fine lo informo di quanto gli costerebbe percorrere i suddetti kilometri.
*/


