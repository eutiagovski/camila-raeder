const axios = require('axios');

export const getClientData = async (clientId) => {
    // const  { data }  = await axios.post('http://localhost:4000/api/clients/client-info', clientId);
    // return data.client
    return client
}

const client = {
    "_id": "628650567b841f8f764513c2",
    "comercialName": "Clínica de Estética Camila Reader",
    "comercialCel": "21 972559811",
    "comercialEmail": "contato@clinicacamilaraeder.com.br",
    "comercialAddress": "Rua Silva Cardoso, 405 - SALA 425 - Bangu, Rio de Janeiro - RJ",
    "comercialTitle": null,
    "comercialText": null,
    "comercialImageUrl": null,
    "googleTokens": null,
    "googleTokensExpiration": null,
    "services": [
        {
            "title": "Design de Sobrancelhas",
            "text": "Sabemos que a sobrancelha é uma das principais preocupações de beleza, pois é considerada a moldura do rosto. E possível redesenhar o traço a fim de se obter um conjunto mais harmónico para cada tipo de rosto. Tudo isso, graças a técnicas de visagismo que é o estudo da fisionomia e da harmonia facial em que a Rio Arte é especialista. O resultado é incrivel, e em poucos minutos é possível levanta, preencher e harmonizar o olhar. O que traz mais equilíbrio e naturalidade ao rosto, deixando assim tudo mais harmonioso e expressivo.",
            "categorie": "Embelezamento Facial",
            "subCategorie": "",
            "price": "",
            "imageUrl": "design-sobrancelhas.png",
            "durationTime": "30",
            "_id": "62865412a6ab653382fd99e2"
        },
        {
            "title": "Micropigmentação Labial",
            "text": "Procedimento indicado para corrigir falhas e cicatrizes, ou até mesmo valorizar os traços labiais deixando-os assim sempre com aquela aparência de hidratados e com aquela 'cor de saude'. É possível fazer apenas o contorno labial assim como todo o preenchimento do lábio, o indicado para cada cliente o profissional orientará de acordo com os traços, gostos e necessidade do cliente.",
            "categorie": "Embelezamento Facial",
            "subCategorie": "",
            "price": "",
            "imageUrl": "micropigmentacao-labial.png",
            "durationTime": "120",
            "_id": "628654b6a6ab653382fd99e8"
        },
        {
            "title": "Limpeza de Pele com Peeling de Diamante",
            "text": "A Limpeza de Pele Profunda é um procedimento estético com o objetivo de remover comedões (cravos) e impurezas da pele. A frequência indicada para realização é em torno de 1 vez por mês. É utilizado um laser de baixa potência, que atua na cicatrização, poros dilatados, acalmando e revitalizando a pele. A sessão dura em média de 1 hora e meia. São muitos os benefícios da Limpeza de Pele e o resultado é uma Limpa, mais clara e uniforme, livre de impurezas e preparada para receber seus produtos cosméticos e melhorar a permeação dos mesmos. O peeling de diamante consiste em uma microdermoabrasão superficial, com o uso de ventosas de vidro, sendo o vácuo aplicado com a ponteira diamantada, propiciando uma microdermoabrasão mecânica e controlada das sub camadas da derme. As ponteiras possuem diferentes granulometrias, sendo capaz de promover uma esfoliação mecânica da pele e, consequentemente, a regeneração tecidual e incremento da produção de colágeno, com aumento de elasticidade e tônus da pele, atenuando as cicatrizes de acne, retraindo os poros.",
            "categorie": "Estética Facial",
            "subCategorie": "",
            "price": "",
            "imageUrl": "limpeza-peeling-diamante.png",
            "durationTime": "120",
            "_id": "62865571a6ab653382fd99ed"
        },
        {
            "title": "Revitalização Facial: Radiofrequência + Máscara",
            "text": "A Radiofrequência é um procedimento indolor e não invasivo com tecnologia tripolar, a técnica promove o aquecimento do tecido induzindo a circulação e estimulando a formação de novos colágenos, dando assim maior sustentação e 4 jovialidade para a ele. No procedimento de radiofrequência são emitidas ondas eletromagnéticas simples e rápidas que aquecem a derme e a hipoderme, a cerca de 40° graus. A radiofrequência gera energia e forte calor sobre a camada mais profunda da pele, porém durante a aplicação o paciente sente apenas uma agradável sensação de uma massagem quentinha e indolor, uma vez que a superfície da pele se mantém resfriada e protegida. O procedimento é seguro e efetivo para todos os fototipos de pele. O procedimento em questão ajuda na diminuição das rugas, melhora a aparência da pele, melhorar a qualidade do colágeno e da elastina, reorganizar as fibras de colágeno e elastina, a microcirculação, a hidratação e a oxigenação da pele. Acelera também a eliminação de toxinas.",
            "categorie": "Estética Facial",
            "subCategorie": "",
            "price": "",
            "imageUrl": "revitalizacao-facial-radiofrequencia-mascara.png",
            "durationTime": "60",
            "_id": "628655e5a6ab653382fd99f3"
        },
        {
            "title": "Drenagem Linfática Facial",
            "text": "Os movimentos realizados na drenagem linfática facial manual são indicados para tratamentos de revitalização, atenuações de olheiras, relaxamento, sendo fundamentais em pré e pós cirurgia plastica, pois proporciona a drenagem de líquidos em regiões edemaciadas, proporcionando alívio e bem-estar.",
            "categorie": "Estética Facial",
            "subCategorie": "",
            "price": "",
            "imageUrl": "drenagem-linfatica-facial.png",
            "durationTime": "60",
            "_id": "62865621a6ab653382fd99fa"
        },
        {
            "title": "Massagem Modeladora",
            "text": "A massagem modeladora tem movimentos mais vigorosos, executados de forma rápida e firme. Utiliza movimentos como deslizamento, amassamento, pinçamento e percussão. Geralmente ela é realizada em áreas com grande acúmulo de gordura, como: abdômen, quadris, culote, glúteos, coxas e braços. Torna-se visível a diminuição do inchaço, melhora da circulação e, consequentemente, a aparência da pele, reduzindo celulite, gordura localizada, além de produzir efeito relaxante. Ativa o metabolismo da área trabalhada, aumenta a circulação sanguínea, estimula a quebra de gorduras e estimula respostas neuromusculares, o que dá a impressão de estar com o corpo mais rígido logo após o procedimento. Esse efeito também ajuda a reduzir a celulite no local.",
            "categorie": "Estética Corporal",
            "subCategorie": "",
            "price": "",
            "imageUrl": "massagem-modeladora-corporal.png",
            "durationTime": "60",
            "_id": "62865682a6ab653382fd9a02"
        },
        {
            "title": "Detox Corporal",
            "text": "É um tratamento com produtos ortomoleculares, massagem, argila e manta térmica. Com ação sistêmica, atua no corpo todo. É um tratamento ortomolecular associado a massagem, realizado com objetivo de redução de medidas, tratamento de celulite promovendo uma desintoxicação metabólica e orgânica, descongestionando e estimulando o sistema linfático, fazendo uma limpeza de dentro pra fora.",
            "categorie": "Estética Corporal",
            "subCategorie": "",
            "price": "",
            "imageUrl": "detox-corporal.png",
            "durationTime": null,
            "_id": "628656c0a6ab653382fd9a0b"
        },
        {
            "title": "Drenagem Linfática",
            "text": "Técnica especial de massagem cujo principal objetivo é direcionar e aumentar o fluxo linfático, resultando em melhora da textura e elasticidade da pele.",
            "categorie": "Estética Corporal",
            "subCategorie": "",
            "price": "",
            "imageUrl": "drenagem-linfatica-corporal.png",
            "durationTime": "60",
            "_id": "628656eaa6ab653382fd9a15"
        },
        {
            "title": "Hidroliclasia Não Aspirativa",
            "text": "A Hidrolipoclasia não aspirativa também conhecida popularmente como Hidrolipo, é um tratamento minimamente invasivo e tem técnica inovadora de terapia combinada, ou seja, é a associação da aplicação da solução isotônica no tecido adiposo (onde predominam as células de gordura). Em seguida, é usado o Ultrassom, que promove a lipólise (destruição das células de gordura armazenada no adipócito). Essa terapia combinada tem como objetivo promover a eliminação das células de gordura realizando simultaneamente a modelagem corporal, redução de medidas e emagrecimento.",
            "categorie": "Estética Corporal",
            "subCategorie": "",
            "price": "",
            "imageUrl": "hidroclisia-nao-aspirativa-corporal.png",
            "durationTime": null,
            "_id": "6286574aa6ab653382fd9a20"
        },
        {
            "title": "Corrente Russa",
            "text": "A corrente russa é um aparelho de eletroestimulação que atua no nível muscular, promovendo um aumento da força e aumento do volume muscular, sendo um ótimo tratamento para perder barriga, e tonificar e fortalecer os músculos da região tratada. Melhora a circulação sanguínea e promove uma melhor drenagem linfática além de combater a flacidez. E especialmente indicada para facilitar a contração muscular, em casos de fraqueza e atrofia muscular. O aparelho irá promover um estimulo que gera uma contração involuntária do músculo fazendo assim com que tenhamos um aumento do volume muscular, diminuição da flacidez, melhora da circulação sanguínea, melhorando a drenagem linfática. do procedimento esta sujeito a area tratada e a experiencia da profissional, habitualmente o que se libera.",
            "categorie": "Estética Corporal",
            "subCategorie": "",
            "price": "",
            "imageUrl": "corrente-russa-corporal.png",
            "durationTime": null,
            "_id": "62865814a6ab653382fd9a2d"
        },
        {
            "title": "Preenchimento com Ácido Hialurônico",
            "text": "O ácido hialurônico é uma molécula já presente no organismo, responsável por atrair e reter a água ao seu redor, dando mais viço, firmeza e uma textura homogênea à pele, porém pós os 25 anos, a quantidade dele no organismo começa a diminuir e os primeiros sinais de envelhecimento, como a surgir, como as rugas e o ressecamento da pele. Os preenchedores por si só além de repor aquilo que nosso organismo como a ter declínio em produzir, proporcionam maior hidratação, e ajustes na simetria e nas linhas de expressão que 'tiram a harmonia de nosso rosto'. Eles também podem ser usados, garantindo a correção de rugas, olheiras profundas e dos lábios finos. Como é uma substância ja presente no organismo, o corpo acaba absorvendo a substância e por isso o resultado é mais natural que outros procedimentos e também não apresenta contraindicação.",
            "categorie": "Procedimentos Biomédicos",
            "subCategorie": "",
            "price": "",
            "imageUrl": "preenchimento-acido-hialuronico.png",
            "durationTime": null,
            "_id": "6286587ca6ab653382fd9a3a"
        },
        {
            "title": "Toxina Botulínica",
            "text": "A toxina botulinica é uma das grandes maravihas no combale das linhas de expressão. Tanto homens quanto mulheres de todas as classes sociais tem aderido ao uso deste recurso, pois alem de ralar a parte estética ele auxilia na parte clinica também, um dos grandes exemplos disso é sua utilização para tratamento de enxaqueca.",
            "categorie": "Procedimentos Biomédicos",
            "subCategorie": "",
            "price": "",
            "imageUrl": "toxina-botulinica.png",
            "durationTime": null,
            "_id": "628658bca6ab653382fd9a48"
        },
        {
            "title": "Harmonização Facial",
            "text": "Trata-se de uma técnica de preenchimento facial (não cirúrgica) que promove um alinhamento e correção de ângulos da face que trazem mais harmonia e beleza a este rosto ou até mesmo apenas realça caraterísticas já existentes. O trabalho inicia-se a partir de uma análise das proporções faciais, tanto verticais quanto horizontais, indicando as áreas que estão em desarmonia e que, a partir do procedimento, irão deixar o rosto mais equilibrado e mais proporcional. Iniciamos geralmente sugerindo o contorno da face, seu alongamento ou projeção, avaliando os pontos que serão preenchidos.",
            "categorie": "Procedimentos Biomédicos",
            "subCategorie": "",
            "price": "",
            "imageUrl": "harmonizacao-facial.png",
            "durationTime": null,
            "_id": "62865972a6ab653382fd9a58"
        },
        {
            "title": "Skin Booster",
            "text": "Nada mais é que aplicação de um combinado de produtos que tem como base o ácido hialurônico dentro da pele é, que certamente, tem maior eficiência nos resultados buscados. Esse combinado foi especialmente desenvolvidos para a hidratação da pele e na reposição dos volumes faciais, devolvendo harmonia e proporcionando simetria facial. Os skinboosters não só aumentam o volume e preenchem sulcos, como também devolvem o brilho, a maciez e a hidratação da pele, além de suavizar linhas finas e de áreas especiais, como pescoço e pálpebras.",
            "categorie": "Procedimentos Biomédicos",
            "subCategorie": "",
            "price": "",
            "imageUrl": "skin-booster.png",
            "durationTime": "60",
            "_id": "628659c7a6ab653382fd9a69"
        },
        {
            "title": "Peeling Químico",
            "text": "Procedimento a base de ácidos de prescrição e uso médico, aplicados sobre a pele, que estimulam altamente o colágeno e a renovação cutanea, promovendo e tratando manchas, marcas de expressão, colaborando para o rejuvenescimento e rugas.",
            "categorie": "Procedimentos Biomédicos",
            "subCategorie": "",
            "price": "",
            "imageUrl": "peeling-quimico.png",
            "durationTime": null,
            "_id": "62865aa1a6ab653382fd9aa0"
        },
        {
            "title": "Microagulhamento",
            "text": "Este é o tratamento queridinho das celebridades de Hollywood. Ele Promove o rejuvenescimento da pele, amenizando flacidez, rugas, manchas, e linhas de expressão, além de reduzir cicatrizes de acne. O procedimento é realizado com um pequeno cilindro com agulhas de diâmetro finíssimo que desliza várias vezes e em diversas direções sobre a pele, com leve pressão, provocando micro-lesões que induzirá à produção de colágeno. O tratamento também poderá consistir ainda na aplicação de ácidos antioxidantes, e vitaminas, o que dependerá da indicação do profissional. Por ser um procedimento incomodo, indicamos ao cliente que chegue antes para a aplicação de anestésico utópico, e posterior realização do procedimento.",
            "categorie": "Procedimentos Biomédicos",
            "subCategorie": "",
            "price": "",
            "imageUrl": "microagulhamento.png",
            "durationTime": "180",
            "_id": "62865acea6ab653382fd9ab4"
        },
        {
            "title": "Peim (microvasos)",
            "text": "O procedimento estético injetável para microvasos (PEIM) é um tratamento realizado com o objetivo de eliminar os vasinhos que aparecem nas pernas e se tornam um incomodo estético para as mulheres. Esses vasinhos são chamados de telangiectasias. O surgimento das telangiectasias pode estar associado a um refluxo de sangue que ocorre em veias mais profundas, isso pode ser causado por algum problema nas válvulas que têm a função de direcionar o sangue no sentido correto, há também outros fatores que influenciam no aparecimento dos vasinhos, entre eles estão: genética, gestações, posição (ficar em pé ou sentado durante muito tempo), uso de anticoncepcionais, que em conjunto ou isoladamente, dificultam a circulação sanguínea nas pernas, levando a formação dos indesejáveis vasinhos na superfície.",
            "categorie": "Procedimentos Biomédicos",
            "subCategorie": "",
            "price": "",
            "imageUrl": "peim-microvasos.png",
            "durationTime": null,
            "_id": "62865b52a6ab653382fd9aca"
        },
        {
            "title": "Enzimas",
            "text": "Enzimas para gordura: A aplicação de enzimas consiste em uma mistura que gira entre quatro e seis componentes diferentes, sendo eles lipolíticos a variar da enzima utilizada, ela agirá no corpo de dois a sete dias para a perda eliminação da gordura. • Enzimas para flacidez: Assim como o colágeno, os demais componentes utilizados no procedimento em questão também podem oferecer um bom suporte para a redução de flacidez, desconforto muito comum em mulheres que perderam muito peso, e ficam com excesso de pele. • Enzimas para estrias: Aplicação de substancias que auxiliam na regeneração da pele, estimulando a produção de colágeno e elastina, com o objetivo de afinar as estrias. A aplicação é realizada em toda a extensão da estria, uma a uma.",
            "categorie": "Procedimentos Biomédicos",
            "subCategorie": "",
            "price": "",
            "imageUrl": "enzimas.png",
            "durationTime": "60",
            "_id": "62865ba6a6ab653382fd9ae0"
        }
    ],
    "__v": 0
}