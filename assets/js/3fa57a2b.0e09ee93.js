"use strict";(self.webpackChunklibro_disenio_oop=self.webpackChunklibro_disenio_oop||[]).push([[772],{6633:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(2122),s=n(9756),t=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},i="\xbfC\xf3mo elaborar casos de prueba?",u={unversionedId:"pruebas-automatizadas/elaborar-casos-prueba",id:"pruebas-automatizadas/elaborar-casos-prueba",isDocsHomePage:!1,title:"\xbfC\xf3mo elaborar casos de prueba?",description:"Este art\xedculo presenta algunas gu\xedas para desarrollar los casos de prueba, considerando que ya tienen una base de testeo unitario automatizado.",source:"@site/docs/pruebas-automatizadas/elaborar-casos-prueba.md",sourceDirName:"pruebas-automatizadas",slug:"/pruebas-automatizadas/elaborar-casos-prueba",permalink:"/libro-disenio-oop/docs/pruebas-automatizadas/elaborar-casos-prueba",editUrl:"https://github.com/surprograma/libro-disenio-oop/edit/main/docs/pruebas-automatizadas/elaborar-casos-prueba.md",version:"current",lastUpdatedBy:"Federico Aloi",lastUpdatedAt:1627504991,formattedLastUpdatedAt:"7/28/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/libro-disenio-oop/docs/intro"},next:{title:"De Wollok a Kotlin",permalink:"/libro-disenio-oop/docs/kotlin/wollok-a-kotlin"}},d=[{value:"\xbfCu\xe1l ser\xeda el problema con un nombre as\xed?",id:"\xbfcu\xe1l-ser\xeda-el-problema-con-un-nombre-as\xed",children:[]},{value:"\xbfC\xf3mo agrupar los escenarios?",id:"\xbfc\xf3mo-agrupar-los-escenarios",children:[]},{value:"AAA Pattern",id:"aaa-pattern",children:[]},{value:"One assert per test",id:"one-assert-per-test",children:[]},{value:"Res\xfamen",id:"res\xfamen",children:[]},{value:"Cr\xe9ditos",id:"cr\xe9ditos",children:[]}],c={toc:d};function p(e){var a=e.components,l=(0,s.Z)(e,o);return(0,t.kt)("wrapper",(0,r.Z)({},c,l,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"\xbfc\xf3mo-elaborar-casos-de-prueba"},"\xbfC\xf3mo elaborar casos de prueba?"),(0,t.kt)("p",null,"Este art\xedculo presenta algunas gu\xedas para desarrollar los casos de prueba, considerando que ya tienen una base de testeo unitario automatizado."),(0,t.kt)("h1",{id:"ejemplo"},"Ejemplo"),(0,t.kt)("p",null,"Una ferreter\xeda tiene en cuenta ciertos aspectos para decidir si le puede fiar a un cliente o no."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Al cliente particular le fia s\xf3lo si no adeuda nada, es decir debe $0."),(0,t.kt)("li",{parentName:"ul"},"A las constructoras les fia dependiendo de cu\xe1ntos alba\xf1iles trabajen en la obra, si son 5 o m\xe1s alba\xf1iles le f\xeda hasta 10.000, de lo contrario s\xf3lo hasta 5.000.")),(0,t.kt)("h1",{id:"definiendo-los-escenarios"},"Definiendo los escenarios"),(0,t.kt)("p",null,"En base al ejemplo anterior, podemos considerar los siguientes escenarios:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Para un cliente particular: Si debe $1 \xf3 $50.000 no nos importa, porque est\xe1 en la misma clase de equivalencia (La deuda es mayor a 0)."),(0,t.kt)("li",{parentName:"ul"},"Para una empresa constructora:",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Si tiene ",(0,t.kt)("strong",{parentName:"li"},"menos")," de 5 alba\xf1iles, son ",(0,t.kt)("inlineCode",{parentName:"li"},'"pocos\u201d')," alba\xf1iles."),(0,t.kt)("li",{parentName:"ul"},"Si tiene ",(0,t.kt)("strong",{parentName:"li"},"al menos")," 5 alba\xf1iles, son ",(0,t.kt)("inlineCode",{parentName:"li"},"\u201cmuchos\u201d")," alba\xf1iles.")))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Elegimos la cantidad de obreros en base al valor l\xedmite:"),"\nPensar que si a partir de los 5 alba\xf1iles se considera mucho y 4 o menos son \u201cpocos\u201d, 5 o m\xe1s es el valor de una obra con muchos alba\xf1iles y 4 o menos el de una obra con pocos alba\xf1iles"),(0,t.kt)("h1",{id:"estructura-de-los-tests"},"Estructura de los tests"),(0,t.kt)("p",null,"La estructura que tienen los tests en base a los escenarios propuestos podr\xeda ser:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Dado un cliente particular:",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Que debe algo:")," No se le puede fiar."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Que no debe nada:")," Se le puede fiar."))),(0,t.kt)("li",{parentName:"ul"},"Dado una constructora con muchos alba\xf1iles (5):",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Si la obra debe m\xe1s de $ 10.000:")," No se le puede fiar."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Si la obra debe menos de $ 10.000:")," Se le puede fiar."))),(0,t.kt)("li",{parentName:"ul"},"Dado una constructora con pocos alba\xf1iles (4):",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Si la obra debe m\xe1s de $ 5.000:")," No se le puede fiar."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Si la obra debe menos de $ 5.000:")," Se le puede fiar.")))),(0,t.kt)("h1",{id:"definiendo-las-clases-y-las-variables-de-los-tests"},"Definiendo las clases y las variables de los tests"),(0,t.kt)("p",null,"Necesitamos:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Un cliente particular."),(0,t.kt)("li",{parentName:"ul"},"Una empresa constructora con 6 alba\xf1iles."),(0,t.kt)("li",{parentName:"ul"},"Otra empresa constructora con 5 alba\xf1iles.")),(0,t.kt)("p",null,"A los que podemos configurar diferentes grados de deuda."),(0,t.kt)("h1",{id:"expresividad-en-los-tests"},"Expresividad en los tests"),(0,t.kt)("p",null,"En la materia es muy com\xfan encontrarse con enunciados c\xf3mo el siguiente:"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"La Constructora Hurlingham tiene 5 alba\xf1iles y una deuda de 7000 pesos.\nPor lo que ser\xeda muy tentador hacer un test c\xf3mo el siguiente:")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin"},'class FerreteriaTest : DescribeSpec({\n  val ferreteria = Ferreteria()\n\n  describe("Puede fiar") {\n    val constructoraHurlingham = EmpresaConstructora(albaniles= 5, deuda = 7000)\n\n    it("ConstructoraHurlingham") {\n        ferreteria.puedeFiarA(constructoraHurlingham).shouldBeTrue()\n    }\n  }\n})\n')),(0,t.kt)("h3",{id:"\xbfcu\xe1l-ser\xeda-el-problema-con-un-nombre-as\xed"},"\xbfCu\xe1l ser\xeda el problema con un nombre as\xed?"),(0,t.kt)("p",null,"Un test as\xed tendr\xeda que pasar, pero supongamos que hay un error en el c\xf3digo que establece cuando se le puede fiar a una empresa dependiendo de si es chica o no."),(0,t.kt)("blockquote",null,(0,t.kt)("ul",{parentName:"blockquote"},(0,t.kt)("li",{parentName:"ul"},"Si tiene ",(0,t.kt)("strong",{parentName:"li"},"al menos")," 5 alba\xf1iles, son ",(0,t.kt)("inlineCode",{parentName:"li"},"\u201cmuchos\u201d")," alba\xf1iles."))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin"},"class EmpresaConstructora(var albaniles: Int, deuda: Int): Cliente(deuda) {\n    fun limiteDeEmpresa() = if(albaniles > 5) 10000 else 5000 //Cambiamos la condici\xf3n del if para que un caso que deber\xeda funcionar falle\n    override fun lePuedenFiar() = deuda <= this.limiteDeEmpresa()\n}\n")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Caso triste",src:n(9944).Z})),(0,t.kt)("p",null,"C\xf3mo se puede ver en la imagen un test que deber\xeda pasar no pasa, pero es dificil sondear el error, ya que puede que no sepamos o nos olvidemos de lo que es ",(0,t.kt)("inlineCode",{parentName:"p"},"Constructora Hurlingham")," y tengamos que ver c\xf3mo est\xe1 armado el test y que es lo que prueba, en cambio si hacemos algo por el estilo..."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin"},'class FerreteriaTest : DescribeSpec({\n  val ferreteria = Ferreteria()\n\n  describe("Puede fiar") {\n    val constructoraHurlingham = EmpresaConstructora(albaniles= 5, deuda = 7000)\n\n    it("Constructora con muchos alba\xf1iles (al menos 5)") {\n        ferreteria.puedeFiarA(constructoraHurlingham).shouldBeTrue()\n    }\n  }\n})\n')),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Caso feliz",src:n(9201).Z})),(0,t.kt)("p",null,"El error es mucho m\xe1s evidente ya que podemos saber que est\xe1 fallando una constructora con muchos alba\xf1iles(tiene al menos 5 alba\xf1iles)."),(0,t.kt)("h1",{id:"recomendaciones-adicionales"},"Recomendaciones adicionales"),(0,t.kt)("h2",{id:"\xbfc\xf3mo-agrupar-los-escenarios"},"\xbfC\xf3mo agrupar los escenarios?"),(0,t.kt)("p",null,"Una posibilidad es agrupar por diferentes ",(0,t.kt)("inlineCode",{parentName:"p"},"describe")," por cada caso de prueba.\nTener en un s\xf3lo ",(0,t.kt)("inlineCode",{parentName:"p"},"describe")," o ",(0,t.kt)("inlineCode",{parentName:"p"},"it")," para muchos tests no es una buena pr\xe1ctica porque:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Dificulta diferenciar los escenarios."),(0,t.kt)("li",{parentName:"ul"},"Las variables de los tests van a estar mezcladas."),(0,t.kt)("li",{parentName:"ul"},"La clase a testear pierde cohesi\xf3n."),(0,t.kt)("li",{parentName:"ul"},"Un s\xf3lo test est\xe1 cubriendo todos los casos de prueba y si construimos un fixture con cada uno de los tipos de cliente en el setup, estamos penalizando a cada uno de los tests por lo que necesitan los dem\xe1s \xbftiene sentido crear una constructora con 5 alba\xf1iles si estoy testeando una que tiene 6?")),(0,t.kt)("p",null,"Por lo que en la materia les aconsejamos, para este ejemplo:\nUn ",(0,t.kt)("inlineCode",{parentName:"p"},"describe")," por cada tipo de cliente, y un ",(0,t.kt)("inlineCode",{parentName:"p"},"it")," para cada caso a testear. Cabe destacar que para el caso de las constructoras, poner un ",(0,t.kt)("inlineCode",{parentName:"p"},"describe")," para los 2 casos de constructoras."),(0,t.kt)("h1",{id:"pasando-a-un-ejemplo-pr\xe1ctico"},"Pasando a un ejemplo pr\xe1ctico:"),(0,t.kt)("p",null,"En un nuevo archivo llamese ",(0,t.kt)("inlineCode",{parentName:"p"},"clientesTest.kt"),", con un nombre que evidencia la clase que se va a testear m\xe1s no lo que se est\xe1 testeando ",(0,t.kt)("strong",{parentName:"p"},"Ej"),": ",(0,t.kt)("inlineCode",{parentName:"p"},"clienteConstructoraCon5Albaniles.kt"),", ya que se pueden testear muchas cosas en un mismo archivo."),(0,t.kt)("p",null,"Al igual que los desribes e its, elegir nombres para las instancias de los objetos que especifiquen que es lo que testea es sumamente importante."),(0,t.kt)("p",null,"No es lo mismo: ",(0,t.kt)("inlineCode",{parentName:"p"},"val miConstructora = EmpresaConstructora(albaniles= 3, deuda = 0)")," que ",(0,t.kt)("inlineCode",{parentName:"p"}," empresaConstructoraSinDeudas EmpresaConstructora(albaniles= 5, deuda = 7000)")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin"},'class ClientesTest : DescribeSpec({\n  val ferreteria = Ferreteria()\n\n  describe("Puede fiar a clientes") {\n    describe("A un cliente particular") {\n      //Elegir nombres que represente la clase de equivalencia que estamos modelando.\n      val clienteParticular = ClienteParticular(deuda=0)\n      val clienteParticularDeudor = ClienteParticular(deuda=50)\n\n      it("Sin deudas") {\n          ferreteria.puedeFiarA(clienteParticular).shouldBeTrue()\n        }\n\n      it("Que adeuda algo") {\n        ferreteria.puedeFiarA(clienteParticularDeudor).shouldBeFalse()\n      }\n    }\n\n    describe("A una empresa constructora") {\n      val empresaConstructoraChica = EmpresaConstructora(albaniles=4, deuda=5000)\n      val empresaConstructoraGrande = EmpresaConstructora(albaniles=5 deuda=10000)\n\n      describe("Con menos de 5 alba\xf1iles") {\n        it("Si adeuda hasta 5.000")\n        ferreteria.puedeFiarA(empresaConstructoraChica).shouldBeTrue()\n\n        it("Si adeuda m\xe1s de 5.000") {\n          empresaConstructoraChica.generarDeudaPor(1000)\n\n          //Notar que ahora la deuda de la "empresaConstructoraChica" va a ser de 6.000\n          empresaConstructoraChica.deuda.shouldBe(6000)\n\n          ferreteria.puedeFiarA(empresaConstructoraChica).shouldBeFalse()\n        }\n      }\n\n      describe("Con 5 alba\xf1iles") {\n        it("Si adeuda hasta 10.000") {\n          ferreteria.puedeFiarA(empresaConstructoraGrande).shouldBeTrue()\n        }\n\n        it("Si adeuda m\xe1s de 10.000") {\n          empresaConstructoraGrande.generarDeudaPor(1000)\n\n          //Notar que ahora la deuda de la "empresaConstructoraGrande" va a ser de 6.000\n          empresaConstructoraGrande.deuda.shouldBe(11000)\n\n          ferreteria.puedeFiarA(empresaConstructoraGrande).shouldBeFalse()\n        }\n      }\n    }\n  }\n')),(0,t.kt)("h2",{id:"aaa-pattern"},"AAA Pattern"),(0,t.kt)("p",null,"Los tests suelen estructurarse seg\xfan el patr\xf3n AAA: Arrange, Act y Assert."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Arrange"),": Que podr\xeda traducirse, c\xf3mo arreglar o gestionar, en d\xf3nde se instancian los objetos a testear(la Ferreteria y los Clientes). Cuando los contextos son compartidos, los frameworks basados en xUnit (JUnit5 es uno de ellos) nos permiten ubicarlo en un m\xe9todo setup (@BeforeEach). La desventaja de esta t\xe9cnica es que para tener una idea general de los elementos que participan en el test debemos mirar el test y el setup, por eso una alternativa suele ser tener m\xe9todos en el test que construyen el escenario que se necesita:")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Act"),": Son las operaciones que tienen efecto. por ejemplo el m\xe9todo del cliente ",(0,t.kt)("inlineCode",{parentName:"p"},"generarDeudaPor(cantidad)"),". Hay tests que quiz\xe1s no necesiten disparar acciones, y est\xe1 bien que eso ocurra.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Assert"),": Lo que esperamos que pase, generalmente asociado a las respuestas que da el env\xedo de un mensaje al objeto testeado."))),(0,t.kt)("h2",{id:"one-assert-per-test"},"One assert per test"),(0,t.kt)("p",null,"Hay ciertas controversias respecto a si podemos tener varios asserts en el mismo test, ya que cuando el primer assert falla los siguientes no se siguen evaluando: esto en realidad depende del runner de xUnit, podr\xedamos eventualmente trabajar con un framework que continue buscando asserts y discrimine cu\xe1les anduvieron y cu\xe1les no (RSpec, framework de testeo para Ruby, hace \xe9sto)."),(0,t.kt)("p",null,"Por lo que nuestro consejo es: Los tests deben fallar por exactamente un solo motivo, esto relaja esa restricci\xf3n.\nEn res\xfamen lo importante no es tener un solo ",(0,t.kt)("inlineCode",{parentName:"p"},"assert"),", sino que todos los ",(0,t.kt)("inlineCode",{parentName:"p"},"asserts")," est\xe9n relacionados con la misma funcionalidad."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin"},'describe("Nuestros empleados"){\n  it("Obtener correctamente nuestros Empleados") {\n    val albaniles =  mutableListOf("Bruno", "Ricardo", "Dami\xe1n")\n    albaniles.size.shouldBe(3)\n    albaniles.get(0).shouldBe("Bruno")\n    albaniles.get(1).shouldBe("Ricardo")\n    albaniles.get(2).shouldBe("Dami\xe1n")\n  }\n}\n')),(0,t.kt)("h2",{id:"res\xfamen"},"Res\xfamen"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Arm\xe1 escenarios que definan las clases de tests."),(0,t.kt)("li",{parentName:"ul"},"Defin\xed los ",(0,t.kt)("inlineCode",{parentName:"li"},"describe")," e ",(0,t.kt)("inlineCode",{parentName:"li"},"it")," seg\xfan corresopnda para cada test, de manera de entender qu\xe9 estamos testeando. El c\xf3mo lo termin\xe1s de ver en el c\xf3digo, evit\xe1 duplicidades entre el texto que explica y el c\xf3digo escrito."),(0,t.kt)("li",{parentName:"ul"},"Evit\xe1 que un ",(0,t.kt)("inlineCode",{parentName:"li"},"describe")," tenga muchos escenarios juntos, es m\xe1s dif\xedcil seguirlos."),(0,t.kt)("li",{parentName:"ul"},"Los nombres de las variables deben reflejar la clase de equivalencia que est\xe1n resolviendo, y no casos particulares (s\xed empresaConstructoraChica, no empresita o miEmpresa)."),(0,t.kt)("li",{parentName:"ul"},"Los tests se suelen estructurar utilizando las tres A: Arrange (el setup que conviene mantenerlo simple), Act (operaciones con efecto cuando corresponde) y Assert (las aserciones que pueden ser m\xe1s de una por cada test, pero deben testear el mismo concepto).")),(0,t.kt)("h2",{id:"cr\xe9ditos"},"Cr\xe9ditos"),(0,t.kt)("p",null,"Fuente Original ",(0,t.kt)("a",{parentName:"p",href:"http://wiki.uqbar.org/wiki/articles/testeo-unitario-avanzado.html"},"Testeo unitario avanzado"),", elaborado por Fernando Dodino para ",(0,t.kt)("inlineCode",{parentName:"p"},"Uqbar Project"),". Transformado a Markdown y adaptado a Kotlin por Pablo Gerez para UNaHur."))}p.isMDXComponent=!0},9201:function(e,a,n){a.Z=n.p+"assets/images/test-expresivo-3746e75ea5ee4512276d817e3e8a1f9a.jpg"},9944:function(e,a,n){a.Z=n.p+"assets/images/test-poco-expresivo-7bf12236564a714ed0e3a296a786eee9.jpg"}}]);