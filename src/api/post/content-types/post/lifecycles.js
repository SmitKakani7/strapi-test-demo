module.exports = {
    afterCreate(event) {
        const { result } = event;
        strapi.entityService.create('api::comment.comment', {
            data: {
                description: result.title, // Use post title as comment description
            },
        });
        strapi.entityService.create('api::ticket.ticket', {
            data: {
                price: 100, // Set 100 as price
                name: result.title, // Use post title as the ticket name
                status: 'active', // Set Ticket to active
            },
        });
    },
}