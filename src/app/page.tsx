
import Banner from "./components/banner";
import Post from "./components/posts";

export default function Home() {
  return (          
            <div>
              <Banner />
              <Post title="Para ser muito bom amanha é preciso começar a práticar hoje" 
                    signature_name={"Prof. Cleiton"} 
                    signature_date={"24 Fev 25"} 
                    signature_hour={"16:40"} 
                    content={"São nos primeiros anos escolares que as crianças aprendem os fundamentos da matemática, inclusive as quatro operações - soma, subtração, multiplicação e divisão. Qualquer dificuldade que a criança tenha nessa fase se refletirá por toda a sua vida escolar :(\nAqui você e seu filho irão encontrar exercícios relacionados ao conteúdo ensinado nós primeiros anos escolares e buscara aperfeiçoar seu conhecimento nas operações básicas;"} />
              <Post title="Matemática: O Alicerce para o Sucesso Escolar!" 
                    signature_name={"Prof. Cleiton"} 
                    signature_date={"24 Fev 25"} 
                    signature_hour={"16:40"} 
                    content={"Nos primeiros anos escolares, as crianças constroem a base do raciocínio lógico e aprendem as quatro operações essenciais: adição, subtração, multiplicação e divisão. Dificuldades nessa fase podem afetar o desempenho escolar ao longo de toda a jornada! Aqui, você encontra exercícios divertidos e educativos para ajudar seu filho a dominar as operações básicas e desenvolver confiança na matemática.\n Vamos juntos fortalecer essa base e transformar desafios em conquistas! #MatemáticaParaCrianças #EducaçãoMatemática #OperaçõesBásicas #AprendizadoDivertido #FundamentosEscolares #MatemáticaFácil #ConfiançaNosNúmeros"} />
            </div>
  );
} 
