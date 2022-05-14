#include <iostream>
#include <stdlib.h>
using namespace std;
#define max 200

int soma_linha[max], soma_coluna[max];
int soma_DP, soma_DS;

int main(int argc, char *argv[])
{
	setlocale(LC_ALL, "Portuguese");
	
	int tam, i = 0, j = 0, matriz[max][max];
	
	cout << "Digite a dimensão do quadrado (Máximo 200): ";
	cin >> tam;
	
	for(i = 0; i < tam; i++){
		for(j = 0; j < tam; j++){
			system("cls");
			cout << "Linha: " << i << "  Coluna: " << j << endl;
			cout << "Número: ";
			cin >> matriz[i][j];
		}
	}
	
	system("cls");
	
	cout << "-----------------------------------" << endl << endl;
	cout << "          Quadrado Mágico          " << endl << endl;
	
	cout << "\t\t";
	for(i = 0; i < tam; i++){
		for(j = 0; j < tam; j++){
			cout << matriz[i][j] << " ";
		}
		cout << endl;
		cout << "\t\t";
	}
	cout << "\n------------------------------------" << endl << endl;
	
	for(i = 0; i < tam; i++){
		for(j = 0; j < tam; j++){
			if(i == j)
				soma_DP += matriz[i][j];
			if(i == tam - 1 - j)
				soma_DS += matriz[i][j];
			
			soma_linha[i] += matriz[i][j];
			soma_coluna[i] += matriz[j][i];
			
			if(j == tam-1){
				cout << "\nSoma da linha " << i << " = " << soma_linha[i] << endl << endl;
				cout << "\nSoma da coluna " << i << " = " << soma_coluna[i] << endl << endl;
				cout << "------------------------------------" << endl << endl;
			}
		}
	}
	
	cout << "Soma da Diagonal Principal = " << soma_DP << endl;
	cout << "Soma da Diagonal Secundária = " << soma_DS << endl << endl;
	
	if(soma_linha[tam] == soma_coluna[tam] && soma_DP == soma_DS){
		cout << "\nÉ um quadrado mágico!!!\n";
	}	
	else
		cout << "\nNão é um quadrado mágico!!!\n";
	
	
	return 0;
}