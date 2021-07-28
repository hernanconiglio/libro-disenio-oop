"use strict";(self.webpackChunklibro_disenio_oop=self.webpackChunklibro_disenio_oop||[]).push([[889],{8637:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var o=a(2122),l=a(9756),i=(a(7294),a(3905)),t=["components"],r={sidebar_position:1},s="De Wollok a Kotlin",c={unversionedId:"kotlin/wollok-a-kotlin",id:"kotlin/wollok-a-kotlin",isDocsHomePage:!1,title:"De Wollok a Kotlin",description:"C\xf3mo se menciona en el titulo, esta gu\xeda busca dar un primer acercamiento hacia el lenguaje Kotlin, compar\xe1ndolo con Wollok, lenguaje que probablemente recuerden de Objetos 1.",source:"@site/docs/kotlin/wollok-a-kotlin.md",sourceDirName:"kotlin",slug:"/kotlin/wollok-a-kotlin",permalink:"/libro-disenio-oop/docs/kotlin/wollok-a-kotlin",editUrl:"https://github.com/surprograma/libro-disenio-oop/edit/main/docs/kotlin/wollok-a-kotlin.md",version:"current",lastUpdatedBy:"Federico Aloi",lastUpdatedAt:1627504991,formattedLastUpdatedAt:"7/28/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\xbfC\xf3mo elaborar casos de prueba?",permalink:"/libro-disenio-oop/docs/pruebas-automatizadas/elaborar-casos-prueba"},next:{title:"Matchers de Kotest",permalink:"/libro-disenio-oop/docs/kotlin/matchers-kotest"}},m=[{value:"Definici\xf3n de clases",id:"definici\xf3n-de-clases",children:[]},{value:"Instanciaci\xf3n de objetos",id:"instanciaci\xf3n-de-objetos",children:[]},{value:"Objetos autodefinidos",id:"objetos-autodefinidos",children:[]},{value:"Interfaces",id:"interfaces",children:[]},{value:"Colecciones",id:"colecciones",children:[{value:"Dos sabores: mutables o inmutables",id:"dos-sabores-mutables-o-inmutables",children:[]},{value:"Closures o lambdas",id:"closures-o-lambdas",children:[]},{value:"Operaciones comunes sobre colecciones",id:"operaciones-comunes-sobre-colecciones",children:[]}]},{value:"Manejo de errores",id:"manejo-de-errores",children:[]}],u={toc:m};function d(e){var n=e.components,a=(0,l.Z)(e,t);return(0,i.kt)("wrapper",(0,o.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"de-wollok-a-kotlin"},"De Wollok a Kotlin"),(0,i.kt)("p",null,"C\xf3mo se menciona en el titulo, esta gu\xeda busca dar un primer acercamiento hacia el lenguaje Kotlin, compar\xe1ndolo con Wollok, lenguaje que probablemente recuerden de Objetos 1."),(0,i.kt)("h2",{id:"definici\xf3n-de-clases"},"Definici\xf3n de clases"),(0,i.kt)("p",null,"La primera gran diferencia es que Kotlin es un lenguaje con ",(0,i.kt)("em",{parentName:"p"},"tipado est\xe1tico")," mientras que Wollok ten\xeda ",(0,i.kt)("em",{parentName:"p"},"tipado din\xe1mico"),". Esto implica que la responsabilidad de escribir los tipos pasa a ser de quien programa."),(0,i.kt)("p",null,"Afortunadamente Kotlin ",(0,i.kt)("em",{parentName:"p"},"infiere")," la mayor\xeda de los tipos, siendo necesario escribirlos en pocos casos:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"par\xe1metros"),", tanto de los m\xe9todos como del constructor de una clase;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"atributos")," cuyo valor no se inicialize al definirlo.")),(0,i.kt)("p",null,"Veamos un ejemplo de definiciones equivalentes en ",(0,i.kt)("inlineCode",{parentName:"p"},"Wollok")," y ",(0,i.kt)("inlineCode",{parentName:"p"},"Kotlin"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wollok"},"/* Wollok */\nclass Ave {\n  var property energia\n  const property direccion\n\n  const amiguis = []\n\n  method esPopular() = amiguis.size() >= 5\n\n  method conoceA(otroAve) = amiguis.contains(otroAve)\n\n  method volar() {\n    energia -= 1\n  }\n\n  method visitarA(otroAve) {\n    if (self.conoceA(otroAve)) {\n      self.volar()\n    }\n  }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"/* Kotlin */\nclass Ave(var energia: Int, val direccion: String) {\n  val amiguis = mutableListOf<Ave>()\n\n  fun esPopular() = amiguis.size >= 5\n\n  fun conoceA(otroAve: Ave) = amiguis.contains(otroAve)\n\n  fun volar() {\n    energia -= 1\n  }\n\n  fun visitarA(otroAve: Ave) {\n    if (this.conoceA(otroAve)) {\n      this.volar()\n    }\n  }\n}\n")),(0,i.kt)("p",null,"Algunas diferencias:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"lo que en Wollok era ",(0,i.kt)("inlineCode",{parentName:"li"},"const"),", en Kotlin es ",(0,i.kt)("inlineCode",{parentName:"li"},"val"),". En ambos ",(0,i.kt)("inlineCode",{parentName:"li"},"var")," significa lo mismo,"),(0,i.kt)("li",{parentName:"ul"},"el ",(0,i.kt)("inlineCode",{parentName:"li"},"method")," de Wollok es ",(0,i.kt)("inlineCode",{parentName:"li"},"fun")," en Kotlin, y el ",(0,i.kt)("inlineCode",{parentName:"li"},"self")," es ",(0,i.kt)("inlineCode",{parentName:"li"},"this"),","),(0,i.kt)("li",{parentName:"ul"},"en Kotlin, los atributos se escriben como si fueran par\xe1metros de la clase.")),(0,i.kt)("h2",{id:"instanciaci\xf3n-de-objetos"},"Instanciaci\xf3n de objetos"),(0,i.kt)("p",null,"Continuando con el ejemplo anterior, as\xed se crean objetos en uno y otro lenguaje:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wollok"},'/* Wollok */\nconst pepita = new Ave(energia = 5, direccion = "Wallaby 42, Sidney")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'/* Kotlin */\nval pepita = Ave(energia = 5, direccion = "Wallaby 42, Sidney")\n\n// Tambi\xe9n vale no poner los nombres de los atributos,\n// en ese caso lo que importa es el orden.\nval pepita = Ave(5, "Wallaby 42, Sidney")\n')),(0,i.kt)("p",null,"Algunas diferencias:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"en Kotlin, no se escribe el ",(0,i.kt)("inlineCode",{parentName:"li"},"new"),";"),(0,i.kt)("li",{parentName:"ul"},"en Kotlin, no es necesario poner los nombres de los atributos.")),(0,i.kt)("h2",{id:"objetos-autodefinidos"},"Objetos autodefinidos"),(0,i.kt)("p",null,"Para objetos \xfanicos que tienen que ser conocidos por toda la aplicaci\xf3n, podemos crear ",(0,i.kt)("em",{parentName:"p"},"objetos autodefinidos"),". Es decir, objetos que simplemente existen y no hace falta instanciarlos. En nuestro ejemplo, podemos usarlos para definir los tipos de alimentos."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"object Alpiste {\n  val energia = 1\n}\n\nobject Girasol {\n  val energia = 4\n}\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Esto es casi igual que en Wollok, solo que ac\xe1 escribimos los nombres con May\xfasculas."))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("p",null,"Como Kotlin utiliza tipado est\xe1tico, si queremos tratar ",(0,i.kt)("em",{parentName:"p"},"polim\xf3rficamente")," los dos objetos de arriba, necesitamos que tengan un tipo en com\xfan. Para esto podemos crear una interfaz, que describe un ",(0,i.kt)("em",{parentName:"p"},"contrato")," a cumplir:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface Alimento {\n  val energia: Int\n}\n\nobject Alpiste : Alimento {\n  override val energia = 1\n}\n\nobject Girasol : Alimento {\n  override val energia = 4\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"El ",(0,i.kt)("inlineCode",{parentName:"li"},":")," en este caso indica que nuestros objetos ",(0,i.kt)("em",{parentName:"li"},"implementan")," la interfaz ",(0,i.kt)("inlineCode",{parentName:"li"},"Alimento"),"."),(0,i.kt)("li",{parentName:"ul"},"El ",(0,i.kt)("inlineCode",{parentName:"li"},"override")," nos lo obliga a poner el IDE para aclarar que estamos hablando de una propiedad definida ",(0,i.kt)("em",{parentName:"li"},"m\xe1s arriba"),".")),(0,i.kt)("p",null,"Luego, en ",(0,i.kt)("inlineCode",{parentName:"p"},"Ave")," ya podemos definir:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun alimentar(alimento: Alimento) {\n  energia += alimento.energia\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"Ave")," admite cualquier objeto que implemente la interfaz ",(0,i.kt)("inlineCode",{parentName:"p"},"Alimento"))),(0,i.kt)("h2",{id:"colecciones"},"Colecciones"),(0,i.kt)("h3",{id:"dos-sabores-mutables-o-inmutables"},"Dos sabores: mutables o inmutables"),(0,i.kt)("p",null,'En Kotlin, todas las colecciones vienen en dos "sabores": mutables e inmutables. Las primeras soportan modificar sus elementos (agregar, quitar, actualizar), mientras que las segundas solo permiten acceder a sus elementos. Queda a criterio de quien programa cu\xe1l utilizar en cada caso, prefiriendo desde este espacio las inmutables (porque algo que no se puede modificar es menos propenso a errores).'),(0,i.kt)("p",null,"Veamos entonces c\xf3mo crear unas y otras:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"/* Kotlin */\nlistOf(1, 2, 3)\nmutableListOf(1, 2, 3)\n\nsetOf(pepita, anastasia)\nmutableSetOf(pepita, anastasia)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ojo \ud83d\udc40"),": no hay que mezclar las ideas de ",(0,i.kt)("inlineCode",{parentName:"p"},"val")," y ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," con la (in)mutabilidad de las colecciones. Por ejemplo, una colecci\xf3n inmutable podr\xeda estar referenciada con ",(0,i.kt)("inlineCode",{parentName:"p"},"var"),", mientras que una mutable podr\xeda ser ",(0,i.kt)("inlineCode",{parentName:"p"},"val"),"."),(0,i.kt)("h3",{id:"closures-o-lambdas"},"Closures o lambdas"),(0,i.kt)("p",null,"Hay una peque\xf1a diferencia en c\xf3mo se escriben los ",(0,i.kt)("em",{parentName:"p"},"closures")," que utilizamos para las operaciones de orden superior:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wollok"},"/* Wollok */\navesAmigas.any { aveAmiga => aveAmiga.esPopular() }\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"/* Kotlin */\navesAmigas.any { aveAmiga -> aveAmiga.esPopular() }\n")),(0,i.kt)("p",null,"\xbfTe diste cuenta? En vez de usar ",(0,i.kt)("inlineCode",{parentName:"p"},"=>")," en Kotlin se usa ",(0,i.kt)("inlineCode",{parentName:"p"},"->")," para definir una ",(0,i.kt)("em",{parentName:"p"},"lambda")," o ",(0,i.kt)("em",{parentName:"p"},"closure"),"."),(0,i.kt)("p",null,'Hay tambi\xe9n otra sintaxis m\xe1s "cheta" que tiene Kotlin, que nos ahorra de inventarle un nombre al par\xe1metro:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"avesAmigas.any { it.volarHastaLoDePepita() }\n")),(0,i.kt)("p",null,"Cualquiera de las dos formas es v\xe1lida."),(0,i.kt)("h3",{id:"operaciones-comunes-sobre-colecciones"},"Operaciones comunes sobre colecciones"),(0,i.kt)("p",null,"Un muy peque\xf1o resumen de las operaciones m\xe1s comunes. Una lista extens\xedsima de todos los m\xe9todos que existen se pueden ver en ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-collection/"},"la documentaci\xf3n oficial de ",(0,i.kt)("inlineCode",{parentName:"a"},"Collection")),"."),(0,i.kt)("h4",{id:"b\xe1sicas"},"B\xe1sicas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size")," devuelve el tama\xf1o de la colecci\xf3n. Ojo que es un atributo y no un m\xe9todo, por eso va sin parentesis."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isEmpty()")," pregunta si la colecci\xf3n est\xe1 vac\xeda."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"last()")," devuelve el \xfaltimo elemento."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"first()")," devuelve el primer elemento."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contains(elemento)")," verifica si la colecci\xf3n contiene a un cierto elemento.")),(0,i.kt)("h4",{id:"orden-superior"},"Orden superior"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"any { condici\xf3n }")," pregunta si alg\xfan elemento de la colecci\xf3n cumple una condici\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"all { condici\xf3n }")," pregunta si todos los elementos de la colecci\xf3n cumplen una condici\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"find { condici\xf3n }")," devuelve el primer elemento que cumpla con la condici\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sumBy { transformaci\xf3n }")," devuelve la suma de los elementos, aplicando la ",(0,i.kt)("inlineCode",{parentName:"li"},"transformaci\xf3n")," sobre cada uno de ellos. Ejemplo: ",(0,i.kt)("inlineCode",{parentName:"li"},"aves.sumBy { it.energia }"),". La ",(0,i.kt)("inlineCode",{parentName:"li"},"transformaci\xf3n")," recibe un elemento y debe devolver un n\xfamero."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"minBy { transformaci\xf3n }")," devuelve el elemento que resulta menor al aplicar la ",(0,i.kt)("inlineCode",{parentName:"li"},"transformaci\xf3n"),". Notar que devuelve el elemento original y ",(0,i.kt)("strong",{parentName:"li"},"no")," el resultado de la transformaci\xf3n.")),(0,i.kt)("p",null,"Est\xe1n tambi\xe9n los cl\xe1sicos ",(0,i.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"filter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"reduce")," y much\xedsimos m\xe9todos m\xe1s."),(0,i.kt)("h4",{id:"exclusivos-para-colecciones-de-n\xfameros"},"Exclusivos para colecciones de n\xfameros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max()")," devuelve el valor m\xe1ximo."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min()")," devuelve el valor m\xednimo."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sum()")," devuelve la suma de los elementos.")),(0,i.kt)("h4",{id:"exclusivos-para-colecciones-mutables"},"Exclusivos para colecciones mutables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clear()")," borra todos los elementos de la colecci\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add(elemento)")," agrega el elemento a la colecci\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remove(elemento)")," borra el elemento de la colecci\xf3n.")),(0,i.kt)("h4",{id:"exclusivos-para-listas"},"Exclusivos para listas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"toSet()")," devuelve un conjunto con los elementos ",(0,i.kt)("em",{parentName:"li"},"\xfanicos")," de la lista. O dicho de otra manera: los elementos que ten\xeda la lista, omitiendo repetidos.")),(0,i.kt)("h4",{id:"exclusivos-para-conjuntos"},"Exclusivos para conjuntos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"toList()")," devuelve una lista con los mismos elementos que tenga el conjunto.")),(0,i.kt)("h2",{id:"manejo-de-errores"},"Manejo de errores"),(0,i.kt)("p",null,"Para lanzar un error que corte la ejecuci\xf3n, en Wollok podemos hacer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wollok"},'method volar() {\n  if (energia < 0) {\n    self.error("No queda suficiente energ\xeda para volar")\n  }\n\n  energia -= 1\n}\n')),(0,i.kt)("p",null,"En Kotlin, en vez de ser un m\xe9todo, hay una funci\xf3n global llamada ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),". El ejemplo se traduce a:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun volar() {\n  if (energia < 0) {\n    error("No queda suficiente energ\xeda para volar")\n  }\n\n  energia -= 1\n}\n')),(0,i.kt)("p",null,"Otra forma de lanzar errores es usando ",(0,i.kt)("inlineCode",{parentName:"p"},"check"),", que ",(0,i.kt)("em",{parentName:"p"},"chequea")," que una condici\xf3n se cumpla, y ",(0,i.kt)("strong",{parentName:"p"},"de lo contrario")," arroja un error con el mensaje especificado:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun volar() {\n  check (energia >= 0) {\n    "No queda suficiente energ\xeda para volar"\n  }\n\n  energia -= 1\n}\n')),(0,i.kt)("p",null,"Queda al gusto de ustedes decidir cu\xe1l de las dos variantes utilizar. \ud83d\ude03"))}d.isMDXComponent=!0}}]);