const app = new Vue({
    el: '#app',
    data:{
      contacts: [
        {
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              text: 'Hai portato a spasso il cane?',
              status: 'send'
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Ricordati di dargli da mangiare',
              status: 'send'
            },
            {
              date: '10/01/2020 16:15:22',
              text: 'Tutto fatto!',
              status: 'received'
            }
          ]
        },
        {
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [
            {
              date: '20/03/2020 15:30:55',
              text: 'Hai portato a spasso il cane?',
              status: 'send'
            },
            {
              date: '20/03/2020 15:50:00',
              text: 'Ricordati di dargli da mangiare',
              status: 'send'
            },
            {
              date: '20/03/2020 16:15:22',
              text: 'Tutto fatto!',
              status: 'received'
            }
          ]
        },
        {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [
            {
              date: '20/03/2020 15:30:55',
              text: 'Hai portato a spasso il cane?',
              status: 'send'
            },
            {
              date: '20/03/2020 15:50:00',
              text: 'Ricordati di dargli da mangiare',
              status: 'send'
            },
            {
              date: '20/03/2020 16:15:22',
              text: 'Tutto fatto!',
              status: 'received'
            }
          ]
        },
        {
          name: 'Luisa',
          avatar: '_4',
          visible: true,
          messages: [
            {
              date: '20/03/2020 15:30:55',
              text: 'Hai portato a spasso il cane?',
              status: 'send'
            },
            {
              date: '20/03/2020 15:50:00',
              text: 'Ricordati di dargli da mangiare',
              status: 'send'
            },
            {
              date: '20/03/2020 16:15:22',
              text: 'Tutto fatto!',
              status: 'received'
            }
          ]
        }
    
      ]
    }
  })

