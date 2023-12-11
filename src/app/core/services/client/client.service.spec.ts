import { TestBed } from '@angular/core/testing';

import { ClientService } from './client.service';

import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
const mockData = [
  {
    id: 'tr3',
    name: 'tarjeta3',
    description: 'tarjeta3',
    logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    date_release: '2023-12-12T00:00:00.000+00:00',
    date_revision: '2023-12-14T00:00:00.000+00:00',
  },
  {
    id: 'tr4',
    name: 'tarjeta4',
    description: 'tarjeta4',
    logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    date_release: '2023-12-12T00:00:00.000+00:00',
    date_revision: '2023-12-14T00:00:00.000+00:00',
  },
];
const productData = {
  id: 'tr4',
  name: 'tarjeta4',
  description: 'tarjeta4',
  logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
  date_release: '2023-12-12T00:00:00.000+00:00',
  date_revision: '2023-12-14T00:00:00.000+00:00',
};
const httpClienteMock = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
};
describe('ClientService', () => {
  let service: ClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClientService,
        {
          provide: HttpClient,
          useValue: { httpClienteMock },
        },
      ],
    });
    service = TestBed.inject(ClientService);
    httpClienteMock.get.mockReturnValue(mockData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('it should return products list', () => {
    httpClienteMock.get.mockReturnValue(of(mockData));
    service.genericGET('/api/endpoint').subscribe((data) => {
      expect(data).toEqual(mockData);
    });
  });
  it('it should create product', () => {
    httpClienteMock.post.mockReturnValue(of(mockData));
    service.genericPOST('/api/endpoint', productData).subscribe((data) => {
      expect(data).toEqual(mockData);
    });
  });
  it('it should update product', () => {
    httpClienteMock.put.mockReturnValue(of(mockData));
    service.genericPUT('/api/endpoint', productData).subscribe((data) => {
      expect(data).toEqual(mockData);
    });
  });
  it('it should delete prodcut', () => {
    httpClienteMock.delete.mockReturnValue(of(mockData));
    service.genericDEL('/api/endpoint').subscribe((data) => {
      expect(data).toEqual(mockData);
    });
  });
});
