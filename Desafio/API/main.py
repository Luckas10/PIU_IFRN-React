# pip install fastapi uvicorn pydantic
# pip freeze > requirements.txt
# uvicorn main:app
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from models import Tarefa

app = FastAPI()

# Permitir chamadas da origem do React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Para testes. Em produção, use ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

tarefas: List[Tarefa] = []

@app.get("/tarefas/", response_model=List[Tarefa])
def listar_tarefas():
    return tarefas

@app.get("/tarefas/{id}", response_model=Tarefa)
def listar_tarefa(id: int):
    for tarefa in tarefas:
        if tarefa.id == id:
            return tarefa
    raise HTTPException(status_code=404, detail="Não Localizado")

@app.post("/tarefas/", response_model=Tarefa)
def criar_tarefa(tarefa: Tarefa):
    tarefas.append(tarefa)
    return tarefa
