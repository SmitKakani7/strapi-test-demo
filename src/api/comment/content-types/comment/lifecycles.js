module.exports = {
    afterCreate(event) {
        const { result } = event;
        strapi.entityService.findMany('api::post.post', {
            filters: {
                title: result.description,
            },
        }).then((response) => {
            const latestEntryIndex = response.length - 1
            if (response[latestEntryIndex].id) {
                strapi.entityService.update('api::post.post', response[latestEntryIndex].id, {
                    data: {
                        comments: result.id,
                    },
                });
            }
        });
    },
}