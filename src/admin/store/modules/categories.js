export default{
    namespaced: true,
    state: {
        categories: []
    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories
        },
        ADD_CATEGORY(state, category) {
            state.categories.unshift(category);
        },
        ADD_SKILL(state, newSkill) {
            state.categories = state.categories.map(category => {
                if(category.id === newSkill.category) {
                    category.skills.push(newSkill);
                }
                return category
            })
        },
        REMOVE_SKILL(state, deletedSkill) {
            state.categories = state.categories.map(category => {
                if(category.id === skill.category) {
                    category.skills = category.skills.filter(skill => skill.id !== deletedSkill.id)
                }
                return category;
            })
        }
    },
    actions: {
        async addCategory({commit}, title){
           try{
            const {data} = await this.$axios.post("/categories", {title});          
            commit("ADD_CATEGORY", data)

           }catch(error) {
               throw new Error(error.response.data.error || error.response.data.message)
           }
        },
        async fetchCategories({ commit }) {
            try {
                const { data } = await this.$axios.get("/categories/203");
                
                commit("SET_CATEGORIES", data)
                
            } catch (error) {
                
            }
        }
    }
}