// Roteador de Métodos HTTP
const metodoHttp = "PUT";

switch (metodoHttp) {
    case "GET":
        console.log("Buscando dados no banco de dados...");
        break;
    case "POST":
        console.log("Criando um novo registro...");
        break;
    case "PUT":
        console.log("Atualizando os dados do registro...");
        break;
    case "DELETE":
        console.log("Registro removido com sucesso.");
        break;
    default:
        console.log("Erro: Método não permitido para esta rota.");
}

// Seletor de Banco de Dados por Ambiente
const ambiente = "dev";

switch (ambiente) {
    case "dev":
        console.log("Conectando ao banco de dados local (SQLite).");
        break;
    case "test":
        console.log("Conectando ao banco de dados em memória.");
        break;
    case "prod":
        console.log("Conectando ao banco de dados oficial na nuvem (PostgreSQL).");
        break;
    default:
        console.log("CRÍTICO: Ambiente não reconhecido. Encerrando o servidor.")
        break;
}

// Processador de Comandos do Terminal (CLI)
const comando = "start";

switch (comando) {
    case "start":
    case "restart":
        console.log("Iniciando o servidor de aplicação...");
        break;
    case "stop":
        console.log("Desligando o servidor com segurança...");
        break;
    case "status":
        console.log("O servidor está rodando na porta 3000.");
        break;
    default:
        console.log("Comando não encontrado. Digite 'help' para ver a lista de comandos.");
}

// Tratamento de Códigos de Status HTTP (Status Codes)
const statusCode = "404";

switch (statusCode) {
    case "200":
    case "201":
        console.log("Sucesso: Requisição processada corretamente.");
        break;
    case "400":
        console.log("Erro na requisição: Verifique os dados enviados.");
        break;
    case "401":
    case "403":
        console.log("Acesso negado: Você não tem permissão ou precisa fazer login.");
        break;
    case "404":
        console.log("Não encontrado: O recurso solicitado não existe.");
        break;
    case "500":
        console.log("Não encontrado: O recurso solicitado não existe.");
        break;
    default:
        console.log("Código de status desconhecido.");
        break;
}

// Controle de Permissões de Usuário (RBAC - Role-Based Access Control)
const perfilUsuario = "admin";

switch (perfilUsuario) {
    case "admin":
        console.log("Acesso Total: Gerenciar usuários, configurações e conteúdos.");
        break;
    case "editor":
        console.log("Acesso Intermediário: Criar e editar conteúdos publicados.");
        break;
    case "aluno":
    case "visitante":
        console.log("Acesso Somente Leitura: Visualizar materiais disponíveis.");
        break;
    default:
        console.log("Perfil inválido: Conta bloqueada por segurança.");
        break;
}

// Processador de Eventos de Webhook de Pagamento
const eventoPagamento = "payment.approved"

switch (eventoPagamento) {
    case "payment.approved":
        console.log("Pagamento confirmado! Liberando envio do produto.");
        break;
    case "payment.pending":
        console.log("Aguardando compensação do pagamento...");
        break;
    case "payment.failed":
        console.log("Falha no pagamento: Notificando cliente para tentar outro cartão.");
        break;
    case "payment.refunded":
        console.log("Estorno realizado: Cancelando pedido e devolvendo estoque.");
        break;
    default:
        console.log("Evento ignorado pelo sistema.");
        break;
}

// Roteador de Extensões de Arquivos para Upload
const extensaoArquivo = ".mp4"

switch (extensaoArquivo) {
    case ".jpg":
    case ".png":
    case ".gif":
        console.log("Arquivo de imagem detectado. Salvando na galeria...");
        break;
    case ".pdf":
    case ".docx":
        console.log("Documento detectado. Salvando na pasta de arquivos...");
        break;
    case ".mp4":
    case ".mov":
        console.log("Vídeo detectado. Enviando para processamento de mídia...");
        break;
    case ".exe":
    case ".bat":
        console.log("Bloqueado: Arquivos executáveis não são permitidos por segurança.");
        break;
    default:
        console.log("Formato não suportado pelo sistema.");
        break;
}