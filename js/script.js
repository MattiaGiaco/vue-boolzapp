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
							message: 'Hai portato a spasso il cane?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'Ricordati di dargli da mangiare',
							status: 'sent'
						},
						{
							date: '10/01/2020 16:15:22',
							message: 'Tutto fatto!',
							status: 'received'
						}
					]
				},
				{
					name: 'Fabio',
					avatar: '_2',
					visible: true,
					messages:[
						{
							date: '20/03/2020 16:30:00',
							message: 'Ciao come stai?',
							status: 'sent'
						},
						{
							date: '20/03/2020 16:30:55',
							message: 'Bene grazie! Stasera ci vediamo?',
							status: 'received'
						},
						{
							date: '20/03/2020 16:35:00',
							message: 'Mi piacerebbe ma devo andare a fare la spesa.',
							status: 'received'
						}
					]
				},
				{
					name: 'Samuele',
					avatar: '_3',
					visible: true,
					messages:[
						{
							date: '28/03/2020 10:10:40',
							message: 'La Marianna va in campagna',
							status: 'received'
						},
						{
							date: '28/03/2020 10:20:10',
							message: 'Sicuro di non aver sbagliato chat?',
							status: 'sent'
						},
						{
							date: '28/03/2020 16:15:22',
							message: 'Ah scusa!',
							status: 'received'
						}
					]
				},
				{
					name: 'Luisa',
					avatar: '_4',
					visible: true,
					messages:[
						{
							date: '10/01/2020 15:30:55',
							message: 'Lo sai che ha aperto una nuova pizzeria?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'Si, ma preferirei andare al cinema',
							status: 'received'
						}
					]
				},
				{
					name: 'Marco',
					avatar: '_2',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							message: 'Hai staccato?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'Ricordati il latte',
							status: 'sent'
						},
						{
							date: '10/01/2020 16:15:22',
							message: 'Ora vado',
							status: 'received'
						}
					]
				},
				{
					name: 'Fabrizio',
					avatar: '_3',
					visible: true,
					messages:[
						{
							date: '20/03/2020 16:30:00',
							message: 'Ciao come stai?',
							status: 'sent'
						},
						{
							date: '20/03/2020 16:30:55',
							message: 'Bene grazie! Stasera ci vediamo?',
							status: 'received'
						},
						{
							date: '20/03/2020 16:35:00',
							message: 'Si! Andiamo al pub',
							status: 'received'
						}
					]
				},
				{
					name: 'Lorenzo',
					avatar: '_1',
					visible: true,
					messages:[
						{
							date: '28/03/2020 11:10:40',
							message: 'Cristina va a Londra',
							status: 'received'
						},
						{
							date: '28/03/2020 10:20:10',
							message: 'Davvero?',
							status: 'sent'
						},
						{
							date: '28/03/2020 16:25:22',
							message: 'Si, parte domani',
							status: 'received'
						}
					]
				},
				{
					name: 'Andrea',
					avatar: '_4',
					visible: true,
					messages:[
						{
							date: '10/01/2020 15:45:55',
							message: 'Lo sai che ha aperto una nuova pizzeria?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'Ci andiamo?',
							status: 'received'
						}
					]
				},
				{
					name: 'Carlo',
					avatar: '_1',
					visible: true,
					messages: [
						{
							date: '10/01/2020 16:30:55',
							message: 'Hai portato a spasso il cane?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							message: 'Ricordati di dargli da mangiare',
							status: 'sent'
						},
						{
							date: '10/01/2020 16:15:22',
							message: 'Tutto fatto!',
							status: 'received'
						}
					]
				}
			],
			newMessage: '',
			autoMessage: '',
			activeContact: 0,
			searchContact: '',
			showOption: -1
    },
		methods:{
			showContact(index) {
				console.log(index);
				this.activeContact = index
			},
			AddNewMessage() {
				let userMessage = {
					date: dayjs().format('DD/MM/YYYY hh:mm:ss'),
					message: this.newMessage,
					status: 'sent'
				}
				if(this.newMessage != ''){
					this.contacts[this.activeContact].messages.push(userMessage);
					this.newMessage = '';

					setTimeout(this.addAutoMessage, 3000)
				}
			},
			addAutoMessage(){
				let receivedMessage = {
					date: dayjs().format('DD/MM/YYYY hh:mm:ss'),
					message: 'Ok!',
					status: 'received'
				}
				this.contacts[this.activeContact].messages.push(receivedMessage);
			},
			getLastMessage(index){
				let lastMessage = '';
				
				if(this.contacts[index].messages.length > 0){
					lastMessage = this.contacts[index].messages[this.contacts[index].messages.length - 1 ].message;
				}

				if(lastMessage.length > 20){
					lastMessage = lastMessage.slice(0,20)+'...'
				}
				return lastMessage;
			},
			getLastDate(index){
				let lastDate = '';

				if(this.contacts[index].messages.length > 0){
					lastDate = this.contacts[index].messages[this.contacts[index].messages.length - 1 ].date;
				}
				
				return lastDate;
			},
			filterContact() {
				return this.contacts.filter(contact =>
					contact.name.toLowerCase().includes(this.searchContact.toLowerCase()))
			},
			showList(index) {
				if(this.showOption === -1) {
					this.showOption = index;
				}else {
					this.showOption = -1
				}
			},
			removeMessage(index){
				this.contacts[this.activeContact].messages.splice(index,1);
			}
		}
})

dayjs.extend(window.dayjs_plugin_customParseFormat);

dayjs.locale('it');