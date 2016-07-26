'use strict';

module.exports = function fileScoper(fileSrc) {
  return function scopedName(name) {
    return '__re-bulma_' + name;
  }
};
