# Dokumentation for Svendeprøven - Trainer
Ahu Karahan Kristiansen, WU11

## Indholdsfortegnelse
  - [Tech-Stack](#tech-stack)
  - [Skalering](#skalering)
  - [Kode Eksempel](#kode-eksempel)

## Tech-Stack

* **Next JS**  
Jeg har valgt Next som mit Front-End Framework, da det ligger frisk i min hukommelse og hjælpemidlerne er let tilgængelige, da Next er et populært valg af Framework og veldokumenteret. Derudover foretrækker jeg routing systemet og derved mappestruktureringen i Next. Der er også server-side rendering (SSR) og client-side rendering (CSR) som optimerer renderingen af web-applikationen. Derfor har jeg valgt Next fremfor base <ins>React</ins>, da Next er baseret på React library/biblioteket, men med komplimenterende funktionalitet. <ins>Vue</ins> er også et simpelt og fleksibelt valg af Framework, men efterspørgslen er ikke lige så stor som React og Next. Overstående grunde og min præference af Next, gjorde det til mit endelige valg.  

* **SCSS**
Min web app er stylet med SCSS, da jeg foretrækker fuld kontrol over min styling, fremfor at bruge et Framework som <ins>Tailwind</ins>. Trods muligheden for at hurtigøre styling processen, er mit workflow mere effektivt ved brug af SCSS, da jeg ikke behøver at overwrite default styling fra et Framework. Det er også mere overskueligt for mig at have alt stylingen i separate filer, fremfor (potentielt) lange klasse navne. Derudover tilbyder SCSS yderligere funktionalitet end almindelig <ins>CSS</ins> med mixins, og nesting kræver færre tegn i SCSS end I CSS.

* **React-Icons**
Et ikon bibliotek, som jeg har anvendt til ikonerne på min side. Jeg valgte React-Icons, da jeg var sikker på at kunne finde et ikon som matcher ikonerne i projektet, grundet bibliotekets størrelse. Jeg kunne også gemme ikonerne lokalt, men ændringer af ikonerne er lettere med et kæmpe bibliotek til rådighed fremfor at gemme og ændre navnet og stien manuelt. Det gør det også lettere med skalering, hvis siden får brug for flere ikoner. <ins>Font-awesome</ins> er også et populært valg, men jeg foretrækker React-Icons, da jeg simpelt finder hjemmesiden og dokumentationen mere overskuelig.

* **Zod**
Jeg har anvendt Zod - et validerings bibliotek, for at validerer min form, da denne valideringsmulighed har taget højde for den lange kode en tilsvarende <ins>REGEX</ins> ville have, for samme niveau af validering.

## Skalering
Strukturen af min kode er sat op til let skalering i fremtiden. Både i forhold til udvidelsen af web-appen, men også for udvidelse til et potentielt hold af developers. 

Mappestrukturen har en klar navngivning, med eventuelle undermapper til yderligere organisering. Fx components til genanvendelige komponenter grupperet med dets tilhørende styling. Globale styles er i mappen styles. Man er ikke i tvivl om hvor en ny action skal implementere, da der er en mappe kaldet action. En ny developer ville derfor hurtigt kunne navigerer rundt i projektet.

Mine sider/pages er også grupperet i route groups, så layouetet kan anvendes på alle eksisterende- og nye sider, der er ment for det design/layout, hvilket gør det lettere at udvide siden, med flere undersider. 

Derfor er det både let at skalerer med yderligere funktionalitet og implementeringen af flere.

## Kode Eksempel

[Login Form](/src/components/Forms/LoginForm/index.jsx)

```jsx
'use client'

import { useActionState, useEffect } from "react"
import PrimaryButton from "../../Buttons/PrimaryButton"
import LoginAction from "@/actions/login"

import "@/components/Forms/form-style.scss"

export default function LoginForm(){

    const [formState, formAction, isPending] = useActionState(LoginAction, null)

    // useEffect(function() {
    //     console.log("formstate", formState)
    // }, [formState])

    return(
        <form action={formAction} className="form" noValidate>

            <input 
                defaultValue={formState?.formData?.username}
                type="text" 
                name="username" 
                placeholder="username"
            />
            <span className="form-error">{formState?.errors?.username?._errors[0]}</span>

            <input 
                defaultValue={formState?.formData?.password} 
                type="password" 
                name="password" 
                placeholder="password" 
            />
            <span className="form-error">{formState?.errors?.password?._errors[0]}</span>
            
            <span className="form-error">{formState?.error}</span>

            <PrimaryButton 
                text={isPending ? "Logging in" : "Log in"} 
                disable={isPending}
            />
        </form>
    )
}
```

Dette component er min login form, som er client-side renderet, da componentet har hooks brugeren interagerer med.

Jeg importerer to React hooks - useActionState og useEffect, min LoginAction samt stylingen til formen.

Først definerer jeg mit LoginForm Component.
Derefter anvender jeg useActionState hooket, som kræver:
- formState - som indeholder formens state inklusiv data og errors.
- formAction - bliver kaldt når formen er submittet.
- isPending - en boolean, der indikerer hvorvidt form submission venter på respons fra serveren.

Min Effect Hook, logger min formState til konsollen når den ændres, for lettere at debugge.
(Udkommenteret da dette ikke vil være tilstede i produktion.)

Min Form sætter formens aktion til at være formAction funktionen, så når formen er submittet vil functionen blive kaldet.

noValidate er for at forhindre browseren for at bruge sin egen formvalidering (da jeg bruger Zod for validering).

Jeg implementerer derefter mine inputs for username og password, fælles for disse er at 
- jeg starter med at definerer defaultValue / inital value for input feltet.
- ?. operatoren (optional chaining) giver adgang til nested properties uden at give en error hvis en del af min chain er null eller undefined.
Det resterende er type og navn attributten af inputtet (for at identificerer inputtet i formdataen) og placeholder som i dette tilfælde er "username" og i det andet input felt "password".

En error message dukker op hvis felterne er efterladt tomme, og informerer brugeren om at man skal udfylde et brugernavn og adgangskode.

Den sidste error message bliver vist hvis man skriver sit brugernavn eller adgangskode forkert, hvilket skal personen af sikkerhedsmæssige grunde ikke skal vide hvilken der var forkert, så det er en general error message: "Wrong username or password" (Dette foregår i [actions/login.js](/src/actions/login.js))

Min submit button er en component som tager 2 props, text - hvor der står "Log ind", medmindre formen er igang med at blive submittet, så ændres den til "Logger ind". 
Derudover bliver den disabled hvis isPending er true, dette forhindre flere submissions til serveren og derved forhindre flere login forsøg. 