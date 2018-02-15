<template>
  <div id="app">
    <jv-board v-model="posicoes" @jogar="jogarPartida"></jv-board>
    <div class="options">
      <button class="reset" @click="reiniciar">reiniciar</button>
      <div>
        <h1>
          JOGADOR
          {{ vezDe }}
          <h1 v-show="alguemGanhou">GANHOU</h1>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import jvBoard from './components/jvBoard'

const allEqual = arr => arr.every(v => v === arr[0])

export default {
  name: 'app',
  components: { jvBoard },
  data() {
    return {
      vezDe: 'X',
      alguemGanhou: false,
      posicoes: {
        A1: {
          nome: 'A1',
          exibir: null,
          ganhou: false,
          verificar: ['linha1', 'coluna1', 'vertical1'],
          edge: ['B1', 'C1', 'A2', 'A3']
        },
        B1: {
          exibir: null,
          ganhou: false,
          verificar: ['linha1', 'coluna2'],
          edge: ['A1', 'C1', 'B2', 'B3']
        },
        C1: {
          exibir: null,
          ganhou: false,
          verificar: ['linha1', 'coluna3', 'vertical2'],
          edge: ['A1', 'B1', 'C2', 'C3']
        },
        A2: {
          exibir: null,
          ganhou: false,
          verificar: ['linha2', 'coluna1'],
          edge: ['B2', 'C2', 'A1', 'A3']
        },
        B2: {
          exibir: null,
          ganhou: false,
          verificar: ['linha2', 'coluna2', 'vertical1', 'vertical2'],
          edge: ['A2', 'C2', 'B1', 'B3']
        },
        C2: {
          exibir: null,
          ganhou: false,
          verificar: ['linha2', 'coluna3'],
          edge: ['A1', 'B2', 'C1', 'C3']
        },
        A3: {
          exibir: null,
          ganhou: false,
          verificar: ['linha3', 'coluna1', 'vertical2'],
          edge: ['B3', 'C3', 'A1', 'A2']
        },
        B3: {
          exibir: null,
          ganhou: false,
          verificar: ['linha3', 'coluna2'],
          edge: ['A3', 'C3', 'B1', 'B2']
        },
        C3: {
          exibir: null,
          ganhou: false,
          verificar: ['linha3', 'coluna3', 'vertical1'],
          edge: ['A3', 'B3', 'C1', 'C2']
        }
      }
    }
  },
  computed: {
    linha1() {
      return [this.posicoes.A1, this.posicoes.B1, this.posicoes.C1]
    },
    linha2() {
      return [this.posicoes.A2, this.posicoes.B2, this.posicoes.C2]
    },
    linha3() {
      return [this.posicoes.A3, this.posicoes.B3, this.posicoes.C3]
    },
    coluna1() {
      return [this.posicoes.A1, this.posicoes.A2, this.posicoes.A3]
    },
    coluna2() {
      return [this.posicoes.B1, this.posicoes.B2, this.posicoes.B3]
    },
    coluna3() {
      return [this.posicoes.C1, this.posicoes.C2, this.posicoes.C3]
    },
    vertical1() {
      return [this.posicoes.A1, this.posicoes.B2, this.posicoes.C3]
    },
    vertical2() {
      return [this.posicoes.A3, this.posicoes.B2, this.posicoes.C1]
    }
  },
  methods: {
    verificarSeGanhou(posicoes) {
      if (!this.alguemGanhou) {
        console.log('verifica se ganhou')
        let haUmganhador = false
        let self = this
        let idx = 0
        posicoes.forEach(function(_pos) {
          idx++
          console.log(`#${idx}`, _pos)
          let posicoesVerificar = self[_pos]
          const marcados = posicoesVerificar.map(i => i.exibir)
          console.log(`#${idx}`, marcados)
          let haUmganhador = allEqual(marcados)
          self.alguemGanhou = self.alguemGanhou || haUmganhador
          posicoesVerificar.forEach(i => (i.ganhou = i.ganhou || haUmganhador))
          console.log(`#${idx}`, haUmganhador ? 'GANHOU' : 'nao ganhou')
        })
      }
    },
    jogarPartida(pos) {
      console.log('jogar partida')
      let vezDeJogar = this.vezDe
      let ninguemGanhou = !this.alguemGanhou
      let self = this
      if (ninguemGanhou) {
        pos.exibir = vezDeJogar
        self.verificarSeGanhou(pos.verificar)
        if (!self.alguemGanhou) {
          self.vezDe = vezDeJogar === 'X' ? 'O' : 'X'
        }
      }
    },
    reiniciar() {
      console.clear()
      console.log('reiniciar')
      let self = this
      for (let item in self.posicoes) {
        let posicao = self.posicoes[item]
        posicao.exibir = null
        posicao.ganhou = false
      }
      self.alguemGanhou = false
    }
  }
}
</script>

<style>
h1 {
  margin-bottom: 0px;
  margin-top: 0px;
}
#app {
  font-family: Courier New, Courier, monospace;
  float: left;
  margin: 20px;
  padding: 50px;
  height: 480px;
  width: 370px;
  max-width: 370px;
  max-height: 480px;
  min-width: 370px;
  min-height: 480px;
  background-color: #eef;
}
.reset {
  margin-bottom: 20px;
  padding: 20px;
  font-size: 15px;
  font-family: monospace;
}
.row {
  clear: left;
}
.options {
  clear: left;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
