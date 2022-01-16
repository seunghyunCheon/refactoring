import ListView from './ListView.vue'
import bus from '../utils/bus.js'
//하이오더 컴포넌트
export default function createListView(name) {
  return {
    name: name,
    //재사용하는 부분.
    created() {
      bus.$emit('start:spinner');
      console.log(this.$route.name);
        this.$store.dispatch('FETCH_LIST', this.$route.name)
          .then(() => {
            bus.$emit('end:spinner');
          }) //dispatch : vuex의 action을 실행
          .catch((err) => console.log(err)); 
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}