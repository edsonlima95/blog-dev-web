import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import LeftContent from "../../../components/LeftContent";
import Post from "../../../components/Post";


function PostBySlug() {

    const router = useRouter()

    const { slug } = router.query

    return (
        <Layout>
            <div className={`h-[400px] w-full bg-gray-900 flex items-center justify-center relative`}>
                <div className="flex flex-col justify-center sm:w-8/12 items-center h-full absolute">
                    <h1 className="text-white font-bold text-5xl sm:text-4xl ">Titulo do post</h1>
                    <small className="block sm:font-thin font-bold mt-2 text-white mb-4 text-lg">em: 20/01/2022</small>
                    <span className="inline-block text-gray-100 mb-2 bg-violet-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded">backend</span>
                </div>
            </div>
            <section className="sm:flex">

                <div className="w-full sm:w-9/12 p-5">
                    <section className="flex justify-center items-center">
                        <article className="flex flex-col my-8 sm:p-8 ">
                            <img src="/images/hero.jpg" className="mb-8 rounded-lg" alt="" srcSet="" />
                            <h2 className="text-gray-900 text-4xl font-black dark:text-gray-200">SERVIÇOS GRÁFICOS: ISS OU ICMS?</h2>
                            <small className="mb-8 mt-3 text-gray-500 dark:text-gray-400">Por: edson lima em: 21/11/2022</small>

                            <p className="text-gray-600 leading-8 dark:text-gray-300">
                                A incidência tributária sobre serviços gráficos é uma discussão interminável com inúmeras mudanças de interpretação pela Justiça, a trazer uma permanente preocupação aos empresários do ramo, sem saber ao certo se estão pagando corretamente os seus tributos.

                                A última novidade foi a nova redação do subitem 13.05 da lista de serviços tributáveis pelo ISS, dada pela Lei Complementar n. 157/2016, numa tentativa de apartar as atividades de prestação de serviço da venda de produtos. A nova redação diz assim:

                                13.05 - Composição gráfica, inclusive confecção de impressos gráficos, fotocomposição, clicheria, zincografia, litografia e fotolitografia, exceto se destinados a posterior operação de comercialização ou industrialização, ainda que incorporados, de qualquer forma, a outra mercadoria que deva ser objeto de posterior circulação, tais como bulas, rótulos, etiquetas, caixas, cartuchos, embalagens e manuais técnicos e de instrução, quando ficarão sujeitos ao ICMS (redada dada pela Lei Complementar n. 157/2016).

                                Neste sentido, em termos práticos, quando a gráfica presta um serviço de confecção destinado diretamente ao consumidor final, a incidência é do ISS. Exemplos: folhetos e impressos para uso interno, publicações para distribuição interna ou como material de venda, pastas personalizadas para uso interno, convites impressos, bilhetes etc. Quando, porém, o material será destinado ao comércio, à revenda, ou se será parte integrante de outro produto para venda, a incidência será do ICMS. Exemplos: confecção de fichas e pastas para revenda em papelaria; bulas e manuais de instrução que acompanham outros produtos; embalagens; etiquetas; caixas de papelão para acondicionar calçados e outros produtos; etc.

                                Mas, se alguém pensar que agora ficou fácil definir a tributação, está cometendo um erro. Apenas para aguçar a mente dos caros leitores: confecção de caixa de pizza personalizada gera ISS ou ICMS? Saco de papelão personalizado para acondicionar carvão vegetal é tributado pelo ISS ou ICMS? Em tais operações, a melhor pergunta que se deve fazer é a seguinte: qual é o interesse maior do cliente? Seria o de receber a caixa ou o saco já elaborado, ou o serviço de composição gráfica? Embora seja possível a contratação somente do serviço de elaboração de uma matriz para futuras impressões gráficas, o mais comum é a contratação para entrega do produto pronto, caixa ou saco.

                                Sendo assim, não há dúvida de que a composição gráfica foi necessária como atividade-meio, indispensável à concretização da atividade-fim, que foi a comercialização das caixas de pizza ou dos sacos de carvão. E não importa que o produto seja personalizado, já com o nome do fornecedor impresso, o seu endereço e tal. Essa operação gera ICMS.

                                Pois o problema sempre girou em torno da seguinte pergunta: serviço gráfico é uma obrigação de fazer ou uma obrigação de dar? Como o serviço consta da lista, a Justiça optava pela incidência do ISS. A decisão abaixo do Superior Tribunal de Justiça é esclarecedora:

                                Superior Tribunal de Justiça:

                                As operações de composição gráfica, como no caso de impressos personalizados e sob encomenda, são de natureza mista, sendo que os serviços a elas agregados estão incluídos na Lista Anexa ao Decreto-Lei 406/68 (item 77) e à LC 116/03 (item 13.05). Consequentemente, tais operações estão sujeitas à incidência de ISSQN (e não de ICMS), Confirma-se o entendimento da Súmula 156/STJ: "A prestação de serviço de composição gráfica, personalizada e sob encomenda, ainda que envolva fornecimento de mercadorias, está sujeita, apenas, ao ISS." Precedentes de ambas as Turmas da 1ª Seção.

                                REsp 1092206/SP – Rel. Min. Teori Zavascki – DJ 11/03/2009.

                                A decisão acima vem a demonstrar que as operações gráficas, em certas situações, são ‘personalizadas’, ou seja, o material gráfico foi confeccionado por encomenda e para uso exclusivo do encomendante. Contudo, temos de outro lado operações gráficas destinadas à comercialização, tanto faz como produto final ou parte de um produto final, e se personalizada ou não. A resumir, gráfica pode ser prestadora de serviço como, também, indústria de transformação.

                                Em meados de 2010, o Supremo Tribunal Federal passou a entender que serviço gráfico pode ser tanto obrigação de fazer quanto obrigação de dar, dependendo da operação. Abaixo, uma das decisões do STF que reformulou o seu posicionamento:

                                Supremo Tribunal Federal:

                                “Agravo regimental no recurso extraordinário. Serviço de composição gráfica com fornecimento de mercadoria. Conflito de incidências entre o ICMS e o ISSQN. Serviços de composição gráfica e customização de embalagens meramente acessórias à mercadoria. Obrigação de dar manifestamente preponderante sobre a obrigação de fazer, o que leva à conclusão de que o ICMS deve incidir na espécie. 1. Em precedente da Corte consubstanciado na ADI nº 4.389/DF-MC, restou definida a incidência de ICMS `sobre operações de industrialização por encomenda de embalagens, destinadas à integração ou utilização direta em processo subsequente de industrialização ou de circulação de mercadoria. 2. A verificação da incidência nas hipóteses de industrialização por encomenda deve obedecer dois critérios básicos: (i) verificar se a venda opera-se a quem promoverá nova circulação do bem e (ii) caso o adquirente seja consumidor final, avaliar a preponderância entre o dar e o fazer mediante a averiguação de elementos de industrialização. 4. À luz dos critérios propostos, só haverá incidência do ISS nas situações em que a resposta ao primeiro item for negativa e se no segundo item o fazer preponderar sobre o dar. 5. A hipótese dos autos não revela a preponderância da obrigação de fazer em detrimento da obrigação de dar. Pelo contrário. A fabricação de embalagens é a atividade econômica específica explorada pela agravante. Prepondera o fornecimento dos bens em face da composição gráfica, que afigura-se meramente acessória. Não há como conceber a prevalência da customização sobre a entrega do próprio bem. 6. Agravo regimental não provido.”

                                Primeira Turma do Supremo Tribunal Federal, AI 803.296- AgR, - Rel. Min. Dias Toffoli, - DJe de 7/6/2013,

                                Desta forma, o Superior Tribunal de Justiça também alterou a sua posição, acatando o entendimento do Supremo Tribunal Federal. Exemplo abaixo:

                                Superior Tribunal de Justiça:

                                PROCESSUAL CIVIL. TRIBUTÁRIO. ICMS. PRODUÇÃO E FORNECIMENTO DE EMBALAGENS PERSONALIZADAS. ADEQUAÇÃO AO ENTENDIMENTO DO SUPREMO TRIBUNAL FEDERAL. ADI 4389-MC.

                                1. Hipótese em que a recorrente pleiteia a não incidência de ICMS sobre a atividade de prestação de serviços gráficos personalizados.

                                2. O acórdão recorrido consignou: "Colhe-se do contrato social que a empresa, ora embargante, atua no mercado explorando a atividade de 'prestação de SERVIÇOS GRÁFICOS PELO SISTEMA DE IMPRESSÃO FLEXOGRÁFICA ATRAVÉS DE CLICHÊS VULCANIZADOS conhecido como CLICHERIA, aplicados em caixas de papelão ondulado, resultando embalagens personalizadas1 (fls. 26). O serviço de fiscalização, à fl. 30, assim descreve as atividades da embargante: a empresa tem como atividade a fabricação de embalagens de papelão. As matérias-primas utilizadas na produção são chapas de papelão. O processo de fabricação consiste em recebimento das chapas de papelão que em seguida são transferidas para o setor de corte onde com auxilio da máquina de corte/vinco a embalagem será moldada conforme especificação do cliente. Após essa etapa a embalagem é transferida para o setor de impressão onde recebe o logotipo de acordo com o pedido do cliente. (...) E, com as provas espelhadas nos autos, percebe-se que a causa final da embalagem é acondicionar o produto a ser comercializado por terceiros (fls. 43/45 e 57/60). Ou seja, o negócio da empresa é vender material de embalagem ou produzi-la, com o fim de circular o produto que a integrará. Ora, no caso, vislumbram-se condições peculiares de circulação de mercadorias próprios do ICMS. Por oportuno também salientar que as empresas que encomendam as mercadorias que, posteriormente, desencadearão operações mercantis e os produtos confeccionados integram o ciclo de comercialização dos adquirentes. Isso é o que certamente delimita a incidência do ICMS. (...)

                                3. O Supremo Tribunal Federal, por ocasião do julgamento da Medida Cautelar na ADI 4.389/SP, firmou posicionamento de que se sujeitam ao recolhimento do ICMS as operações de industrialização por encomenda de embalagens destinadas à integração ou utilização direta em processo subsequente de industrialização ou de posterior circulação de mercadoria. Seguindo a orientação do STF, ambas as Turmas integrantes da Primeira Seção reformularam o entendimento exarado no Recurso Repetitivo 1.092.206/SP para adequá-lo ao que ficou consolidado no julgamento da referida ADI.

                                4. As Turmas integrantes da 1ª Seção, seguindo orientação firmada pelo Supremo Tribunal Federal, por ocasião do julgamento da Medida Cautelar na ADI 4.389/SP, reconhecem a incidência do ICMS nas operações de industrialização por encomenda de embalagens destinadas à integração ou utilização direta em processo subsequente de industrialização ou de posterior circulação de mercadoria.

                                5. O acórdão recorrido está em sintonia com o atual entendimento do Superior Tribunal de Justiça, razão pela qual não merece prosperar a irresignação.

                                6. Recurso Especial não provido.

                                REsp 1832006 / SP – Rel. Min. Herman Benjamin – DJ 10/12/2019

                                Como se vê, a atividade gráfica deve ser examinada com o máximo de cuidado tanto pelo Fisco quanto pelo Contabilista, sabendo distinguir suas operações. Nada impede que uma mesma empresa gráfica atue em atividades tributadas pelo ISS e pelo ICMS, mas, neste caso, será obrigada a inscrever-se na Fazenda Estadual e Municipal, e ter o cuidado de emitir a nota fiscal correta.

                                Sendo assim, poderemos ter gráficas enquadradas no CNAE:

                                1813-0/01 - Cartazes, prospectos, calendários, encartes e outros impressos de publicidade; impressão sob encomenda (Serviço);

                                1731-1/00 - Fabricação de embalagens de papel quando impressas (indústria);

                                1732-0/00 - Fabricação de embalagens de cartolina e papel-cartão (indústria e comércio);

                                1741-9/01 - Fabricação de formulários contínuos (indústria e comércio);

                                1741-9/02 - Fabricação de produtos de papel, cartolina, papel-cartão e papelão ondulado para uso comercial e de escritório, exceto formulário contínuo (indústria e comércio);

                                1742-7/99 - Fabricação de produtos de papel para uso doméstico e higiênico sanitário,não especificados anteriormente (indústria e comércio);

                                1811-3/01 - Impressão de jornais (indústria ou serviço);

                                1811-3/02 - Impressão de livros, revistas e outras publicações periódicas (indústria ou serviço).

                                Possível dizer que seriam prestações de serviços e, portanto, tributáveis pelo ISS, as atividades enquadradas no CNAE 1813-0/01. Os demais enquadramentos (1731-1/00 a 1742-7/99) seriam atividades tributáveis pelo IPI/ICMS. Já as atividades enquadradas no CNAE 1811.3 podem ser imunes, quando a impressão é para comercialização própria, ou tributáveis pelo ISS se a impressão é feita para uso exclusivo do encomendante.

                                E sem esquecer os serviços de pré-impressão (CNAE 1821-1/00) e de acabamentos gráficos (CNAE 1822-9/00). Se esses serviços forem prestados em bens de terceiros, teremos a tributação do ISS.


                            </p>
                        </article>
                    </section>

                    <div className="flex flex-col my-10">
                        <h2 className="mb-2 text-4xl text-gray-900 font-extrabold dark:text-gray-200">Posts relacionados</h2>
                        <span className="h-1 rounded w-[400px] bg-violet-800"></span>
                    </div>

                    <article className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <Post
                            title="Titulo do post"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, exercitationem. Distinctio doloremque facere ea, aliquam veritatis, molestias sint inventore minima alias veniam nesciunt esse, impedit accusamus! Quos beatae tempore explicabo?"
                            author="edson lima"
                            date="21/11/2022"
                            category="backend"
                        />
                        <Post
                            title="Titulo do post"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, exercitationem. Distinctio doloremque facere ea, aliquam veritatis, molestias sint inventore minima alias veniam nesciunt esse, impedit accusamus! Quos beatae tempore explicabo?"
                            author="edson lima"
                            date="21/11/2022"
                            category="backend"
                        />
                        <Post
                            title="Titulo do post"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, exercitationem. Distinctio doloremque facere ea, aliquam veritatis, molestias sint inventore minima alias veniam nesciunt esse, impedit accusamus! Quos beatae tempore explicabo?"
                            author="edson lima"
                            date="21/11/2022"
                            category="backend"
                        />
                    </article>
                </div>

                <div className="hidden sm:block w-3/12 p-5">

                    <LeftContent />

                </div>
            </section>
        </Layout>
    )

}

export default PostBySlug;
