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
							message: 'Mi piacerebbe ma devo andare a fare la spesa.',
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
					name: 'Andrea',
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
					name: 'Carlo',
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
				}
			],
			newMessage: '',
			autoMessage: '',
			activeContact: 0,
			searchContact: '',
			showOption: ''
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
				let lastMessage = this.contacts[index].messages[this.contacts[index].messages.length - 1 ].message;
				if(lastMessage.length > 20){
					lastMessage = lastMessage.slice(0,20)+'...'
				}
				return lastMessage;
			},
			getLastDate(index){
				let lastDate = this.contacts[index].messages[this.contacts[index].messages.length - 1 ].date;
				
				return lastDate;
			},
			filterContact() {
				return this.contacts.filter(contact =>
					contact.name.toLowerCase().includes(this.searchContact.toLowerCase()))
			},
			showList(message) {
				if(this.showOption === '') {
					this.showOption = message.message;
				}else {
					this.showOption = '';
				}
			},
			removeMessage(index){
				this.contacts[this.activeContact].messages.splice(index,1)
			}
		}
})

dayjs.extend(window.dayjs_plugin_customParseFormat);

dayjs.locale('it');