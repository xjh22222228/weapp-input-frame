
Component({
  options: {
    styleIsolation: 'shared'
  },
  properties: {
    plaintext: Boolean,
    value: String,
    focus: Boolean
  },
  data: {
    _value: '',
    valueList: [],
    cursor: 99,
    isFocus: false
  },
  lifetimes: {
    attached: function() {
      this.setData({
        isFocus: this.properties.focus,
        _value: this.properties.value
      });
      this.init();
      this.setCursorPosition();
    }
  },
  methods: {
    init: function() {
      var value = this.data._value;
      var plaintext = this.properties.plaintext;
      if (!plaintext) {
        value = value.replace(/./igm, '●');
      }
      this.setData({ valueList: value.split('') });
    },
    setCursorPosition: function() {
      this.setData({ cursor: this.data._value.length });
    },
    onClick: function() {
      this.setData({ isFocus: true });
    },
    onInputChange: function(e) {
      var value = e.detail.value;
      this.setData({ _value: value });
      this.triggerEvent('change', value);
      this.init();

      if (value.length >= 6) {
        this.triggerEvent('finished', value);
      }
    },
    onInputFocus: function() {
      this.setCursorPosition();
    },
    getValue: function() {
      return this.data._value;
    }
  }
})
