<template>
  <v-container>
    <v-layout>
      <TheToolbar :page-title="title" />
      <v-flex>
        <v-subheader id="orders">
          Orders
        </v-subheader>
        <v-subheader id="recipes">
          Recipes
        </v-subheader>
        <v-select
          :items="volumes"
          label="Output Volume Unit"
          box
        />
        <v-select
          :items="masses"
          label="Output Mass Unit"
          box
        />
        <v-text-field
          label="Sales Tax Rate"
          type="number"
          box
          append-inner-icon="percentage"
        />
        <v-text-field
          label="Decimal Place Accuracy"
          type="number"
          box
        />
        <v-subheader id="pos-items">
          POS
        </v-subheader>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import convert from 'convert-units';
import TheToolbar from '@/components/TheToolbar';

export default {
  components: {
    TheToolbar,
  },

  data () {
    return {
      title: 'Settings',
    }
  },

  head () {
    return {
      title: this.title,
      titleTemplate: '%s | Boozehound',
    }
  },

  computed: {
    volumes() {
      return convert().possibilities('volume')
    },
    masses() {
      return convert().possibilities('mass')
    },
  }
};
</script>
