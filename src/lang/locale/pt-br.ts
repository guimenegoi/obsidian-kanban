// Português do Brasil
// Brazilian Portuguese
import { Lang } from './en';

const lang: Partial<Lang> = {
  // main.ts
  'Create new board': 'Criar um novo quadro',
  'Archive completed cards in active board': 'Arquivar cartões concluídos no quadro ativo',
  'Error: current file is not a Kanban board': 'Erro: o arquivo atual não é um quadro Kanban',
  'Convert empty note to Kanban': 'Converter nota vazia em Kanban',
  'Error: cannot create Kanban, the current note is not empty':
    'Erro: não é possível criar o quadro Kanban, a nota atual não está vazia',
  'Untitled Kanban': 'Kanban sem título',
  'Toggle between Kanban and markdown mode': 'Alternar entre os modos Kanban e Markdown',

  // KanbanView.tsx
  'Open as markdown': 'Abrir como markdown',
  'Open board settings': 'Abrir configurações do quadro Kanban',
  'Archive completed cards': 'Arquivar cartões concluídos',

  // parser.ts
  Complete: 'Concluído',
  Archive: 'Arquivado',

  // settingHelpers.ts
  'Note: No template plugins are currently enabled.':
    'Nota: não há plugins de modelo habilitados no momento.',
  default: 'padrão',
  'Search...': 'Pesquisar...',

  // Settings.ts
  'Show ribbon button': 'Mostrar botão na faixa lateral',
  'Show the Kanban create-board button in the left ribbon. Disabled by default in this fork to avoid workspace/localization glitches.':
    'Mostra o botão para criar um quadro Kanban na faixa lateral esquerda. Desativado por padrão neste fork para evitar falhas de workspace e localização.',
  Swimlanes: 'Listas em múltiplas linhas',
  'Wrap lanes onto multiple rows instead of forcing one long horizontal row.':
    'Distribui as listas em múltiplas linhas em vez de mantê-las em uma única linha horizontal longa.',
  'New line trigger': 'Atalho para nova linha',
  'Select whether Enter or Shift+Enter creates a new line. The opposite of what you choose will create and complete editing of cards and lists.':
    'Define se Enter ou Shift+Enter cria uma nova linha. A combinação oposta cria e conclui a edição de cartões e listas.',
  'Shift + Enter': 'Shift + Enter',
  Enter: 'Enter',
  'Prepend / append new cards': 'Posição dos novos cartões',
  'This setting controls whether new cards are added to the beginning or end of the list.':
    'Define se novos cartões são adicionados no início ou no final da lista.',
  Prepend: 'Adicionar no início',
  'Prepend (compact)': 'Adicionar no início (compacto)',
  Append: 'Adicionar no final',
  'These settings will take precedence over the default Kanban board settings.':
    'Estas configurações têm prioridade sobre as configurações padrão do Kanban.',
  'Set the default Kanban board settings. Settings can be overridden on a board-by-board basis.':
    'Defina as configurações padrão do Kanban. Elas podem ser substituídas individualmente em cada quadro.',
  'Note template': 'Modelo de nota',
  'This template will be used when creating new notes from Kanban cards.':
    'Este modelo será usado ao criar novas notas a partir de cartões do Kanban.',
  'No template': 'Sem modelo',
  'Note folder': 'Pasta das notas',
  'Notes created from Kanban cards will be placed in this folder. If blank, they will be placed in the default location for this vault.':
    'As notas criadas a partir de cartões do Kanban serão salvas nesta pasta. Se o campo ficar vazio, será usado o local padrão do cofre.',
  'Default folder': 'Pasta padrão',
  'List width': 'Largura das listas',
  'Expand lists to full width in list view': 'Expandir listas para ocupar toda a largura na visualização em lista',
  'Enter a number to set the list width in pixels.':
    'Informe a largura das listas em pixels.',
  'Maximum number of archived cards': 'Número máximo de cartões arquivados',
  "Archived cards can be viewed in markdown mode. This setting will begin removing old cards once the limit is reached. Setting this value to -1 will allow a board's archive to grow infinitely.":
    'Os cartões arquivados podem ser vistos no modo Markdown. Ao atingir o limite, os cartões mais antigos serão removidos. Use -1 para não limitar o número de cartões arquivados.',
  'Display card checkbox': 'Exibir caixa de seleção nos cartões',
  'When toggled, a checkbox will be displayed with each card':
    'Quando ativado, cada cartão exibirá uma caixa de seleção.',
  'Reset to default': 'Restaurar padrão',
  'Date & Time': 'Data e hora',
  'Date trigger': 'Gatilho de data',
  'When this is typed, it will trigger the date selector':
    'Ao digitar este caractere, o seletor de data será aberto.',
  'Time trigger': 'Gatilho de hora',
  'When this is typed, it will trigger the time selector':
    'Ao digitar este caractere, o seletor de hora será aberto.',
  'Date format': 'Formato da data',
  'This format will be used when saving dates in markdown.':
    'Este formato será usado ao salvar datas no Markdown.',
  'For more syntax, refer to': 'Para mais informações sobre a sintaxe, consulte',
  'format reference': 'a referência de formatos.',
  'Your current syntax looks like this': 'A sintaxe atual resulta em',
  'Time format': 'Formato da hora',
  'Date display format': 'Formato de exibição da data',
  'This format will be used when displaying dates in Kanban cards.':
    'Este formato será usado para exibir datas nos cartões do Kanban.',
  'Show relative date': 'Exibir data relativa',
  "When toggled, cards will display the distance between today and the card's date. eg. 'In 3 days', 'A month ago'. Relative dates will not be shown for dates from the Tasks and Dataview plugins.":
    "Quando ativado, os cartões exibirão a distância entre hoje e a data do cartão, como 'em 3 dias' ou 'há um mês'. Datas provenientes dos plugins Tasks e Dataview não serão exibidas de forma relativa.",
  'Move dates to card footer': 'Mover datas para o rodapé do cartão',
  "When toggled, dates will be displayed in the card's footer instead of the card's body.":
    'Quando ativado, as datas serão exibidas no rodapé do cartão em vez do corpo.',
  'Move tags to card footer': 'Mover tags para o rodapé do cartão',
  "When toggled, tags will be displayed in the card's footer instead of the card's body.":
    'Quando ativado, as tags serão exibidas no rodapé do cartão em vez do corpo.',
  'Move task data to card footer': 'Mover dados de tarefas para o rodapé do cartão',
  "When toggled, task data (from the Tasks plugin) will be displayed in the card's footer instead of the card's body.":
    'Quando ativado, os dados de tarefas do plugin Tasks serão exibidos no rodapé do cartão em vez do corpo.',
  'Inline metadata position': 'Posição dos metadados inline',
  'Controls where the inline metadata (from the Dataview plugin) will be displayed.':
    'Define onde serão exibidos os metadados inline provenientes do plugin Dataview.',
  'Card body': 'Corpo do cartão',
  'Card footer': 'Rodapé do cartão',
  'Merge with linked page metadata': 'Mesclar com metadados da página vinculada',
  'Hide card counts in list titles': 'Ocultar contagem de cartões nos títulos das listas',
  'When toggled, card counts are hidden from the list title':
    'Quando ativado, a contagem de cartões não será exibida no título das listas.',
  'Link dates to daily notes': 'Vincular datas às notas diárias',
  'When toggled, dates will link to daily notes. Eg. [[2021-04-26]]':
    'Quando ativado, as datas serão vinculadas às notas diárias. Ex.: [[2021-04-26]]',
  'Add date and time to archived cards': 'Adicionar data e hora aos cartões arquivados',
  'When toggled, the current date and time will be added to the card title when it is archived. Eg. - [ ] 2021-05-14 10:00am My card title':
    'Quando ativado, a data e a hora atuais serão adicionadas ao título do cartão ao arquivá-lo. Ex.: - [ ] 2021-05-14 10:00 Meu cartão',
  'Add archive date/time after card title': 'Adicionar data e hora de arquivamento após o título',
  'When toggled, the archived date/time will be added after the card title, e.g.- [ ] My card title 2021-05-14 10:00am. By default, it is inserted before the title.':
    'Quando ativado, a data e a hora de arquivamento serão adicionadas após o título do cartão. Por padrão, são inseridas antes do título.',
  'Archive date/time separator': 'Separador da data e hora de arquivamento',
  'This will be used to separate the archived date/time from the title':
    'Este texto será usado para separar a data e a hora de arquivamento do título.',
  'Archive date/time format': 'Formato da data e hora de arquivamento',
  'Kanban Plugin': 'Plugin Kanban',
  'Tag click action': 'Ação ao clicar em uma tag',
  'Search Kanban Board': 'Pesquisar no quadro Kanban',
  'Search Obsidian Vault': 'Pesquisar no cofre do Obsidian',
  'This setting controls whether clicking the tags displayed below the card title opens the Obsidian search or the Kanban board search.':
    'Define se clicar em uma tag exibida no cartão abre a pesquisa do Obsidian ou a pesquisa do quadro Kanban.',
  'Tag colors': 'Cores das tags',
  'Set colors for tags displayed in cards.': 'Defina as cores das tags exibidas nos cartões.',
  'Linked Page Metadata': 'Metadados da página vinculada',
  'Inline Metadata': 'Metadados inline',
  'Display metadata for the first note linked within a card. Specify which metadata keys to display below. An optional label can be provided, and labels can be hidden altogether.':
    'Exibe os metadados da primeira nota vinculada em um cartão. Defina abaixo quais propriedades devem ser exibidas. É possível informar um rótulo personalizado ou ocultá-lo.',
  'Board Header Buttons': 'Botões do cabeçalho do quadro',
  'Calendar: first day of week': 'Calendário: primeiro dia da semana',
  'Override which day is used as the start of the week':
    'Define qual dia será considerado o início da semana.',
  Sunday: 'Domingo',
  Monday: 'Segunda-feira',
  Tuesday: 'Terça-feira',
  Wednesday: 'Quarta-feira',
  Thursday: 'Quinta-feira',
  Friday: 'Sexta-feira',
  Saturday: 'Sábado',
  'Background color': 'Cor de fundo',
  Tag: 'Tag',
  'Text color': 'Cor do texto',
  'Date is': 'A data é',
  Today: 'Hoje',
  'After now': 'Posterior a agora',
  'Before now': 'Anterior a agora',
  'Between now and': 'Entre agora e',
  'Display date colors': 'Exibir cores por data',
  'Set colors for dates displayed in cards based on the rules below.':
    'Defina as cores das datas exibidas nos cartões de acordo com as regras abaixo.',
  'Add date color': 'Adicionar cor de data',

  // MetadataSettings.tsx
  'Metadata key': 'Propriedade de metadado',
  'Display label': 'Rótulo de exibição',
  'Hide label': 'Ocultar rótulo',
  'Drag to rearrange': 'Arraste para reorganizar',
  Delete: 'Excluir',
  'Add key': 'Adicionar propriedade',

  // components/Item/Item.tsx
  'More options': 'Mais opções',
  Cancel: 'Cancelar',

  // components/Item/ItemContent.tsx
  today: 'hoje',
  yesterday: 'ontem',
  tomorrow: 'amanhã',
  'Change date': 'Alterar data',
  'Change time': 'Mudar hora',

  // components/Item/ItemForm.tsx
  'Card title...': 'Título do item...',
  'Add card': 'Adicionar Item',
  'Add a card': 'Adicione um cartão',

  // components/Item/ItemMenu.ts
  'Edit card': 'Editar cartão',
  'New note from card': 'Nova nota do cartão',
  'Archive card': 'Arquivar cartão',
  'Delete card': 'Excluir cartão',
  'Edit date': 'Editar data',
  'Add date': 'Adicionar data',
  'Remove date': 'Remover data',
  'Edit time': 'Editar hora',
  'Add time': 'Adicionar hora',
  'Remove time': 'Remover hora',
  'Duplicate card': 'Duplicate card',

  // components/Lane/LaneForm.tsx
  'Enter list title...': 'Insira o título da lista...',
  'Mark cards in this list as complete': 'Marcar os itens nesta lista como concluídos',
  'Add list': 'Adicionar lista',
  'Add a list': 'Adicionar uma lista',

  // components/Lane/LaneHeader.tsx
  'Move list': 'Mover lista',
  Close: 'Fechar',

  // components/Lane/LaneMenu.tsx
  'Are you sure you want to delete this list and all its cards?':
    'Tem certeza de que deseja excluir esta lista e todos os seus cartões?',
  'Yes, delete list': 'Sim, excluir esta lista',
  'Are you sure you want to archive this list and all its cards?':
    'Tem certeza de que deseja arquivar esta lista e todos os seus cartões?',
  'Yes, archive list': 'Sim, arquivar esta lista',
  'Are you sure you want to archive all cards in this list?':
    'Tem certeza de que deseja arquivar todos os cartões desta lista?',
  'Yes, archive cards': 'Sim, arquivar cartões',
  'Edit list': 'Editar lista',
  'Archive cards': 'Arquivar cartões',
  'Archive list': 'Arquivar lista',
  'Delete list': 'Excluir lista',
};

export default lang;
