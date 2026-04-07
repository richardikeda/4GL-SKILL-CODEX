# 4GL Refinement Report

Cross-check between the current dictionary and high-frequency constructs observed in the corpus.

## Summary

- Total dictionary entries: 504
- Curated corpus-only terms tracked explicitly: 20
- Remaining unresolved observed commands: 20
- Remaining unresolved observed assignments: 20

## Unresolved observed commands

- Field: count=181; example=`Field [FML] 1, "", "TABLES", func AFNC.TEXTE(49), "", ""`
- Inftxt: count=138; example=`Inftxt mess(270,126,1) At 105 : # Fiche cr��e`
- Pick: count=129; example=`Pick [SDH1] GAU_CHE1`
- adxrob: count=128; example=`adxrob(0)   = "E"+GLANGUE`
- Opadxd: count=98; example=`Opadxd WTARGET With nomap ,GLANGUE , adxusr, password  Using [JSRV]`
- Boxclr: count=73; example=`Boxclr [SCA1]`
- messname: count=69; example=`messname(0) = GLANGUE`
- Selimp: count=58; example=`Selimp PARAMETRE = [M]SERVEUR+"@" With PARAMETRE`
- actihgup: count=49; example=`actihgup(1) = "AXDTEND"`
- Getui: count=46; example=`Getui VERSION=[L]SRV With "SafeX3SrvImpFileVersion"`
- Askui: count=40; example=`Askui RETORNO="" With "UIAsk="+chr$(1) + "AskGetFile",`
- Opsock: count=28; example=`Opsock [LDB]DBG_HOST, val([LDB]DBG_PORT) Using [OPS]`
- Listimp: count=20; example=`Listimp PARAMETRE = [M]SERVEUR+"@"`
- dbgstr: count=17; example=`dbgstr(131) = GTRTIME`
- dbglong: count=16; example=`dbglong(33) = -12000`
- Callocx: count=16; example=`Callocx WRET=""`
- Calliu: count=15; example=`Calliu "setDataTableExtractToExcel" From [M:AEX8]EXPEXC With [M:AEY3]RESULT, ""`
- Seldest: count=13; example=`Seldest PARAMETRE = SERVEUR With PARAMETRE`
- Supli: count=13; example=`Supli [M:BUR1]NBLIG(WI+1)`
- Callilog: count=12; example=`Callilog RETOUR="" With     "IAction=" + chr$(1) + "1",`

## Unresolved observed assignments

- GACTION: count=38564; example=`GACTION = SAVACT`
- SAVACT: count=35234; example=`SAVACT = GACTION : GACTION = "CTLUOM"`
- VALEUR: count=33459; example=`VALEUR=1`
- IMPMOD: count=16674; example=`IMPMOD = 1`
- indice: count=15725; example=`indice=SAVINDICE`
- IMPENT: count=15419; example=`IMPENT=[L]WTYPORI : # En attendant la correction définitive de Marc Beinat !!`
- CRITERE: count=9151; example=`CRITERE="1=2"`
- ASTATUS: count=7772; example=`ASTATUS = fmet this.ASETERROR('', func XQNFEGWUTIL.ERRORMSG , [V]CST_AERROR)`
- NOL: count=6001; example=`NOL = nolign-1`
- FIN: count=5901; example=`FIN = 0`
- WOK: count=5893; example=`WOK = 2`
- IRET: count=5633; example=`IRET = func PIMPL_CSTD_PROGS.PJM_KEY_SPLIT(GACTX, [M:SDH1]DPJT(NOL), SPROJECT, SBUDGET, STASK)`
- IMPTBL: count=5588; example=`IMPTBL = 1`
- LIGNE: count=5160; example=`LIGNE   =[F:ARM]NUMLIG`
- AXE: count=5130; example=`AXE = find(evalue("[F:DAA]DIE"+"("+num$(AX-1)+")"),[M:HAEF]DIE(0..[M:HAEF]NBRAXI-1))`
- CHAINE: count=4507; example=`CHAINE = format$("N0:5#",mod(uniqid([AES]),99999))`
- OBJET: count=4060; example=`OBJET   = "ADI"`
- PAROBJ: count=3816; example=`PAROBJ = ""`
- TIT: count=3710; example=`TIT = "Selecione o registro"`
- A_DATE: count=3688; example=`A_DATE  = [20/01/2021]`

## Interpretation

- Review unresolved commands to decide whether they are framework constructs, local utilities, or client-specific artifacts.
- Assignment-heavy unresolved names are often screen or business variables and should not be promoted automatically.
- A term should move from `observed` to `confirmed` only after deliberate curation or stronger normative support.
