module.exports = {
    afterCreate(event) {
        const { result } = event;
        strapi.entityService.findMany('api::comment.comment', {
            filters: {
                description: result.name,
            },
        }).then((response) => {
            const latestEntryIndex = response.length - 1
            if (response[latestEntryIndex].id) {
                strapi.entityService.update('api::comment.comment', response[latestEntryIndex].id, {
                    data: {
                        ticket: result.id,
                    },
                });
            }
        });
    },
}