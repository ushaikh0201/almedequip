db.products.aggregate(
        [{
          	$lookup: {
                    from: "product_categories",
                    localField: "cat_id",
                    foreignField: "_id",
                    as: "product_categories"
                }
            },
            {
          	$lookup: {
                    from: "status",
                    localField: "status",
                    foreignField: "_id",
                    as: "status"
                }
            },
            {
                "$project": {
                    _id: 1,
                    name: 1,
                    code: 1,
                    price: 1,
                    status: 1,
                    cat_id: 1,
                    main_content: 1,
                    description: 1,
                    tech_spec: 1,
                    usage: 1,
                    "product_categories": { "$arrayElemAt": ["$product_categories", 0] },
                    "status": { "$arrayElemAt": ["$status", 0] }
                }
            },
            { '$sort': { '_id': -1 } }
        ])
