# GymBoss na Blink — sua cópia

1. Abra o modelo e clique em **Remix**. Use **Ver demonstração** para conhecer as telas com dados fictícios.
2. Cole o comando abaixo, trocando somente seu email. O backend deste modelo requer um plano Blink que permita backend (Pro na conta de teste). Se o plano bloquear, confira o aviso e decida antes de assinar. Nenhuma contratação deve ser feita automaticamente.
3. Abra a prévia em outra aba, clique em **Entrar ou criar minha conta** e use o mesmo email. O login no aplicativo é separado do login no editor.
4. No painel Master, use **Nova academia**. Cadastre seu próprio email como administrador para testar. Em **Academias → menu → Abrir academia**, cadastre planos, alunos e horários, faça check-in e registre lançamentos.
5. Compartilhe o link **/agendar/SLUG**: interessados enviam solicitações de aula experimental, trial ou plano. A recepção confirma manualmente. Personalize marca, valores e oferta antes de vender.

## Prompt para colar

Ative esta cópia do GymBoss seguindo BLINK_ALUNOS.md. Meu email de administrador é SEU_EMAIL_AQUI. Preserve as telas e funções existentes. Configure login, banco e backend DESTA cópia. Se o plano bloquear o backend, explique e aguarde minha decisão. Entregue o link de acesso e os próximos cliques.

## Instalação técnica para a IA

- Código pronto: não recriar o sistema, gerar imagens ou migrar para Supabase.
- Usar exclusivamente ID, chave pública e backend do projeto atual. Não copiar dados de clientes, usuários ou segredos do modelo original.
- Definir `OWNER_PROJECT_ID` com o ID atual e `OWNER_EMAIL` com o email indicado. Não herdar `OWNER_USER_ID`. O Master só é concedido à identidade autorizada com email verificado; o primeiro visitante não vira dono.
- Definir `VITE_BLINK_PROJECT_ID`, `VITE_BLINK_PUBLISHABLE_KEY` e `VITE_BLINK_BACKEND_URL`. Backend: `https://ULTIMOS_8_CARACTERES_DO_ID.backend.blink.new`.
- Aplicar `scripts/native/security-policy.json`: tabelas de negócio e autenticação com SDK público bloqueado e SQL público proibido. O backend aplica academia e papéis a cada operação.
- Executar `npm install`, `npm run build:backend`. Implantar SOMENTE a pasta `backend` com `backend/index.ts` como função `index`. `server/` contém os fontes, não são funções separadas.
- Antes de testar `/health`, provisionar o banco desta cópia com `blink db query 'SELECT 1 AS health'`. Se aparecer `Database not found`, repetir esse provisionamento e então `/health`. Confirmar que o projeto atual possui sua própria chave secreta de backend; usar apenas a configuração oficial de chaves da Blink, sem herdar a chave do modelo. A chave fica no backend, nunca em variáveis `VITE_`.
- O build de backend usa `minify: true` para reduzir o pacote e evitar erro `INTERNAL` no deploy. Manter essa opção.
- O backend cria esquema, índices e triggers completos na primeira chamada. Não fragmentar triggers no CLI SQL; usar o `blink.db.batch` de `server/native/bootstrap.ts`.
- Executar `npm run typecheck`, `npm test`, `npm run build`. Conferir `/health` e `/api/bootstrap` com `configured: true`. Salvar versão com todos os arquivos no editor, não apenas o deploy estático.
- Se aparecer “Adicionar segredos”, usar os valores exclusivos desta cópia. O estudante não precisa de Evolution, Google ou OpenAI para a operação básica.
- Não ativar hospedagem de produção nem plano pago sem a decisão do titular. A prévia pode exigir autorização de acesso Blink. Publicação em produção e domínio são escolhas separadas, com custos exibidos pela plataforma.

## Escopo real

Gestão de alunos, planos, grade de aulas, check-ins, leads, financeiro manual, relatórios, equipe, marca e painel Master. Um check-in por aluno por dia evita clique duplicado. A página pública registra interesse, não reserva vaga nem confirma pagamento automaticamente. Vincular um plano ao aluno não emite cobrança recorrente.

O AI Growth usa regras sobre pagamentos marcados em atraso e check-ins. Não chama modelo de IA. WhatsApp abre link para envio manual; emails e lembretes comerciais não são automáticos. Equipe entra com seu próprio email verificado após ser cadastrada. O administrador não gera nem redefine senhas de terceiros.

Relatórios usam dados reais registrados; histórico de retenção/cancelamento não é estimado. Não há prescrição de treino nem gateway de pagamento conectado no código original. Dados de demonstração ficam somente na área Demo; banco de alunos começa vazio.

Validação: testes locais de domínio e isolamento e verificações online com dados fictícios removidos ao final. Login real do administrador e Remix em outra conta devem ser verificados pelo titular; não são garantidos por um build.
