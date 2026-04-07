# 4GL Dictionary

Canonical dictionary for X3 4GL, rewritten from mined sources and normalized for daily skill use.

## Validation markers

- `confirmed`: supported by the normative help/plugin set and consistent with the skill model.
- `confirmed-help-only`: present in the help set but not surfaced directly by the plugin grammar.
- `observed`: seen in corpus patterns and kept with caution.

## Category summary

- data-access: 2
- error-handling: 1
- event-pattern: 1
- function: 143
- help-topic: 145
- keyword: 91
- pattern: 54
- runtime-variable: 36
- transaction: 1
- type: 14
- ui-command: 14
- ui-runtime-state: 2

## data-access

### Link

- Description: Creates a joined alias for iterating across related tables with explicit keys.
- Validation: `confirmed`
- Sources: plugin-snippets, v12-corpus
- Invariants: Name the joined alias explicitly. Prefer readable join keys over implicit coupling.
- Notes: Common in selection and list-style routines.
- Example: `Link [BPC] With [BPA]BPRNUM=[BPC]BPRNUM As [BPLNK]`

### Local File

- Description: Declares a local table handle for the current routine, often guarded by clalev checks in reusable code.
- Validation: `confirmed`
- Sources: plugin-snippets, v12-corpus
- Invariants: Avoid reopening already-open aliases. Keep abbreviations stable inside the routine.
- Notes: Observed as a standard safety idiom in project code.
- Example: `If clalev([F:BPC])=0 : Local File BPCUSTOMER [BPC] : Endif`


## error-handling

### Onerrgo

- Description: Declares an error label and redirects runtime errors to an explicit recovery or resume path.
- Validation: `confirmed`
- Sources: plugin-snippets, v12-corpus
- Invariants: Keep the error label close to the routine. Resume only when the failure path is understood.
- Notes: Useful for legacy-style guarded sections, but should remain explicit.
- Example: `Onerrgo ERR_HANDLER / ... / $$ERR_HANDLER / Resume`


## event-pattern

### ACTION

- Description: Entry dispatch block frequently used to route object or screen actions to Gosub labels.
- Validation: `confirmed`
- Sources: plugin-snippets, v12-corpus
- Invariants: Return after the Case block. Keep labels explicit and action names stable.
- Notes: Strongly represented in snippets and corpus.
- Example: `$ACTION / Case ACTION / When "OUVRE" : Gosub OUVRE / Endcase / Return`


## function

### abs

- Description: This function returns the absolute value of a specified number.
- Signature: `abs(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `abs(VALUE)`

### ach

- Description: This function returns the inverse hyperbolic cosine of a specified number.
- Signature: `ach(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `ach(VALUE)`

### acos

- Description: acos returns the arc cosine of a value. The result is expressed in degrees, radians, or grades, depending on adxmda. The type of the result is Double.
- Signature: `acos(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `acos(VALUE)`

### addmonth

- Description: addmonth allows you to add a given number of months to a date.
- Signature: `addmonth(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `addmonth(VALUE)`

### adxcio

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `adxcio(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `adxcio(VALUE)`

### adxioa

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `adxioa(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `adxioa(VALUE)`

### adxmac

- Description: adxmac is a function used to identify the server in which the current folder, or one of its reference folder, is installed. It also allows you to obtain the network name of the client (in Version 7 mode, the client is the node.js server).
- Signature: `adxmac(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `adxmac(VALUE)`

### adxnfs

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `adxnfs(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `adxnfs(VALUE)`

### adxpno

- Description: adxpno gives access to the stacked scripts called with Call, Fmet, or func.
- Signature: `adxpno(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `adxpno(VALUE)`

### adxseek

- Description: adxseek returns the position of the read / write pointers on sequential files.
- Signature: `adxseek(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `adxseek(VALUE)`

### adxuid

- Description: adxuid returns a unique identifier for a connection.
- Signature: `adxuid(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `adxuid(VALUE)`

### anp

- Description: anp calculates the number of permutations (for example, ordered arrangements) of **p** objects taken from **n**.
- Signature: `anp(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `anp(VALUE)`

### ar2

- Description: ar2 is a function that rounds a number to two digits. The method used is the method known as <a href="https://en.wikipedia.org/wiki/Rounding#Round_half_away_from_zero">Round half away from zero</a>
- Signature: `ar2(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `ar2(VALUE)`

### arr

- Description: ar2 is a function that rounds a number to a specified increment. The method used is the method known as <a target="_blank" href="http://en.wikipedia.org/wiki/rounding#Tie-breaking">half away from zero.
- Signature: `arr(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `arr(VALUE)`

### ascii

- Description: ascii returns the code of the first character of a string.
- Signature: `ascii(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `ascii(VALUE)`

### ash

- Description: This function returns the inverse hyperbolic sine of a specified number.
- Signature: `ash(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `ash(VALUE)`

### asin

- Description: asin returns the arc sine of a value. The result is expressed in degrees, radians, or grades, depending on adxmda. The type of the result is Double.
- Signature: `asin(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `asin(VALUE)`

### atan

- Description: atan returns the arc tangent of a value. The result is expressed in degrees, radians, or grades, depending on adxmda. The type of the result is Double.
- Signature: `atan(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `atan(VALUE)`

### atan2

- Description: atan2 returns the value of the arc tangent of a value expressed as a quotient of tow values: x and y. The result is expressed in degrees, radians, or grades, depending on adxmda. The type of the result is Double.
- Signature: `atan2(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `atan2(VALUE)`

### ath

- Description: This function returns the inverse hyperbolic tangent of a specified number.
- Signature: `ath(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `ath(VALUE)`

### atxinfo

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `atxinfo(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `atxinfo(VALUE)`

### avg

- Description: This function is used to compute the average value of a list of numeric elements. It works on a list of elements that can be: * Expressions. * Arrays or sub-arrays of an array. * Properties in an array of references.
- Signature: `avg(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `avg(VALUE)`

### aweek

- Description: aweek returns the first day of a week number for the year.
- Signature: `aweek(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `aweek(VALUE)`

### b64decode

- Description: This function decodes a base 64 string into a BLOB (Binary Large Object). It returns the number of bytes written to the BLOB. An error 26 is displayed if the input is invalid.
- Signature: `b64decode(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `b64decode(VALUE)`

### b64encode

- Description: This function encodes binary data stored in a BLOB (Binary Large Object) as a base 64 string. It returns the number of characters written to the string.
- Signature: `b64encode(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `b64encode(VALUE)`

### cast

- Description: This function casts a generic instance to an instance of specific class or representation.
- Signature: `cast(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `cast(VALUE)`

### ch

- Description: This function returns the hyperbolic cosine of a specified number.
- Signature: `ch(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `ch(VALUE)`

### chr$

- Description: chr$ converts a numeric value into a string character having this value as a code.
- Signature: `chr$(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `chr$(VALUE)`

### clactxnbs

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `clactxnbs(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `clactxnbs(VALUE)`

### clactxvar

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `clactxvar(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `clactxvar(VALUE)`

### clalev

- Description: clalev allows you to know if a class (usually a table associated class) can be accessed in a given context.
- Signature: `clalev(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `clalev(VALUE)`

### clanam

- Description: clanam allows you to know the name of a class (usually a table associated class) if available in a given context. The class name is returned with the complete class path.
- Signature: `clanam(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `clanam(VALUE)`

### clanbs

- Description: clanbs allows you to know the number of variables used by a class.
- Signature: `clanbs(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `clanbs(VALUE)`

### clasiz

- Description: clasiz allows you to know the size used by a class (in bytes).
- Signature: `clasiz(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `clasiz(VALUE)`

### clavar

- Description: clavar returns the name of the variables present in a class.
- Signature: `clavar(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `clavar(VALUE)`

### cnp

- Description: cnp calculates the number of arrangements of 'p' objects taken from 'n'.
- Signature: `cnp(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `cnp(VALUE)`

### cos

- Description: cos returns the value of the cosine of an angle expressed in degrees, radians, or grades, depending on adxmda. The type of result is Double.
- Signature: `cos(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `cos(VALUE)`

### count

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `count(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `count(VALUE)`

### ctrans

- Description: ctrans transforms the characters of a string with an 8-byte code into a 7-byte code depending on a conversion table. By default, it suppresses the accents on accentuated characters. But it is also possible to define the conversion table by additional arguments.
- Signature: `ctrans(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `ctrans(VALUE)`

### day

- Description: day returns the day number (1 to 31) from a date.
- Signature: `day(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `day(VALUE)`

### day$

- Description: day$ returns a string that contains the name of the day (in the week) that corresponds to the date given as an argument. The result is given in the current connection language.
- Signature: `day$(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `day$(VALUE)`

### dayn

- Description: Dayndayn returns a number corresponding to the rank of the day in the week for the date given as an argument.
- Signature: `dayn(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `dayn(VALUE)`

### dbgattach

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `dbgattach(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `dbgattach(VALUE)`

### dbgbreakpointadd

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `dbgbreakpointadd(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `dbgbreakpointadd(VALUE)`

### dbgbreakpointget

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `dbgbreakpointget(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `dbgbreakpointget(VALUE)`

### dbgbreakpointremove

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `dbgbreakpointremove(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `dbgbreakpointremove(VALUE)`

### dbgbreakpointupdate

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `dbgbreakpointupdate(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `dbgbreakpointupdate(VALUE)`

### dbgcallstack

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `dbgcallstack(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `dbgcallstack(VALUE)`

### dbgevalue

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `dbgevalue(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `dbgevalue(VALUE)`

### delfile

- Description: This function deletes a file.
- Signature: `delfile(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `delfile(VALUE)`

### dimctx

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `dimctx(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `dimctx(VALUE)`

### entete

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `entete(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `entete(VALUE)`

### eomonth

- Description: eomonth returns the date of the last day of the month in the year for the date given in the parameter.
- Signature: `eomonth(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `eomonth(VALUE)`

### errmes$

- Description: errmes$ returns the message associated with a numeric error code available when an error occurs. It is frequently used when the error code errn is used, in the error handling routine set by Onerrgo.
- Signature: `errmes$(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `errmes$(VALUE)`

### evalue

- Description: Snippet-backed pattern: evalue - evaluates a formula contained in a character string.
- Signature: `evalue(...)`
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `evalue("expression}")`

### evaluectxvar

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `evaluectxvar(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `evaluectxvar(VALUE)`

### evaluesdata

- Description: This function defines a filtering condition on a database query. The condition is expressed in SData where syntax.
- Signature: `evaluesdata(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `evaluesdata(VALUE)`

### exp

- Description: exp returns the exponential function of its argument.
- Signature: `exp(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `exp(VALUE)`

### fac

- Description: fac returns the factorial of an integer value.
- Signature: `fac(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `fac(VALUE)`

### filcom

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `filcom(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `filcom(VALUE)`

### filecla

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `filecla(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `filecla(VALUE)`

### filelev

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `filelev(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `filelev(VALUE)`

### filetyp

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `filetyp(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `filetyp(VALUE)`

### filexist

- Description: This function checks if a given $$PRODUCT script file exists on a server. It returns 1 if the file exists, if not, it returns 0.
- Signature: `filexist(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `filexist(VALUE)`

### filinfo

- Description: filinfo returns the properties of a file located on a file system that is accessible by the X3 engine. The file path is given as argument, and a second numeric argument defines the returned properties.
- Signature: `filinfo(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `filinfo(VALUE)`

### filpath

- Description: Snippet-backed pattern: filpath - builds a file path on the X3 server (dir, name, ext).
- Signature: `filpath(...)`
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `filpath("TRA}","filename}","ext}")`

### find

- Description: find searches for a value on a list of expressions or arrays of variables for a given type.
- Signature: `find(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `find(VALUE)`

### fix

- Description: fix truncates the decimals of a number.
- Signature: `fix(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `fix(VALUE)`

### format$

- Description: format$ is a function that formats a value to return a formatted string value.
- Signature: `format$(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `format$(VALUE)`

### gdat

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `gdat(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `gdat(VALUE)`

### gdat$

- Description: gdat$ returns a date from a day, month, and year.
- Signature: `gdat$(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `gdat$(VALUE)`

### gdatetime$

- Description: This function converts a datetime string in canonical format to a DateTime value.
- Signature: `gdatetime$(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `gdatetime$(VALUE)`

### getenv$

- Description: getenv$ allows you to read an environment variable as given in the service definition if $$PRODUCT runs on Windows, and given by assignments in the script that starts the daemon for $$PRODUCT.
- Signature: `getenv$(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `getenv$(VALUE)`

### graph$

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `graph$(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `graph$(VALUE)`

### instr

- Description: instr searches for a given substring in a string, starting at a given position.
- Signature: `instr(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `instr(VALUE)`

### int

- Description: int returns the integer part of a number.
- Signature: `int(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `int(VALUE)`

### isopenadxd

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `isopenadxd(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `isopenadxd(VALUE)`

### left$

- Description: left$ extracts a sub-string of a string starting from the beginning (the left side).
- Signature: `left$(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `left$(VALUE)`

### len

- Description: len returns the length (in number of characters) of a string, BLOB, or CLOB value.
- Signature: `len(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `len(VALUE)`

### ln

- Description: ln returns the natural logarithm of its argument (natural means e based, where e=2.718261826459045...).
- Signature: `ln(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `ln(VALUE)`

### lobsize

- Description: lobsize returns the size (in bytes) used for the storage of BLOB or CLOB variable.
- Signature: `lobsize(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `lobsize(VALUE)`

### log

- Description: log returns the 10 based logarithm of its argument.
- Signature: `log(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `log(VALUE)`

### maskabr

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `maskabr(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `maskabr(VALUE)`

### maskcla

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `maskcla(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `maskcla(VALUE)`

### masklev

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `masklev(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `masklev(VALUE)`

### masknam

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `masknam(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `masknam(VALUE)`

### masknbf

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `masknbf(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `masknbf(VALUE)`

### maskrk

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `maskrk(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `maskrk(VALUE)`

### masksiz

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `masksiz(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `masksiz(VALUE)`

### max

- Description: This function is used to calculate the maximum for a list of elements such as dates, numeric values, and string values. It works on a list of elements that can be: * Expressions. * Arrays or sub-arrays of an array. * Properties in an array of references.
- Signature: `max(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `max(VALUE)`

### mess

- Description: mess gives access to the translatable text resources used by the $$SAFE engine and the application layers (especially local menus and identified messages such as error messages).
- Signature: `mess(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `mess(VALUE)`

### mid$

- Description: mid$ extracts a sub-string defined by the position and a number of characters out of a CLOB or a string.
- Signature: `mid$(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `mid$(VALUE)`

### min

- Description: This function is used to calculate the minimum for a list of elements such as dates, numeric values, or string values. It works on a list of elements that can be: * Expressions. * Arrays or sub-arrays of an array. * Properties in an array of references.
- Signature: `min(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `min(VALUE)`

### mod

- Description: mod returns the remainder of the division of one number by another.
- Signature: `mod(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `mod(VALUE)`

### month

- Description: month extracts the month number (1 to 12) from a date.
- Signature: `month(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `month(VALUE)`

### month$

- Description: month$ returns the month name in the current language from a date.
- Signature: `month$(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `month$(VALUE)`

### nbrecord

- Description: nbrecord returns the number of lines in a database table.
- Signature: `nbrecord(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `nbrecord(VALUE)`

### nday

- Description: nday returns the number of days between the [1/1/1600] and the date given as the argument.
- Signature: `nday(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `nday(VALUE)`

### nday$

- Description: nday$ returns a date from the number of days between the [1/1/1600] and the date.
- Signature: `nday$(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `nday$(VALUE)`

### num

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `num(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `num(VALUE)`

### num$

- Description: num$ transforms any data type (except BLOBs, CLOBs, and instance pointers) into a string that contains the representation of the data.
- Signature: `num$(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `num$(VALUE)`

### objectexist

- Description: This function checks if a given class exists on an application server.
- Signature: `objectexist(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `objectexist(VALUE)`

### parse

- Description: parse parses a formula contained in a character string and returns an error value if the formula is not syntactically correct.
- Signature: `parse(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `parse(VALUE)`

### pat

- Description: pat allows you to check the conformity of a string according to a pattern.
- Signature: `pat(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `pat(VALUE)`

### prd

- Description: This function is used to calculate the multiplication for a list of numeric elements. It works on a list of elements that can be: * Expressions. * Arrays or sub-arrays of an array. * Properties in an array of references.
- Signature: `prd(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `prd(VALUE)`

### progcan

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `progcan(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `progcan(VALUE)`

### progldd

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `progldd(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `progldd(VALUE)`

### progsiz

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `progsiz(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `progsiz(VALUE)`

### progusd

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `progusd(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `progusd(VALUE)`

### renamefile

- Description: This function renames a file.
- Signature: `renamefile(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `renamefile(VALUE)`

### right$

- Description: right$ extracts a substring of a string starting from a given position (the right side).
- Signature: `right$(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `right$(VALUE)`

### rnd

- Description: rnd(x) returns a random number between '0' and 'x' (x excluded).
- Signature: `rnd(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `rnd(VALUE)`

### rowcount

- Description: rowcount allows you to return the number of lines corresponding to a selection condition in a database table.
- Signature: `rowcount(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `rowcount(VALUE)`

### seg

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `seg(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `seg(VALUE)`

### seg$

- Description: seg$ extracts a substring defined by the starting position and the ending position out of a CLOB or a string.
- Signature: `seg$(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `seg$(VALUE)`

### sgn

- Description: sgn returns the sign (-1, 0 or +1) of a numeric value.
- Signature: `sgn(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `sgn(VALUE)`

### sh

- Description: This function returns the hyperbolic sine of a specified number.
- Signature: `sh(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `sh(VALUE)`

### sigma

- Description: sigma allows you to perform the sum of a series of numeric expressions and the concatenation of a series of expressions returning strings. These expressions depend on an index value that varies between two values with a step of 1.
- Signature: `sigma(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `sigma(VALUE)`

### sin

- Description: Sin returns the value of the sine of an angle expressed in degrees, radians, or grades, depending on adxmda. The type of the result is Double.
- Signature: `sin(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `sin(VALUE)`

### space$

- Description: space$ returns a string containing a number of spaces given by its argument.
- Signature: `space$(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `space$(VALUE)`

### sqr

- Description: sqr returns the square root of a number.
- Signature: `sqr(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `sqr(VALUE)`

### str

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `str(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `str(VALUE)`

### strdecode

- Description: This function transforms a UTF8 or ASCII encoded character string (based on the parameter given) into a UCS2 format. It returns the number of character found in the destination.
- Signature: `strdecode(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `strdecode(VALUE)`

### strencode

- Description: This function transforms a UCS2 encoded character string into another format that is given by an additional parameter. It returns the number of character found in the destination.
- Signature: `strencode(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `strencode(VALUE)`

### string$

- Description: string$ returns a string containing a string repeated a given number of  times.
- Signature: `string$(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `string$(VALUE)`

### sum

- Description: This function is used to perform an addition of numeric elements or a concatenation of string elements. It works on a list of elements that can be: * Expressions. * Arrays or sub-arrays of an array. * Properties in an array of references.
- Signature: `sum(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `sum(VALUE)`

### tan

- Description: tan returns the value of the tangent of an angle expressed in degrees, radians, or grades, depending on adxmda. The type of result is Double.
- Signature: `tan(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `tan(VALUE)`

### th

- Description: This function returns the hyperbolic tangent of a specified number.
- Signature: `th(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `th(VALUE)`

### tolower

- Description: tolower transforms the upper case letters in a string into lower case letters. The other characters remain unchanged.
- Signature: `tolower(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `tolower(VALUE)`

### toupper

- Description: toupper converts the lower case letters in a string into upper case letters. Other characters remain unchanged.
- Signature: `toupper(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `toupper(VALUE)`

### touuid

- Description: This keyword converts a canonical UUID string to its UUID value.
- Signature: `touuid(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `touuid(VALUE)`

### type

- Description: type returns an integer value representing the data type of a variable.
- Signature: `type(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `type(VALUE)`

### typectx

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `typectx(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `typectx(VALUE)`

### uni

- Description: uni allows you to verify if there are duplicated values in a list of variables or expressions that can have any type (numeric, string CLOB, dates, UUIDs, or datetime).
- Signature: `uni(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `uni(VALUE)`

### uniqid

- Description: uniqid allows you to generate a unique series of long integer for every database table.
- Signature: `uniqid(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `uniqid(VALUE)`

### updtick

- Description: This technical column is added in every database table when the table is validated in version 7 for the supervisor. This column stores a revision number for every line in the database. The revision numbers start at 1 when a line is created, and increment by 1 every time an update is made through a database trigger.
- Signature: `updtick(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `updtick(VALUE)`

### val

- Description: val transforms a string or a CLOB value that contains a decimal representation of a number to this number.
- Signature: `val(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `val(VALUE)`

### var

- Description: Use var to calculate the variance of a series of numeric values. It works on a list of elements that can be: * Expressions. * Arrays or subarrays of an array. * Properties in an array of references.
- Signature: `var(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `var(VALUE)`

### ver$

- Description: ver$(0) returns the revision number of the $$SAFE engine. The type of result is Char.
- Signature: `ver$(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `ver$(VALUE)`

### vireblc

- Description: vireblc allows you to suppress leading, trailing, or internal spaces of a string character or CLOB expression.
- Signature: `vireblc(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `vireblc(VALUE)`

### week

- Description: week returns the day number (0 to 53) from a date.
- Signature: `week(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `week(VALUE)`

### xcrypt

- Description: Built-in 4GL function available to compute values, inspect runtime state, or transform data.
- Signature: `xcrypt(...)`
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `xcrypt(VALUE)`

### year

- Description: year returns the year number (1600 to 9999) from a date.
- Signature: `year(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `year(VALUE)`


## help-topic

### Actzo

- Description: Actzo activates all or part of the fields in a mask that were previously grayed.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Actzo - see category notes and syntax guide.`

### adxdcs

- Description: adxdcs is a pivot year used to determine the century when the year is two digits.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxdcs - see category notes and syntax guide.`

### adxdir

- Description: This function returns the path of the directory where the $$PRODUCT execution engine run-time is installed on the current process server.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxdir - see category notes and syntax guide.`

### adxdlrec

- Description: This function returns the number of records processed by the last Delete instruction. It must be called after the Delete instruction.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxdlrec - see category notes and syntax guide.`

### adxfname

- Description: adxfname returns the name of the columns of an opened table. It is an array of string variables present in the [G:abv] class associated with a table opened with the **_abv_** abbreviation.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxfname - see category notes and syntax guide.`

### adxftl

- Description: adxftl is a variable used to set a read grouping factor in a number of records.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxftl - see category notes and syntax guide.`

### adxifs

- Description: adxifs is a character string variable of length 1 that contains the field separator used when reading or writing sequential files by the instructions Rdseq and Wrseq.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxifs - see category notes and syntax guide.`

### adxirs

- Description: adxirs is a character string variable of length 2 maximum that contains the record separator used when reading or writing sequential files by the instructions Rdseq and Wrseq.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxirs - see category notes and syntax guide.`

### adxium

- Description: Adxium is a numeric value that defines the coding method used for writing or reading character strings in a text file by the instructions  Wrseq and Rdseq.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxium - see category notes and syntax guide.`

### adxlog

- Description: adxlog is a variable that states if a database transaction has already been started (by Trbegin).
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxlog - see category notes and syntax guide.`

### adxmda

- Description: adxmda is a numeric value that determines the current angular mode. It is used for the functions that return or use angles.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxmda - see category notes and syntax guide.`

### adxmother

- Description: Adxmother is a character string type variable array that contains the names of the reference folder of the current folder.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxmother - see category notes and syntax guide.`

### adxmso

- Description: adxmso is an internal integer variable that indicates the maximum number of files that can be simultaneously opened by Openi, Openo, and Openio.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxmso - see category notes and syntax guide.`

### adxmto

- Description: adxmto is an internal integer variable that indicates the maximum number of tables that can be simultaneously opened by File.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxmto - see category notes and syntax guide.`

### adxsca

- Description: adxsca is an internal string variable that stores characters used by formatting functions.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxsca - see category notes and syntax guide.`

### adxsqlrec

- Description: This function returns the number of records processed by the last ExecSql instruction. It must be called after an ExecSql instruction that inserts, updates, or deletes records. This function returns 0 after ExecSql instructions that execute DDL statements like CREATE TABLE or DROP TABLE.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxsqlrec - see category notes and syntax guide.`

### adxtct

- Description: adxtct is a Char variable that indicates the name of the table where the sequence numbers are stored.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxtct - see category notes and syntax guide.`

### adxtlk

- Description: adxtlk is a Char variable. It defines the name of the table that stores the logical locks.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxtlk - see category notes and syntax guide.`

### adxtms

- Description: adxtms is a Char variable that defines the name of the table where the messages are stored.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxtms - see category notes and syntax guide.`

### adxtuc

- Description: adxtuc is an array of 32 character strings (from 0 to 31) with a maximum length of 33. It allows you to define accepted characters in additional data types used for formatting data.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxtuc - see category notes and syntax guide.`

### adxtul

- Description: adxtul is an array of 32 character strings (from 0 to 31) with a maximum length of 1. It allows you to define data types used for formatting data.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxtul - see category notes and syntax guide.`

### adxtut

- Description: adxtut is an array of 32 character strings (from 0 to 31) with a maximum length of 17. It allows you to define sub-data types associated with additional data types used for formatting data.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxtut - see category notes and syntax guide.`

### adxuprec

- Description: This function returns the number of records processed by the last Update instruction, and it must be called after the instruction.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxuprec - see category notes and syntax guide.`

### adxwrb

- Description: adxwrb stores the number of buffered database write operations.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `adxwrb - see category notes and syntax guide.`

### Affzo

- Description: Affzo displays all or part of the fields in a mask.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Affzo - see category notes and syntax guide.`

### allocgrp

- Description: This built-in property returns the allocation group of an instance. Allocgrp is essentially a technical property and is rarely used.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `allocgrp - see category notes and syntax guide.`

### anasql

- Description: Anasql is used to parse a SQL sentence and return in an integer array the number and the types of values that are returned by the SQL sentence.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `anasql - see category notes and syntax guide.`

### and

- Description: and performs a logical 'and' between two boolean values.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `and - see category notes and syntax guide.`

### asc

- Description: This keyword is used in the Sorta instruction to describe an ascending sorting order on all parameters. See the Sorta for more information.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `asc - see category notes and syntax guide.`

### callmet

- Description: This instruction invokes a method on an instance (similar to Call). It is used to invoke methods that do not return any value. For methods that return a value, use the fmeth operator.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `callmet - see category notes and syntax guide.`

### Callui

- Description: Callui is used to execute a pre-determined action on the web client.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Callui - see category notes and syntax guide.`

### checkpath

- Description: checkpath is a function that allows you to verify if a file path is in the white list of the engine and can therefore be accessed.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `checkpath - see category notes and syntax guide.`

### Chgfmt

- Description: Chgfmt changes the format of a field in a screen mask.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Chgfmt - see category notes and syntax guide.`

### Chgstl

- Description: Chgfmt changes the format of a field in a screen mask.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Chgstl - see category notes and syntax guide.`

### Chgtbk

- Description: Chgtbk changes the title of a block in a screen mask.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Chgtbk - see category notes and syntax guide.`

### Chgtfd

- Description: Chgtfd changes the title of a tab associated to a mask in a window.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Chgtfd - see category notes and syntax guide.`

### Chgtzn

- Description: Chgtzn changes the title of a field associated in a mask.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Chgtzn - see category notes and syntax guide.`

### Choose

- Description: Choose displays a popup windows with a set of lines extracted from a table in order to select a record.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Choose - see category notes and syntax guide.`

### clacmp

- Description: clacmp allows you to compare two classes (usually two classes that are associated with tables). It compares both the structure and the contents of the class.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `clacmp - see category notes and syntax guide.`

### close

- Description: Close is used to free the [F] classes associated with tables and to free the cursors opened on the tables.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `close - see category notes and syntax guide.`

### closelog

- Description: This function stops the $$PRODUCT engine log mode that opens a log file to be filled with log information. This  file is located in the 'TMP' subfolder of the folder defined by the "ADXDIR" environment variable.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `closelog - see category notes and syntax guide.`

### columns

- Description: Columns is used to limit the number of columns associated with a table: * Loaded in the class [F] when reading the data by a For, Readlock or Read instruction. * Updated from the class [F] when writing the data by a Rewrite or RewriteByKey instruction.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `columns - see category notes and syntax guide.`

### curr

- Description: Curr is used as a Read or Update option to define the fact that the current record is considered.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `curr - see category notes and syntax guide.`

### currind

- Description: currind is a numeric variable in the [G] class associated with a table declared by the File instruction. It contains the key number used during the last access to the table. When the table is declared but no read operation has been done, the default value of currind is 1.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `currind - see category notes and syntax guide.`

### currlen

- Description: currlen is a numeric variable in the [G] class associated with a table declared by the File instruction. It can be assigned to define the number of key components used for a Read operation when the key is not mentioned and defined by currind.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `currlen - see category notes and syntax guide.`

### datesyst

- Description: datesyst is a system variable that has, as a default value, the current date when the $$PRODUCT process is started. It can be reassigned.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `datesyst - see category notes and syntax guide.`

### dbgmode

- Description: dbgmode is a system variable that must be different from 0 to enable the debugger to work.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `dbgmode - see category notes and syntax guide.`

### dela

- Description: Dela is used to delete elements from single-sized arrays, from a given index.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `dela - see category notes and syntax guide.`

### deletebykey

- Description: This instruction deletes a record at a given key after checking for edit conflicts. It compares the UpdTick value of the [F] record with the UpdTick of the corresponding database record and it deletes the database record only if the two ticks are equal.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `deletebykey - see category notes and syntax guide.`

### desc

- Description: This keyword is used in the Sorta instruction to describe a descending sorting order on all the parameters. See the Sorta document for more information.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `desc - see category notes and syntax guide.`

### dim

- Description: dim returns the dimensions of a variable.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `dim - see category notes and syntax guide.`

### Disable

- Description: Disable allows to disable buttons and/or links present at a bottom of a screen or on the menu bar of a function.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Disable - see category notes and syntax guide.`

### Diszo

- Description: Diszo grays out all or part of the fields in a mask that were previously activated. Unlike Grizo,Diszo stipulates that these fields have a meaning in the contex
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Diszo - see category notes and syntax guide.`

### Effzo

- Description: Effzo grays out all or part of the fields in a mask that were previously activated.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Effzo - see category notes and syntax guide.`

### Enable

- Description: Enable allows to enable button and/or links present at a bottom of a screen or on the menu bar of a function.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Enable - see category notes and syntax guide.`

### engine-error-list

- Description: The $$SAFE engine manages exception errors that can be handled by the Onerrgo and Resume instructions. The variable errn contains the error code according to the following table:
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `engine-error-list - see category notes and syntax guide.`

### Envzo

- Description: Envzo forces the display of the fields in a mask.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Envzo - see category notes and syntax guide.`

### escjson

- Description: This function adds the back slash (\) character in a string of character to circumvent the ones that cannot be present in a JSON constant (", \, tab, or CR).
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `escjson - see category notes and syntax guide.`

### execsql

- Description: This instruction executes a SQL statement against the $$PRODUCT database.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `execsql - see category notes and syntax guide.`

### extended

- Description: Use this keyword in Columns instruction as an option that describes the fact that the list of columns given as a restriction to the Select sentences sent to the database works not only for For, Rewrite, and RewriteByKey instructions, but also for Read and Readlock instructions.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `extended - see category notes and syntax guide.`

### file

- Description: File is used to declare the tables that can be used in a script.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `file - see category notes and syntax guide.`

### fileabre

- Description: fileabre is an internal character string array that gives the list of the abbreviations associated with tables that have been opened by File.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `fileabre - see category notes and syntax guide.`

### filename

- Description: filename is an internal character string array that gives the list of the table that have been opened by File.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `filename - see category notes and syntax guide.`

### first

- Description: First is used as a read or update option to define the first record in the key order.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `first - see category notes and syntax guide.`

### flush

- Description: Flush flushes the write buffer, which is filled by the Writeb instruction.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `flush - see category notes and syntax guide.`

### fmet

- Description: This operator invokes a method on an instance (similar to func). It is used to invoke methods that do return values. For methods that do not return values, use the CallMet instruction.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `fmet - see category notes and syntax guide.`

### fmethod

- Description: This instruction declares a method in a class. It is used to declare methods that return a value. Methods that _do not_ return any value are declared with the Method instruction.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `fmethod - see category notes and syntax guide.`

### freeinstance

- Description: This instruction frees the memory of an instance. The other instances in the same allocation group are not freed; this can be done by using FreeGroup instruction.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `freeinstance - see category notes and syntax guide.`

### freesnapshot

- Description: This built-in method frees the Snapshot of an instance.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `freesnapshot - see category notes and syntax guide.`

### func

- Description: Use this function to Call a subroutine executed with its own local variables class that returns a value. Parameters can be transmitted as values or as references; so that the parameters transmitted by reference can be modified by the subroutine.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `func - see category notes and syntax guide.`

### getaccessorenabled

- Description: This built-in property defines whether the get accessors are enabled on an instance or not.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `getaccessorenabled - see category notes and syntax guide.`

### getbit

- Description: getbit returns the bit value of a bit from an integer. The result is an integer that can have a value of 0 or 1.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `getbit - see category notes and syntax guide.`

### getlogname

- Description: This function returns the file name of the last $$PRODUCT engine log. When the log mode is activated, a file located in the 'TMP' subfolder of the folder defined by the "ADXDIR" environment variable is opened and filled with log information.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `getlogname - see category notes and syntax guide.`

### getmodified

- Description: This built-in method returns the list of properties that have been modified in an instance since the snapshot has been enabled.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `getmodified - see category notes and syntax guide.`

### getseq

- Description: Getseq reads data from a binary file opened by Openi or Openio.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `getseq - see category notes and syntax guide.`

### glossary

- Description: The $$PRODUCT script glossary documents the language elements of the $$PRODUCT scripting engine. Every language element has an associated keyword. A keyword cannot be used as a variable or property name, whenever the case is the same or not. The keyword recognition is not case sensitive, but this will change in the future.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `glossary - see category notes and syntax guide.`

### glossary-datetime

- Description: Version 7 of the $$PRODUCT engine introduced a new data type called 'DateTime'. It stores a date and an hour in the same field, while the date data type is limited to the date (usually a business date).
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `glossary-datetime - see category notes and syntax guide.`

### glossary-snapshot

- Description: A snapshot is an initial copy of the data stored in a class. It includes all child classes, if there are any. This concept is very useful when managing CRUD operation because it provides the differences between the data read and the modification done.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `glossary-snapshot - see category notes and syntax guide.`

### glossary-structure

- Description: Version 7 of the $$PRODUCT engine introduced structures. A structure has properties and methods and it is defined in files with an 'STC' extension.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `glossary-structure - see category notes and syntax guide.`

### glossary-updtick

- Description: To manage optimistic update concurrency control, Version 7 of the $$PRODUCT engine introduced a new concept called UpdTick. UpdTick, which means update ticks.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `glossary-updtick - see category notes and syntax guide.`

### glossary-uuid

- Description: Version 7 of the $$PRODUCT engine introduced a new data type called UUID Universally Unique Identifier. This is a standard published by the Open Software Foundation (OSF).
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `glossary-uuid - see category notes and syntax guide.`

### goto

- Description: Goto performs an unconditional branch from a script to another label.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `goto - see category notes and syntax guide.`

### Grizo

- Description: Grizo grays out all or part of the fields in a mask that were previously activated.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Grizo - see category notes and syntax guide.`

### heapdmp

- Description: This function generates a dump file of memory usage, for debugging purposes.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `heapdmp - see category notes and syntax guide.`

### insa

- Description: Insa is used to insert elements from single-sized arrays, from an index.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `insa - see category notes and syntax guide.`

### iomode

- Description: Use Iomode to assign a value to the different parameters associated with a sequential file opened by Openi, Openio, or Openo when doing an abbreviation.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `iomode - see category notes and syntax guide.`

### isreadonly

- Description: This built-in property returns whether the properties of an instance cannot or can be modified. It can be tested but tot modified.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `isreadonly - see category notes and syntax guide.`

### keylen

- Description: **Caution: keylen has been deprecated in version $$CURVER. It is not to be used by developers.**
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `keylen - see category notes and syntax guide.`

### keyname

- Description: **Caution: keyname has been deprecated in version $$CURVER. It has no more to be used by developers.**
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `keyname - see category notes and syntax guide.`

### keyuniq

- Description: **Caution: keyuniq has been deprecated in version $$CURVER. It has no more to be used by developers.**
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `keyuniq - see category notes and syntax guide.`

### last

- Description: Use Last as a read or update  option to define the fact that the last record is considered (in the key order).
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `last - see category notes and syntax guide.`

### lockwait

- Description: lockwait is an Integer system variable of the Integer type.  It allows you to set the maximum of seconds that each lock attempt will last using the Lock and Readlock instructions. After a first failed lock attempt, the system will retry every second for the duration defined by the lockwait value.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `lockwait - see category notes and syntax guide.`

### logicclose

- Description: This function closes a table logically. It releases the [F] buffer and any filters in a way that makes a further Local File execution much faster than if the table were closed by the Close instruction.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `logicclose - see category notes and syntax guide.`

### maxheap

- Description: The maxheap variable defines the memory (in bytes) that can be allocated in the heap memory of the runtime server process.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `maxheap - see category notes and syntax guide.`

### maxmem

- Description: The maxmem variable defines the memory (in bytes) that can be allocated in the main memory of the runtime server process.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `maxmem - see category notes and syntax guide.`

### maxtab

- Description: This function returns the maximum index used for the first dimension of an array.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `maxtab - see category notes and syntax guide.`

### method

- Description: This instruction declares a method in a class. It is used to declare methods that **_do not_** return any value. Methods that **_do_** return a value are declared with the Fmethod instruction.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `method - see category notes and syntax guide.`

### modified

- Description: This attribute returns whether a property of an instance has been modified since the snapshot has been enabled on the instance.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `modified - see category notes and syntax guide.`

### nbind

- Description: nbind returns the number of indexes in an opened table. It is an integer variable present in the [G:abv] class associated with a table opened with the _abv_ abbreviation.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `nbind - see category notes and syntax guide.`

### nbzon

- Description: nbzon returns the number of columns in an opened table. It is an integer variable present in the [G:abv] class associated with a table opened with the _abv_ abbreviation.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `nbzon - see category notes and syntax guide.`

### next-loop

- Description: Use Next in For loops to end the loop.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `next-loop - see category notes and syntax guide.`

### next-read

- Description: Use Next as a read or update option to define the fact that the next record is considered (in the key order).
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `next-read - see category notes and syntax guide.`

### nohint

- Description: Use Nohint in the following clause:
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `nohint - see category notes and syntax guide.`

### Nolign

- Description: nolign is a system variable used on grid input in masks. It gives the current line value (starting at 1). It is also used in class assignment to identify the current line when a grid in a mask class is assigned from or to a table class.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Nolign - see category notes and syntax guide.`

### Nolign1

- Description: nolign1 is a system variable used on grid input in masks. It gives the range end on operation involving a range of lines (nolign is the starting point of the range).
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Nolign1 - see category notes and syntax guide.`

### nomap

- Description: Nomap is a character string type variable array that contains the names of the current folder.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `nomap - see category notes and syntax guide.`

### not

- Description: not corresponds to the unary boolean 'not' operator that can also be abbreviated by !.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `not - see category notes and syntax guide.`

### objectnbs

- Description: This built-in property returns the number of properties of an instance.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `objectnbs - see category notes and syntax guide.`

### objecttype

- Description: This built-in property returns the name of the class or representation of an instance.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `objecttype - see category notes and syntax guide.`

### objectvar

- Description: This keyword gives access to the Nth properties of the class associated with a given instance ('N' given as a parameter). It might be important if a pointer to a class is sent to a program that will explore the properties of the class.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `objectvar - see category notes and syntax guide.`

### openlog

- Description: This function sets the $$PRODUCT engine in log mode. When log mode is activated, a file located in the 'TMP' subfolder of the folder defined by the "ADXDIR" environment variable is opened and filled with log information.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `openlog - see category notes and syntax guide.`

### or

- Description: or performs a logical 'or' between two boolean values.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `or - see category notes and syntax guide.`

### order-by

- Description: Order By is a clause that can be used in conjunction with several language keywords:
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `order-by - see category notes and syntax guide.`

### prev

- Description: Prev is used as a read or update option to define that the previous record is considered in the key order.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `prev - see category notes and syntax guide.`

### putseq

- Description: Putseq writes data on a binary file opened by Openo or Openio.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `putseq - see category notes and syntax guide.`

### reckey

- Description: reckey is a pseudo key present in database table using this key ensures that the sequential reading order will be optimal (it uses the physical order of the database and thus avoids any data sort when the query is sent to the database). It can be used in For loops.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `reckey - see category notes and syntax guide.`

### resume

- Description: Resume allows you to end the execution of an error handling routine and resume the execution at the line that follows the line where the error was thrown.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `resume - see category notes and syntax guide.`

### reverttosnapshot

- Description: This built-in method reverts an instance to its Snapshot state.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `reverttosnapshot - see category notes and syntax guide.`

### revertupdtick

- Description: This built-in method reverts the updtick value of an instance to its snapshot value.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `revertupdtick - see category notes and syntax guide.`

### rewritebykey

- Description: This instruction updates a record at a given key after checking for edit conflicts. It compares the Updtick value of the [F] record with the updtick value of the corresponding database record, and it updates the database record only if the two ticks are equal.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `rewritebykey - see category notes and syntax guide.`

### sadmem

- Description: The sadmem variable defines the memory (in KB) that is allocated in database access processes as buffers.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `sadmem - see category notes and syntax guide.`

### schar

- Description: This keyword declares a character string with character coded on 1 byte (with a size limited to a value that cannot exceed 255 characters). It is strongly recommended to use Char declaration to avoid issues when dealing with texts that can contains Unicode characters.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `schar - see category notes and syntax guide.`

### seek

- Description: Seek allows you to move the read pointer on a file opened by Openi or Openio. When a null value is sent, it also allows you to flush the write operation performed on a file opened by Openo or Openio.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `seek - see category notes and syntax guide.`

### setaccessorenabled

- Description: This built-in property defines whether the set accessors are enabled on an instance.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `setaccessorenabled - see category notes and syntax guide.`

### setbit

- Description: setbit set a bit of an integer to 0 or 1.  The result is an integer.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `setbit - see category notes and syntax guide.`

### setinstancenosys

- Description: This instruction performs an assignment between the properties of a class instance and the content of a file class or a mask class (for example, an [F:xxxx] table buffer or [M:yyyy] mask class), in one direction or the other. It works exactly as setinstance, but it excludes technical properties from the assignment.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `setinstancenosys - see category notes and syntax guide.`

### snapshot

- Description: This built-in method gives access to the Snapshot image of an instance.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `snapshot - see category notes and syntax guide.`

### snapshotenabled

- Description: This property of a class defines whether the snapshot is enabled on the class (if equal to 1) or disabled (if equal to 0).
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `snapshotenabled - see category notes and syntax guide.`

### sql

- Description: Sql allows you to execute a Select statement in the database.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `sql - see category notes and syntax guide.`

### stability

- Description: Stability is a keyword used in a For loop. It is an option dedicated to SQL server that allows the For loop to see only the lines that were in the database when the For loop was started.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `stability - see category notes and syntax guide.`

### stat1

- Description: stat1 is a system variable that contains the number of lines returned by a System instruction.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `stat1 - see category notes and syntax guide.`

### tairec

- Description: tairec returns the size of a record (line) in an opened table. It is an integer variable present in the [G:abv] class associated with a table opened with the _abv_ abbreviation.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `tairec - see category notes and syntax guide.`

### then

- Description: Then is a keyword that can be used between the condition in the If statement and the next statement. It is completely optional: an instruction separator such as the colon or new line is also available.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `then - see category notes and syntax guide.`

### this

- Description: This function gives access to the class instance pointer when executing a method on a class or a property of a class.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `this - see category notes and syntax guide.`

### Titcol

- Description: Titcol allows to assign dynamically titles in the columns of a grid present on a screen.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Titcol - see category notes and syntax guide.`

### tosdata

- Description: This function returns a string value containing an SData where syntax corresponding to a $$PRODUCT valid condition.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `tosdata - see category notes and syntax guide.`

### unescjson

- Description: This function restores a JSON character string to its original state. It removes back slash (\) characters that the  Escjson function would have put in place to enable getting incompatible characters in a JSON constant (", \, tab, or CR).
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `unescjson - see category notes and syntax guide.`

### writeb

- Description: Writeb has the same syntax as Write, but allows you to optimize the performances when several insertions of database lines must be done.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `writeb - see category notes and syntax guide.`

### x3script-keywords-glossary

- Description: **The $$PRODUCT scripting language includes a list of keywords. Not all these keywords are used, but they remain reserved words in the language.**
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `x3script-keywords-glossary - see category notes and syntax guide.`

### xgetchar

- Description: This function extracts the Nth character of a CHAR or CLOB variable. This function runs much faster than the usual functions such as mid$ or seg$ when managing large CLOB data.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `xgetchar - see category notes and syntax guide.`

### xor

- Description: xor performs an exclusive logical 'or' between two boolean values.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `xor - see category notes and syntax guide.`

### Zc

- Description: zc is a system variable used on grid input in masks. It gives access to the current value during controls, initialization, selection and help routines.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Zc - see category notes and syntax guide.`

### Zoncou

- Description: zoncou is a system variable that contains the name of the current field during a control called when an input in a mask is performed.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Zoncou - see category notes and syntax guide.`

### Zonsor

- Description: zonsor is a system variable that contains the name of the last field entered when an input in a mask is performed.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Zonsor - see category notes and syntax guide.`

### Zonsui

- Description: zonsui is a system variable that can be assigned during a control called during an input in a mask in order to change the order of input by reassigning the next field to be inputted.
- Validation: `confirmed-help-only`
- Sources: official-help
- Example: `Zonsui - see category notes and syntax guide.`


## keyword

### AllocGroup

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `AllocGroup ...`

### Append

- Description: Append allows to concatenate a char or CLOB value to a char or CLOB variable.
- Validation: `confirmed`
- Sources: official-help
- Example: `Append ...`

### Archive

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Archive ...`

### As

- Description: This keyword is used in several syntaxes with the following keywords:
- Validation: `confirmed`
- Sources: official-help
- Example: `As ...`

### Box

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Box ...`

### Break

- Description: This instruction is used to exit loops in scripts.
- Validation: `confirmed`
- Sources: official-help
- Example: `Break ...`

### By

- Description: By is a keyword used in different syntaxes such as:
- Validation: `confirmed`
- Sources: official-help
- Example: `By ...`

### Call

- Description: This instruction is used to call a subroutine executed with its own local variables class. No value is returned by this instruction. Parameters can be transmitted as values or as references; so that the parameters transmitted by reference can be modified by the subroutine.
- Validation: `confirmed`
- Sources: official-help
- Example: `Call ...`

### Case

- Description: Snippet-backed pattern: case statement.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Case namecase}   When value}        When Default`

### Commit

- Description: Commit is used to validate a database transaction.
- Validation: `confirmed`
- Sources: official-help
- Example: `Commit ...`

### Const

- Description: Const is a keyword used after a Subprog or a Func declaration to define the type of arguments transmitted to the called code.
- Validation: `confirmed`
- Sources: official-help
- Example: `Const ...`

### Continue

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Continue ...`

### Dbg

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Dbg ...`

### Dbgaff

- Description: Snippet-backed pattern: user debug break.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `If GUSER="DEBUGUSR" : Dbgaff : Endif`

### Default

- Description: When a variable name is given without class or with a [F]class, a default priority order determines the class used for the variable. Default is used to define this search priority:
- Validation: `confirmed`
- Sources: official-help
- Example: `Default ...`

### Delete

- Description: Snippet-backed pattern: Delete - deletes the current record with lock check.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Delete [ABV}] If fstat=[V]CST_ALOCK    Endif`

### Else

- Description: Use this keyword to define an alternative branch in an If statement. For more information, see the If documentation.
- Validation: `confirmed`
- Sources: official-help
- Example: `Else ...`

### Elsif

- Description: Use this keyword to define an alternative condition in an If statement. For more information, see the If documentation.
- Validation: `confirmed`
- Sources: official-help
- Example: `Elsif ...`

### End

- Description: Use End to end execution of a routine or subprogram called by Call, Onerrgo, func, or fmet instruction.
- Validation: `confirmed`
- Sources: official-help
- Example: `End ...`

### Endbox

- Description: Snippet-backed pattern: Endbox - displays a fatal/serious error popup.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Endbox "message}"`

### Endcase

- Description: This keyword is used to end a Case statement. For more information, see the Case documentation.
- Validation: `confirmed`
- Sources: official-help
- Example: `Endcase ...`

### Endif

- Description: This keyword ends an If statement. For more information, see the If documentation.
- Validation: `confirmed`
- Sources: official-help
- Example: `Endif ...`

### Errbox

- Description: Snippet-backed pattern: Errbox - displays an error popup.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Errbox "message}"`

### Exec

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Exec ...`

### Filter

- Description: Snippet-backed pattern: set restriction filter and sort order of a class.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Filter class} Where condition} Order By orderby}`

### For

- Description: For is used to perform loops in two cases: * Read loops on database tables or joins. * Loops on index values or on a list of values.
- Validation: `confirmed`
- Sources: official-help
- Example: `For ...`

### FreeGroup

- Description: This instruction frees the memory of an instance and all the instances sharing the same allocation group.
- Validation: `confirmed`
- Sources: official-help
- Example: `FreeGroup ...`

### From

- Description: Use this keyword in several syntaxes with the following keywords:
- Validation: `confirmed`
- Sources: official-help
- Example: `From ...`

### Funprog

- Description: Snippet-backed pattern: funprog statement.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Funprog name}(args})    End return}`

### Global

- Description: Global variables are variables that have a global visibility and duration scope in a $$PRODUCT process.
- Validation: `confirmed`
- Sources: official-help
- Example: `Global ...`

### Gosub

- Description: Gosub is used to call a subroutine at a given label. This subroutine ends with Return and shares all the local context with the calling script. There is no parameters that can be passed and no data insulation between the script that calls and the subroutine.
- Validation: `confirmed`
- Sources: official-help
- Example: `Gosub ...`

### Help

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Help ...`

### Hint

- Description: Hint is a clause in a For instruction that accesses the database and instructs the database system the best strategy to follow to get the required data.
- Validation: `confirmed`
- Sources: official-help
- Example: `Hint ...`

### If

- Description: Snippet-backed pattern: if statement.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `If condition}   Endif`

### Infbox

- Description: Infbox displays a popup windows with an information message.
- Validation: `confirmed`
- Sources: official-help
- Example: `Infbox ...`

### Info

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Info ...`

### Insert

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Insert ...`

### Join

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Join ...`

### Key

- Description: Key is a keyword used in different syntaxes such as:
- Validation: `confirmed`
- Sources: official-help
- Example: `Key ...`

### Kill

- Description: Kill is an instruction that destroys variables permanently.
- Validation: `confirmed`
- Sources: official-help
- Example: `Kill ...`

### Local

- Description: This keyword is used as a prefix to declare local variables. Local variables have a duration and visibility scope limited to a Call, fmet, and func call.
- Validation: `confirmed`
- Sources: official-help
- Example: `Local ...`

### Lock

- Description: Lock is used to lock either a symbol or a table.
- Validation: `confirmed`
- Sources: official-help
- Example: `Lock ...`

### Look

- Description: Look can be used to check the existence of data in the database for a condition. It behaves exactly as the Read operations and has the same syntax. The only differences are the following: * The variables present in the [F] class are not modified. * Look cannot be used on joins declared with the Link instruction. * Look does not allow you to know if the record is locked. The only solution is to check the user Readlock.
- Validation: `confirmed`
- Sources: official-help
- Example: `Look ...`

### Mask

- Description: Mask is used to declare all the masks that can be used in a routine.
- Validation: `confirmed`
- Sources: official-help
- Example: `Mask ...`

### Menu

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Menu ...`

### Mesbox

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Mesbox ...`

### NewInstance

- Description: This instruction allocates a class or representation instance.
- Validation: `confirmed`
- Sources: official-help
- Example: `NewInstance ...`

### Next

- Description: Use Next in the following two cases: * To end loops. See the Next loop documentation. * As a read or update option. See the Next read documentation.
- Validation: `confirmed`
- Sources: official-help
- Example: `Next ...`

### Onintgo

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Onintgo ...`

### Onkey

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Onkey ...`

### Opened

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Opened ...`

### Order

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Order ...`

### Pickbox

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Pickbox ...`

### Qstbox

- Description: Snippet-backed pattern: Qstbox - yes/no question popup using OUINON from GESECRAN.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Local Integer RESULT} Call OUINON("question}",RESULT}) From GESECRAN If RESULT}=2`

### Raz

- Description: Raz allows you to set variables or variable classes to null values.
- Validation: `confirmed`
- Sources: official-help
- Example: `Raz ...`

### Read

- Description: Use Read to get data from a table or a join through a SQL select instruction based on the value of an index key previously defined or a temporary index.
- Validation: `confirmed`
- Sources: official-help
- Example: `Read ...`

### Repeat

- Description: Snippet-backed pattern: Repeat ... Until - loop until a condition is fulfilled.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Repeat    Until condition}`

### Return

- Description: Return ends a script called by Gosub and resumes the execution to the instruction that follows the Gosub.
- Validation: `confirmed`
- Sources: official-help
- Example: `Return ...`

### Rewrite

- Description: Snippet-backed pattern: Rewrite - rewrites the current record with fstat check.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Rewrite [ABV}] If fstat    Endif`

### Rollback

- Description: Rollback is used to end a database transaction and comes back to the situation before the beginning of the transaction (Trbegin).
- Validation: `confirmed`
- Sources: official-help
- Example: `Rollback ...`

### Selbox

- Description: Snippet-backed pattern: Selbox - displays a selection popup with multiple choices.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Selbox "option1}","option2}" Titled "title}" Using RESULT}`

### Setblb

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Setblb ...`

### Setclb

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Setclb ...`

### Setinstance

- Description: This instruction performs an assignment between the properties of a class instance and the content of a file class or a mask class (for example, an [F:xxxx] table buffer or [M:yyyy] mask class), in one direction or the other.
- Validation: `confirmed`
- Sources: official-help
- Example: `Setinstance ...`

### Setlob

- Description: Setlob allows you to assign a CLOB data with a string variable array and vice versa.
- Validation: `confirmed`
- Sources: official-help
- Example: `Setlob ...`

### Setmode

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Setmode ...`

### Setparam

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Setparam ...`

### Sleep

- Description: Sleep allows you to pause the execution of a script for a given number of seconds.
- Validation: `confirmed`
- Sources: official-help
- Example: `Sleep ...`

### Sorta

- Description: Snippet-backed pattern: Sorta - sorts a list of parallel arrays.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Sorta ARRAY1}(1}..N}) Order By Asc`

### Step

- Description: Step is a keyword used in the For loop syntax to give an increment added to the loop variable on every loop.
- Validation: `confirmed`
- Sources: official-help
- Example: `Step ...`

### Subprog

- Description: Snippet-backed pattern: subprog statement.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Subprog name}(args})    End`

### System

- Description: Snippet-backed pattern: System - executes a system/OS command.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `System "command}"`

### Table

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Table ...`

### Title

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Title ...`

### Titled

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Titled ...`

### To

- Description: To is used in the For syntax to indicate the limit of a loop value. It was also used by syntaxes that are now deprecated.
- Validation: `confirmed`
- Sources: official-help
- Example: `To ...`

### Treebox

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Treebox ...`

### Unlock

- Description: Unlock allows to unlock either a symbol or all the tables previously locked by the development partner.
- Validation: `confirmed`
- Sources: official-help
- Example: `Unlock ...`

### Until

- Description: Until ends a Repeat loop.
- Validation: `confirmed`
- Sources: official-help
- Example: `Until ...`

### Update

- Description: Update allows you to update a list of database lines defined by a Where condition with values transmitted as parameters.
- Validation: `confirmed`
- Sources: official-help
- Example: `Update ...`

### Using

- Description: Using is a keyword used in different syntaxes, especially for the following statements: * Openi, Openo, Iomode, Rdseq, Wrseq, Getseq, and Putseq to indicate an abbreviation when managing a sequential file. * Instance to indicate the class to be used when an instance must be created.
- Validation: `confirmed`
- Sources: official-help
- Example: `Using ...`

### Value

- Description: Value is a keyword used after a Subprog or a Func declaration, to define the type of arguments transmitted to the called code.
- Validation: `confirmed`
- Sources: official-help
- Example: `Value ...`

### Variable

- Description: Variable is a keyword used after a Subprog or a Func declaration, to define the type of arguments transmitted to the called code.
- Validation: `confirmed`
- Sources: official-help
- Example: `Variable ...`

### Wait

- Description: Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `Wait ...`

### Wend

- Description: Wend ends a While loop of instructions.
- Validation: `confirmed`
- Sources: official-help
- Example: `Wend ...`

### When

- Description: When is the keyword that indicates a branch in a Case alternative. The syntax is the following:
- Validation: `confirmed`
- Sources: official-help
- Example: `When ...`

### Where

- Description: Use Where to add a filter:  * In a table declared by File.  * On a join declared by Link.  * On an update triggered by Update or Delete.  * On a read loop executed with For.
- Validation: `confirmed`
- Sources: official-help
- Example: `Where ...`

### While

- Description: Snippet-backed pattern: While ... Wend - loop while a condition is true.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `While condition}    Wend`

### With

- Description: With is a keyword used in several syntaxes: * It separates the element to assign and the expression that gives its value for Assign, Setlob, Setinstance. * It adds some options in For loops based on database cursors (With Lock, WithStability, and so forth). * It gives a waiting time in Lock With lockwait=... syntax. * it separates the main table description from the table in which joins are done in Link ... with... syntax. * it separates the main table description from the column assignments in Update ... with... syntax.
- Validation: `confirmed`
- Sources: official-help
- Example: `With ...`

### Write

- Description: Snippet-backed pattern: Write - inserts a new record with fstat check.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Write [ABV}] If fstat    Endif`

### Wrnbox

- Description: Snippet-backed pattern: Wrnbox - displays a warning popup.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Wrnbox "message}"`


## pattern

### addline

- Description: Snippet-backed pattern: Collection Add Line Event.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `$ADDLINE 	 Return`

### adelete

- Description: Snippet-backed pattern: CRUD Delete Event.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `$ADELETE 	 Return`

### adelline

- Description: Snippet-backed pattern: Collection Delete Line Event.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `$ADELLINE 	 Return`

### AGPOINT

- Description: Snippet-backed pattern: Entry point .
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `GPOINT = Value} : Gosub ENTREE From EXEFNC`

### ainsert

- Description: Snippet-backed pattern: CRUD Insert Event.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `$AINSERT 	 Return`

### aquery

- Description: Snippet-backed pattern: Query Event.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `$AQUERY 	 Return`

### aread

- Description: Snippet-backed pattern: CRUD Read Event.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `$AREAD 	 Return`

### assign

- Description: Snippet-backed pattern: Assign - assigns a value to a variable whose name is evaluated at runtime.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Assign "VARNAME}" With value}`

### aupdate

- Description: Snippet-backed pattern: CRUD Update Event.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `$AUPDATE 	 Return`

### callfrom

- Description: Snippet-backed pattern: Call ... From - calls a subroutine defined in another script.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Call SUBPROG}(args}) From SCRIPT}`

### control

- Description: Snippet-backed pattern: Control Event.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `$CONTROL 	 Return`

### debugjava

- Description: Snippet-backed pattern: user debug break for java debugger.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `If GUSER="DEBUGUSR" : Call SETDEBUGJON From DEBUGGERJ : Dbgaff : Endif`

### debugyesno

- Description: Snippet-backed pattern: ask for debug break.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `If GUSER="DEBUGUSR"   Local integer DEBUGRET   Call OUINON("Debug question} ?",DEBUGRET) From GESECRAN   If DEBUGRET=2`

### entrypoint

- Description: Snippet-backed pattern: Cria um Coment�rio para Entry Point.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `entrypoint - see category notes and syntax guide.`

### forfile

- Description: Snippet-backed pattern: iterate over a table with hint, from, to and where clauses.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `For key} hint} From start} To end} Where restriction}    Next key}`

### forlist

- Description: Snippet-backed pattern: iterate over a list.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `For variable} = list}    Next variable}`

### formatdate

- Description: Snippet-backed pattern: format$ - formats a date value into a string with pattern.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `format$("D:4Y[-]MM[-]DD}",date$})`

### forvar

- Description: Snippet-backed pattern: iterate with a step of 1.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `For i} = start} To end}    Next i}`

### funcfrom

- Description: Snippet-backed pattern: func ... From - calls a function defined in another script and returns a value.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `RESULT}=func FUNCNAME}(args}) From SCRIPT}`

### gosubfrom

- Description: Snippet-backed pattern: Gosub ... From - calls a subroutine label in another script.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Gosub LABEL} From SCRIPT}`

### GUSERP

- Description: Snippet-backed pattern: GUSER PLUS.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `If GUSER="DEBUGUSR"     Infbox "LABEL}" Endif`

### HEADER/DETAIL

- Description: Snippet-backed pattern: Template to create a header/detail management program, using routines from TABLEAUX.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `\$\$ACTION  Case ACTION`

### ifclalev

- Description: Snippet-backed pattern: open local file if not already opened.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `If clalev([F:abrev}])=0 : Local File table} [abrev}] : Endif`

### init

- Description: Snippet-backed pattern: Initialization Event.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `$INIT 	 Return`

### inpbox

- Description: Snippet-backed pattern: Inpbox - displays an input popup (Classic pages).
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Inpbox "message}"`

### inpboxt

- Description: Snippet-backed pattern: Inpbox with Titled clause.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Inpbox "message}" Titled "title}"`

### label

- Description: Snippet-backed pattern: label statement.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `$$Label}    Return`

### linkfor

- Description: Snippet-backed pattern: Link declaration followed by a For loop on the join.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Link [TAB2}] With [TAB1}]KEY}=[TAB2}]PRIMKEY} As [LNK}] For [LNK}]    Next`

### localchar

- Description: Snippet-backed pattern: Local Char - declares a local string variable with size.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Local Char VARNAME}(250})`

### localdate

- Description: Snippet-backed pattern: Local Date - declares a local date variable.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Local Date VARNAME}`

### localdec

- Description: Snippet-backed pattern: Local Decimal - declares a local decimal (BCD) variable.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Local Decimal VARNAME}`

### localfile

- Description: Snippet-backed pattern: Local File - opens a table locally for the current routine.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Local File TABLE} [ABV}]`

### localfilewhere

- Description: Snippet-backed pattern: Local File with Where filter and Order By clause.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Local File TABLE} [ABV}] Where condition} Order By key}`

### localinst

- Description: Snippet-backed pattern: Local Instance - declares a local instance variable with class type.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Local Instance VARNAME} Using CLASSNAME}`

### localint

- Description: Snippet-backed pattern: Local Integer - declares a local integer variable.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Local Integer VARNAME}`

### onerrgom

- Description: Snippet-backed pattern: Onerrgo - error handler with error message capture (errn, errl, errp, errmes$).
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Onerrgo ERR_HANDLER}   $$ERR_HANDLER}`

### openi

- Description: Snippet-backed pattern: Openi - opens a file for reading with Rdseq loop.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Openi filepath},0 Repeat   Rdseq BUFFER}   If fstat=0`

### openio

- Description: Snippet-backed pattern: Openio - opens a file for reading and writing.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Openio filepath}    Openio`

### openiusing

- Description: Snippet-backed pattern: Openi with Using abbreviation - read loop with explicit file handle.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Openi filepath},0 Using [ABV}] Repeat   Rdseq BUFFER} Using [ABV}]   If fstat=0`

### openo

- Description: Snippet-backed pattern: Openo - opens a file for writing with Wrseq.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Openo filepath},0   Wrseq content} Openo`

### PRINTPARAM

- Description: Snippet-backed pattern: REPORT : When used in the IMPRIME subprog, put in a trace file the list of parameters sent to CR.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Local Char PARAM} (50), VALEUR} (50) Local Integer I}  Local Integer PARAM}(250)(50), VALEUR}(250)(50)`

### propagate

- Description: Snippet-backed pattern: Propagate Event.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `$PROPAGATE 	 Return`

### rdseq

- Description: Snippet-backed pattern: Rdseq - reads a line from a sequential file.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Rdseq BUFFER}`

### readequalkey

- Description: Snippet-backed pattern: read equal key statement.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Read [F:class}]index}=values} If fstat=1   lock_statements} Elsif fstat`

### readlock

- Description: Snippet-backed pattern: Readlock - reads a record with an exclusive lock.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Readlock [F:ABV}]KEY}=value} If fstat=0    Elsif fstat`

### SELECTION FROM LIST

- Description: Snippet-backed pattern: Selection from list template.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `\$\$ACTION  Case ACTION`

### SELECTION FROM TABLE

- Description: Snippet-backed pattern: selection from table, without object - STILL NEED TO ADAPT IT TO YOUR NEED THOUGH.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `\$\$ACTION  Case ACTION`

### traceclose

- Description: Snippet-backed pattern: close the current trace.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `If !GSERVEUR : Call FERME_TRACE() From LECFIC : Endif`

### traceopen

- Description: Snippet-backed pattern: open a new trace.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `If !GSERVEUR : Call OUVRE_TRACE(title}) From LECFIC : Endif`

### traceread

- Description: Snippet-backed pattern: read from the current trace.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Call LEC_TRACE from LECFIC`

### tracewrite

- Description: Snippet-backed pattern: write in the current trace.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Call ECR_TRACE (text},0) from GESECRAN`

### trbegina

- Description: Snippet-backed pattern: Trbegin/Commit/Rollback with table abbreviation.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Trbegin [ABV}]    If fstat   Rollback`

### wrnboxt

- Description: Snippet-backed pattern: Wrnbox with Titled clause.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Wrnbox "message}" Titled "title}"`

### wrseq

- Description: Snippet-backed pattern: Wrseq - writes a line to a sequential file.
- Validation: `confirmed`
- Sources: plugin-snippets
- Example: `Wrseq content}`


## runtime-variable

### adxpam

- Description: Runtime variable exposed by the 4GL execution environment.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `adxpam`

### adxpid

- Description: adxpid returns the process **ID** that executes the $$PRODUCT code on the $$PRODUCT server.
- Validation: `confirmed`
- Sources: official-help
- Example: `adxpid`

### adxtcp

- Description: adxtcp returns the IP service number used to connect on the $$PRODUCT process for the server. It returns a numerical value.
- Validation: `confirmed`
- Sources: official-help
- Example: `adxtcp`

### adxtrans

- Description: Runtime variable exposed by the 4GL execution environment.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `adxtrans`

### adxtyp

- Description: Runtime variable exposed by the 4GL execution environment.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `adxtyp`

### bookabr

- Description: Runtime variable exposed by the 4GL execution environment.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `bookabr`

### cop$

- Description: Runtime variable exposed by the 4GL execution environment.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `cop$`

### date$

- Description: This function returns the current date as given from the system in a Date format. This date time is obtained from the process server and is the local time (the timezone of the server).
- Validation: `confirmed`
- Sources: official-help
- Example: `date$`

### datetime$

- Description: This function returns the current datetime in a DateTime variable. This date time is given by default in the Greenwitch time zone and got from the process server.
- Validation: `confirmed`
- Sources: official-help
- Example: `datetime$`

### dir$

- Description: dir$ returns the path of the directory where the $$PRODUCT runtime engine is installed.
- Validation: `confirmed`
- Sources: official-help
- Example: `dir$`

### errl

- Description: errl returns the number of the line in a script where an error occurred. It can be used in the error handling routine set by Onerrgo.
- Validation: `confirmed`
- Sources: official-help
- Example: `errl`

### errm

- Description: errm returns an additional error message detail when an error occurs. It can be used in the error handling routine set by Onerrgo.
- Validation: `confirmed`
- Sources: official-help
- Example: `errm`

### errn

- Description: errn returns a numeric error code when an error occurs. It can be used in the error handling routine set by Onerrgo.
- Validation: `confirmed`
- Sources: official-help
- Example: `errn`

### errnremote

- Description: Runtime variable exposed by the 4GL execution environment.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `errnremote`

### errp

- Description: errp returns the name of the script where an error occurred. It can be used in the error handling routine set by Onerrgo.
- Validation: `confirmed`
- Sources: official-help
- Example: `errp`

### freeheap

- Description: The 'Freeheap' function returns the number of bytes not used in the heap memory of the runtime server process.
- Validation: `confirmed`
- Sources: official-help
- Example: `freeheap`

### freemem

- Description: The 'Freemem' function returns the number of bytes not used in the main memory of the runtime server process.
- Validation: `confirmed`
- Sources: official-help
- Example: `freemem`

### fstat

- Description: fstat is a numeric status that is returned upon execution of a database operation, a sequential file operation, or a lock instruction.
- Validation: `confirmed`
- Sources: official-help
- Example: `fstat`

### GERR

- Description: Observed global error flag used to signal that the current operation failed.
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Pair it with an explanatory message when possible.
- Notes: Corpus signal: commandCount=0, assignmentCount=32460.
- Example: `GERR = 1`

### getuuid

- Description: getUuid generates a new UUID.
- Validation: `confirmed`
- Sources: official-help
- Example: `getuuid`

### GMESSAGE

- Description: Observed global message variable used to surface user-facing error or status text.
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Set it alongside the matching status flag or error path.
- Notes: Corpus signal: commandCount=0, assignmentCount=74477.
- Example: `GMESSAGE = "Validation failed"`

### GOK

- Description: Observed global success flag used to continue or abort the current workflow.
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Change it intentionally because downstream flow often depends on it.
- Notes: Corpus signal: commandCount=0, assignmentCount=61230.
- Example: `GOK = 0`

### GPOINT

- Description: Observed global entry-point variable used to select a framework hook before calling shared execution logic.
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Use stable hook names because execution dispatch depends on them.
- Notes: Corpus signal: commandCount=0, assignmentCount=10136.
- Example: `GPOINT = "AV_FILLBOX" : Gosub ENTREE From EXEFNC`

### indcum

- Description: indcum is a short integer variable used as a default index by the sigma function. It is only relevant when a single sigma loop is used; otherwise, you need to name the variable used as a sigma index.
- Validation: `confirmed`
- Sources: official-help
- Example: `indcum`

### inpmode

- Description: Runtime variable exposed by the 4GL execution environment.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `inpmode`

### maskcou

- Description: Runtime variable exposed by the 4GL execution environment.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `maskcou`

### nbruser

- Description: Runtime variable exposed by the 4GL execution environment.
- Validation: `confirmed`
- Sources: plugin-grammar
- Example: `nbruser`

### null

- Description: This keyword represents the **_null_** instance.
- Validation: `confirmed`
- Sources: official-help
- Example: `null`

### nulluuid

- Description: This keyword represents the **_null_** UUID constant.
- Validation: `confirmed`
- Sources: official-help
- Example: `nulluuid`

### pi

- Description: pi returns an approximated value of the 𝜋 (pi) number.
- Validation: `confirmed`
- Sources: official-help
- Example: `pi`

### status

- Description: <code>status</code> is a system variable that contains the return status of an entry statement.
- Validation: `confirmed`
- Sources: official-help
- Example: `status`

### time

- Description: time returns the local time of the current process server. The value returned is the number of seconds elapsed since midnight.
- Validation: `confirmed`
- Sources: official-help
- Example: `time`

### time$

- Description: This function returns the current time, as given from the system, as a string using the hh:mm:ss format. This time is obtained from the process server and is the local time (in the timezone of the server).
- Validation: `confirmed`
- Sources: official-help
- Example: `time$`

### timestamp$

- Description: timestamp$ returns a string value containing a time stamp, which is the number of milliseconds elapsed since the first of January 1970, at 00:00:00 time GMT.
- Validation: `confirmed`
- Sources: official-help
- Example: `timestamp$`

### trtcou

- Description: trtcou returns the name of the current script.
- Validation: `confirmed`
- Sources: official-help
- Example: `trtcou`

### uuid$

- Description: uuid$ generates a new canconical (string) UUID.
- Validation: `confirmed`
- Sources: official-help
- Example: `uuid$`


## transaction

### Trbegin

- Description: Starts an explicit transaction block that should end with Commit or Rollback after checking fstat.
- Validation: `confirmed`
- Sources: plugin-snippets, v12-corpus
- Invariants: Always pair with explicit error handling. Do not leave transaction outcome implicit.
- Notes: Promoted by snippets and aligned with explicitness requirements.
- Example: `Trbegin [BPC] / Rewrite [BPC] / If fstat : Rollback : Else : Commit : Endif`


## type

### Blbfile

- Description: This keyword declares a binary large object (BLOB) variable.
- Validation: `confirmed`
- Sources: official-help
- Example: `Local Blbfile MY_VALUE`

### char

- Description: This keyword declares a character string with a size limited to a value that cannot exceed 255 characters.
- Signature: `char(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `Local Char MY_VALUE`

### Clbfile

- Description: This keyword declares a character large object (CLOB) variable.
- Validation: `confirmed`
- Sources: official-help
- Example: `Local Clbfile MY_VALUE`

### date

- Description: This keyword declares a date variable where the value is within the range from [1/1/1600] to [31/12/9999], plus a null date [0/0/0].
- Signature: `date(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `Local Date MY_VALUE`

### datetime

- Description: This keyword declares a DateTime variable.
- Signature: `datetime(...)`
- Validation: `confirmed`
- Sources: official-help
- Example: `Local Datetime MY_VALUE`

### Decimal

- Description: This keyword declares a binary coded decimal value with up to 32 digits of precision.
- Validation: `confirmed`
- Sources: official-help
- Example: `Local Decimal MY_VALUE`

### Double

- Description: This keyword declares a double precision floating value with a precision that may depend on the hardware. It is therefore **strongly recommended** not to use this keyword anymore, and to replace it by Decimal variables.
- Validation: `confirmed`
- Sources: official-help
- Example: `Local Double MY_VALUE`

### Float

- Description: This keyword declares a floating value with a precision that may depend on the hardware. It is therefore **strongly recommended** not to use this keyword anymore, and to replace it with Decimal variables.
- Validation: `confirmed`
- Sources: official-help
- Example: `Local Float MY_VALUE`

### Instance

- Description: This keyword declares an instance of a class or a representation. The instance is Null initially. You must allocate it with NewInstance before reading or writing its properties.
- Validation: `confirmed`
- Sources: official-help
- Example: `Local Instance MY_VALUE`

### Integer

- Description: This keyword declares an integer variable where the value is within the range from -2^31 to 2^31-1.
- Validation: `confirmed`
- Sources: official-help
- Example: `Local Integer MY_VALUE`

### Libelle

- Description: This keyword declares an integer variable where the value is within the range from 0 to 255. This declaration is deprecated and should be replaced by Tinyint.
- Validation: `confirmed`
- Sources: official-help
- Example: `Local Libelle MY_VALUE`

### Shortint

- Description: This keyword declares an integer variable where the value is within the range from -32768 to 32767.
- Validation: `confirmed`
- Sources: official-help
- Example: `Local Shortint MY_VALUE`

### Tinyint

- Description: This keyword declares an integer variable where the value is within the range from 0 to 255.
- Validation: `confirmed`
- Sources: official-help
- Example: `Local Tinyint MY_VALUE`

### Uuident

- Description: This keyword declares a UUID variable.
- Validation: `confirmed`
- Sources: official-help
- Example: `Local Uuident MY_VALUE`


## ui-command

### Additm

- Description: Observed UI composition command that adds an item dynamically.
- Signature: `Additm POSITION Titled TEXT To TARGET`
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Keep the target explicit.
- Notes: Corpus signal: commandCount=712, assignmentCount=0.
- Example: `Additm 2047 Titled "My action" To MENU`

### Addmen

- Description: Observed command that adds a menu entry dynamically.
- Signature: `Addmen ID ACTION ...`
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Use stable identifiers. Keep the action traceable.
- Notes: Corpus signal: commandCount=37, assignmentCount=0.
- Example: `Addmen 40000+GPILOBJ ACTION_LABEL`

### Boxact

- Description: Observed box activation command used in interactive screen flows.
- Signature: `Boxact [BOX]`
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Apply it to an explicit box identifier.
- Notes: Corpus signal: commandCount=3066, assignmentCount=0.
- Example: `Boxact [SIM_]`

### Boxinp

- Description: Observed boxed-input command that captures a response through a UI box.
- Signature: `Boxinp [BOX] Using RESPONSE`
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Keep the target response variable explicit.
- Notes: Corpus signal: commandCount=3057, assignmentCount=0.
- Example: `Boxinp [SIM_] Using A_REPONSE`

### Discombo

- Description: Observed UI command that disables one or more combo choices.
- Signature: `Discombo ... From MASK`
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Make the disabled values explicit.
- Notes: Corpus signal: commandCount=567, assignmentCount=0.
- Example: `Discombo 2,3,6 From [M:MASK]`

### Dislbox

- Description: Observed command that disables or closes a list-box interaction path.
- Signature: `Dislbox [BOX] VALUE`
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Use it as part of explicit UI state transitions.
- Notes: Corpus signal: commandCount=129, assignmentCount=0.
- Example: `Dislbox [SDH1] GAU_CHE1`

### Fillbox

- Description: Observed command that populates a list or box widget from a source or keyed selection.
- Signature: `Fillbox [BOX] ...`
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Use explicit source criteria for reproducible behavior.
- Notes: Corpus signal: commandCount=2346, assignmentCount=0.
- Example: `Fillbox [SDH1] GAU_CHE Hint Key =HINTLIS(0)`

### Hlpbox

- Description: Observed helper command that opens or resolves contextual help for a symbol or screen object.
- Signature: `Hlpbox VALUE`
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Keep the help target deterministic.
- Notes: Corpus signal: commandCount=63, assignmentCount=0.
- Example: `Hlpbox GABREV+"_"+IDENT`

### Onevent

- Description: Observed UI event-binding construct that routes screen events to handlers.
- Signature: `Onevent EVENT handler`
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Keep the event name explicit. Route to a stable label or routine.
- Notes: Corpus signal: commandCount=42261, assignmentCount=0.
- Example: `Onevent CONTROL Call MY_CONTROL From MYSCRIPT`

### Report

- Description: Observed reporting command used to launch a report with parameters and capture a return value.
- Signature: `Report RETOUR=SERVER With PARAMS`
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Keep the target and parameter set explicit.
- Notes: Corpus signal: commandCount=34, assignmentCount=0.
- Example: `Report RETOUR=SERVEUR+"@" With PARAMETRE(1..NBPAR)`

### Saizo

- Description: Observed screen-layout command that resizes or adjusts a mask area or field zone.
- Signature: `Saizo [MASK]INDEX With VALUE`
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Use it carefully because it changes layout behavior.
- Notes: Corpus signal: commandCount=1452, assignmentCount=0.
- Example: `Saizo [M:BPC0]5 With [M:A_W0]`

### Setlbox

- Description: Observed command that sets the active list box or list-box selection context.
- Signature: `Setlbox [BOX] VALUE`
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Keep the target list box explicit.
- Notes: Corpus signal: commandCount=953, assignmentCount=0.
- Example: `Setlbox [SDH1] GAU_CHE`

### Setmok

- Description: Observed mask-state command used to change editability or interaction state.
- Signature: `Setmok [MASK] With VALUE`
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Use explicit mode values. Apply it to the intended mask scope.
- Notes: Corpus signal: commandCount=626, assignmentCount=0.
- Example: `Setmok [M:ITM1] With 0`

### Transmask

- Description: Observed command that transfers values between mask contexts.
- Signature: `Transmask [SOURCE] To [TARGET]`
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Keep source and target masks explicit.
- Notes: Corpus signal: commandCount=334, assignmentCount=0.
- Example: `Transmask [M:ITF0] To [M:ITF1]`


## ui-runtime-state

### mkstat

- Description: Observed runtime mask status variable assigned during validation or interaction flow.
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Set it deliberately because it changes UI behavior.
- Notes: Corpus signal: commandCount=0, assignmentCount=99176.
- Example: `mkstat = 2`

### pcolor

- Description: Observed runtime color state variable used in UI rendering or highlighting.
- Validation: `observed`
- Sources: v12-corpus
- Invariants: Treat it as presentation state, not domain data.
- Notes: Corpus signal: commandCount=0, assignmentCount=1707.
- Example: `pcolor = GCOUL(0)`




