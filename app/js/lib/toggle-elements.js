import { TimelineMax } from 'gsap';

const tl              = new TimelineMax();
class ToggleEmelents {
  constructor(toggleButton, toggleWrapper, toggleInput, direction) {
    this.toggleButton = toggleButton;
    this.toggleWrapper = toggleWrapper;
    this.toggleInput = toggleInput;
    this.direction = direction;

    this.toggleOnTime = 0.4;
    this.toggleOffTime = 0.4;

    this.toggleOffOffsetTime = 100;
    this.toggleOnOffsetTime = 100;

    this.isOpened = false;
    this.isAnimating = false;

  }

  toggle() {
    if (this.isAnimating) {
      return false;
    }
    if(this.isOpened === false) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    if (this.isAnimating) {
      return false;
    }
    const that = this;

    this.isAnimating = true;
    this.isOpened = true;
    if(!this.toggleButton[0].classList.contains('is--active')) {
      this.toggleButton[0].classList += ' is--active';
    }
    setTimeout(function() {
      if(that.direction) {
        $('body').css({
          overflow: 'hidden'
        });
      }
      if(that.direction === 'rl' || that.direction === 'lr') {
        tl.to(that.toggleWrapper, that.toggleOnTime, { 
          ease: Back.ease, 
          x: 0,
          autoAlpha: 1,
          display: 'block',
          onComplete() {
            that.isAnimating = false;
          }
        });
      } else if(that.direction === 'tb' || that.direction === 'bt') {
        tl.to(that.toggleWrapper, that.toggleOnTime, { 
          ease: Back.ease, 
          y: 0,
          autoAlpha: 1,
          display: 'block',
          onComplete() {
            that.isAnimating = false;
          }
        });
      } else {
        tl.to(that.toggleWrapper, that.toggleOnTime, { 
          ease: Back.ease, 
          // opacity: 1,
          autoAlpha: 1,
          display: 'block',
          onComplete() {
            that.isAnimating = false;
            if(that.toggleInput) {
              that.toggleInput.focus();
            }
          }
        });
      }
    }, that.toggleOnOffsetTime);
    
  }

  close() {

    if (this.isAnimating) {
      return false;
    }
    const that = this;
    this.isAnimating = true;
    this.isOpened = false;
    if(this.toggleButton[0].classList.contains('is--active')) {
      this.toggleButton[0].classList.remove('is--active');
    }
    setTimeout(function() {
      if(that.direction) {
        $('body').css({
          overflow: ''
        });
      }
      if(that.direction === 'rl') {
        tl.to(that.toggleWrapper, that.toggleOffTime, {
          ease: Back.ease,
          x: 100,
          autoAlpha: 0,
          display: 'none',
          onComplete() {
            that.isAnimating = false;
          }
        });
      } else if(that.direction === 'lr') {
        tl.to(that.toggleWrapper, that.toggleOffTime, {
          ease: Back.ease,
          x: -100,
          autoAlpha: 0,
          display: 'none',
          onComplete() {
            that.isAnimating = false;
          }
        });
      } else if(that.direction === 'tb') {
        tl.to(that.toggleWrapper, that.toggleOffTime, {
          ease: Back.ease,
          y: -100,
          autoAlpha: 0,
          display: 'none',
          onComplete() {
            that.isAnimating = false;
          }
        });
      } else if(that.direction === 'bt') {
        tl.to(that.toggleWrapper, that.toggleOffTime, {
          ease: Back.ease,
          y: 100,
          autoAlpha: 0,
          display: 'none',
          onComplete() {
            that.isAnimating = false;
          }
        });
      } else {
        tl.to(that.toggleWrapper, that.toggleOffTime, {
          ease: Back.ease,
          // opacity: 0,
          autoAlpha: 0,
          display: 'none',
          onComplete() {
            that.isAnimating = false;
            if(that.toggleInput) {
              that.toggleInput.val('');
            }
          }
        });
      }
    }, that.toggleOffOffsetTime);
  }
}

export { ToggleEmelents as default };
