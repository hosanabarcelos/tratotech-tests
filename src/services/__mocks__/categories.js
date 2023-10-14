import mockCategories from "mocks/categories";

const categoriesService = {
    search: () => mockCategories,
    categorySearch: () => mockCategories[0],
}

export default categoriesService;