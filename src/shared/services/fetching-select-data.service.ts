import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class FetchingSelectDataService {
    constructor(private httpClient: HttpClient) { }

    fetchData(datasetName: string): Observable<FetchDataResponse> {
        const apiUrl = `https://my-json-server.typicode.com/ginoLanetti/Hotree/${datasetName}`;
        return this.httpClient.get<object[]>(apiUrl);
    }
}
