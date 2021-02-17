<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Fragment extends Vue {
  public render(c, ctx) {
    return ctx.children;
  }
}
</script>
