import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponent } from '../../messages/messages.component';
import { MessageService } from '../../services/message/message.service';
import { By } from '@angular/platform-browser';

describe('2-message component integration testing:', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MessagesComponent],
      providers: [MessageService],
    }).compileComponents();

    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
    fixture.detectChanges();
  });

  it('expect component template to be empty', () => {
    const message = fixture.debugElement.query(By.css('div.msg'));
    expect(message).toBeNull();
  });
  it('then expect div.msg to have the messages after setting it', () => {
    messageService.messages.push({ id: 1, message: 'any thing' });
    fixture.detectChanges();

    const message = fixture.debugElement.query(By.css('div.msg'));
    expect(message).not.toBeNull();
    expect(message.nativeElement.textContent).toContain('any thing');
  });
});
