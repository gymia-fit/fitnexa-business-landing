#!/bin/bash

kubectl apply -f - <<EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: github-deployer
rules:
- apiGroups: [""]
  resources: ["services", "pods", "deployments", "configmaps", "secrets"]
  verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
- apiGroups: ["apps"]
  resources: ["deployments", "replicasets"]
  verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
EOF

kubectl apply -f - <<EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: github-deployer-binding
subjects:
- kind: ServiceAccount
  name: github-deployer
  namespace: fitnexa
roleRef:
  kind: ClusterRole
  name: github-deployer
  apiGroup: rbac.authorization.k8s.io
EOF
